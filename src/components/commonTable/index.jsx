import { Table } from 'antd';
import styles from './index.less';
function commonTable(props) {
  console.log('props', props);
  let { columns, dataSource } = props;
  return <Table columns={columns} dataSource={dataSource} />;
}

export default commonTable;
