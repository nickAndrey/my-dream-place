import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { CSSProperties, FC, ReactNode } from 'react';
import bannerSrc from '../../assets/images/banner-home.jpg';

const BannerStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: 500,
  backgroundImage: `url(${bannerSrc})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

const BannerTextStyle: CSSProperties = {
  maxWidth: 650,
  textAlign: 'center',
};

const TextStyle: CSSProperties = {
  color: '#fff',
};

const FiltersContainerStyle: CSSProperties = {
  position: 'absolute',
  bottom: 0,
  transform: 'translate(0, 50%)',
  maxWidth: 1030,
  width: '100%',
};

type BannerProps = {
  title: string;
  subtitle: string;
  filters: ReactNode;
};

const Banner: FC<BannerProps> = ({ title, subtitle, filters }) => {
  return (
    <Flex justify='center' align='center' style={BannerStyle}>
      <div style={BannerTextStyle}>
        <Title level={2} style={TextStyle}>
          {title}
        </Title>
        <Title level={4} style={TextStyle}>
          {subtitle}
        </Title>
      </div>

      <div style={FiltersContainerStyle}>{filters}</div>
    </Flex>
  );
};

export default Banner;
