<template>
  <n-card title="证书信息上传" :bordered="false" size="small" class="rounded-16px shadow-sm">
    <br />
    <n-form ref="formRef" :model="dataNeed" :rules="rules" :size="size" label-placement="top">
      <n-grid :cols="24" :x-gap="24">
        <n-form-item-gi :span="12" label="经营者名称" path="OperatorName">
          <n-input v-model:value="dataNeed.OperatorName" placeholder="请输入" />
        </n-form-item-gi>
        <n-form-item-gi :span="6" label="法定代表人(负责人)" path="LegalRepresentative">
          <n-input v-model:value="dataNeed.LegalRepresentative" placeholder="请输入" />
        </n-form-item-gi>
        <n-form-item-gi :span="6" label="制证日期" path="DateOfCertification">
          <n-date-picker v-model:value="dataNeed.DateOfCertification" type="date" />
        </n-form-item-gi>
        <n-form-item-gi :span="12" label="许可证编号" path="PermitNumber">
          <n-input v-model:value="dataNeed.PermitNumber" placeholder="请输入" />
        </n-form-item-gi>
        <n-form-item-gi :span="12" label="社会信用代码" path="SocialCreditCode">
          <n-input v-model:value="dataNeed.SocialCreditCode" placeholder="请输入" />
        </n-form-item-gi>
        <n-form-item-gi :span="12" label="行业类别" path="IndustryCategory">
          <n-input v-model:value="dataNeed.IndustryCategory" placeholder="请输入" />
        </n-form-item-gi>
        <n-form-item-gi :span="12" label="许可项目" path="LicenseItems">
          <n-input
            v-model:value="dataNeed.LicenseItems"
            placeholder="请输入"
            type="textarea"
            :autosize="{
              minRows: 2,
              maxRows: 4
            }"
          />
        </n-form-item-gi>
        <!--				action="http://localhost:8080/api/saveCertiFiles/11223344qwe"-->
        <n-form-item-gi :span="12">
          <n-upload
            ref="upload"
            :action="`/api/saveCertiFiles/${dataNeed.SocialCreditCode}`"
            :default-upload="false"
            multiple
            @change="handleChange"
          >
            <n-button>选择文件</n-button>
          </n-upload>
        </n-form-item-gi>
        <n-gi :span="24">
          <div style="display: flex; justify-content: center; align-items: center; height: 120px">
            <!-- <n-button @click="handleValidateButtonClick(dataNeed,sysName)" round type="primary"
						>验证</n-button
					> -->
            <n-button round type="primary" @click="handleValidateButtonClick(dataNeed)">提交</n-button>
          </div>
        </n-gi>
      </n-grid>
    </n-form>
  </n-card>
  <pre>
      {{ JSON.stringify(dataNeed, 0, 2) }}
      </pre
  >
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue';
import { NCard, NForm, NGrid, NInput, NGi, NButton, NFormItemGi, NDatePicker, NUpload, useMessage } from 'naive-ui';
import axios from 'axios';

// 获取Composition API 上下文对象
const { ctx } = getCurrentInstance();

// 局部变量
const formRef = ref(null);
const message = useMessage();
const rules = ref({
  OperatorName: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入经营者名称'
  },
  LegalRepresentative: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入法定代表人(负责人)'
  },
  DateOfCertification: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入制证日期'
  },
  PermitNumber: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入许可证编号'
  },
  SocialCreditCode: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入社会信用代码'
  },
  IndustryCategory: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入行业类别'
  },
  LicenseItems: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入许可项目'
  }
});
const size = ref('small');
const dataNeed = reactive({
  OperatorName: null,
  LegalRepresentative: null,
  DateOfCertification: null,
  PermitNumber: null,
  SocialCreditCode: null,
  IndustryCategory: null,
  LicenseItems: null
});

// 清空reactive对象
const clear = () => {
  Object.keys(dataNeed).map(key => {
    // delete dataNeed[key];
    dataNeed[key] = null;
    return null;
  });
};

// 获取data对象传到后台
const getData = () => {
  const data = {};
  Object.keys(dataNeed).map(key => {
    // delete dataNeed[key];
    data[key] = dataNeed[key];
    return null;
  });
  return JSON.stringify(data);
};

// 图片上传校验
// const socialCreditCode = dataNeed.SocialCreditCode.;
// const actionUrl = `http://localhost:8080/api/saveCertiFiles/${dataNeed.SocialCreditCode}`;
const upload = ref(null);
const allImag = ref(false);
const handleChange = ({ fileList }) => {
  const imgStr = /\.(jpg|jpeg|png|bmp|BMP|JPG|PNG|JPEG)$/;
  if (fileList) {
    fileList.forEach(item => {
      if (!imgStr.test(item.name)) {
        message.error('请上传图片文件');
        return false;
      }
      allImag.value = true;
      return true;
    });
  }
};

// 函数方法
const handleValidateButtonClick = dataNeed => {
  formRef.value.validate(errors => {
    if (!errors) {
      if (!allImag.value) {
        message.error('请上传图片文件');
        throw new Error('请上传图片文件');
      } else {
        upload.value.submit();
      }
      // 提交Ajax请求
      const postdata = getData();
      axios({
        url: '/api/uploadinfo',
        method: 'POST',
        data: postdata,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          message.success('新增成功');
          clear();
        })
        .catch(e => {
          message.error('数据提交失败');
        });
    } else {
      message.error('表单数据有误');
    }
  });
};
</script>
