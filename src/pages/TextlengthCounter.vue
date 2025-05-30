<template>
    <div>
      <textarea v-model="text" placeholder="Input Text Here..."></textarea>
      <p>Text Length: {{ textLength }}</p>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  
  export default defineComponent({
    name: 'TextCounter',
    setup() {
      const text = ref('');
      const textLength = computed(() => text.value.length);
      return {
        text,
        textLength
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
  