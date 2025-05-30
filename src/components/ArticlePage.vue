<style scoped>
.div-card {
    max-width: 20rem;
    width: 40rem;
    height: 30rem;
    overflow: hidden;
}
.my-card {
    width: 20rem;
    height: 25rem;
    margin: 10px;
    text-align: center;
    word-wrap: break-word;
    overflow: hidden;
}
.image {
    width: 20rem;
    height: 10rem;
}
.card_title {
    background-color: #AAAAFF;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.q-card-section {
    max-height: 8rem;
    overflow-y: auto;
}
.child_botton {
    position: absolute;
    bottom: 0;
}

</style>
<template>
  <div class='q-pa-md' style='max-width: 30rem'>
    <div class = 'column' style="height: 150pix">
      <div>
        <div class='col-6 col-md-6'>
          <q-select 
            v-model="selected" 
            :options="options" 
            label="Page"
          />

        </div>
        <div class='col-6 col-md-6'>
          <q-btn color='deep-orange' glossy label='<<' @click='evenv_btn_left2'/>
          <q-btn color='orange' glossy label='<' @click='evenv_btn_left1'/>
          <q-btn color='orange' glossy label='>' @click='evenv_btn_right1'/>
          <q-btn color='deep-orange' glossy label='>>' @click='evenv_btn_right2'/>
        </div>
      </div>
      <q-space />
      <div class="col-6 col-md-6">
        <q-input outlined v-model='searchKey' label='keyword for search' @keypress.enter="event_search"/>
        <q-btn color='secondary' icon-right='send' label = 'Search' @click='event_search' />
      </div>
    </div>
  </div>
  

  <div class='about'>
    <!-- <div class='q-pa-md row items-start q-gutter-lg'> -->
    <div class='q-gutter-md row items-start relative-position justify-center' >
      <div v-for='(item, index) in items' :key='index' class = 'div-card'>
        <q-card class="my-card q-pa-md" style="max-width: 300px;">
          <q-img 
            class='image'
            :src='item.url_image'
            native-context-menu
            alt='Logo'
            basic
          ></q-img>
          
          <q-card-section>
            <div class='text-h6 card_title'
            >
              {{ item.title }}
            </div>
            <div class='text-subtitle2'>{{item.date}}</div>
            <q-separator inset />

            <q-card-section>
              {{ item.subtitle }}
            </q-card-section>
          </q-card-section>

          <q-card-section class='q-pt-none'>
            {{ item.sentence }}
          </q-card-section>
                  
          <q-card-actions class='child_botton'>
            <q-btn 
              round 
              @click='bars[index] = true'
              icon='visibility'
              color='red'
            >
            </q-btn>
          </q-card-actions>
          <q-dialog 
            v-model="bars[index]!"
            transition-show="rotate"
            transition-hide="rotate"
            style="width: 50rem"
          >
            <q-card class="q-pa-lg">
              <q-card-section>
                <div v-html="item.html_content"></div>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat label="Decline" color="primary" @click="closeDialog(index)" />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-card>
      </div>
    </div>
  </div>

</template>

<script lang="ts">

// const config = require('')
import { config } from '../config.js'
import { defineComponent, ref, onMounted, watch } from 'vue'
import axios from 'axios'

type ArticleItem = {
  idx: number;
  url_image: string;
  url_article: string;
  date: string;
  title: string;
  subtitle: string;
  html_content: string;
  sentence: string;
};

type RawArticle = {
  jetpack_featured_media_url: string;
  link: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
};

export default defineComponent({

  name: 'ArticlePage',
  components: {
  },
  
  props: {
    url_base: String,
    id_categories: String
  },

  setup(props) {
    const url_wpapi = `${props.url_base}/wp-json/wp/v2/posts`
    // const items = ref([])
    const items = ref<ArticleItem[]>([]);
    const searchKey = ref('')
    const selected = ref(1) // Current selected page for q-select
    const options = ref([1]) // Pages displayed in select box, e.g. [1,2,3,4,5]
    const totalPage = ref(5) 
    // const bars = ref<(boolean | null)[]>(new Array(N).fill(false));
    // const bars = ref<(boolean | null)[]>([]);
    const bars = ref<(boolean | null)[]>([]);

    function openDialog(index: number) {
      while (bars.value.length <= index) {
        bars.value.push(false);
      }
      bars.value[index] = true;
    }

    function closeDialog(index: number) {
      bars.value[index] = false;
    }

    // New constant for the number of items to show per page
    const itemsPerPage = 8 // Adjust this value to change the number of cards per page

    // Function to determine the options for the select box, centered around the selected page
    function make_centered_options(selectedPage: number, max_length: number) {
        const range = 2 // Number of pages to show before and after the selected page
        let start = selectedPage - range // Calculate starting point
        let end = selectedPage + range // Calculate ending point

        // Adjust if we're near the beginning
        if (start < 1) {
            end += 1 - start // Shift the range forward
            start = 1
        }

        // Adjust if we're near the end
        if (end > max_length) {
            start -= end - max_length // Shift the range backward
            end = max_length
        }

        // Ensure we do not go below page 1
        start = Math.max(start, 1)

        const options = []
        for (let i = start; i <= end; i++) {
            options.push(i)
        }
        return options
    }

    // Watch selected for change and adjust options accordingly
    watch(selected, async (newval) => {
      options.value = make_centered_options(newval, totalPage.value)
      await get_post(newval);
    });

    const get_post = async function (page = 1) {
      const res = await axios.get<RawArticle[]>(url_wpapi, {
        params: {
          page: page,
          per_page: itemsPerPage,
          categories: props.id_categories,
          search: searchKey.value
        }
      });
      bars.value = res.data.map(() => false);


      totalPage.value = Math.ceil(parseInt(res.headers['x-wp-totalpages']) || 1)

    items.value = await Promise.all(
      res.data.map((value, idx) => ({
        idx: idx,
        url_image: value.jetpack_featured_media_url,
        url_article: value.link,
        date: value.date,
        title: value.title.rendered.length > 50 
            ? value.title.rendered.substring(0, 50) 
            : value.title.rendered,
        subtitle: value.excerpt.rendered.replace(/(<([^>]+)>)/gi, ''),
        html_content: value.content.rendered,
        sentence: ''
      }))
    )
      // Adjust options based on the selected page, centered
      options.value = make_centered_options(selected.value, totalPage.value)
    }

    onMounted(async () => {
        await get_post()
    })

    async function event_search() {
        selected.value = 1
        await get_post();
    }

    async function event_selected() {
        await get_post(selected.value)
    }

    function evenv_btn_left1() {
        if (selected.value > 1) {
            selected.value -= 1
        }
    }

    function evenv_btn_right1() {
        if (selected.value < totalPage.value) {
            selected.value += 1
        }
    }
    async function evenv_btn_left2() {
        if (selected.value > 5) {
            selected.value -= 5;
        } else {
            selected.value = 1;
        }
        await get_post(selected.value);
    }
    async function evenv_btn_right2() {
        if (selected.value + 5 <= totalPage.value) {
            selected.value += 5; // 5ページ後に進む
        } else {
            selected.value = totalPage.value; // 最後のページに移動
        }
        await get_post(selected.value); // ページ内容を再取得する
    }


    return {
        author: config.AUTHOR,
        address: config.ADDRESS,
        description: config.DESCRIPTION,
        items,
        options,
        selected,
        event_selected,
        evenv_btn_left1,
        evenv_btn_right1,
        evenv_btn_left2,
        evenv_btn_right2,
        bars,
        openDialog, closeDialog,
        searchKey,
        event_search
    }
  }
})
</script>
