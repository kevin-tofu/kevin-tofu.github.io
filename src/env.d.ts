declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
  }
}

declare module 'pica' {
  type PicaFeature = 'js' | 'wasm' | 'ww' | 'cib' | 'all';

  type PicaOptions = {
    features?: PicaFeature[];
    idle?: number;
    tile?: number;
    concurrency?: number;
    workerURL?: string;
  };

  type ResizeOptions = {
    filter?: 'box' | 'hamming' | 'lanczos2' | 'lanczos3' | 'mks2013';
    quality?: 0 | 1 | 2 | 3;
    unsharpAmount?: number;
    unsharpRadius?: number;
    unsharpThreshold?: number;
    cancelToken?: Promise<unknown>;
  };

  type PicaInstance = {
    resize(
      from: HTMLImageElement | HTMLCanvasElement | ImageBitmap,
      to: HTMLCanvasElement,
      options?: ResizeOptions
    ): Promise<HTMLCanvasElement>;
    toBlob(canvas: HTMLCanvasElement, mimeType?: string, quality?: number): Promise<Blob>;
  };

  export default function pica(options?: PicaOptions): PicaInstance;
}
