import { Layout } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

export const HeaderCardStyle = styled(Header)`
  &.ant-layout-header {
    background: #fff;
    padding: 0 20px;
    display: flex;
    justify-content: flex-end;

    box-shadow: 0px 0px 10px 1px #888888;
  }
`;
