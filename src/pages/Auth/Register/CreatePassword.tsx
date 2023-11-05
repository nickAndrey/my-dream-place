import { Button, Form, Input, Typography } from 'antd';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Path from '../../../types/Path';
import AuthLayout from '../AuthLayout';

const { Text } = Typography;

type FieldType = {
  password: string;
  confirmPassword: string;
};

const CreatePassword: FC = () => {
  const onSubmit = (values: FieldType) => {
    if (values.password !== values.confirmPassword) {
      return;
    }

    console.log(values);
  };

  const onSubmitFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const bottomContent = (
    <Text>
      By creating an account, you agree with our{' '}
      <NavLink to={Path.SignIn}>Terms and Conditions</NavLink> and{' '}
      <NavLink to={Path.SignIn}>Privacy Statement.</NavLink>
    </Text>
  );

  return (
    <AuthLayout title='Create password' bottomContent={bottomContent}>
      <Text style={{ textAlign: 'center', marginBottom: 40 }}>
        Use a minimum of 10 characters, including letters, lowercase letters,
        and numbers.
      </Text>

      <Form
        layout='vertical'
        onFinish={onSubmit}
        onFinishFailed={onSubmitFailed}
      >
        <Form.Item<FieldType>
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

        <Form.Item<FieldType>
          label='Confirm password'
          name='confirmPassword'
          rules={[
            {
              required: true,
              message: 'Please confirm your password',
            },
          ]}
        >
          <Input.Password placeholder='Confirm password' size='large' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' size='large' block>
            Create account
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default CreatePassword;
