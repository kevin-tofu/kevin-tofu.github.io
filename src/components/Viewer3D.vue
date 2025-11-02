<template>
  <!-- fit を外して高さを内容ベースに -->
  <q-page class="column q-pa-sm bg-grey-2 text-dark">
    <!-- コントロール -->
    <div class="row items-center q-gutter-sm q-mb-sm">
      <div class="text-h6 q-mr-sm">3D Viewer</div>
      <q-file
        outlined color="primary" dense
        label="3Dファイルを選択 (GLB, GLTF, STL, OBJ)"
        accept=".glb,.gltf,.stl,.obj"
        v-model="selectedFile"
        @update:model-value="onFileChange"
        style="max-width: 320px;"
      >
        <template #prepend><q-icon name="upload" /></template>
      </q-file>
    </div>

    <!-- 高さ固定（例: 60vh） -->
    <div ref="viewer" class="viewer"></div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const viewer = ref<HTMLDivElement | null>(null)
const selectedFile = ref<File | null>(null)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let controls: OrbitControls
let ro: ResizeObserver

onMounted(() => {
  if (!viewer.value) return
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xeeeeee)

  const rect = viewer.value.getBoundingClientRect()
  camera = new THREE.PerspectiveCamera(60, rect.width / rect.height, 0.1, 1000)
  camera.position.set(0, 0, 5)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(rect.width, rect.height)
  viewer.value.appendChild(renderer.domElement)

  const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2)
  const dir  = new THREE.DirectionalLight(0xffffff, 1)
  dir.position.set(5, 10, 7.5)
  scene.add(hemi, dir)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05

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

  const loop = () => {
    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(loop)
  }
  loop()
})

onBeforeUnmount(() => {
  ro?.disconnect()
  renderer?.dispose()
})

function onFileChange(file: File | null) {
  if (!file) return
  const url = URL.createObjectURL(file)
  const ext = file.name.split('.').pop()?.toLowerCase()

  scene.children = scene.children.filter(o => o.type.includes('Light'))

  const fit = (obj: THREE.Object3D) => {
    const box = new THREE.Box3().setFromObject(obj)
    const size = box.getSize(new THREE.Vector3()).length()
    const center = box.getCenter(new THREE.Vector3())
    camera.position.copy(center)
    camera.position.z += size * 0.8
    controls.target.copy(center)
  }

  if (ext === 'glb' || ext === 'gltf') {
    new GLTFLoader().load(url, gltf => { scene.add(gltf.scene); fit(gltf.scene); URL.revokeObjectURL(url) })
  } else if (ext === 'stl') {
    new STLLoader().load(url, geo => { const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x0077ff })); scene.add(m); fit(m); URL.revokeObjectURL(url) })
  } else if (ext === 'obj') {
    new OBJLoader().load(url, obj => {
      obj.traverse(c => { if ((c as THREE.Mesh).isMesh) (c as THREE.Mesh).material = new THREE.MeshStandardMaterial({ color: 0x00aa88 }) })
      scene.add(obj); fit(obj); URL.revokeObjectURL(url)
    })
  } else {
    console.warn('未対応拡張子:', ext)
  }
}
</script>



<style scoped>
/* ✅ fitで全高固定、colで残りを占有 */
.controls {
  flex: 0 0 auto;
}
.viewer {
  flex: 1 1 auto;
  min-height: 0;
  width: 80%;
  height: 80%;
  background: #000;
  border-radius: 8px;
}

/* Quasar特有のスクロール除去 */
.no-scroll {
  overflow: hidden;
}
</style>
