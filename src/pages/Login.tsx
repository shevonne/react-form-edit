import React, { FC, useEffect } from 'react';
import { Space, Typography, Button, Form, Input, Checkbox } from 'antd';
import { REGISTER_PATHNAME } from '../router';
import { Link } from 'react-router-dom';
import { UserAddOutlined } from '@ant-design/icons';
import styles from './Login.module.scss';

const { Title } = Typography;
const Login: FC = () => {
  const [form] = Form.useForm();
  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const USER_NAME_KEY = 'username';
  const PASS_WORD_KEY = 'password';
  //记住用户名密码
  function rememberMe(username: string, password: string) {
    localStorage.setItem(USER_NAME_KEY, username);
    localStorage.setItem(PASS_WORD_KEY, password);
  }

  //不记住用户名密码 删除记忆
  function forgetMe() {
    localStorage.removeItem(USER_NAME_KEY);
    localStorage.removeItem(PASS_WORD_KEY);
  }

  //获取本地存储的用户名密码
  function getUserInfoFromStorage() {
    const username = localStorage.getItem(USER_NAME_KEY);
    const password = localStorage.getItem(PASS_WORD_KEY);
    return { username, password };
  }

  const onFinish = (values: any) => {
    const { username, password, remember } = values || {};
    if (remember) {
      rememberMe(username, password);
    } else {
      forgetMe();
    }
    console.log('登录', values);
  };

  useEffect(() => {
    const { username, password } = getUserInfoFromStorage();
    form.setFieldsValue({ username, password });
  });

  return (
    <div className={styles.container}>
      <Space>
        <Title level={2}>
          <UserAddOutlined />
        </Title>
        <Title level={2}>登录</Title>
      </Space>
      <div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to={REGISTER_PATHNAME}>注册新用户</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
