<template>
  <div class="page">
    <h2 class="q-mb-sm">3D Polygon Viewer</h2>
    <Viewer3D />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Viewer3D from '../components/Viewer3D.vue'

export default defineComponent({
  name: 'ToolViewer3D',
  components: { Viewer3D },
})
</script>
