<template>
  <div class='q-pa-md'>
    <div class='q-gutter-y-md column' style='max-width: 300px'>
      <q-file 
        color='grey-3' 
        outlined 
        label-color='orange' 
        v-model='model' 
        :label='t("tools.pixelViewer.upload")'
        @update:model-value='event_file'
      >
        <template v-slot:append>
          <q-icon name='attachment' color='orange' />
        </template>
      </q-file>
    </div>
    
    <div class="q-pa-md q-gutter-sm" v-if="model">
      <div style="overflow: auto; max-width: 100%; max-height: 600px">
        <canvas ref="canvas" @mousemove="event_cursor"></canvas>
      </div>
    </div>
    
    <div class='q-pa-md q-gutter-sm'>
      <q-banner dense class='bg-primary text-white'>
        <h6>{{ message }}</h6>
      </q-banner>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'PixelViewer',

  setup () {
    const { t } = useI18n()
    const model = ref<File | null>(null);
    const canvas = ref<HTMLCanvasElement | null>(null);
    const urlmodel = ref<string | null>(null)
    const message = ref(t('tools.pixelViewer.prompt'))
    const image = new Image()
    let ctx: CanvasRenderingContext2D | null = null;
    
    function event_file(newFile: File | null) {
      model.value = newFile;
    }

    watch(model, (model_new) => {
      // 古いURLを解放してメモリリークを防止
      if (urlmodel.value) {
        URL.revokeObjectURL(urlmodel.value);
      }
      if (model_new) {
        urlmodel.value = URL.createObjectURL(model_new);
        loadImage();
      }
    });

    function loadImage() {
      image.onload = function () {
        if (canvas.value) {
          ctx = canvas.value.getContext('2d');
        }
        // 画像が大きい場合は縮小する
        const maxWidth = 800 // 表示可能な最大幅
        const maxHeight = 600 // 表示可能な最大高さ
        let width = image.width
        let height = image.height

        if (width > maxWidth) {
          height = height * (maxWidth / width)
          width = maxWidth
        }
        if (height > maxHeight) {
          width = width * (maxHeight / height)
          height = maxHeight
        }

        // Canvasのサイズを設定
        if (canvas.value) {
          canvas.value.width = width;
          canvas.value.height = height;
          if (ctx) {
            ctx.drawImage(image, 0, 0, width, height);
          }

        }
      }
      if (urlmodel.value) {
        image.src = urlmodel.value;
      }

    }

    function event_cursor(event: MouseEvent) {
      if (!ctx || !canvas.value) return;

      const rect = canvas.value.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // 以前描画した四角形をクリア
      ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

      // 再描画: 画像を再び描画
      ctx.drawImage(image, 0, 0, canvas.value.width, canvas.value.height)

      // ピクセル値の取得
      const pixel = ctx.getImageData(x, y, 1, 1).data

      // ピクセル情報を表示
      message.value = t('tools.pixelViewer.message', {
        x: Math.round(x),
        y: Math.round(y),
        r: pixel[0],
        g: pixel[1],
        b: pixel[2]
      })

      // 四角形でピクセル位置を表示
      const boxSize = 10  // 四角形のサイズ
      ctx.strokeStyle = 'red'
      ctx.lineWidth = 2
      ctx.strokeRect(x - boxSize / 2, y - boxSize / 2, boxSize, boxSize)  // マウスポインタの位置を囲む四角形を描画
    }

    return {
      model,
      canvas,
      urlmodel,
      message,
      t,
      event_cursor,
      event_file
    }
  }
})
</script>
