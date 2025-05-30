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
</style>
<template>
  <div class='about'>

    <div class='q-pa-md row items-start q-gutter-lg justify-center' >
      <q-card class='my-card'>
        <q-img 
          class='justify-center'
          :src='url_image'
          native-context-menu
          alt='Logo'
          basic
          width='20rem'
        ></q-img>
        
        <q-card-section>
          <div class='text-h6'>Profile</div>
          <!-- <div class='text-subtitle2'>{{author}}</div> -->
        </q-card-section>

        <q-card-section class='q-pt-none'>
          <!-- {{ lorem }} -->
        </q-card-section>
      </q-card>

    </div>
    

  </div>

</template>

<script lang="ts">

// const config = require('')
import { config } from '../config.js'
import { defineComponent, ref } from 'vue'

export default defineComponent({

  name: 'IndexPage',
  // name: 'HomePage',

  components: {
  },
  
  props: {
    // modelValue: {type: Array, default: params_opticalflow.params_opt, required: true}
  },

  setup () {

    const url_image = ref('https://eye.kohei-kevin.com/wp-content/uploads/2023/01/IMG-8888.jpg')
    return {
      author: config.AUTHOR,
      address: config.ADDRESS,
      description: config.DESCRIPTION,
      url_image
    }
  }
})
</script>
