import type { CustomRoute } from '@/interface';
import { ROUTE_HOME } from '../routes';

const ROOT: CustomRoute = {
  name: 'root',
  path: '/',
  redirect: { name: ROUTE_HOME.name },
  meta: {
    isNotMenu: true
  }
};

export default ROOT;
