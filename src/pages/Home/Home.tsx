import { CSSProperties, FC, useState } from 'react';

import SearchFilterGroup from '../../components/SearchFilterGroup';
import { BASE_LAYOUT_WIDTH } from '../../config/consts';
import Banner from './Banner';

const HomeContainerStyle: CSSProperties = {
  maxWidth: BASE_LAYOUT_WIDTH,
  width: '100%',
  margin: '0 auto',
  paddingTop: 12,
};

const Home: FC = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckinDate] = useState('');
  const [checkOutDate, setCheckoutDate] = useState('');
  const [guests, setGuests] = useState('');

  const onSearch = () => {
    console.log({
      location,
      checkInDate,
      checkOutDate,
      guests,
    });
  };

  return (
    <div style={HomeContainerStyle}>
      <Banner
        title='Enjoy your dream Vacation'
        subtitle='Plan and book our perfect trip with expert advice, destination
          information and inspiration from us'
        filters={
          <SearchFilterGroup
            destination={{
              value: location,
              onChange: (e) => setLocation(e.target.value),
            }}
            checkin={{
              onChange: (_, dateString) => setCheckinDate(dateString),
            }}
            checkout={{
              onChange: (_, dateString) => setCheckoutDate(dateString),
            }}
            guests={{
              value: guests,
              onChange: (e) => setGuests(e.target.value),
            }}
            onClick={onSearch}
          />
        }
      />
    </div>
  );
};

export default Home;
