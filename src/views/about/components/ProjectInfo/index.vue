<template>
  <n-card title="项目信息" :bordered="false" size="small" class="rounded-16px shadow-sm">
    <n-descriptions label-placement="left" bordered size="small" :column="2">
      <n-descriptions-item label="版本">
        <n-tag type="primary">{{ version }}</n-tag>
      </n-descriptions-item>
      <n-descriptions-item label="最后编译时间">
        <n-tag type="primary">{{ lastestBuildTime }}</n-tag>
      </n-descriptions-item>
      <!--      <n-descriptions-item label="Github地址">-->
      <!--        <a class="text-primary" href="https://github.com/honghuangdc/soybean-admin" target="_blank">Github地址</a>-->
      <!--      </n-descriptions-item>-->
      <!--      <n-descriptions-item label="预览地址">-->
      <!--        <a class="text-primary" href="https://soybean.pro" target="_blank">预览地址</a>-->
      <!--      </n-descriptions-item>-->
    </n-descriptions>
  </n-card>
</template>

<script setup lang="ts">
import { NCard, NDescriptions, NDescriptionsItem, NTag } from 'naive-ui';
import { packageJson } from '@/utils';

const { version } = packageJson;
const lastestBuildTime = PROJECT_BUILD_TIME;
</script>
<style scoped></style>
