<template>
  <n-scrollbar ref="scrollbar" class="h-full" :content-class="routeProps.fullPage ? 'h-full' : ''">
    <div class="inline-block wh-full bg-[#F6F9F8]">
      <router-view v-slot="{ Component, route: itemRoute }">
        <transition :name="theme.pageAnimateType" mode="out-in" appear>
          <keep-alive :include="cacheRoutes">
            <component
              :is="Component"
              v-if="reload"
              :key="itemRoute.fullPath"
              :class="{ 'min-h-100vh': !routeProps.fullPage }"
            />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </n-scrollbar>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { NScrollbar } from 'naive-ui';
import { useRouteProps, useScrollBehavior } from '@/hooks';
import { useThemeStore } from '@/store';
import { useReloadInject } from '@/context';
import { cacheRoutes } from '@/router';

const theme = useThemeStore();
const { reload } = useReloadInject();

const route = useRoute();
const { scrollbar, resetScrollBehavior } = useScrollBehavior();
const routeProps = useRouteProps();

watch(
  () => route.name,
  () => {
    resetScrollBehavior();
  }
);
</script>
<style scoped></style>
