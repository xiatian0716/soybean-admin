// 定义动态表格-格式
export const columnsdata = [
  {
    label: '经营者名称',
    prop: 'OperatorName',
    width: '250'
  },
  {
    label: '法定代表人',
    prop: 'LegalRepresentative',
    width: '200'
  },
  {
    label: '制证日期',
    prop: 'DateOfCertification',
    width: '120'
  },
  {
    label: '许可证编号',
    prop: 'PermitNumber',
    width: '120'
  },
  {
    label: '社会信用代码',
    prop: 'SocialCreditCode',
    width: '120'
  },
  {
    label: '行业类别',
    prop: 'IndustryCategory',
    width: '120'
  },
  {
    label: '许可项目',
    prop: 'LicenseItems',
    width: '120'
  }

  // {
  //   label: '注册时间',
  //   prop: 'createTime',
  //   width: 180,
  //   formatter: (row, column, value) => {
  //     return utils.formateDate(new Date(value));
  //   }
  // },
  // {
  //   label: '最后登录时间',
  //   prop: 'lastLoginTime',
  //   width: 180,
  //   formatter: (row, column, value) => {
  //     return utils.formateDate(new Date(value));
  //   }
  // }
];
