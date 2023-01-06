import React from 'react';
import { Button, Col, Divider, Form, Layout, Row } from 'antd';
import styled from 'styled-components';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';

import { useAppDispatch } from 'src/stores';
import { InputField } from 'src/components/form';
import { loginAction } from 'src/stores/screens/auth/auth.action';

const { Content } = Layout;

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const validationSchema = yup.object().shape({
    email: yup.string().email().required('EMAIL REQUIRED'),
    password: yup.string().required('PASSWORD REQUIRED').min(8),
  });

  const initialValues = {
    email: 'ittroller8@gmail.com',
    password: '123456789',
  };

  const onLoginSuccess = (): void => {
    navigate('/dashboard');
  };

  const handleLogin = (value): void => {
    void dispatch(loginAction({ data: value, callback: onLoginSuccess }));
  };

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema,
    initialValues,
    onSubmit: value => {
      handleLogin(value);
    },
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

            <InputField
              field={formik.getFieldProps('password')}
              setFieldValue={setFieldValue}
              className="form-control form-email"
              inputProps={{
                size: 'middle',
                prefix: <LockOutlined className="site-form-item-icon" />,
                placeholder: 'Password',
              }}
              error={formik.errors.password}
              touched={formik.touched.password}
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
