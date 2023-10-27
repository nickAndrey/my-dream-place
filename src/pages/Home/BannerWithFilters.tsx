import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { CSSProperties, FC, ReactNode } from 'react';
import BannerWithFiltersSrc from '../../assets/images/banner-home.jpg';

const BannerWithFiltersStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: 500,
  backgroundImage: `url(${BannerWithFiltersSrc})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

const BannerWithFiltersTextStyle: CSSProperties = {
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
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: 8,
};

type BannerWithFiltersProps = {
  title: string;
  subtitle: string;
  filters: ReactNode;
};

const BannerWithFilters: FC<BannerWithFiltersProps> = ({
  title,
  subtitle,
  filters,
}) => {
  return (
    <Flex justify='center' align='center' style={BannerWithFiltersStyle}>
      <div style={BannerWithFiltersTextStyle}>
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

export default BannerWithFilters;
