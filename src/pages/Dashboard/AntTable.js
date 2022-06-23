import { Table } from 'antd';
const columns = [
  {
    title: 'Member No',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Names',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Authority Processing',
    dataIndex: 'address',
  },
  {
    title: 'Documents',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Status',
    dataIndex: 'address',
  },
  // {
  //   title: 'Comment',
  //   dataIndex: 'address',
  // },
];
const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: 'London, Park Lane no',
  });
}

const App = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={false}
    scroll={{
      y: 164,
    }}
  />
);

export default App;
