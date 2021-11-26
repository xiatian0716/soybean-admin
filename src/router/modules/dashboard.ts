import type { CustomRoute } from '@/interface';
import { BasicLayout } from '@/layouts';
import { setRouterCacheName } from '@/utils';
import { ROUTE_HOME } from '../routes';
import DashboardWorkbench from '@/views/dashboard/workbench/index.vue';

setRouterCacheName(DashboardWorkbench, 'dashboard_workbench');

const DASHBOARD: CustomRoute = {
  name: 'dashboard',
  path: '/dashboard',
  component: BasicLayout,
  redirect: { name: 'dashboard_analysis' },
  meta: {
    title: '仪表盘',
    icon: 'carbon:dashboard'
  },
  children: [
    ROUTE_HOME
    // {
    //   name: 'dashboard_workbench',
    //   path: '/dashboard/workbench',
    //   component: DashboardWorkbench,
    //   meta: {
    //     keepAlive: true,
    //     requiresAuth: true,
    //     title: '工作台'
    //   }
    // }
  ]
};

export default DASHBOARD;
