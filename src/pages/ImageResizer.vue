<template>
    <div id="app">
      <h1>Image Resizer</h1>
      <input type="file" accept="image/*" @change="handleFileUpload" />
      <div v-if="originalImage" class="image-preview">
        <h3>Original Image:</h3>
        <img :src="originalImage" alt="Original Image" />
      </div>
      <div v-if="resizedImage" class="image-preview">
        <h3>Resized Image:</h3>
        <img :src="resizedImage" alt="Resized Image" />
        <a :href="resizedImage" download="resized-image.jpg">
          <button>Download Resized Image</button>
        </a>
      </div>
      <div v-if="originalImage" class="resize-controls">
        <label for="width">Width:</label>
        <input type="number" id="width" v-model="resizeWidth" />
        <label for="height">Height:</label>
        <input type="number" id="height" v-model="resizeHeight" />
        <button @click="resizeImage">Resize Image</button>
      </div>
    </div>
</template>

<script lang="ts">
  import { ref } from 'vue';
  
  export default {
    setup() {
      const originalImage = ref<string | null>(null);
      const resizedImage = ref<string | null>(null);
      const resizeWidth = ref(300);
      const resizeHeight = ref(300);
  
      const handleFileUpload = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];
        if (file) {
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
  