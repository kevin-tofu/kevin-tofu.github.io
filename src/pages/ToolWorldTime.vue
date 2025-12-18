
<template>
  <q-layout view="lHh Lpr lFf">
    <q-page class="main-page q-pa-md">
      <span class="header-title">{{ t('tools.worldTime.title') }}</span>
      <q-card flat class="bg-card q-pa-lg">
        <div class="row q-gutter-md justify-center">
          <div
            v-for="(city, index) in cities"
            :key="index"
            class="col-6 col-sm-6 col-md-3"
          >
            <TimeCard :name="city.name" :timezone-offset="city.timezoneOffset" />
          </div>
        </div>
      </q-card>
    </q-page>
  </q-layout>
</template>


<script lang="ts">
import { useI18n } from 'vue-i18n';
import TimeCard from '../components/TimeCard.vue';

export default {
  components: {
    TimeCard,
  },
  setup() {
    const { t } = useI18n();
    const cities = [
      { name: 'New York', timezoneOffset: -5 },
      { name: 'London', timezoneOffset: 0 },
      { name: 'Tokyo', timezoneOffset: 9 },
      { name: 'Sydney', timezoneOffset: 11 },
      { name: 'Chicago', timezoneOffset: -6 },
      { name: 'San Francisco', timezoneOffset: -8 },
      { name: 'New Delhi', timezoneOffset: 5.5 },
      { name: 'Ankara', timezoneOffset: 3 },
      { name: 'Brussels', timezoneOffset: 1 },
    ];

    return { cities, t };
  },
};
</script>
<style scoped>
/* ヘッダー背景とテキストのスタイル調整 */
.header-toolbar {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)); /* 半透明のグラデーション */
  color: #ffffff; /* 白文字 */
}

.header-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); /* テキストシャドウで背景に埋もれない */
}

/* メイン背景スタイル */
.q-page {
  background: linear-gradient(to bottom, #1e3c72, #2a5298); /* 元の背景を保持 */
  color: #fff; /* 白文字 */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bg-card {
  background: rgba(255, 255, 255, 0.2); /* 半透明の白背景 */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff; /* テキスト色も調整 */
}
</style>
