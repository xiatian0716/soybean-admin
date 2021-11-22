import type { CustomRoute } from '@/interface';
import { setRouterCacheName } from '@/utils';
import DashboardAnalysis from '@/views/dashboard/analysis/index.vue';

setRouterCacheName(DashboardAnalysis, 'dashboard_analysis');

/** 路由首页 */
const ROUTE_HOME: CustomRoute = {
  name: 'dashboard_analysis',
  path: '/dashboard/analysis',
  component: DashboardAnalysis,
  meta: {
    requiresAuth: true,
    title: '分析页'
  }
};

export default ROUTE_HOME;
