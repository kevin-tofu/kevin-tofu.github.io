<template>
  <q-page class="viewer-page">
    <!-- ヘッダー＆コントロール -->
    <div class="viewer-header">
      <div class="header-content">
        <div class="title-section">
          <q-icon name="view_in_ar" size="28px" color="primary" />
          <span class="title-text">{{ t('viewer.title') }}</span>
        </div>
        <div class="controls-row">
          <q-file
            outlined
            dense
            color="primary"
            :label="t('viewer.fileInput.label')"
            accept=".glb,.gltf,.stl,.obj"
            v-model="selectedFile"
            @update:model-value="onFileChange"
            class="file-input"
            :loading="isLoading"
            :disable="isLoading"
          >
            <template #prepend><q-icon name="upload_file" /></template>
            <template #hint>
              <span class="text-caption">{{ t('viewer.fileInput.hint') }}</span>
            </template>
          </q-file>
          <div class="view-toggles">
            <q-toggle
              v-model="showWireframeOverlay"
              color="warning"
              keep-color
              :disable="!hasModel"
              :label="t('viewer.toggles.wireframe')"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 3Dビューアコンテナ -->
    <div class="viewer-container">
      <div ref="viewer" class="viewer" @click="onViewerClick">
        <!-- ローディングオーバーレイ -->
        <div v-if="isLoading" class="loading-overlay">
          <q-spinner-cube size="60px" color="primary" />
          <div class="loading-text">{{ t('viewer.loading') }}</div>
        </div>
        <!-- プレースホルダー -->
        <div v-else-if="!hasModel" class="placeholder">
          <q-icon name="view_in_ar" size="80px" color="grey-5" />
          <div class="placeholder-text">{{ t('viewer.placeholder') }}</div>
          <div class="placeholder-hint">{{ t('viewer.placeholderHint') }}</div>
        </div>
        <!-- 選択したfacet情報パネル -->
        <div v-if="selectedFaceInfo" class="face-info-panel">
          <div class="face-info-header">
            <q-icon name="crop_square" size="18px" color="warning" />
            <span>{{ t('viewer.faceInfo.title', { id: selectedFaceInfo.faceIndex }) }}</span>
          </div>
          <div class="face-info-vertices">
            <div class="vertex-row">
              <span class="vertex-label">V1:</span>
              <span class="vertex-coords">({{ formatCoord(selectedFaceInfo.v1.x) }}, {{ formatCoord(selectedFaceInfo.v1.y) }}, {{ formatCoord(selectedFaceInfo.v1.z) }})</span>
            </div>
            <div class="vertex-row">
              <span class="vertex-label">V2:</span>
              <span class="vertex-coords">({{ formatCoord(selectedFaceInfo.v2.x) }}, {{ formatCoord(selectedFaceInfo.v2.y) }}, {{ formatCoord(selectedFaceInfo.v2.z) }})</span>
            </div>
            <div class="vertex-row">
              <span class="vertex-label">V3:</span>
              <span class="vertex-coords">({{ formatCoord(selectedFaceInfo.v3.x) }}, {{ formatCoord(selectedFaceInfo.v3.y) }}, {{ formatCoord(selectedFaceInfo.v3.z) }})</span>
            </div>
          </div>
        </div>
      </div>
      <!-- コントロールヒント -->
      <div v-if="hasModel" class="control-hints">
        <span><q-icon name="mouse" size="16px" /> {{ t('viewer.controls.rotate') }}</span>
        <span><q-icon name="zoom_in" size="16px" /> {{ t('viewer.controls.zoom') }}</span>
        <span><q-icon name="open_with" size="16px" /> {{ t('viewer.controls.pan') }}</span>
        <span><q-icon name="touch_app" size="16px" /> {{ t('viewer.controls.select') }}</span>
      </div>
    </div>

    <!-- エラーメッセージ -->
    <q-dialog v-model="showError">
      <q-card class="error-card">
        <q-card-section class="row items-center">
          <q-icon name="error" color="negative" size="24px" class="q-mr-sm" />
          <span>{{ errorMessage }}</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat :label="t('viewer.actions.close')" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

interface FaceInfo {
  faceIndex: number
  v1: THREE.Vector3
  v2: THREE.Vector3
  v3: THREE.Vector3
}

const viewer = ref<HTMLDivElement | null>(null)
const selectedFile = ref<File | null>(null)
const isLoading = ref(false)
const hasModel = ref(false)
const showError = ref(false)
const errorMessage = ref('')
const selectedFaceInfo = ref<FaceInfo | null>(null)
const showWireframeOverlay = ref(false)
const i18n = useI18n()
const t = i18n.t

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let controls: OrbitControls
let ro: ResizeObserver
let animationFrameId: number | null = null
let raycaster: THREE.Raycaster
let mouse: THREE.Vector2
let highlightMesh: THREE.Mesh | null = null
let loadedModel: THREE.Object3D | null = null
let wireframeGroup: THREE.Group | null = null

function formatCoord(val: number): string {
  return val.toFixed(3)
}

onMounted(() => {
  if (!viewer.value) return

  // Raycaster初期化
  raycaster = new THREE.Raycaster()
  mouse = new THREE.Vector2()

  // シーン初期化
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x1a1a2e)

  const rect = viewer.value.getBoundingClientRect()
  camera = new THREE.PerspectiveCamera(50, rect.width / rect.height, 0.1, 2000)
  camera.position.set(0, 2, 8)

  // レンダラー初期化（HiDPI対応）
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(rect.width, rect.height)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.2
  viewer.value.appendChild(renderer.domElement)

  // ライティング
  setupLighting()

  // グリッドヘルパー
  const gridHelper = new THREE.GridHelper(20, 20, 0x444466, 0x333355)
  gridHelper.position.y = -0.01
  scene.add(gridHelper)

  // コントロール
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.enablePan = true
  controls.panSpeed = 0.8
  controls.rotateSpeed = 0.8
  controls.zoomSpeed = 1.2
  controls.minDistance = 0.5
  controls.maxDistance = 100

  // リサイズ監視
  ro = new ResizeObserver(() => {
    if (!viewer.value) return
    const r = viewer.value.getBoundingClientRect()
    const w = Math.max(1, Math.floor(r.width))
    const h = Math.max(1, Math.floor(r.height))
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  })
  ro.observe(viewer.value)

  // アニメーションループ
  const loop = () => {
    controls.update()
    renderer.render(scene, camera)
    animationFrameId = requestAnimationFrame(loop)
  }
  loop()
})

onBeforeUnmount(() => {
  // アニメーションフレームをキャンセル
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
  ro?.disconnect()
  controls?.dispose()
  renderer?.dispose()

  // シーン内のジオメトリとマテリアルを解放
  scene?.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.geometry?.dispose()
      if (Array.isArray(object.material)) {
        object.material.forEach(m => m.dispose())
      } else {
        object.material?.dispose()
      }
    }
  })
})

function setupLighting() {
  // 環境光
  const ambientLight = new THREE.AmbientLight(0x404060, 0.5)
  scene.add(ambientLight)

  // メインのディレクショナルライト
  const mainLight = new THREE.DirectionalLight(0xffffff, 1.5)
  mainLight.position.set(5, 10, 7)
  mainLight.castShadow = true
  mainLight.shadow.mapSize.width = 2048
  mainLight.shadow.mapSize.height = 2048
  mainLight.shadow.camera.near = 0.5
  mainLight.shadow.camera.far = 50
  scene.add(mainLight)

  // フィルライト
  const fillLight = new THREE.DirectionalLight(0x8888ff, 0.4)
  fillLight.position.set(-5, 5, -5)
  scene.add(fillLight)

  // リムライト
  const rimLight = new THREE.DirectionalLight(0xffffee, 0.3)
  rimLight.position.set(0, -5, -10)
  scene.add(rimLight)
}

function onViewerClick(event: MouseEvent) {
  if (!viewer.value || !hasModel.value || !loadedModel) return

  const rect = viewer.value.getBoundingClientRect()
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

  raycaster.setFromCamera(mouse, camera)

  // モデル内のメッシュを収集
  const meshes: THREE.Mesh[] = []
  loadedModel.traverse((obj) => {
    if (obj instanceof THREE.Mesh && obj !== highlightMesh) {
      meshes.push(obj)
    }
  })

  const intersects = raycaster.intersectObjects<THREE.Mesh>(meshes, false)

  if (intersects.length > 0) {
    const hit = intersects[0]
    if (!hit) {
      clearHighlight()
      return
    }

    const mesh = hit.object
    const faceIndex = hit.faceIndex

    if (faceIndex != null) {
      highlightFace(mesh, faceIndex)
    }
  } else {
    // 何もないところをクリックしたら選択解除
    clearHighlight()
  }
}

function highlightFace(mesh: THREE.Mesh<THREE.BufferGeometry>, faceIndex: number) {
  // 前のハイライトを削除（選択情報は更新するのでメッシュのみクリア）
  removeHighlightMesh()

  const geometry = mesh.geometry
  const positionAttr = geometry.getAttribute('position')
  const indexAttr = geometry.index

  let i0: number, i1: number, i2: number

  if (indexAttr) {
    // インデックス付きジオメトリ
    i0 = indexAttr.getX(faceIndex * 3)
    i1 = indexAttr.getX(faceIndex * 3 + 1)
    i2 = indexAttr.getX(faceIndex * 3 + 2)
  } else {
    // 非インデックスジオメトリ（STLなど）
    i0 = faceIndex * 3
    i1 = faceIndex * 3 + 1
    i2 = faceIndex * 3 + 2
  }

  // 頂点座標を取得（ワールド座標に変換）
  const v1 = new THREE.Vector3().fromBufferAttribute(positionAttr, i0)
  const v2 = new THREE.Vector3().fromBufferAttribute(positionAttr, i1)
  const v3 = new THREE.Vector3().fromBufferAttribute(positionAttr, i2)

  // ワールド座標に変換
  v1.applyMatrix4(mesh.matrixWorld)
  v2.applyMatrix4(mesh.matrixWorld)
  v3.applyMatrix4(mesh.matrixWorld)

  // 選択情報を更新
  selectedFaceInfo.value = {
    faceIndex,
    v1: v1.clone(),
    v2: v2.clone(),
    v3: v3.clone()
  }
  // ハイライト用の三角形ジオメトリを作成
  const highlightGeometry = new THREE.BufferGeometry()
  const vertices = new Float32Array([
    v1.x, v1.y, v1.z,
    v2.x, v2.y, v2.z,
    v3.x, v3.y, v3.z
  ])
  highlightGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
  highlightGeometry.computeVertexNormals()

  // ハイライト用マテリアル（オレンジ色、両面表示）
  const highlightMaterial = new THREE.MeshBasicMaterial({
    color: 0xff6600,
    side: THREE.DoubleSide,
    depthTest: true,
    depthWrite: false,
    transparent: true,
    opacity: 0.8,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1
  })

  highlightMesh = new THREE.Mesh(highlightGeometry, highlightMaterial)
  scene.add(highlightMesh)
}

function removeHighlightMesh() {
  if (highlightMesh) {
    scene.remove(highlightMesh)
    highlightMesh.geometry.dispose()
    ;(highlightMesh.material as THREE.Material).dispose()
    highlightMesh = null
  }
}

function clearHighlight() {
  removeHighlightMesh()
  selectedFaceInfo.value = null
}

function disposeWireframeOverlay() {
  if (!wireframeGroup) return
  wireframeGroup.traverse((child) => {
    if (child instanceof THREE.LineSegments || child instanceof THREE.Points) {
      child.geometry?.dispose()
      ;(child.material as THREE.Material).dispose()
    }
  })
  scene.remove(wireframeGroup)
  wireframeGroup = null
}

function createWireframeOverlay(model: THREE.Object3D) {
  const group = new THREE.Group()
  model.updateMatrixWorld(true)

  model.traverse((obj) => {
    if (obj instanceof THREE.Mesh && obj.geometry instanceof THREE.BufferGeometry) {
      const geom = obj.geometry
      const edgesGeo = new THREE.WireframeGeometry(geom)
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xffcc66,
        depthTest: false,
        depthWrite: false,
        transparent: true,
        opacity: 0.9
      })
      const lines = new THREE.LineSegments(edgesGeo, lineMat)
      lines.matrixAutoUpdate = false
      lines.matrix.copy(obj.matrixWorld)
      lines.frustumCulled = false
      group.add(lines)

      const position = geom.getAttribute('position')
      if (position) {
        const pointsGeom = geom.clone()
        const pointMat = new THREE.PointsMaterial({
          color: 0x66ccff,
          size: 0.05,
          depthTest: false,
          depthWrite: false,
          transparent: true,
          opacity: 0.9
        })
        const points = new THREE.Points(pointsGeom, pointMat)
        points.matrixAutoUpdate = false
        points.matrix.copy(obj.matrixWorld)
        points.frustumCulled = false
        group.add(points)
      }
    }
  })

  return group
}

function updateWireframeOverlay() {
  disposeWireframeOverlay()
  if (showWireframeOverlay.value && loadedModel) {
    wireframeGroup = createWireframeOverlay(loadedModel)
    scene.add(wireframeGroup)
  }
}

function clearModel() {
  // ハイライトをクリア
  clearHighlight()
  loadedModel = null
  disposeWireframeOverlay()

  // ライトとグリッド以外のオブジェクトを削除
  const toRemove: THREE.Object3D[] = []
  scene.traverse((obj) => {
    if (
      !(obj instanceof THREE.Light) &&
      !(obj instanceof THREE.GridHelper) &&
      obj !== scene
    ) {
      toRemove.push(obj)
    }
  })
  toRemove.forEach((obj) => {
    if (obj.parent) {
      obj.parent.remove(obj)
    }
    if (obj instanceof THREE.Mesh) {
      obj.geometry?.dispose()
      if (Array.isArray(obj.material)) {
        obj.material.forEach(m => m.dispose())
      } else {
        obj.material?.dispose()
      }
    }
  })
}

function fitCameraToObject(obj: THREE.Object3D) {
  const box = new THREE.Box3().setFromObject(obj)
  const size = box.getSize(new THREE.Vector3())
  const center = box.getCenter(new THREE.Vector3())

  const maxDim = Math.max(size.x, size.y, size.z)
  const fov = camera.fov * (Math.PI / 180)
  let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2))
  cameraZ *= 1.5

  camera.position.set(center.x + cameraZ * 0.5, center.y + cameraZ * 0.3, center.z + cameraZ)
  controls.target.copy(center)
  controls.update()
}

function handleError(message: string, url: string) {
  isLoading.value = false
  errorMessage.value = message
  showError.value = true
  URL.revokeObjectURL(url)
}

watch(showWireframeOverlay, () => {
  updateWireframeOverlay()
})

function onFileChange(file: File | null) {
  if (!file) return

  isLoading.value = true
  const url = URL.createObjectURL(file)
  const ext = file.name.split('.').pop()?.toLowerCase()

  clearModel()

  const onSuccess = (obj: THREE.Object3D) => {
    scene.add(obj)
    loadedModel = obj
    updateWireframeOverlay()
    fitCameraToObject(obj)
    hasModel.value = true
    isLoading.value = false
    URL.revokeObjectURL(url)
  }

  const onError = (error: unknown) => {
    console.error('Model load error:', error)
    handleError(t('viewer.error.loadFailed', { file: file.name }), url)
  }

  if (ext === 'glb' || ext === 'gltf') {
    new GLTFLoader().load(
      url,
      (gltf) => {
        gltf.scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true
            child.receiveShadow = true
          }
        })
        onSuccess(gltf.scene)
      },
      undefined,
      onError
    )
  } else if (ext === 'stl') {
    new STLLoader().load(
      url,
      (geometry) => {
        geometry.computeVertexNormals()
        const material = new THREE.MeshStandardMaterial({
          color: 0x2194ce,
          metalness: 0.3,
          roughness: 0.6
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.castShadow = true
        mesh.receiveShadow = true
        onSuccess(mesh)
      },
      undefined,
      onError
    )
  } else if (ext === 'obj') {
    new OBJLoader().load(
      url,
      (obj) => {
        obj.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0x00aa88,
              metalness: 0.2,
              roughness: 0.7
            })
            child.castShadow = true
            child.receiveShadow = true
          }
        })
        onSuccess(obj)
      },
      undefined,
      onError
    )
  } else {
    handleError(t('viewer.error.unsupported', { ext }), url)
  }
}
</script>



<style scoped>
.viewer-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  padding: 16px;
  gap: 16px;
}

.viewer-header {
  flex: 0 0 auto;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.title-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.title-text {
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.5px;
}

.controls-row {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.file-input {
  min-width: 280px;
  max-width: 350px;
}

.file-input :deep(.q-field__control) {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
}

.file-input :deep(.q-field__native),
.file-input :deep(.q-field__label) {
  color: rgba(255, 255, 255, 0.9);
}

.view-toggles {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  padding: 10px 12px;
}

.viewer-container {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
  gap: 8px;
}

.viewer {
  flex: 1 1 auto;
  min-height: 400px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.viewer :deep(canvas) {
  display: block;
  width: 100% !important;
  height: 100% !important;
  border-radius: 16px;
}

.loading-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(26, 26, 46, 0.9);
  backdrop-filter: blur(8px);
  z-index: 10;
  gap: 16px;
}

.loading-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 500;
}

.placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(26, 26, 46, 0.6);
  gap: 16px;
  pointer-events: none;
}

.placeholder-text {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
  font-weight: 500;
}

.placeholder-hint {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
}

.control-hints {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 8px 16px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
}

.control-hints span {
  display: flex;
  align-items: center;
  gap: 4px;
}

.error-card {
  min-width: 320px;
  background: #1a1a2e;
  color: #fff;
}

.error-card :deep(.q-card__section) {
  color: rgba(255, 255, 255, 0.9);
}

/* 選択facet情報パネル */
.face-info-panel {
  position: absolute;
  left: 16px;
  bottom: 16px;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  border-radius: 10px;
  padding: 12px 16px;
  border: 1px solid rgba(255, 165, 0, 0.4);
  min-width: 220px;
  z-index: 10;
  pointer-events: none;
}

.face-info-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ff9900;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 165, 0, 0.3);
}

.face-info-vertices {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.vertex-row {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-family: 'Consolas', 'Monaco', monospace;
}

.vertex-label {
  color: rgba(255, 255, 255, 0.6);
  width: 30px;
  flex-shrink: 0;
}

.vertex-coords {
  color: rgba(255, 255, 255, 0.9);
}
</style>
