import { Button, Checkbox, Flex, Form, Input, Typography } from 'antd';
import { CSSProperties, FC } from 'react';
import { NavLink } from 'react-router-dom';
import Path from '../../types/Path';
import SignInOptions from './SignInOptions';

const { Title } = Typography;

const ContainerStyle: CSSProperties = {
  height: '100vh',
  width: '100vw',
  alignItems: 'center',
  justifyContent: 'center',
};

const SignInStyle: CSSProperties = {
  width: '100%',
  maxWidth: '400px',
};

const SignIn: FC = () => {
  return (
    <Flex style={ContainerStyle}>
      <Flex vertical style={SignInStyle}>
        <Title level={4} style={{ fontWeight: 500, textAlign: 'center' }}>
          Sign In
        </Title>

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
        <SignInOptions />
      </Flex>
    </Flex>
  );
};

export default SignIn;
