import { Flex, Space, Typography } from 'antd';
import { FC, useState } from 'react';
import SearchFilterGroup from '../../components/SearchFilterGroup';
import { BASE_LAYOUT_WIDTH } from '../../config/consts';
import BannerWithFilters from './BannerWithFilters';
import Card from './Card';
import { hotels, trips, vacations } from './data';

const { Title, Text } = Typography;

const Home: FC = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckinDate] = useState('');
  const [checkOutDate, setCheckoutDate] = useState('');
  const [guests, setGuests] = useState('');

  const onSearch = () => {
    console.log({ location, checkInDate, checkOutDate, guests });
  };

  const renderCards = (data: any[]) =>
    data.map((item) => (
      <Card
        key={item.id}
        title={item.title}
        propertiesAmount={item.propertiesAmount}
        image={item.image}
        onClick={() => console.log('Card clicked')}
      >
        {item.subtitle && (
          <>
            <Title style={{ color: '#fff' }} level={5}>
              {item.title}
            </Title>
            <Text style={{ color: '#fff' }}>{item.subtitle}</Text>
          </>
        )}
      </Card>
    ));

  return (
    <div
      style={{
        maxWidth: BASE_LAYOUT_WIDTH,
        width: '100%',
        margin: '0 auto',
        paddingTop: 12,
      }}
    >
      <BannerWithFilters
        title='Enjoy your dream Vacation'
        subtitle='Plan and book our perfect trip with expert advice, destination information and inspiration from us'
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

      <Space
        direction='vertical'
        size='middle'
        style={{ display: 'flex', paddingTop: 80 }}
      >
        <section>
          <Title level={3}>Enjoy your dream vacation</Title>
          <Text>
            Plan and book our perfect trip with expert advice, travel tips,
            destination information and inspiration from us
          </Text>
          <Flex gap='middle'>{renderCards(vacations)}</Flex>
        </section>

        <section>
          <Title level={3}>Get inspiration for your next trip</Title>
          <Flex gap='middle'>{renderCards(trips)}</Flex>
        </section>

        <section>
          <Title level={3}>Popular hotels</Title>
          <Flex gap='middle'>{renderCards(hotels)}</Flex>
        </section>
      </Space>
    </div>
  );
};

export default Home;
