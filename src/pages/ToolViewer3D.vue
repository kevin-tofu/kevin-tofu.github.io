<template>
  <div class="page">
    <h2 class="q-mb-sm">{{ t('viewer.title') }}</h2>
    <Viewer3D />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import Viewer3D from '../components/Viewer3D.vue'

export default defineComponent({
  name: 'ToolViewer3D',
  components: { Viewer3D },
  setup () {
    const { t } = useI18n()
    return { t }
  }
})
</script>
