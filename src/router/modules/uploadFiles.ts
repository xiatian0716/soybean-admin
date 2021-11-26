import type { CustomRoute } from '@/interface';
import { setRouterCacheName, setSingleRoute } from '@/utils';
import { BasicLayout } from '@/layouts';
import UploadFiles from '@/views/uploadFiles/index.vue';

setRouterCacheName(UploadFiles, 'about');

const UPLOADFILES: CustomRoute = setSingleRoute(BasicLayout, {
  name: 'uploadfiles',
  path: '/uploadfiles',
  component: UploadFiles,
  meta: {
    requiresAuth: true,
    title: '文件上传',
    icon: 'heroicons-outline:clipboard-check'
  }
});

export default UPLOADFILES;
