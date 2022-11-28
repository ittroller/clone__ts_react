import React, { useEffect } from 'react';
import { useOutlet } from 'react-router-dom';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer, Sider } = Layout;

const PublicLayout: React.FC = () => {
  const outlet = useOutlet();

  useEffect(() => {
    console.log('PublicLayout.tsx - useEffect');
  }, []);

  return (
    <PublicLayoutStyle>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }))}
        />
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />

        <Content style={{ margin: '24px 16px 0' }}>{outlet}</Content>

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </PublicLayoutStyle>
  );
};

export default PublicLayout;

const PublicLayoutStyle = styled(Layout)`
  height: 100%;
  width: 100%;
`;
