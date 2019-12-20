/*
 * @Author: xzt
 * @Date: 2019-12-16 09:47:04
 * @LastEditors  : xzt
 * @LastEditTime : 2019-12-18 10:20:28
 * @Description: 表格组件
 * @FilePath: \react-pro\src\components\commonTable\index.jsx
 */
import { Table, ConfigProvider } from 'antd';
import styles from './index.less';
import zhCN from 'antd/es/locale/zh_CN';
/**
 * @description: 表格组件
 * @param {type}
 * @return:
 */
function commonTable(props) {
  console.log('props', props);
  let {
    columns,
    dataSource,
    page,
    row,
    total,
    showSizeChanger,
    showQuickJumper,
    handlePageChange,
    handleSizeChange,
  } = props;
  return (
    <ConfigProvider locale={zhCN}>
      <Table
        className={styles.tableContainer}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          current: page || 1,
          pageSize: row || 10,
          total: total || 0,
          showSizeChanger: showSizeChanger || true, // 改变pageSize
          showQuickJumper: showQuickJumper || true, // 快速跳转
          onShowSizeChange: handleSizeChange, // pageSize变化
          onChange: handlePageChange, // 页码变化
          showTotal: (total, range) => `共${total}条记录`, // 显示数据总量
        }}
      />
    </ConfigProvider>
  );
}

export default commonTable;
