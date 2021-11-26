import type { CustomRoute } from '@/interface';
import { setRouterCacheName, setSingleRoute } from '@/utils';
import { BasicLayout } from '@/layouts';
import UploadInfo from '@/views/uploadInfo/index.vue';

setRouterCacheName(UploadInfo, 'about');

const UPLOADINFO: CustomRoute = setSingleRoute(BasicLayout, {
  name: 'uploadinfo',
  path: '/uploadinfo',
  component: UploadInfo,
  meta: {
    requiresAuth: true,
    title: '信息上传',
    icon: 'heroicons-outline:clipboard-check'
  }
});

export default UPLOADINFO;
