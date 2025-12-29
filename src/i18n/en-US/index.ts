export default {
  layout: {
    title: 'Welcome to My Github Website',
    sections: {
      items: 'Items',
      tools: 'Tools',
      links: 'Links'
    },
    language: {
      label: 'Language',
      options: {
        en: 'English',
        ja: 'Japanese'
      }
    },
    nav: {
      home: { title: 'Home', caption: 'home' },
      techTips: { title: 'Tech-Tips', caption: 'tips' },
      processing: { title: 'Signal Processing', caption: 'signal processing' },
      quantum: { title: 'Quantum', caption: 'quantum' },
      physics: { title: 'Physics', caption: 'physics' },
      machineLearning: { title: 'Machine Learning', caption: 'machine learning' },
      culture: { title: 'Culture', caption: 'culture' },
      japan: { title: 'Japan', caption: 'japan' },
      about: { title: 'About', caption: 'about' },
      pixelViewer: { title: 'Pixel Viewer', caption: 'Check pixel coordinate' },
      imageResizer: { title: 'Image Resizer', caption: 'Resize images quickly' },
      imageConnector: { title: 'Image Connector', caption: 'Connect two images' },
      textCounter: { title: 'Text Length Counter', caption: 'Count characters' },
      worldTime: { title: 'WorldTime Checker', caption: 'Current times' },
      viewer3d: { title: '3D Viewer', caption: 'Inspect 3D models' }
    },
    links: {
      github: { title: 'Github', caption: 'my github repository' },
      linkedIn: { title: 'LinkedIn', caption: 'My LinkedIn profile' }
    }
  },
  viewer: {
    title: '3D Model Viewer',
    fileInput: {
      label: 'Select file',
      hint: 'GLB, GLTF, STL, OBJ'
    },
    toggles: {
      transparent: 'Make model transparent',
      wireframe: 'Show edges/vertices'
    },
    loading: 'Loading model...',
    placeholder: 'Upload a 3D file',
    placeholderHint: 'Supported: GLB, GLTF, STL, OBJ',
    faceInfo: {
      title: 'Face ID: {id}'
    },
    controls: {
      rotate: 'Drag to rotate',
      zoom: 'Scroll to zoom',
      pan: 'Right-drag to move',
      select: 'Click to select face'
    },
    actions: {
      close: 'Close'
    },
    error: {
      loadFailed: 'Failed to load file: {file}',
      unsupported: 'Unsupported file format: .{ext}'
    }
  },
  tools: {
    worldTime: { title: 'World Time' },
    imageResizer: {
      title: 'Image Resizer',
      upload: 'Upload Image',
      original: 'Original Image:',
      resized: 'Resized Image:',
      download: 'Download Resized Image',
      width: 'Width:',
      height: 'Height:',
      resize: 'Resize Image'
    },
    imageConnector: {
      title: 'Image Connector',
      uploadLeft: 'Upload Left Image',
      uploadRight: 'Upload Right Image',
      left: 'Left Image:',
      right: 'Right Image:',
      combined: 'Connected Image:',
      save: 'Save Image',
      hint: 'Upload two images to connect them horizontally.'
    },
    pixelViewer: {
      upload: 'Upload Image',
      prompt: 'Move your cursor over the image to see pixel information.',
      message: 'x: {x}, y: {y}, RGB: ({r}, {g}, {b})'
    },
    textCounter: {
      placeholder: 'Input Text Here...',
      length: 'Text Length: {count}'
    }
  },
  pages: {
    index: {
      profile: 'Profile'
    },
    about: {
      title: 'About this Website',
      author: 'Author',
      email: 'E-mail Address'
    }
  }
};
