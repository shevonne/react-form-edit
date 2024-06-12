import React, { FC } from 'react';
import { Space, Typography, Button, Checkbox, Form, Input } from 'antd';
import { LOGIN_PATHNAME } from '../router';
import { Link } from 'react-router-dom';
import { UserAddOutlined } from '@ant-design/icons';
import styles from './Register.module.scss';
const { Title, Paragraph, Text } = Typography;
const Register: FC = () => {
  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const onFinish = (values: FieldType) => {
    console.log('Success:', values);
  };

  return (
    <div className={styles.container}>
      <Space>
        <Title level={2}>
          <UserAddOutlined />
        </Title>
        <Title level={2}>注册新用户</Title>
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
          <Form.Item
            label="确认密码"
            name="confirm"
            rules={[{ required: true, message: '请输入确认密码!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="昵称"
            name="nickname"
            rules={[{ required: true, message: '请输入昵称!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
              <Link to={LOGIN_PATHNAME}>已有账户，登录</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
