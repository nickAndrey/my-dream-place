import { Button, Flex, Typography } from 'antd';
import { CSSProperties, FC } from 'react';

import { ReactComponent as FacebookOutlined } from '../../assets/icons/facebook.svg';
import { ReactComponent as GoogleOutlined } from '../../assets/icons/google.svg';

const { Text } = Typography;

const TextStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  alignItems: 'center',
  gap: 16,
  marginBottom: '24px',
};

const LineStyle: CSSProperties = {
  height: 1,
  background: '#E0E0E0',
};

const ButtonStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
};

const SignInOptions: FC = () => {
  return (
    <Flex vertical>
      <div style={TextStyle}>
        <span style={LineStyle} />
        <Text>or use one of these options</Text>
        <span style={LineStyle} />
      </div>

      <Button
        type='default'
        icon={<GoogleOutlined />}
        style={{ ...ButtonStyle, marginBottom: 12 }}
        size='large'
      >
        Sign in with Google
      </Button>
      <Button
        type='primary'
        icon={<FacebookOutlined />}
        style={{ ...ButtonStyle, marginBottom: 60, backgroundColor: '#475993' }}
        size='large'
      >
        Sign in with Facebook
      </Button>
    </Flex>
  );
};

export default SignInOptions;
