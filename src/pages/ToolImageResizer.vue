<template>
    <div id="app" :key="locale">
      <h1>{{ t('tools.imageResizer.title') }}</h1>
      <q-file
        v-model="selectedFiles"
        accept="image/*"
        multiple
        outlined
        color="primary"
        :label="t('tools.imageResizer.upload')"
        :no-files-label="t('tools.imageResizer.noFile')"
        @update:model-value="handleFileUpload"
      />
      <div v-if="hasMultipleImages" class="preview-navigation">
        <button :disabled="!canGoPrevious" @click="goPreviousImage">
          {{ t('tools.imageResizer.previous') }}
        </button>
        <span class="preview-counter">{{ previewCounterLabel }}</span>
        <button :disabled="!canGoNext" @click="goNextImage">
          {{ t('tools.imageResizer.next') }}
        </button>
      </div>
      <div v-if="originalImage" class="image-preview">
        <h3>{{ t('tools.imageResizer.original') }}</h3>
        <p v-if="previewFileName" class="image-meta">{{ previewFileName }}</p>
        <div class="thumbnail-frame">
          <img
            :src="originalImage"
            :alt="t('tools.imageResizer.original')"
            :style="originalPreviewImageStyle"
          />
        </div>
        <p v-if="originalDimensionsLabel" class="image-meta">{{ originalDimensionsLabel }}</p>
        <p v-if="originalFileSizeLabel" class="image-meta">{{ originalFileSizeLabel }}</p>
      </div>
      <div v-if="resizedImage" class="image-preview">
        <h3>{{ t('tools.imageResizer.resized') }}</h3>
        <div class="thumbnail-frame">
          <img
            :src="resizedImage"
            :alt="t('tools.imageResizer.resized')"
            :style="resizedPreviewImageStyle"
          />
        </div>
        <p v-if="resizedDimensionsLabel" class="image-meta">{{ resizedDimensionsLabel }}</p>
        <p v-if="resizedFileSizeLabel" class="image-meta">{{ resizedFileSizeLabel }}</p>
        <button @click="downloadResizedImages">{{ downloadButtonLabel }}</button>
      </div>
      <div v-if="originalImage" class="resize-controls">
        <label for="scale">{{ t('tools.imageResizer.scale') }}</label>
        <input type="number" id="scale" v-model="scalePercent" min="1" step="1" />
        <button :disabled="isResizing" @click="resizeImages">{{ t('tools.imageResizer.resize') }}</button>
        <p v-if="resizeEstimateLabel" class="image-meta resize-estimate">{{ resizeEstimateLabel }}</p>
      </div>
    </div>
</template>

<script lang="ts">
  import { computed, ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  type OriginalImageInfo = {
    file: File;
    url: string;
    width: number;
    height: number;
    fileSizeBytes: number;
    exifSegments: Uint8Array[];
  };

  type ResizedImageInfo = {
    url: string;
    fileName: string;
    width: number;
    height: number;
    fileSizeBytes: number;
  };
  
  export default {
    setup() {
      const { t, locale } = useI18n();
      const selectedFiles = ref<File[]>([]);
      const originalImages = ref<OriginalImageInfo[]>([]);
      const resizedImages = ref<ResizedImageInfo[]>([]);
      const scalePercent = ref(100);
      const isResizing = ref(false);
      const currentPreviewIndex = ref(0);
      const previewFrameWidth = 520;
      const previewFrameHeight = 320;

      const currentOriginalImage = computed(() => originalImages.value[currentPreviewIndex.value] ?? null);
      const currentResizedImage = computed(() => resizedImages.value[currentPreviewIndex.value] ?? null);
      const originalImage = computed(() => currentOriginalImage.value?.url ?? null);
      const resizedImage = computed(() => currentResizedImage.value?.url ?? null);
      const hasMultipleImages = computed(() => originalImages.value.length > 1);
      const canGoPrevious = computed(() => currentPreviewIndex.value > 0);
      const canGoNext = computed(() => currentPreviewIndex.value < originalImages.value.length - 1);

      const buildResizedFileName = (originalName: string | undefined) => {
        if (!originalName) return 'resized-image.jpg';

        const baseName = originalName.replace(/\.[^/.]+$/, '').trim();
        const safeBaseName = baseName
          .replace(/[\\/:*?"<>|]+/g, '-')
          .replace(/\s+/g, ' ')
          .replace(/^-+|-+$/g, '');

        return safeBaseName ? `${safeBaseName}-resized.jpg` : 'resized-image.jpg';
      };

      const formatBytes = (bytes: number | null) => {
        if (bytes === null) return null;
        const units = ['B', 'KB', 'MB', 'GB'];
        let value = bytes;
        let unitIndex = 0;
        while (value >= 1024 && unitIndex < units.length - 1) {
          value /= 1024;
          unitIndex += 1;
        }
        const digits = value >= 10 || unitIndex === 0 ? 0 : 1;
        return `${value.toFixed(digits)} ${units[unitIndex]}`;
      };

      const dataUrlToUint8Array = (dataUrl: string) => {
        const commaIndex = dataUrl.indexOf(',');
        if (commaIndex === -1) return new Uint8Array();
        const binary = atob(dataUrl.slice(commaIndex + 1));
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i += 1) {
          bytes[i] = binary.charCodeAt(i);
        }
        return bytes;
      };

      const extractExifSegments = (bytes: Uint8Array) => {
        if (bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8) return [];

        const segments: Uint8Array[] = [];
        let offset = 2;

        while (offset + 4 <= bytes.length) {
          if (bytes[offset] !== 0xff) break;
          while (offset < bytes.length && bytes[offset] === 0xff) {
            offset += 1;
          }
          if (offset >= bytes.length) break;

          const marker = bytes[offset] ?? 0;
          offset += 1;

          if (marker === 0xda || marker === 0xd9) break;
          if (marker >= 0xd0 && marker <= 0xd7) continue;
          if (offset + 2 > bytes.length) break;

          const length = ((bytes[offset] ?? 0) << 8) + (bytes[offset + 1] ?? 0);
          const segmentStart = offset - 2;
          const segmentEnd = offset + length;
          if (length < 2 || segmentEnd > bytes.length) break;

          const isExif =
            marker === 0xe1 &&
            length >= 8 &&
            bytes[offset + 2] === 0x45 &&
            bytes[offset + 3] === 0x78 &&
            bytes[offset + 4] === 0x69 &&
            bytes[offset + 5] === 0x66 &&
            bytes[offset + 6] === 0x00 &&
            bytes[offset + 7] === 0x00;

          if (isExif) {
            segments.push(bytes.slice(segmentStart, segmentEnd));
          }

          offset = segmentEnd;
        }

        return segments;
      };

      const copyExifSegments = (jpegBytes: Uint8Array, exifSegments: Uint8Array[]) => {
        if (
          exifSegments.length === 0 ||
          jpegBytes.length < 2 ||
          jpegBytes[0] !== 0xff ||
          jpegBytes[1] !== 0xd8
        ) {
          return jpegBytes;
        }

        const totalExifLength = exifSegments.reduce((sum, segment) => sum + segment.length, 0);
        const output = new Uint8Array(jpegBytes.length + totalExifLength);
        let offset = 0;

        output.set(jpegBytes.slice(0, 2), offset);
        offset += 2;

        exifSegments.forEach((segment) => {
          output.set(segment, offset);
          offset += segment.length;
        });

        output.set(jpegBytes.slice(2), offset);
        return output;
      };

      const normalizeExifOrientation = (segment: Uint8Array) => {
        const exifHeaderOffset = 4;
        const tiffOffset = exifHeaderOffset + 6;
        if (
          segment.length < tiffOffset + 8 ||
          segment[exifHeaderOffset] !== 0x45 ||
          segment[exifHeaderOffset + 1] !== 0x78 ||
          segment[exifHeaderOffset + 2] !== 0x69 ||
          segment[exifHeaderOffset + 3] !== 0x66
        ) {
          return segment;
        }

        const littleEndian =
          segment[tiffOffset] === 0x49 && segment[tiffOffset + 1] === 0x49;
        const bigEndian =
          segment[tiffOffset] === 0x4d && segment[tiffOffset + 1] === 0x4d;
        if (!littleEndian && !bigEndian) return segment;

        const readUint16 = (offset: number) =>
          littleEndian
            ? (segment[offset] ?? 0) + ((segment[offset + 1] ?? 0) << 8)
            : ((segment[offset] ?? 0) << 8) + (segment[offset + 1] ?? 0);

        const readUint32 = (offset: number) =>
          littleEndian
            ? (segment[offset] ?? 0) +
              ((segment[offset + 1] ?? 0) << 8) +
              ((segment[offset + 2] ?? 0) << 16) +
              ((segment[offset + 3] ?? 0) << 24)
            : ((segment[offset] ?? 0) << 24) +
              ((segment[offset + 1] ?? 0) << 16) +
              ((segment[offset + 2] ?? 0) << 8) +
              (segment[offset + 3] ?? 0);

        const ifdOffset = readUint32(tiffOffset + 4);
        const ifdStart = tiffOffset + ifdOffset;
        if (ifdStart + 2 > segment.length) return segment;

        const entryCount = readUint16(ifdStart);
        const normalized = segment.slice();
        for (let i = 0; i < entryCount; i += 1) {
          const entryOffset = ifdStart + 2 + i * 12;
          if (entryOffset + 12 > normalized.length) break;

          const tag = readUint16(entryOffset);
          if (tag !== 0x0112) continue;

          const valueOffset = entryOffset + 8;
          if (littleEndian) {
            normalized[valueOffset] = 1;
            normalized[valueOffset + 1] = 0;
          } else {
            normalized[valueOffset] = 0;
            normalized[valueOffset + 1] = 1;
          }
          return normalized;
        }

        return segment;
      };

      const normalizeExifSegmentsOrientation = (segments: Uint8Array[]) => {
        return segments.map(normalizeExifOrientation);
      };

      const getTargetDimensions = (width: number, height: number) => {
        const scale = Math.max(1, scalePercent.value) / 100;
        return {
          width: Math.max(1, Math.round(width * scale)),
          height: Math.max(1, Math.round(height * scale))
        };
      };

      const buildPreviewImageStyle = (width: number, height: number) => ({
        width: `${width}px`,
        height: `${height}px`
      });

      const previewDisplayScale = computed(() => {
        const image = currentOriginalImage.value;
        if (!image) return 1;

        const resizedImageInfo = currentResizedImage.value;
        const referenceWidth = Math.max(image.width, resizedImageInfo?.width ?? image.width);
        const referenceHeight = Math.max(image.height, resizedImageInfo?.height ?? image.height);

        return Math.min(previewFrameWidth / referenceWidth, previewFrameHeight / referenceHeight, 1);
      });

      const originalPreviewImageStyle = computed(() => {
        const image = currentOriginalImage.value;
        if (!image) return {};

        return buildPreviewImageStyle(
          Math.max(1, Math.round(image.width * previewDisplayScale.value)),
          Math.max(1, Math.round(image.height * previewDisplayScale.value))
        );
      });

      const resizedPreviewImageStyle = computed(() => {
        const resizedImageInfo = currentResizedImage.value;
        if (!resizedImageInfo) return {};

        return buildPreviewImageStyle(
          Math.max(1, Math.round(resizedImageInfo.width * previewDisplayScale.value)),
          Math.max(1, Math.round(resizedImageInfo.height * previewDisplayScale.value))
        );
      });

      const loadImageDimensions = (url: string) =>
        new Promise<{ width: number; height: number }>((resolve) => {
          const img = new Image();
          img.onload = () => {
            resolve({
              width: img.naturalWidth || img.width,
              height: img.naturalHeight || img.height
            });
          };
          img.src = url;
        });

      const loadOriginalImage = async (file: File): Promise<OriginalImageInfo> => {
        const url = URL.createObjectURL(file);
        const [{ width, height }, fileBytes] = await Promise.all([
          loadImageDimensions(url),
          file.arrayBuffer()
        ]);

        return {
          file,
          url,
          width,
          height,
          fileSizeBytes: file.size,
          exifSegments: extractExifSegments(new Uint8Array(fileBytes))
        };
      };

      const originalDimensionsLabel = computed(() => {
        const image = currentOriginalImage.value;
        if (!image) return null;
        return t('tools.imageResizer.dimensions', {
          width: image.width,
          height: image.height
        });
      });

      const resizedDimensionsLabel = computed(() => {
        const image = currentResizedImage.value;
        if (!image) return null;
        return t('tools.imageResizer.dimensions', {
          width: image.width,
          height: image.height
        });
      });

      const originalFileSizeLabel = computed(() => {
        const totalSize = originalImages.value.reduce((sum, image) => sum + image.fileSizeBytes, 0);
        const size = formatBytes(totalSize || null);
        if (!size) return null;
        if (originalImages.value.length <= 1) return t('tools.imageResizer.fileSize', { size });
        return t('tools.imageResizer.fileSizeWithCount', {
          size,
          count: originalImages.value.length
        });
      });

      const resizedFileSizeLabel = computed(() => {
        const totalSize = resizedImages.value.reduce((sum, image) => sum + image.fileSizeBytes, 0);
        const size = formatBytes(totalSize || null);
        if (!size) return null;
        if (resizedImages.value.length <= 1) return t('tools.imageResizer.resizedFileSize', { size });
        return t('tools.imageResizer.resizedFileSizeWithCount', {
          size,
          count: resizedImages.value.length
        });
      });

      const downloadButtonLabel = computed(() => {
        if (resizedImages.value.length <= 1) return t('tools.imageResizer.download');
        return t('tools.imageResizer.downloadAll', { count: resizedImages.value.length });
      });

      const previewCounterLabel = computed(() => {
        return t('tools.imageResizer.previewCounter', {
          current: currentPreviewIndex.value + 1,
          total: originalImages.value.length
        });
      });

      const previewFileName = computed(() => currentOriginalImage.value?.file.name ?? null);

      const resizeEstimateLabel = computed(() => {
        const image = currentOriginalImage.value;
        if (!image) return null;
        const target = getTargetDimensions(image.width, image.height);
        return t('tools.imageResizer.resizeEstimate', {
          scale: Math.max(1, scalePercent.value),
          fromWidth: image.width,
          fromHeight: image.height,
          toWidth: target.width,
          toHeight: target.height
        });
      });
  
      const revokeImageUrls = () => {
        originalImages.value.forEach((image) => URL.revokeObjectURL(image.url));
        resizedImages.value.forEach((image) => URL.revokeObjectURL(image.url));
      };

      const handleFileUpload = async (files: File | File[] | null) => {
        revokeImageUrls();

        const nextFiles = Array.isArray(files) ? files : files ? [files] : [];
        selectedFiles.value = nextFiles;

        if (nextFiles.length === 0) {
          originalImages.value = [];
          resizedImages.value = [];
          currentPreviewIndex.value = 0;
          scalePercent.value = 100;
          return;
        }

        originalImages.value = await Promise.all(nextFiles.map(loadOriginalImage));
        resizedImages.value = [];
        currentPreviewIndex.value = 0;
        scalePercent.value = 100;
      };

      const resizeImage = (image: OriginalImageInfo) =>
        new Promise<ResizedImageInfo>((resolve) => {
          const img = new Image();
          img.onload = () => {
            const target = getTargetDimensions(image.width, image.height);
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = target.width;
            canvas.height = target.height;
            if (ctx) {
              ctx.drawImage(img, 0, 0, target.width, target.height);
              const resizedDataUrl = canvas.toDataURL('image/jpeg');
              const resizedBytes = dataUrlToUint8Array(resizedDataUrl);
              const resizedBytesWithExif = copyExifSegments(
                resizedBytes,
                normalizeExifSegmentsOrientation(image.exifSegments)
              );
              const resizedBlob = new Blob([resizedBytesWithExif], { type: 'image/jpeg' });

              resolve({
                url: URL.createObjectURL(resizedBlob),
                fileName: buildResizedFileName(image.file.name),
                width: target.width,
                height: target.height,
                fileSizeBytes: resizedBlob.size
              });
            }
          };
          img.src = image.url;
        });

      const resizeImages = async () => {
        if (originalImages.value.length === 0 || isResizing.value) return;

        resizedImages.value.forEach((image) => URL.revokeObjectURL(image.url));
        resizedImages.value = [];
        isResizing.value = true;

        try {
          resizedImages.value = await Promise.all(originalImages.value.map(resizeImage));
        } finally {
          isResizing.value = false;
        }
      };

      const downloadResizedImages = () => {
        resizedImages.value.forEach((image) => {
          const link = document.createElement('a');
          link.href = image.url;
          link.download = image.fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
      };

      const goPreviousImage = () => {
        currentPreviewIndex.value = Math.max(0, currentPreviewIndex.value - 1);
      };

      const goNextImage = () => {
        currentPreviewIndex.value = Math.min(
          originalImages.value.length - 1,
          currentPreviewIndex.value + 1
        );
      };

      return {
        t,
        locale,
        originalImage,
        resizedImage,
        selectedFiles,
        scalePercent,
        originalDimensionsLabel,
        resizedDimensionsLabel,
        originalFileSizeLabel,
        resizedFileSizeLabel,
        downloadButtonLabel,
        previewCounterLabel,
        previewFileName,
        resizeEstimateLabel,
        originalPreviewImageStyle,
        resizedPreviewImageStyle,
        hasMultipleImages,
        canGoPrevious,
        canGoNext,
        isResizing,
        handleFileUpload,
        resizeImages,
        downloadResizedImages,
        goPreviousImage,
        goNextImage,
      };
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    margin-top: 20px;
  }
  .thumbnail-frame {
    align-items: center;
    background: #f4f4f4;
    border: 1px solid #d6d6d6;
    display: flex;
    height: 320px;
    justify-content: center;
    margin: 10px auto 0;
    max-width: min(100%, 520px);
    overflow: hidden;
  }
  .thumbnail-frame img {
    object-fit: contain;
  }
  .resize-controls {
    margin-top: 20px;
  }
  .resize-estimate {
    font-weight: 600;
  }
  .preview-navigation {
    align-items: center;
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 16px;
  }
  .preview-counter {
    min-width: 72px;
  }
  .resize-controls label,
  .resize-controls input {
    margin: 5px;
  }
  .image-meta {
    margin-top: 6px;
    margin-bottom: 0;
    color: #4b4b4b;
  }
</style>
  
