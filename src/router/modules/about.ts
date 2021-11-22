import type { CustomRoute } from '@/interface';
import { setRouterCacheName, setSingleRoute } from '@/utils';
import { BasicLayout } from '@/layouts';
import About from '@/views/about/index.vue';

setRouterCacheName(About, 'about');

const ABOUT: CustomRoute = setSingleRoute(BasicLayout, {
  name: 'about',
  path: '/about',
  component: About,
  meta: {
    requiresAuth: true,
    title: '关于',
    icon: 'fluent:book-information-24-regular'
  }
});

export default ABOUT;
