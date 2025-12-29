<template>
  <div id="image-connector" :key="locale">
    <h1>{{ t('tools.imageConnector.title') }}</h1>
    <div class="input-row">
      <div class="input-group">
        <q-file
          v-model="leftFile"
          accept="image/*"
          outlined
          color="primary"
          :label="t('tools.imageConnector.uploadLeft')"
          :no-files-label="t('tools.imageConnector.noFile')"
          @update:model-value="handleFileUpload($event, 'left')"
        />
      </div>
      <div class="input-group">
        <q-file
          v-model="rightFile"
          accept="image/*"
          outlined
          color="primary"
          :label="t('tools.imageConnector.uploadRight')"
          :no-files-label="t('tools.imageConnector.noFile')"
          @update:model-value="handleFileUpload($event, 'right')"
        />
      </div>
      <label>
        {{ t('tools.imageConnector.colorMode.label') }}
        <select v-model="colorMode" :aria-label="t('tools.imageConnector.colorMode.label')">
          <option value="rgb">{{ t('tools.imageConnector.colorMode.rgb') }}</option>
          <option value="grayscale">{{ t('tools.imageConnector.colorMode.grayscale') }}</option>
        </select>
      </label>
    </div>

    <div v-if="leftUrl || rightUrl" class="preview-row">
      <div v-if="leftUrl" class="preview">
        <h3>{{ t('tools.imageConnector.left') }}</h3>
        <img :src="leftUrl" :alt="t('tools.imageConnector.left')" />
      </div>
      <div v-if="rightUrl" class="preview">
        <h3>{{ t('tools.imageConnector.right') }}</h3>
        <img :src="rightUrl" :alt="t('tools.imageConnector.right')" />
      </div>
    </div>

    <div v-if="combinedUrl" class="combined">
      <h3>{{ t('tools.imageConnector.combined') }}</h3>
      <img :src="combinedUrl" :alt="t('tools.imageConnector.combined')" />
      <a :href="combinedUrl" download="connected-image.png">
        <button>{{ t('tools.imageConnector.save') }}</button>
      </a>
    </div>
    <p v-else class="hint">{{ t('tools.imageConnector.hint') }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

type Side = 'left' | 'right'

export default defineComponent({
  name: 'ImageConnector',
  setup () {
    const { t, locale } = useI18n()
    const leftUrl = ref<string | null>(null)
    const rightUrl = ref<string | null>(null)
    const leftFile = ref<File | null>(null)
    const rightFile = ref<File | null>(null)
    const combinedUrl = ref<string | null>(null)
    const colorMode = ref<'rgb' | 'grayscale'>('rgb')

    const loadImage = (src: string) => new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.onerror = () => reject(new Error('Image load failed'))
      img.src = src
    })

    const clearSide = (side: Side) => {
      if (side === 'left') {
        if (leftUrl.value) URL.revokeObjectURL(leftUrl.value)
        leftUrl.value = null
      } else {
        if (rightUrl.value) URL.revokeObjectURL(rightUrl.value)
        rightUrl.value = null
      }
    }

    const setUrl = (side: Side, file: File | null) => {
      if (!file) {
        clearSide(side)
        return
      }
      if (side === 'left') {
        if (leftUrl.value) URL.revokeObjectURL(leftUrl.value)
        leftUrl.value = URL.createObjectURL(file)
      } else {
        if (rightUrl.value) URL.revokeObjectURL(rightUrl.value)
        rightUrl.value = URL.createObjectURL(file)
      }
    }

    const handleFileUpload = (file: File | null, side: Side) => {
      setUrl(side, file)
    }

    watch([leftUrl, rightUrl, colorMode], async ([left, right]) => {
      combinedUrl.value = null
      if (!left || !right) return
      try {
        const [leftImg, rightImg] = await Promise.all([loadImage(left), loadImage(right)])
        const targetHeight = Math.min(leftImg.height, rightImg.height)
        const leftScale = targetHeight / leftImg.height
        const rightScale = targetHeight / rightImg.height
        const leftWidth = Math.round(leftImg.width * leftScale)
        const rightWidth = Math.round(rightImg.width * rightScale)
        const canvas = document.createElement('canvas')
        canvas.width = leftWidth + rightWidth
        canvas.height = targetHeight
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        ctx.drawImage(leftImg, 0, 0, leftWidth, targetHeight)
        ctx.drawImage(rightImg, leftWidth, 0, rightWidth, targetHeight)
        if (colorMode.value === 'grayscale') {
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
          const data = imageData.data
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i] ?? 0
            const g = data[i + 1] ?? 0
            const b = data[i + 2] ?? 0
            const luminance = Math.round(0.299 * r + 0.587 * g + 0.114 * b)
            data[i] = luminance
            data[i + 1] = luminance
            data[i + 2] = luminance
          }
          ctx.putImageData(imageData, 0, 0)
        }
        combinedUrl.value = canvas.toDataURL('image/png')
      } catch {
        combinedUrl.value = null
      }
    })

    onBeforeUnmount(() => {
      if (leftUrl.value) URL.revokeObjectURL(leftUrl.value)
      if (rightUrl.value) URL.revokeObjectURL(rightUrl.value)
    })

    return {
      t,
      locale,
      leftUrl,
      rightUrl,
      leftFile,
      rightFile,
      combinedUrl,
      colorMode,
      handleFileUpload
    }
  }
})
</script>

<style>
#image-connector {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}
.input-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-bottom: 20px;
}
.input-row label,
.input-row .input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.input-row select {
  min-width: 180px;
}
.preview-row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin-bottom: 20px;
}
.preview img,
.combined img {
  max-width: 420px;
  max-height: 320px;
  width: auto;
  height: auto;
  height: auto;
  margin-top: 10px;
}
.combined {
  margin-bottom: 16px;
}
.hint {
  color: #666;
}
</style>
