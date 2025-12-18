<template>
  <q-card
    class="time-card"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
    flat
    bordered
  >
    <q-card-section class="overlay">
      <h2 class="text-h6 text-white">{{ name }}</h2>
      <p class="text-subtitle1 text-white">{{ localTime }}</p>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { ref, computed, onMounted } from 'vue';

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    timezoneOffset: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const localTime = ref('');
    const localHour = ref(0);

    const backgroundImage = computed(() => {
      if (localHour.value >= 6 && localHour.value < 12) {
        // 朝 (6:00〜12:00)
        return './assets/worldtime/morning.jpg'; // 朝日が登る画像
      } else if (localHour.value >= 12 && localHour.value < 18) {
        // 昼 (12:00〜18:00)
        return './assets/worldtime/afternoon.jpg'; // 太陽が輝く画像
      } else if (localHour.value >= 18 && localHour.value < 21) {
        // 夕方 (18:00〜21:00)
        return './assets/worldtime/evening.jpg'; // 日が沈む画像
      } else {
        // 夜 (21:00〜6:00)
        return './assets/worldtime/night.jpg'; // 月が浮かぶ画像
      }
    });

    const textColor = computed(() => {
      return localHour.value >= 6 && localHour.value < 18 ? '#000000' : '#d3d3d3';
    });

    const updateLocalTime = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const localDate = new Date(utc + props.timezoneOffset * 3600000);
      localHour.value = localDate.getHours(); // 現在の時間（時）を取得
      localTime.value = localDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    };

    onMounted(() => {
      updateLocalTime();
      setInterval(updateLocalTime, 1000); // 毎秒更新
    });

    return {
      localTime,
      localHour,
      backgroundImage,
      textColor,
    };
  },
};
</script>
<style scoped>
.time-card {
  position: relative;
  border-radius: 10px;
  width: 200px;
  text-align: center;
  background-size: cover;
  background-position: center;
  transition: transform 0.2s ease;
  overflow: hidden;
}
.time-card:hover {
  transform: scale(1.05);
}

/* オーバーレイ */
.overlay {
  background-color: rgba(0, 0, 0, 0.5); /* 半透明の黒 */
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
