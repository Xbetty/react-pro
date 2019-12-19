import { Divider, Tag } from 'antd';
import { connect } from 'dva';
import CommonTable from '../../components/commonTable/index';
import CommonSearch from '../../components/commonSearch/index';
function home() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a>Invite {record.name}</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ];

  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  let num, row;
  function handleSizeChange(page, pageSize) {
    console.log('page', page, row);
    num = page;
    row = pageSize;
  }
  function handlePageChange(current, size) {
    console.log('current', current, size);
    num = current;
    row = size;
  }

  function addStudent() {
    console.log('添加学生');
  }

  // 搜索组件属性
  const searchProps = {
    fields: [
      {
        type: 'input',
        key: 'name',
        initialValue: '',
        placeholder: '请输入姓名',
        style: { width: '200px' },
      },
      {
        type: 'input',
        key: 'name',
        initialValue: '',
        placeholder: '请输入姓名',
        style: { width: '200px' },
      },
      {
        type: 'input',
        key: 'name',
        initialValue: '',
        placeholder: '请输入姓名',
        style: { width: '200px' },
      },
      {
        type: 'input',
        key: 'name',
        initialValue: '',
        placeholder: '请输入姓名',
        style: { width: '200px' },
      },
      {
        type: 'input',
        key: 'name',
        initialValue: '',
        placeholder: '请输入姓名',
        style: { width: '200px' },
      },
    ],
    btns: [
      // { label: '新增学员', type: 'primary', handleBtnClick: addStudent },
      { label: '批量分配', type: 'primary', handleBtnClick: addStudent },
      { label: '批量分配', type: 'primary', handleBtnClick: addStudent },
    ],
    superVisible: true,
  };

  // 表格组件属性
  const tableProps = {
    columns,
    dataSource,
    page: num,
    row: row,
    total: 300,
    showSizeChanger: true,
    showQuickJumper: true,
    handleSizeChange,
    handlePageChange,
  };
  return (
    <div>
      <CommonSearch {...searchProps} />
      <CommonTable {...tableProps} />
    </div>
  );
}

function mapStateToProps({ userInfo }) {
  return { userInfo };
}
export default connect(mapStateToProps)(home);
