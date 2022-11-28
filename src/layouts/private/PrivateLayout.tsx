import React, { useMemo } from 'react';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import { Link, useLocation, useOutlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const PrivateLayout: React.FC = () => {
  const outlet = useOutlet();
  const location = useLocation();

  const MENU = [
    {
      key: 'DASHBOARD',
      icon: <UploadOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
      path: '/dashboard',
    },
    {
      key: 'ACCOUNT',
      icon: <UserOutlined />,
      label: <Link to="/account">Account</Link>,
      path: '/account',
    },
    {
      key: 'HOME',
      icon: <UserOutlined />,
      label: <Link to="/">Home</Link>,
      path: '/',
    },
  ];

  const selectedMenu = useMemo(() => {
    return MENU.find(item => item.path === location.pathname || item.path === '/')?.key ?? '';
  }, [location.pathname]);

  return (
    <PrivateLayoutStyle>
      <Sider className="layout-sider" breakpoint="lg" collapsedWidth="0" onBreakpoint={_ => {}} onCollapse={_ => {}}>
        <div className="logo">LOGO</div>
        <Menu className="layout-menu" mode="inline" defaultSelectedKeys={[selectedMenu]} items={MENU} />
      </Sider>
      <Layout className="layout-body">
        <Header className="body-header">
          <Link to={'/login'}>Go to login</Link>
        </Header>

        <Content className="body-content">{outlet}</Content>

        <Footer className="body-footer">MINH.CK</Footer>
      </Layout>
    </PrivateLayoutStyle>
  );
};

export default PrivateLayout;

const PrivateLayoutStyle = styled(Layout)`
  height: 100%;
  width: 100%;

  .layout-body {
    .body-header {
      padding: 0;
      background-color: transparent;
      box-shadow: 1px 1px 1px lightblue;
      text-align: right;
      padding: 0 30px;
    }
    .body-content {
      margin: 30px;
      box-shadow: 3px 3px 2px 3px lightblue;
    }
    .body-footer {
      text-align: center;
    }
  }
`;
