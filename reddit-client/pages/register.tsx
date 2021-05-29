import React, { useRef, useState } from 'react'
import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { FormInstance } from 'antd/lib/form';
import Link from 'next/link';
import styles from "../styles/Register.module.scss"
import { register } from '../src/types';

interface registerProps {

}

const Register: React.FC<registerProps> = ( { } ) => {
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<FormInstance>();

  const onFinish = ( values: register ) => {
    setIsLoading(true)
    console.log( 'Received values of form: ', values )
    setTimeout(() => {
      setIsLoading(false)
      formRef.current!.resetFields()
    }, 5000)
  };


  return (
    <>
      <h1 className={styles.title}>Register</h1>
      <Card hoverable className={styles.register}>
        <Form
        name="register"
        className="register-form"
        layout="vertical"
        ref={formRef}
        onFinish={onFinish}
        scrollToFirstError
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              () => ({
                validator(_, value) {
                  if (value.length > 3) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Username must be greater than 3 characters'));
                },
              }),
              {
                required: true,
                message: 'Please input your Username',
              },
            ]}
          >
            <Input prefix={<UserOutlined className={styles.icon} />} placeholder="johndoe" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[() => ({
                validator(_, value) {
                  if (value.search(/[a-z]/i) < 0) {
                      return Promise.reject(new Error("Password must contain at least one letter."));
                  }
                  if (value.search(/[0-9]/) < 0) {
                      return Promise.reject(new Error("Password must contain at least one digit.")); 
                  }
                  if (value.search(/[!@#$%^&*]/) < 0) {
                    return Promise.reject(new Error("Password must contain at least one special character.")); 
                  }
                  if (value.length < 6) {
                      return Promise.reject(new Error('Password must be greater than 6 characters')); 
                  }
                  return Promise.resolve();
                },
              }),
              { required: true, message: 'Please input your Password!' }]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className={styles.icon} />}
              type="password"
              placeholder="test123#"
            />
          </Form.Item>

          <Form.Item className={styles.footer}>
            <Button type="primary" htmlType="submit" className={styles.register_button} loading={isLoading}>
              Register
            </Button>
            <p className={styles.footer_text}>Already a member? Click <Link href="/login"><a>here</a></Link> to login</p>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}

export default Register