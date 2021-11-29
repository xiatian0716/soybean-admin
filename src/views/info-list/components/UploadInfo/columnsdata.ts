import { formateDate } from './utils';

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
    width: '120',
    // new Date(shijianchuo)
    formatter: (row: any, column: any, cellValue: any) => {
      return formateDate(cellValue);
    }
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
];
