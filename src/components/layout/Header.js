import { Layout } from 'antd';
import React from 'react';
import { FaUser } from 'react-icons/fa';

const HeaderComponenet = () => {
  const { Header: AntHeader } = Layout;
  return (
    <AntHeader style={{ backgroundColor: 'inherit' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
        <FaUser size={20} />
      </div>
    </AntHeader>
  );
};

export default HeaderComponenet;
