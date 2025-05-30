<template>

  <q-item
    clickable
    :to="to"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
      <!-- <q-icon color="primary" name="bluetooth" /> -->
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialItem',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    to: {
      type: Object,
      default: ()=> {return {name: 'About'}}
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>
