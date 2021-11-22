import type { CustomRoute } from '@/interface';
import { BasicLayout, RouterViewLayout } from '@/layouts';
import { setRouterCacheName } from '@/utils';
import MultiMenuFirstSecond from '@/views/multi-menu/first/second/index.vue';

setRouterCacheName(MultiMenuFirstSecond, 'multi-menu_first_second');

const MULTI_MENU: CustomRoute = {
  name: 'multi-menu',
  path: '/multi-menu',
  component: BasicLayout,
  redirect: { name: 'multi-menu_first' },
  meta: {
    title: '多级菜单',
    icon: 'carbon:menu'
  },
  children: [
    {
      name: 'multi-menu_first',
      path: '/multi-menu/first',
      component: RouterViewLayout,
      redirect: { name: 'multi-menu_first_second' },
      meta: {
        keepAlive: true,
        requiresAuth: true,
        title: '一级菜单'
      },
      children: [
        {
          name: 'multi-menu_first_second',
          path: '/multi-menu/first/second',
          component: MultiMenuFirstSecond,
          meta: {
            keepAlive: true,
            requiresAuth: true,
            title: '二级菜单'
          }
        }
      ]
    }
  ]
};

export default MULTI_MENU;
