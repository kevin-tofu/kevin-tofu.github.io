<template>
    <div>
      <textarea v-model="text" :placeholder="t('tools.textCounter.placeholder')"></textarea>
      <p>{{ t('tools.textCounter.length', { count: textLength }) }}</p>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  export default defineComponent({
    name: 'TextCounter',
    setup() {
      const { t } = useI18n();
      const text = ref('');
      const textLength = computed(() => text.value.length);
      return {
        text,
        textLength,
        t
      };
    }
  });
</script>
  
<style>
  textarea {
    width: 50%;
    height: 200px;
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
    margin: auto;
  }
</style>
  
