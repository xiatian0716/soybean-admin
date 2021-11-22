import type { RouteRecordRaw } from 'vue-router';
import { BlankLayout } from '@/layouts';
import type { LoginModuleType } from '@/interface';
import Login from '@/views/system/login/index.vue';
import NoPermission from '@/views/system/exception/403.vue';
import NotFound from '@/views/system/exception/404.vue';
import ServiceError from '@/views/system/exception/500.vue';

/**
 * 固定不变的路由
 * @description !最后一项重定向未找到的路由须放置路由的最后一项
 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    name: 'single_',
    path: '/single_',
    component: BlankLayout,
    redirect: { name: 'not-found' },
    meta: {
      keepAlive: true
    },
    children: [
      // 登录
      {
        name: 'login',
        path: '/login',
        component: Login,
        props: route => {
          const moduleType: LoginModuleType = (route.query?.module as LoginModuleType) || 'pwd-login';
          return {
            module: moduleType
          };
        },
        meta: {
          title: '登录',
          fullPage: true
        }
      },
      // 403
      {
        name: 'no-permission',
        path: '/403',
        component: NoPermission,
        meta: {
          title: '无权限',
          fullPage: true
        }
      },
      // 404
      {
        name: 'not-found',
        path: '/404',
        component: NotFound,
        meta: {
          title: '未找到',
          fullPage: true
        }
      },
      // 500
      {
        name: 'service-error',
        path: '/500',
        component: ServiceError,
        meta: {
          title: '服务器错误',
          fullPage: true
        }
      }
    ]
  },
  // 匹配无效的路径重定向404
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'not-found' }
  }
];

// export default constantRoutes;
