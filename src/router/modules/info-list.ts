import type { CustomRoute } from '@/interface';
import { setRouterCacheName, setSingleRoute } from '@/utils';
import { BasicLayout } from '@/layouts';
import InfoList from '@/views/info-list/index.vue';

setRouterCacheName(InfoList, 'about');

const INFOLIST: CustomRoute = setSingleRoute(BasicLayout, {
  name: 'infolist',
  path: '/infolist',
  component: InfoList,
  meta: {
    requiresAuth: true,
    title: '证书列表',
    icon: 'heroicons-outline:clipboard-check'
  }
});

export default INFOLIST;
