import type { CustomRoute } from '@/interface';
import { BasicLayout } from '@/layouts';
import { setRouterCacheName } from '@/utils';
import FeatCopy from '@/views/feat/copy/index.vue';

setRouterCacheName(FeatCopy, 'feat_copy');

const FEAT: CustomRoute = {
  name: 'feat',
  path: '/feat',
  component: BasicLayout,
  redirect: { name: 'feat_copy' },
  meta: {
    requiresAuth: true,
    title: '功能示例',
    icon: 'ic:round-repeat'
  },
  children: [
    {
      name: 'feat_copy',
      path: '/feat/copy',
      component: FeatCopy,
      meta: {
        requiresAuth: true,
        title: '剪贴板',
        fullPage: true
      }
    }
  ]
};

export default FEAT;
