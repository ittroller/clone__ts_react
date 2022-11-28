import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { Link, useOutlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const PublicLayout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <PublicLayoutStyle>
      <Layout className="layout-body">
        <Header className="body-header">
          <Link to={'/login'}>Go to login</Link>
        </Header>

        <Content className="body-content">{outlet}</Content>

        <Footer className="body-footer">MINH.CK</Footer>
      </Layout>
    </PublicLayoutStyle>
  );
};

export default PublicLayout;

const PublicLayoutStyle = styled(Layout)`
  height: 100%;
  width: 100%;

  .layout-sider {
    background-color: transparent;
    box-shadow: 1px 1px 1px lightblue;

    .logo {
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 1px 1px 1px lightblue;
    }

    .layout-menu {
      height: calc(100% - 64px);
      background-color: transparent;

      .ant-menu-item {
        margin-top: initial;
        margin-bottom: 10px;
      }

      .ant-menu-item-selected {
        background-color: #b8d8f1;
      }
    }
  }

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
