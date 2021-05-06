import React from 'react';
import './Layout.css';
import { Layout } from 'antd';
import MidLayout from './MidLayout';
import SideBarMenuListComponent from '../Components/SideBarMenuListComponent/SideBarMenuListComponent';
import TodoEditDetailComponent from '../Components/TodoEditDetailComponent/TodoEditDetailComponent';
import { useLayoutValue } from '../context/LayoutContext';

const { Content, Sider } = Layout;

const HomeLayout = () => {
  const { hideSider } = useLayoutValue();
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider className='sider_left'>
        <SideBarMenuListComponent />
      </Sider>
      <Content className={hideSider ? 'midcontent' : 'midcontent resize250'}>
        <MidLayout />
      </Content>
      <div className={hideSider ? 'sider_right' : 'sider_right sider_show'}>
        {!hideSider && <TodoEditDetailComponent />}
      </div>
    </Layout>
  );
};

export default HomeLayout;
