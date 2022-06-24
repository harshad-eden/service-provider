import { Table } from 'antd';
import styles from './index.module.css';
import { HiOutlineDocumentText } from 'react-icons/hi';
const columns = [
  {
    title: 'Trans No',
    dataIndex: 'transNo',
    width: 90,
  },
  {
    title: 'Member No',
    dataIndex: 'memberNumber',
    width: 90,
  },
  {
    title: 'Names',
    dataIndex: 'names',
    width: 80,
  },
  {
    title: 'Phone No',
    dataIndex: 'phoneNo',
    width: 90,
  },
  {
    title: 'Department',
    dataIndex: 'department',
    width: 90,
  },
  {
    title: 'Claim No',
    dataIndex: 'claimNo',
    width: 90,
  },
  {
    title: 'Documents',
    dataIndex: 'Documents',
    width: 140,
    render: (text) => (
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <HiOutlineDocumentText size={30} color="#f87d4e" />
          <p style={{ fontSize: 8 }}>Request form</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <HiOutlineDocumentText size={30} color="#f87d4e" />
          <p style={{ fontSize: 8 }}>Request form</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <div className={styles.pinkRound}></div>
        {status}
      </div>
    ),
    width: 100,
  },
  {
    title: 'Comments',
    dataIndex: 'comment',
    width: 127,
  },
];
const data = [];

for (let i = 0; i < 6; i++) {
  data.push({
    key: i,
    names: 'Jhon doe',
    memberNumber: '#45454',
    documents: [],
    address: 'London, Park Lane no',
    authorityProcessing: 'Dorcas Nyangayi',
    status: 'pending',
    comment: 'lorem lipsul lorem lipsul lorem ',
    claimNo: '#45454',
    transNo: '#45454',
    phoneNo: '0724548000',
    department: 'Sales and Marketing',
  });
}

const AntTable = () => <Table columns={columns} dataSource={data} pagination={false} />;

export default AntTable;
