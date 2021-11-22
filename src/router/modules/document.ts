import type { CustomRoute } from '@/interface';
import { BasicLayout } from '@/layouts';
import { setRouterCacheName } from '@/utils';
import DocumentVue from '@/views/document/vue/index.vue';
import DocumentVite from '@/views/document/vite/index.vue';
import DocumentNaive from '@/views/document/naive/index.vue';

setRouterCacheName(DocumentVue, 'document_vue');
setRouterCacheName(DocumentVite, 'document_vite');
setRouterCacheName(DocumentNaive, 'document_naive');

const DOCUMENT: CustomRoute = {
  name: 'document',
  path: '/document',
  component: BasicLayout,
  redirect: { name: 'document_vue' },
  meta: {
    requiresAuth: true,
    title: '文档',
    icon: 'carbon:document'
  },
  children: [
    {
      name: 'document_vue',
      path: '/document/vue',
      component: DocumentVue,
      meta: {
        requiresAuth: true,
        title: 'vue文档',
        fullPage: true,
        keepAlive: true
      }
    },
    {
      name: 'document_vite',
      path: '/document/vite',
      component: DocumentVite,
      meta: {
        requiresAuth: true,
        title: 'vite文档',
        fullPage: true
      }
    },
    {
      name: 'document_naive',
      path: '/document/naive',
      component: DocumentNaive,
      meta: {
        requiresAuth: true,
        title: 'naive文档',
        fullPage: true
      }
    }
  ]
};

export default DOCUMENT;
