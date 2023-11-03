import { Flex, Typography } from 'antd';
import { CSSProperties, FC, ReactNode } from 'react';
import SignInOptions from './SignInOptions';

const { Title } = Typography;

const ContainerStyle: CSSProperties = {
  height: '100vh',
  width: '100vw',
  alignItems: 'center',
  justifyContent: 'center',
};

const ContainerInnerStyle: CSSProperties = {
  width: '100%',
  maxWidth: '400px',
};

const TitleStyle: CSSProperties = {
  fontWeight: 500,
  textAlign: 'center',
};

type AuthLayoutProps = {
  title: string;
  children: ReactNode;
  withSignInOptions?: boolean;
  bottomContent?: ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({
  title,
  children,
  withSignInOptions = false,
  bottomContent = null,
}) => {
  return (
    <Flex style={ContainerStyle}>
      <Flex vertical style={ContainerInnerStyle}>
        <Title level={4} style={TitleStyle}>
          {title}
        </Title>

        {children}

        {withSignInOptions && <SignInOptions />}

        {bottomContent}
      </Flex>
    </Flex>
  );
};

export default AuthLayout;
