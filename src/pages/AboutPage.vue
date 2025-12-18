<template>
  <div class="about">

    <div class='q-pa-md row items-start q-gutter-lg justify-center' >
      <q-card>
        <div class='text-h4'> {{ t('pages.about.title') }} </div>
        <div class='text-h6'> {{ t('pages.about.author') }} : {{author}}</div>
        <div class='text-h6'> {{ t('pages.about.email') }} : {{address}}</div>
        <!-- <div class='text-h6'> Description : {{description}}</div> -->
      </q-card>
  </div>


  </div>

</template>

<script lang="ts">

// const config = require('')
import { config } from '../config.js'

import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({

  // name: 'AboutSite',
  name: 'AboutPage',

  components: {
  },
  
  props: {
    // modelValue: {type: Array, default: params_opticalflow.params_opt, required: true}
  },

  setup () {
    const { t } = useI18n()
    return {
      t,
      author: config.AUTHOR,
      address: config.ADDRESS,
      description: config.DESCRIPTION,
    }
  }
})
</script>
