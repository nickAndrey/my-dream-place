import { Button, Flex, Form, Input, Typography } from 'antd';
import { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Path from '../../../types/Path';
import AuthLayout from '../AuthLayout';

const { Text } = Typography;

const Register: FC = () => {
  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    if (values.email) {
      navigate(Path.CreatePassword);
    }
  };

  const bottomContent = (
    <Flex align='center' justify='center' gap='small'>
      <Text>Already have an account?</Text>
      <NavLink to={Path.SignIn}>Sign in</NavLink>
    </Flex>
  );

  return (
    <AuthLayout
      title='Register'
      bottomContent={bottomContent}
      withSignInOptions
    >
      <Form layout='vertical' onFinish={onSubmit}>
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

        <Form.Item>
          <Button type='primary' htmlType='submit' size='large' block>
            Continue with email
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default Register;
