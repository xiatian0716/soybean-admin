<template>
  <div class="pt-24px">
    <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false">
      <n-form-item path="phone">
        <n-input v-model:value="model.phone" placeholder="手机号码" />
      </n-form-item>
      <n-form-item path="code">
        <div class="flex-y-center w-full">
          <n-input v-model:value="model.code" placeholder="验证码" />
          <div class="w-18px"></div>
          <n-button size="large" :disabled="isCounting" @click="handleSmsCode">{{ label }}</n-button>
        </div>
      </n-form-item>
      <n-space :vertical="true" size="large">
        <n-button type="primary" size="large" :block="true" :round="true" @click="handleSubmit">确定</n-button>
        <n-button size="large" :block="true" :round="true" @click="toCurrentLogin('pwd-login')">返回</n-button>
      </n-space>
    </n-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { NForm, NFormItem, NInput, NSpace, NButton, useMessage } from 'naive-ui';
import type { FormInst } from 'naive-ui';
import { useRouterChange, useSmsCode } from '@/hooks';

const message = useMessage();
const { toCurrentLogin } = useRouterChange();
const { label, isCounting, start } = useSmsCode();

const formRef = ref<(HTMLElement & FormInst) | null>(null);
const model = reactive({
  phone: '',
  code: ''
});
const rules = {
  phone: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入手机号'
  },
  code: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入验证码'
  }
};

function handleSmsCode() {
  start();
}

function handleSubmit(e: MouseEvent) {
  if (!formRef.value) return;
  e.preventDefault();

  formRef.value.validate(errors => {
    if (!errors) {
      message.success('验证成功');
    } else {
      message.error('验证失败');
    }
  });
}
</script>
<style scoped></style>
