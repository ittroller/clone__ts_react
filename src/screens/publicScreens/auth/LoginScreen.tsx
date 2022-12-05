import React from 'react';
import { WALLET_ADAPTERS } from '@web3auth/base';
import { Button, Col, Divider, Form, Layout, Row } from 'antd';
import styled from 'styled-components';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { InputField } from 'src/components/form';
import { useWeb3Auth } from 'src/contexts/web3auth/Web3Auth';

const { Content } = Layout;

const LoginScreen: React.FC = () => {
  const { login } = useWeb3Auth();

  const formik = useFormik<{ email: string }>({
    initialValues: { email: '' },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email address. <br />Please try again.').required(' '),
    }),
    validateOnMount: true,
    onSubmit(value) {
      void login(WALLET_ADAPTERS.OPENLOGIN, 'email_passwordless', value.email);
    },
    enableReinitialize: true,
  });

  const { setFieldValue } = formik;

  return (
    <LoginScreenStyle>
      <Row>
        <Col span={8} />
        <Col span={8}>
          <Form name="login" className="login-form" onFinish={() => formik.handleSubmit()}>
            <InputField
              field={formik.getFieldProps('email')}
              setFieldValue={setFieldValue}
              className="form-control form-email"
              inputProps={{
                size: 'middle',
                prefix: <UserOutlined className="site-form-item-icon" />,
                placeholder: 'Username',
              }}
              error={formik.errors.email}
              touched={formik.touched.email}
            />

            <Button className="btn-submit" htmlType="submit" type="primary">
              Login
            </Button>
          </Form>
          <Divider />
          <Link to={'/'}>Go to Home</Link>
        </Col>
        <Col span={8} />
      </Row>
    </LoginScreenStyle>
  );
};

export default LoginScreen;

const LoginScreenStyle = styled(Content)`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .btn-submit {
    width: 100%;
  }
`;
