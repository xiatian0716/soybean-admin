<template>
  <n-card title="证书列表" :bordered="false" size="small" class="rounded-16px shadow-sm">
    <div class="certi-manage">
      <!--	++++++++++++++++++++++查询模块++++++++++++++++++++++	-->
      <div class="query-form">
        <el-form ref="form" :inline="true" :model="certi">
          <el-form-item label="经营者名称" prop="OperatorName">
            <el-input v-model="certi.OperatorName" placeholder="请输入经营者名称" />
          </el-form-item>
          <el-form-item label="社会信用代码" prop="SocialCreditCode">
            <el-input v-model="certi.SocialCreditCode" placeholder="请输入社会信用代码" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleQuery">查询</el-button>
            <el-button @click="handleReset('form')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>

      <!--	++++++++++++++++++++++表格模块++++++++++++++++++++++	-->
      <div class="base-table">
        <!--        <div class="action">-->
        <!--          <el-button type="primary" @click="handleCreate">新增</el-button>-->
        <!--          <el-button type="danger" @click="handlePatchDel">批量删除</el-button>-->
        <!--        </div>-->
        <el-table :data="certiList" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column fixed type="selection" width="55" />
          <el-table-column
            v-for="item in columnsdata"
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            :formatter="item.formatter"
          ></el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template #default="scope">
              <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button type="danger" size="mini" @click="handleDel(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="flex flex-row-reverse">
          <el-pagination
            background
            small
            layout="prev, pager, next"
            :total="pager.total"
            :page-size="pager.pageSize"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>

      <!--	++++++++++++++++++++++新增模块++++++++++++++++++++++	-->
      <el-dialog v-model="showModal" title="用户新增">
        <el-form ref="dialogForm" :model="userForm" label-width="100px" :rules="rules">
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="userForm.userName" :disabled="action == 'edit'" placeholder="请输入用户名称" />
          </el-form-item>
          <el-form-item label="邮箱" prop="userEmail">
            <el-input v-model="userForm.userEmail" :disabled="action == 'edit'" placeholder="请输入用户邮箱">
              <template #append>@imooc.com</template>
            </el-input>
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="handleSubmit">确 定</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </n-card>
</template>
<script setup>
import { getCurrentInstance, onMounted, reactive, ref, toRaw } from 'vue';
import { NCard, message } from 'naive-ui';
import { ElForm, ElFormItem, ElInput, ElButton, ElTable, ElTableColumn, ElPagination, ElDialog } from 'element-plus';
import axios from 'axios';
import { columnsdata } from './columnsdata';
// 初始化用户列表数据
import { userdata } from './userdata';

// =========================================================
//                        公共数据和方法
// =========================================================
//   获取Composition API 上下文对象
const { ctx } = getCurrentInstance();
// 初始化用户列表数据
const certiList = ref([...userdata]);
// 初始化用户表单对象
const certi = reactive({
  isDeleted: false
});
// 初始化分页对象
const pager = reactive({
  pageNum: 1,
  pageSize: 10,
  total: 50
});
// 获取用户列表
const getCertiList = async () => {
  const param = { ...certi, ...pager };
  try {
    await axios({
      url: 'http://localhost:8080/api/getInfoRequestList',
      method: 'GET',
      params: param,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        const total = parseInt(response.data.PageCount / response.data.PageSize, 10);
        pager.total = total + 1;
        pager.pageSize = response.data.PageSize;
        certiList.value = response.data.List;
      })
      .catch(e => {
        console.log(e);
      });
  } catch (error) {
    message.error('网络错误');
  }
};
// 选中用户列表对象
const checkedUserIds = ref([]);
// 弹框显示对象
const showModal = ref(false);
// 定义用户操作行为
const action = ref('add');
// 新增用户Form对象
const userForm = reactive({
  state: 3
});

// =========================================================
//                          查询模块
// =========================================================
//  查询事件，获取用户列表
const handleQuery = () => {
  getCertiList();
};
// 重置查询表单
const handleReset = form => {
  ctx.$refs[form].resetFields();
};

// =========================================================
//                          表格模块
// =========================================================
// 用户新增
const handleCreate = () => {
  action.value = 'add';
  showModal.value = true;
};
// 表格多选
const handleSelectionChange = list => {
  const arr = [];
  list.map(item => {
    arr.push(item.userId);
    return null;
  });
  checkedUserIds.value = arr;
};
// 用户单个删除
const handleDel = async row => {
  await ctx.$api.userDel({
    userIds: [row.userId] // 可单个删除，也可批量删除
  });
  ctx.$message.success('删除成功');
  getCertiList();
};
// 批量删除
const handlePatchDel = async () => {
  if (checkedUserIds.value.length === 0) {
    ctx.$message.error('请选择要删除的用户');
    return;
  }
  const res = await ctx.$api.userDel({
    userIds: checkedUserIds.value // 可单个删除，也可批量删除
  });
  if (res.nModified > 0) {
    ctx.$message.success('删除成功');
    getCertiList();
  } else {
    ctx.$message.success('修改失败');
  }
};
// 用户编辑
const handleEdit = row => {
  action.value = 'edit';
  showModal.value = true;
  ctx.$nextTick(() => {
    Object.assign(userForm, row);
  });
};
// 分页事件处理
const handleCurrentChange = current => {
  pager.pageNum = current;
  getCertiList();
};

// =========================================================
//                          新增修改模块
// =========================================================
// 定义表单校验规则
const rules = reactive({
  userName: [
    {
      required: true,
      message: '请输入用户名称',
      trigger: 'blur'
    }
  ],
  userEmail: [{ required: true, message: '请输入用户邮箱', trigger: 'blur' }]
});
// 用户弹窗关闭
const handleClose = () => {
  showModal.value = false;
  handleReset('dialogForm');
};
// 用户提交
const handleSubmit = () => {
  ctx.$refs.dialogForm.validate(async valid => {
    if (valid) {
      const params = toRaw(userForm);
      params.userEmail += '@imooc.com';
      params.action = action.value;
      const res = await ctx.$api.userSubmit(params);
      showModal.value = false;
      ctx.$message.success('用户创建成功');
      handleReset('dialogForm');
      getCertiList();
    }
  });
};

// =========================================================
//                          数据初始化
// =========================================================
// 初始化接口调用
onMounted(() => {
  getCertiList();
});
</script>

<style lang="scss"></style>
