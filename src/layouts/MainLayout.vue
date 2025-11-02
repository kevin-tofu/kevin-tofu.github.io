<template>
  <q-layout view='lHh Lpr lFf'>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon='menu'
          aria-label='Menu'
          @click='toggleLeftDrawer'
        />

        <q-toolbar-title>
          Welcome to My Github Website
        </q-toolbar-title>

        <div>v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model='leftDrawerOpen'
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>Items</q-item-label>
        <EssentialItem
          v-for='nav_loop in essentialItems0'
          :key='nav_loop.title'
          v-bind='nav_loop'
        />

        <q-item-label header>Tools</q-item-label>
        <EssentialItem
          v-for='nav_loop in essentialItems1'
          :key='nav_loop.title'
          v-bind='nav_loop'
        />
        
        <q-item-label header>Links</q-item-label>
        <EssentialLink
          v-for='link in essentialLinks'
          :key='link.title'
          v-bind='link'
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'
import EssentialItem from '../components/basics-quasar-ts/EssentialItem.vue'
import EssentialLink from '../components/basics-quasar-ts/EssentialLink.vue'

const linksList = [
  {
    title: 'Github',
    caption: 'my github repository',
    icon: 'code',
    link: 'https://github.com/kevin-tofu'
  },
  {
    title: 'LinkedIn',
    caption: 'My LinkedIn profiole',
    icon: 'face',
    link: 'https://linkedin.com/in/kohei-watanabe-694373172/'
  }
]
// https://quasar.dev/vue-components/icon
const itemlist0 = [
  {title: 'Home', caption: 'home', icon: 'home', to: {name: 'IndexPage'}},
  {title: 'Tech-Tips', caption: 'tips', icon: 'computer', to: {name: 'ArticleTech'}},
  {title: 'Signal Processing', caption: 'signal processing', icon: 'show_chart', to: {name: 'ArticleProcessing'}},
  {title: 'Quantum', caption: 'quantum', icon: 'memory', to: {name: 'ArticleQuantum'}},
  {title: 'Physics', caption: 'physics', icon: 'science', to: {name: 'ArticlePhysics'}},
  {title: 'Machine Learning', caption: 'machine learning', icon: 'psychology', to: {name: 'ArticleMachineLearning'}},
  {title: 'Culture', caption: 'culture', icon: 'collections', to: {name: 'ArticleCulture'}},
  {title: 'Japan', caption: 'japan', icon: 'translate', to: {name: 'ArticleJapan'}},
  {title: 'About', caption: 'about', icon: 'email', to: {name: 'AboutPage'}},
]
const itemlist1 = [
  {title: 'Pixel Viewer', caption: 'check pixel coordinate', icon: 'image', to: {name: 'PixelViewer'}},
  {title: 'Image Resizer', caption: 'check pixel coordinate', icon: 'image', to: {name: 'ImageResizer'}},
  {title: 'Text Length Counter', caption: '', icon: 'description', to: {name: 'TextlengthCounter'}},
  {title: 'WorldTime Checker', caption: '', icon: 'access_time', to: {name: 'WorldTime'}},
  {title: '3D Viewer', caption: '', icon: '3d_rotation', to: { name: 'Viewer3D' } },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink, 
    EssentialItem
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialItems0: itemlist0, 
      essentialItems1: itemlist1, 
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
