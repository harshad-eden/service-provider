import { Layout } from 'antd';
import React from 'react';
import { FaUser } from 'react-icons/fa';

const HeaderComponenet = ({ pageName }) => {
  const { Header: AntHeader } = Layout;
  return (
    <div style={{ marginTop: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <FaUser size={20} />
      </div>
      <h3>{pageName}</h3>
    </div>
  );
};

export default HeaderComponenet;
