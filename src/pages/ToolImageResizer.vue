<template>
    <div id="app" :key="locale">
      <h1>{{ t('tools.imageResizer.title') }}</h1>
      <q-file
        v-model="selectedFile"
        accept="image/*"
        outlined
        color="primary"
        :label="t('tools.imageResizer.upload')"
        :no-files-label="t('tools.imageResizer.noFile')"
        @update:model-value="handleFileUpload"
      />
      <div v-if="originalImage" class="image-preview">
        <h3>{{ t('tools.imageResizer.original') }}</h3>
        <img :src="originalImage" :alt="t('tools.imageResizer.original')" />
        <p v-if="originalDimensionsLabel" class="image-meta">{{ originalDimensionsLabel }}</p>
        <p v-if="originalFileSizeLabel" class="image-meta">{{ originalFileSizeLabel }}</p>
      </div>
      <div v-if="resizedImage" class="image-preview">
        <h3>{{ t('tools.imageResizer.resized') }}</h3>
        <img :src="resizedImage" :alt="t('tools.imageResizer.resized')" />
        <p v-if="resizedDimensionsLabel" class="image-meta">{{ resizedDimensionsLabel }}</p>
        <p v-if="resizedFileSizeLabel" class="image-meta">{{ resizedFileSizeLabel }}</p>
        <a :href="resizedImage" download="resized-image.jpg">
          <button>{{ t('tools.imageResizer.download') }}</button>
        </a>
      </div>
      <div v-if="originalImage" class="resize-controls">
        <label for="scale">{{ t('tools.imageResizer.scale') }}</label>
        <input type="number" id="scale" v-model="scalePercent" min="1" step="1" />
        <button @click="resizeImage">{{ t('tools.imageResizer.resize') }}</button>
      </div>
    </div>
</template>

<script lang="ts">
  import { computed, ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  export default {
    setup() {
      const { t, locale } = useI18n();
      const originalImage = ref<string | null>(null);
      const resizedImage = ref<string | null>(null);
      const selectedFile = ref<File | null>(null);
      const scalePercent = ref(100);
      const originalWidth = ref<number | null>(null);
      const originalHeight = ref<number | null>(null);
      const originalFileSizeBytes = ref<number | null>(null);
      const resizedFileSizeBytes = ref<number | null>(null);

      const formatBytes = (bytes: number | null) => {
        if (bytes === null) return null;
        const units = ['B', 'KB', 'MB', 'GB'];
        let value = bytes;
        let unitIndex = 0;
        while (value >= 1024 && unitIndex < units.length - 1) {
          value /= 1024;
          unitIndex += 1;
        }
        const digits = value >= 10 || unitIndex === 0 ? 0 : 1;
        return `${value.toFixed(digits)} ${units[unitIndex]}`;
      };

      const dataUrlToBytes = (dataUrl: string) => {
        const commaIndex = dataUrl.indexOf(',');
        if (commaIndex === -1) return 0;
        const base64 = dataUrl.slice(commaIndex + 1);
        const padding = base64.match(/=+$/)?.[0].length ?? 0;
        return Math.max(0, Math.floor((base64.length * 3) / 4) - padding);
      };

      const targetDimensions = computed(() => {
        const width = originalWidth.value;
        const height = originalHeight.value;
        if (width === null || height === null) return null;
        const scale = Math.max(1, scalePercent.value) / 100;
        return {
          width: Math.max(1, Math.round(width * scale)),
          height: Math.max(1, Math.round(height * scale))
        };
      });

      const originalDimensionsLabel = computed(() => {
        if (originalWidth.value === null || originalHeight.value === null) return null;
        return t('tools.imageResizer.dimensions', {
          width: originalWidth.value,
          height: originalHeight.value
        });
      });

      const resizedDimensionsLabel = computed(() => {
        if (!targetDimensions.value) return null;
        return t('tools.imageResizer.dimensions', {
          width: targetDimensions.value.width,
          height: targetDimensions.value.height
        });
      });

      const originalFileSizeLabel = computed(() => {
        const size = formatBytes(originalFileSizeBytes.value);
        if (!size) return null;
        return t('tools.imageResizer.fileSize', { size });
      });

      const resizedFileSizeLabel = computed(() => {
        const size = formatBytes(resizedFileSizeBytes.value);
        if (!size) return null;
        return t('tools.imageResizer.resizedFileSize', { size });
      });
  
      const handleFileUpload = (file: File | null) => {
        if (originalImage.value) {
          URL.revokeObjectURL(originalImage.value);
        }

        if (!file) {
          originalImage.value = null;
          originalFileSizeBytes.value = null;
          originalWidth.value = null;
          originalHeight.value = null;
          scalePercent.value = 100;
          resizedImage.value = null;
          resizedFileSizeBytes.value = null;
          return;
        }

        originalImage.value = URL.createObjectURL(file);
        originalFileSizeBytes.value = file.size;
        originalWidth.value = null;
        originalHeight.value = null;
        scalePercent.value = 100;
        resizedImage.value = null;
        resizedFileSizeBytes.value = null;

        const img = new Image();
        img.onload = () => {
          originalWidth.value = img.naturalWidth || img.width;
          originalHeight.value = img.naturalHeight || img.height;
        };
        img.src = originalImage.value;
      };

  
      const resizeImage = () => {
        if (!originalImage.value) return;

        const img = new Image();
        img.src = originalImage.value;

        img.onload = () => {
          const target = targetDimensions.value;
          if (!target) return;
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          canvas.width = target.width;
          canvas.height = target.height;
          if (ctx) {
            ctx.drawImage(img, 0, 0, target.width, target.height);
            resizedImage.value = canvas.toDataURL('image/jpeg');
            resizedFileSizeBytes.value = dataUrlToBytes(resizedImage.value);
          }
        };
      };
  
      return {
        t,
        locale,
        originalImage,
        resizedImage,
        selectedFile,
        scalePercent,
        originalDimensionsLabel,
        resizedDimensionsLabel,
        originalFileSizeLabel,
        resizedFileSizeLabel,
        handleFileUpload,
        resizeImage,
      };
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    margin-top: 20px;
  }
  .image-preview img {
    max-width: 100%;
    height: auto;
    margin-top: 10px;
  }
  .resize-controls {
    margin-top: 20px;
  }
  .resize-controls label,
  .resize-controls input {
    margin: 5px;
  }
  .image-meta {
    margin-top: 6px;
    margin-bottom: 0;
    color: #4b4b4b;
  }
</style>
  
