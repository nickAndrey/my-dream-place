import { Button, Flex, Typography } from 'antd';
import { CSSProperties, FC } from 'react';
import BannerMobileAppSrc from '../../assets/images/download-app-banner.jpg';

const { Title } = Typography;

const BannerStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: 300,
  backgroundImage: `url(${BannerMobileAppSrc})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  padding: '24px 69px',
  borderRadius: 8,
};

type BannerMobileAppProps = {
  style?: CSSProperties;
};

const DownloadMobileAppBanner: FC<BannerMobileAppProps> = ({ style }) => {
  return (
    <Flex
      gap='small'
      align='flex-start'
      justify='center'
      style={{ ...BannerStyle, ...style }}
      vertical
    >
      <Title level={2} style={{ color: '#fff', maxWidth: 580 }}>
        Download the mobile application for bonus coupons and travel codes
      </Title>
      <Button type='primary' size='large'>
        Download mobile app
      </Button>
    </Flex>
  );
};

export default DownloadMobileAppBanner;
