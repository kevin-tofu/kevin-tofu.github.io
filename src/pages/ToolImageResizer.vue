<template>
    <div id="app">
      <h1>{{ t('tools.imageResizer.title') }}</h1>
      <input type="file" accept="image/*" @change="handleFileUpload" :aria-label="t('tools.imageResizer.upload')" />
      <div v-if="originalImage" class="image-preview">
        <h3>{{ t('tools.imageResizer.original') }}</h3>
        <img :src="originalImage" :alt="t('tools.imageResizer.original')" />
      </div>
      <div v-if="resizedImage" class="image-preview">
        <h3>{{ t('tools.imageResizer.resized') }}</h3>
        <img :src="resizedImage" :alt="t('tools.imageResizer.resized')" />
        <a :href="resizedImage" download="resized-image.jpg">
          <button>{{ t('tools.imageResizer.download') }}</button>
        </a>
      </div>
      <div v-if="originalImage" class="resize-controls">
        <label for="width">{{ t('tools.imageResizer.width') }}</label>
        <input type="number" id="width" v-model="resizeWidth" />
        <label for="height">{{ t('tools.imageResizer.height') }}</label>
        <input type="number" id="height" v-model="resizeHeight" />
        <button @click="resizeImage">{{ t('tools.imageResizer.resize') }}</button>
      </div>
    </div>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  export default {
    setup() {
      const { t } = useI18n();
      const originalImage = ref<string | null>(null);
      const resizedImage = ref<string | null>(null);
      const resizeWidth = ref(300);
      const resizeHeight = ref(300);
  
      const handleFileUpload = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];
        if (file) {
          // 古いURLを解放してメモリリークを防止
          if (originalImage.value) {
            URL.revokeObjectURL(originalImage.value);
          }
          originalImage.value = URL.createObjectURL(file);
        }
      };

  
      const resizeImage = () => {
        if (!originalImage.value) return;
  
        const img = new Image();
        img.src = originalImage.value;
  
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
  
          canvas.width = resizeWidth.value;
          canvas.height = resizeHeight.value;
          if (ctx) {
            ctx.drawImage(img, 0, 0, resizeWidth.value, resizeHeight.value);
            resizedImage.value = canvas.toDataURL('image/jpeg');
          }
        };
      };
  
      return {
        t,
        originalImage,
        resizedImage,
        resizeWidth,
        resizeHeight,
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
</style>
  
