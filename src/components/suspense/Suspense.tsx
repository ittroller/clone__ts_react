import { Spin } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Suspense: React.FC = () => {
  return (
    <SuspenseStyle>
      <Spin spinning={true} />
    </SuspenseStyle>
  );
};

export default Suspense;

const SuspenseStyle = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
