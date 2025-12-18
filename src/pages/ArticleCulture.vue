<template>
  <ArticlePage
    v-bind:url_base='url_base' 
    v-bind:id_categories='id_categories'
  />
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import ArticlePage from '../components/ArticlePage.vue'
import { config } from '../config.js'

export default defineComponent({

  name: 'ArticleCulture',
  components: {
    ArticlePage
  },
  
  props: {
  },

  setup () {
    return {
      url_base: config.WORDPRESS_URL, 
      id_categories: config.id_categories.CULTURE
    }
  }
})
</script>
