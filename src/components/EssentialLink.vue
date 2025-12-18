<template>
  <q-item
    :clickable="!!link"
    tag="a"
    :href="link || undefined"
    target="_blank"
    v-if="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: null,
      validator: (value: string | null) => !value || value.startsWith('http')
    },

    icon: {
      type: String,
      default: ''
    }
  }
});
</script>
