import { CSSProperties, FC } from 'react';

import { BASE_LAYOUT_WIDTH } from '../../config/consts';
import Banner from './Banner';

const HomeContainerStyle: CSSProperties = {
  maxWidth: BASE_LAYOUT_WIDTH,
  width: '100%',
  margin: '0 auto',
  paddingTop: 12,
};

const Home: FC = () => {
  return (
    <div style={HomeContainerStyle}>
      <Banner
        title='Enjoy your dream Vacation'
        subtitle='Plan and book our perfect trip with expert advice, destination
          information and inspiration from us'
      />
    </div>
  );
};

export default Home;
