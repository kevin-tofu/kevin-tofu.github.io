import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '', name: 'IndexPage', component: () => import('pages/IndexPage.vue') },
      { path: 'pixel viewer', name: 'PixelViewer', component: () => import('pages/PixelViewer.vue') },
      { path: 'textlength ounter', name: 'TextlengthCounter', component: () => import('pages/TextlengthCounter.vue') },
      // { path: 'garallypage', name: 'GarallyPage', component: () => import('pages/GarallyPage.vue') },
      { path: 'articles-quantum', name: 'ArticleQuantum', component: () => import('src/pages/ArticleQuantum.vue') },
      { path: 'articles-physics', name: 'ArticlePhysics', component: () => import('src/pages/ArticlePhysics.vue') },
      { path: 'articles-tech', name: 'ArticleTech', component: () => import('src/pages/ArticleTech.vue') },
      { path: 'articles-signalprocessing', name: 'ArticleProcessing', component: () => import('src/pages/ArticleProcessing.vue') },
      { path: 'articles-machinelearning', name: 'ArticleMachineLearning', component: () => import('src/pages/ArticleMachineLearning.vue') },
      { path: 'articles-culture', name: 'ArticleCulture', component: () => import('src/pages/ArticleCulture.vue') },
      { path: 'articles-japan', name: 'ArticleJapan', component: () => import('src/pages/ArticleJapan.vue') },
      { path: 'image resizer', name: 'ImageResizer', component: () => import('src/pages/ImageResizer.vue') },
      { path: 'aboutpage', name: 'AboutPage', component: () => import('src/pages/AboutPage.vue') },
      { path: 'world-time', name: 'WorldTime', component: () => import('src/pages/WorldTime.vue') },
    ]
  },
  
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;