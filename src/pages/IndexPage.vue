<style scoped>
.my-card {
    min-width: 30rem;
    max-width: 30rem;
    height: 30rem;
    /* width: 20%; */
    margin: 30px auto;
    text-align: center;
    /* background-color: #AAAAFF */
}

.profile-image {
    margin-top: 1.5rem;
}

.recent-articles {
    width: min(100%, 48rem);
    margin: 0 auto 2rem;
}

.recent-thumbnail {
    width: 5rem;
    height: 4rem;
    border-radius: 4px;
}
</style>
<template>
  <div class='about'>

    <div class='q-pa-md row items-start q-gutter-lg justify-center' >
      <q-card class='my-card'>
        <q-img 
          class='profile-image justify-center'
          :src='url_image'
          native-context-menu
          alt='Logo'
          basic
          width='20rem'
        ></q-img>
        
        <q-card-section>
          <div class='text-h6'>{{ t('pages.index.profile') }}</div>
          <!-- <div class='text-subtitle2'>{{author}}</div> -->
        </q-card-section>

        <q-card-section class='q-pt-none'>
          <!-- {{ lorem }} -->
        </q-card-section>
      </q-card>

    </div>

    <q-card v-if="recentArticles.length || isLoadingRecentArticles || recentArticlesError" class="recent-articles">
      <q-card-section class="row items-center justify-between">
        <div class="text-h6">{{ t('pages.index.recentArticles') }}</div>
        <q-btn
          flat
          dense
          color="primary"
          :label="t('pages.index.allArticles')"
          :href="config.WORDPRESS_URL"
          target="_blank"
          rel="noopener noreferrer"
        />
      </q-card-section>
      <q-separator />

      <q-list separator>
        <q-item
          v-for="article in recentArticles"
          :key="article.link"
          clickable
          tag="a"
          :href="article.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <q-item-section v-if="article.image" avatar>
            <q-img :src="article.image" :alt="''" class="recent-thumbnail" />
          </q-item-section>
          <q-item-section>
            <q-item-label v-html="article.title"></q-item-label>
            <q-item-label caption>{{ article.date }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="open_in_new" color="grey-7" />
          </q-item-section>
        </q-item>
      </q-list>

      <q-card-section v-if="isLoadingRecentArticles" class="text-center">
        <q-spinner color="primary" size="2rem" />
      </q-card-section>
      <q-card-section v-else-if="recentArticlesError" class="text-grey-7">
        {{ t('pages.index.recentArticlesUnavailable') }}
      </q-card-section>
    </q-card>

  </div>

</template>

<script lang="ts">

// const config = require('')
import { config } from '../config.js'
import { defineComponent, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'

type RecentArticle = {
  link: string;
  title: string;
  date: string;
  image: string;
}

type WordPressPost = {
  link: string;
  date: string;
  title: { rendered: string };
  jetpack_featured_media_url?: string;
}

export default defineComponent({

  name: 'IndexPage',
  // name: 'HomePage',

  components: {
  },
  
  props: {
    // modelValue: {type: Array, default: params_opticalflow.params_opt, required: true}
  },

  setup () {
    const { t } = useI18n()
    const url_image = ref('https://eye.kohei-kevin.com/wp-content/uploads/2023/01/IMG-8888.jpg')
    const recentArticles = ref<RecentArticle[]>([])
    const isLoadingRecentArticles = ref(true)
    const recentArticlesError = ref(false)

    onMounted(async () => {
      try {
        const response = await axios.get<WordPressPost[]>(`${config.WORDPRESS_URL}/wp-json/wp/v2/posts`, {
          params: {
            per_page: 3,
            orderby: 'date',
            order: 'desc'
          }
        })
        recentArticles.value = response.data.map((post) => ({
          link: post.link,
          title: post.title.rendered,
          date: new Date(post.date).toLocaleDateString(),
          image: post.jetpack_featured_media_url || ''
        }))
      } catch {
        recentArticlesError.value = true
      } finally {
        isLoadingRecentArticles.value = false
      }
    })

    return {
      t,
      config,
      author: config.AUTHOR,
      address: config.ADDRESS,
      description: config.DESCRIPTION,
      url_image,
      recentArticles,
      isLoadingRecentArticles,
      recentArticlesError
    }
  }
})
</script>
