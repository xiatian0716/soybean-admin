<template>
  <n-card title="证书文件上传" :bordered="false" size="small" class="rounded-16px shadow-sm">
    <el-upload
      accept="image/*"
      multiple
      action="/api/upload"
      :auto-upload="false"
      :show-file-list="false"
      :on-change="handleSelectImg"
    >
      <el-button size="small" type="primary">Click to upload</el-button>
      <template #tip>
        <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
      </template>
    </el-upload>
    <el-button style="margin-left: 10px" size="small" type="success" @click="submitUpload">upload to server</el-button>
  </n-card>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue';
import { NCard, useMessage } from 'naive-ui';
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElUpload,
  ElButton,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElDialog
} from 'element-plus';
import axios from 'axios';

// 获取Composition API 上下文对象
const { ctx } = getCurrentInstance();

const fileList = ref([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
  }
]);
// const handleRemove = (file, fileList) => {
//   console.log(file, fileList);
// };
// const handlePreview = file => {
//   console.log(file);
// };
// const submitUpload = () => {
//   console.log(fileList);
//   // console.log(ctx.$refs.upload);
//   // ctx.$refs.upload.submit();
// };
</script>
