import React from 'react';
import styles from './index.module.css';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src="icons/logo.png" className={styles.logo} />
        <Form className="wFull" name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <label htmlFor="username">Username</label>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input placeholder="Enter your Username" className="custom-ant-input" size="large" />
          </Form.Item>

          <label className="label" htmlFor="username">
            Password
          </label>
          <Form.Item
            className="mbZero"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password
              placeholder="Enter your Password"
              className="custom-ant-input"
              size="large"
            />
          </Form.Item>
          <Link to="/" className={styles.forgottPassword}>
            Forgot Password
          </Link>
        </Form>
        <div className={styles.submitBtn}>
          <Button
            className="custom-ant-button"
            shape="round"
            style={{ width: '85%' }}
            size="large"
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
