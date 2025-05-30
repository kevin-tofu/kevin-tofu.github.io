<template>
  <div class="about">

    <div class='q-pa-md row items-start q-gutter-lg justify-center' >
      <q-card>
        <div class='text-h4'> About this Website </div>
        <div class='text-h6'> Author : {{author}}</div>
        <div class='text-h6'> E-mail Address : {{address}}</div>
        <!-- <div class='text-h6'> Description : {{description}}</div> -->
      </q-card>
  </div>


  </div>

</template>

<script lang="ts">

// const config = require('')
import { config } from '../config.js'

import { defineComponent } from 'vue'

export default defineComponent({

  // name: 'AboutSite',
  name: 'AboutPage',

  components: {
  },
  
  props: {
    // modelValue: {type: Array, default: params_opticalflow.params_opt, required: true}
  },

  setup () {

    return {
      author: config.AUTHOR,
      address: config.ADDRESS,
      description: config.DESCRIPTION,
    }
  }
})
</script>
