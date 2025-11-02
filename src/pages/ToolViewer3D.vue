<template>
  <div class="page">
    <h2 class="q-mb-sm">3D Viewer</h2>
    <Viewer3D />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Viewer3D from '../components/Viewer3D.vue'

export default defineComponent({
  name: 'ViewerHost',
  components: { Viewer3D },
})
</script>

<style scoped>
.page {
  width: 80%;
  /* height は指定しない（親の q-page に任せる） */
  padding: 8px;
  box-sizing: border-box;
}
</style>
