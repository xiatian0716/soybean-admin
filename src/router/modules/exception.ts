import type { CustomRoute } from '@/interface';
import { BasicLayout } from '@/layouts';
import { setRouterCacheName } from '@/utils';
import Exception403 from '@/views/system/exception/403.vue';
import Exception404 from '@/views/system/exception/404.vue';
import Exception500 from '@/views/system/exception/500.vue';

setRouterCacheName(Exception404, 'exception_404');
setRouterCacheName(Exception403, 'exception_403');
setRouterCacheName(Exception500, 'exception_500');

const EXCEPTION: CustomRoute = {
  name: 'exception',
  path: '/exception',
  component: BasicLayout,
  redirect: { name: 'exception_403' },
  meta: {
    requiresAuth: true,
    title: '异常页',
    icon: 'ant-design:exception-outlined'
  },
  children: [
    {
      name: 'exception_403',
      path: '/exception/403',
      component: Exception403,
      meta: {
        requiresAuth: true,
        title: '异常页-403',
        fullPage: true
      }
    },
    {
      name: 'exception_404',
      path: '/exception/404',
      component: Exception404,
      meta: {
        requiresAuth: true,
        title: '异常页-404',
        fullPage: true
      }
    },
    {
      name: 'exception_500',
      path: '/exception/500',
      component: Exception500,
      meta: {
        requiresAuth: true,
        title: '异常页-500',
        fullPage: true
      }
    }
  ]
};

export default EXCEPTION;
