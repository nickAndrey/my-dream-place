import { Flex, Typography } from 'antd';
import { CSSProperties, FC, ReactNode } from 'react';

const { Title, Text } = Typography;

const cardStyle: CSSProperties = {
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
};

const imageStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 8,
};

const contentStyle: CSSProperties = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  padding: 16,
  width: '100%',
  background: 'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
  borderRadius: '0 0 8px 8px',
};

type CardProps = {
  image: string;
  onClick: () => void;
  title?: string;
  propertiesAmount?: number;
  children?: ReactNode;
};

const Card: FC<CardProps> = ({
  title,
  propertiesAmount,
  image,
  onClick,
  children,
}) => (
  <Flex style={cardStyle} onClick={onClick} vertical>
    <img src={image} alt={title} style={imageStyle} />

    {title && propertiesAmount && (
      <div>
        <Title level={5} style={{ margin: 0 }}>
          {title}
        </Title>
        <Text>{propertiesAmount} properties</Text>
      </div>
    )}

    {children && (
      <Flex style={contentStyle} vertical>
        {children}
      </Flex>
    )}
  </Flex>
);

export default Card;
