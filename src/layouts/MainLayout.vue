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
          {{ t('layout.title') }}
        </q-toolbar-title>

        <q-select
          v-model="currentLocale"
          dense
          borderless
          dark
          options-dense
          emit-value
          map-options
          :options="languageOptions"
          :label="t('layout.language.label')"
          class="q-mr-md"
          style="min-width: 120px"
        />

        <div>v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model='leftDrawerOpen'
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>{{ t('layout.sections.items') }}</q-item-label>
        <EssentialItem
          v-for='nav_loop in essentialItems0'
          :key='nav_loop.title'
          v-bind='nav_loop'
        />

        <q-item-label header>{{ t('layout.sections.tools') }}</q-item-label>
        <EssentialItem
          v-for='nav_loop in essentialItems1'
          :key='nav_loop.title'
          v-bind='nav_loop'
        />
        
        <q-item-label header>{{ t('layout.sections.links') }}</q-item-label>
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
import { defineComponent, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { LocalStorage } from 'quasar'
// import EssentialLink from 'components/EssentialLink.vue'
import EssentialItem from '../components/basics-quasar-ts/EssentialItem.vue'
import EssentialLink from '../components/basics-quasar-ts/EssentialLink.vue'

const linksList = [
  {
    titleKey: 'layout.links.github.title',
    captionKey: 'layout.links.github.caption',
    icon: 'code',
    link: 'https://github.com/kevin-tofu'
  },
  {
    titleKey: 'layout.links.linkedIn.title',
    captionKey: 'layout.links.linkedIn.caption',
    icon: 'face',
    link: 'https://linkedin.com/in/kohei-watanabe-694373172/'
  }
]
// https://quasar.dev/vue-components/icon
const itemlist0 = [
  {titleKey: 'layout.nav.home.title', captionKey: 'layout.nav.home.caption', icon: 'home', to: {name: 'IndexPage'}},
  {titleKey: 'layout.nav.techTips.title', captionKey: 'layout.nav.techTips.caption', icon: 'computer', to: {name: 'ArticleTech'}},
  {titleKey: 'layout.nav.processing.title', captionKey: 'layout.nav.processing.caption', icon: 'show_chart', to: {name: 'ArticleProcessing'}},
  {titleKey: 'layout.nav.quantum.title', captionKey: 'layout.nav.quantum.caption', icon: 'memory', to: {name: 'ArticleQuantum'}},
  {titleKey: 'layout.nav.physics.title', captionKey: 'layout.nav.physics.caption', icon: 'science', to: {name: 'ArticlePhysics'}},
  {titleKey: 'layout.nav.machineLearning.title', captionKey: 'layout.nav.machineLearning.caption', icon: 'psychology', to: {name: 'ArticleMachineLearning'}},
  {titleKey: 'layout.nav.culture.title', captionKey: 'layout.nav.culture.caption', icon: 'collections', to: {name: 'ArticleCulture'}},
  {titleKey: 'layout.nav.japan.title', captionKey: 'layout.nav.japan.caption', icon: 'translate', to: {name: 'ArticleJapan'}},
  {titleKey: 'layout.nav.about.title', captionKey: 'layout.nav.about.caption', icon: 'email', to: {name: 'AboutPage'}},
]
const itemlist1 = [
  {titleKey: 'layout.nav.pixelViewer.title', captionKey: 'layout.nav.pixelViewer.caption', icon: 'image', to: {name: 'PixelViewer'}},
  {titleKey: 'layout.nav.imageResizer.title', captionKey: 'layout.nav.imageResizer.caption', icon: 'image', to: {name: 'ImageResizer'}},
  {titleKey: 'layout.nav.textCounter.title', captionKey: 'layout.nav.textCounter.caption', icon: 'description', to: {name: 'TextlengthCounter'}},
  {titleKey: 'layout.nav.worldTime.title', captionKey: 'layout.nav.worldTime.caption', icon: 'access_time', to: {name: 'WorldTime'}},
  {titleKey: 'layout.nav.viewer3d.title', captionKey: 'layout.nav.viewer3d.caption', icon: '3d_rotation', to: { name: 'Viewer3D' } },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink, 
    EssentialItem
  },

  setup () {
    const { t, locale } = useI18n()
    const leftDrawerOpen = ref(false)
    const languageOptions = computed(() => [
      { label: t('layout.language.options.en'), value: 'en-US' },
      { label: t('layout.language.options.ja'), value: 'ja-JP' }
    ])

    const currentLocale = computed({
      get: () => locale.value,
      set: (val: string) => {
        locale.value = val
        LocalStorage.set('locale', val)
      }
    })

    const essentialItems0 = computed(() =>
      itemlist0.map(item => ({
        ...item,
        title: t(item.titleKey),
        caption: t(item.captionKey)
      }))
    )

    const essentialItems1 = computed(() =>
      itemlist1.map(item => ({
        ...item,
        title: t(item.titleKey),
        caption: t(item.captionKey)
      }))
    )

    const essentialLinks = computed(() =>
      linksList.map(link => ({
        ...link,
        title: t(link.titleKey),
        caption: t(link.captionKey)
      }))
    )

    return {
      essentialItems0,
      essentialItems1,
      essentialLinks,
      t,
      currentLocale,
      languageOptions,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
