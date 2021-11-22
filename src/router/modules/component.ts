import type { CustomRoute } from '@/interface';
import { BasicLayout, RouterViewLayout } from '@/layouts';
import { setRouterCacheName } from '@/utils';
import ComponentMap from '@/views/component/map/index.vue';
import ComponentVideo from '@/views/component/video/index.vue';
import EditorQuill from '@/views/component/editor/quill/index.vue';
import EditorMarkdown from '@/views/component/editor/markdown/index.vue';
import ComponentSwiper from '@/views/component/swiper/index.vue';

setRouterCacheName(ComponentMap, 'component_map');
setRouterCacheName(ComponentVideo, 'component_video');
setRouterCacheName(EditorQuill, 'component_editor_quill');
setRouterCacheName(EditorMarkdown, 'component_editor_markdown');
setRouterCacheName(ComponentSwiper, 'component_swiper');

const COMPONENT: CustomRoute = {
  name: 'component',
  path: '/component',
  component: BasicLayout,
  redirect: { name: 'component_map' },
  meta: {
    requiresAuth: true,
    title: '组件插件',
    icon: 'fluent:app-store-24-regular'
  },
  children: [
    {
      name: 'component_map',
      path: '/component/map',
      component: ComponentMap,
      meta: {
        requiresAuth: true,
        title: '地图插件',
        fullPage: true
      }
    },
    {
      name: 'component_video',
      path: '/component/video',
      component: ComponentVideo,
      meta: {
        requiresAuth: true,
        title: '视频插件',
        fullPage: true
      }
    },
    {
      name: 'component_editor',
      path: '/component/editor',
      component: RouterViewLayout,
      redirect: { name: 'component_editor_quill' },
      meta: {
        requiresAuth: true,
        title: '编辑器',
        fullPage: true
      },
      children: [
        {
          name: 'component_editor_quill',
          path: '/component/editor/quill',
          component: EditorQuill,
          meta: {
            requiresAuth: true,
            title: '富文本编辑器',
            fullPage: true
          }
        },
        {
          name: 'component_editor_markdown',
          path: '/component/editor/markdown',
          component: EditorMarkdown,
          meta: {
            requiresAuth: true,
            title: 'markdown编辑器',
            fullPage: true
          }
        }
      ]
    },
    {
      name: 'component_swiper',
      path: '/component/swiper',
      component: ComponentSwiper,
      meta: {
        requiresAuth: true,
        title: 'Swiper插件'
      }
    }
  ]
};

export default COMPONENT;
