import React, { useState } from 'react';
import './Layout.css';
import { Layout } from 'antd';
import MidLayout from './MidLayout';
import SideBarMenuListComponent from '../Components/SideBarMenuListComponent';

const { Content, Sider } = Layout;

const HomeLayout = () => {
  const [hideSider, setHideSider] = useState(false);

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider className='sider_left'>
        <SideBarMenuListComponent />
      </Sider>
      <Content className='midcontent'>
        <MidLayout />
      </Content>
      <Content className='sider_right'>Sider</Content>
    </Layout>
  );
};

export default HomeLayout;
