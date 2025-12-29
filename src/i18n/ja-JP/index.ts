export default {
  layout: {
    title: 'Welcome to My Github Website',
    sections: {
      items: 'メニュー',
      tools: 'ツール',
      links: 'リンク'
    },
    language: {
      label: '言語',
      options: {
        en: '英語',
        ja: '日本語'
      }
    },
    nav: {
      home: { title: 'ホーム', caption: 'ホーム' },
      techTips: { title: 'Tech-Tips', caption: '技術メモ' },
      processing: { title: '信号処理', caption: 'シグナル処理' },
      quantum: { title: '量子', caption: '量子関連' },
      physics: { title: '物理', caption: 'フィジックス' },
      machineLearning: { title: '機械学習', caption: 'マシンラーニング' },
      culture: { title: 'カルチャー', caption: '文化' },
      japan: { title: '日本', caption: '日本記事' },
      about: { title: 'About', caption: '概要' },
      pixelViewer: { title: 'ピクセルビューア', caption: 'ピクセル座標確認' },
      imageResizer: { title: '画像リサイズ', caption: '手早く縮小/拡大' },
      imageConnector: { title: '画像連結', caption: '2枚を横に連結' },
      textCounter: { title: '文字数カウンター', caption: '文字数を数える' },
      worldTime: { title: '世界時計', caption: '各地の現在時刻' },
      viewer3d: { title: '3Dビューア', caption: '3Dモデルを確認' }
    },
    links: {
      github: { title: 'Github', caption: 'Github リポジトリ' },
      linkedIn: { title: 'LinkedIn', caption: 'LinkedIn プロフィール' }
    }
  },
  viewer: {
    title: '3Dモデルビューア',
    fileInput: {
      label: 'ファイルを選択',
      hint: 'GLB, GLTF, STL, OBJ'
    },
    toggles: {
      transparent: 'モデルを透過',
      wireframe: '線分/ノードを表示'
    },
    loading: 'モデルを読み込み中...',
    placeholder: '3Dファイルをアップロードしてください',
    placeholderHint: '対応形式: GLB, GLTF, STL, OBJ',
    faceInfo: {
      title: 'Face ID: {id}'
    },
    controls: {
      rotate: 'ドラッグで回転',
      zoom: 'スクロールでズーム',
      pan: '右ドラッグで移動',
      select: 'クリックで面を選択'
    },
    actions: {
      close: '閉じる'
    },
    error: {
      loadFailed: 'ファイルの読み込みに失敗しました: {file}',
      unsupported: '未対応のファイル形式です: .{ext}'
    }
  },
  tools: {
    worldTime: { title: '世界時計' },
    imageResizer: {
      title: '画像リサイズ',
      upload: '画像をアップロード',
      original: '元画像:',
      resized: 'リサイズ後:',
      download: 'リサイズ画像をダウンロード',
      width: '幅:',
      height: '高さ:',
      resize: 'リサイズ実行'
    },
    imageConnector: {
      title: '画像連結',
      uploadLeft: '左の画像をアップロード',
      uploadRight: '右の画像をアップロード',
      left: '左画像:',
      right: '右画像:',
      combined: '連結画像:',
      save: '画像を保存',
      hint: '2枚の画像をアップロードすると横方向に連結します。',
      colorMode: {
        label: 'カラーモード',
        rgb: 'RGB (デフォルト)',
        grayscale: 'グレースケール'
      }
    },
    pixelViewer: {
      upload: '画像をアップロード',
      prompt: '画像上でカーソルを動かすとピクセル情報を表示します。',
      message: 'x: {x}, y: {y}, RGB: ({r}, {g}, {b})'
    },
    textCounter: {
      placeholder: 'ここにテキストを入力…',
      length: '文字数: {count}'
    }
  },
  pages: {
    index: {
      profile: 'プロフィール'
    },
    about: {
      title: 'このサイトについて',
      author: '著者',
      email: 'メールアドレス'
    }
  }
};
