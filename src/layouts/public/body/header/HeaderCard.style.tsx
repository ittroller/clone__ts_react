import { Layout } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

export const HeaderCardStyle = styled(Header)`
  &.ant-layout-header {
    padding: 0;
    background-color: transparent;
    box-shadow: 1px 1px 1px lightblue;
    text-align: right;
    padding: 0 30px;

    .switch-theme,
    .switch-language {
      margin-right: 20px;
      width: 60px;
    }
  }
`;
