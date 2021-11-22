import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default function useRouteQuery() {
  const route = useRoute();

  /** 登录跳转链接 */
  const loginRedirectUrl = computed(() => {
    let url: string | undefined;
    if (route.name === 'login') {
      url = (route.query?.redirectUrl as string) || '';
    }
    return url;
  });

  return {
    loginRedirectUrl
  };
}
