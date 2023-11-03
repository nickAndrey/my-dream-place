import { Button, Flex, Form, Input, Typography } from 'antd';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Path from '../../../types/Path';
import AuthLayout from '../AuthLayout';

const { Text } = Typography;

const CreatePassword: FC = () => {
  const bottomContent = (
    <Flex align='center' justify='center' gap='small'>
      <Text>By creating an account, you agree with our</Text>
      <NavLink to={Path.SignIn}>Terms and Conditions</NavLink>
      <Text>and</Text>
      <NavLink to={Path.SignIn}>Privacy Statement.</NavLink>
    </Flex>
  );

  return (
    <AuthLayout title='Create password' bottomContent={bottomContent}>
      <Form layout='vertical' onFinish={(values) => console.log(values)}>
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

        <Form.Item
          label='Confirm password'
          name='confirmPassword'
          rules={[
            {
              required: true,
              message: 'Please input your password',
            },
          ]}
        >
          <Input.Password placeholder='Confirm password' size='large' />
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

export default CreatePassword;
