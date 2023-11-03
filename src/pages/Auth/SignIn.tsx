import { Button, Checkbox, Flex, Form, Input, Typography } from 'antd';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Path from '../../types/Path';
import AuthLayout from './AuthLayout';

const { Text } = Typography;

const SignIn: FC = () => {
  const bottomContent = (
    <Flex align='center' justify='center' gap='small'>
      <Text>Don't have an account?</Text>
      <NavLink to={Path.SignUp}>Register</NavLink>
    </Flex>
  );

  return (
    <AuthLayout title='Sign In' bottomContent={bottomContent} withSignInOptions>
      <Form layout='vertical' onFinish={(values) => console.log(values)}>
        <Form.Item
          label='Email'
          name='email'
          rules={[
            {
              required: true,
              message: 'Please input your email',
            },
          ]}
        >
          <Input placeholder='Email' size='large' />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password',
            },
          ]}
        >
          <Input.Password placeholder='Password' size='large' />
        </Form.Item>

        <Form.Item>
          <Flex justify='space-between'>
            <Checkbox>Remember me</Checkbox>
            <NavLink to={Path.ForgotPassword}>Forgot password?</NavLink>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' size='large' block>
            Continue with email
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default SignIn;
