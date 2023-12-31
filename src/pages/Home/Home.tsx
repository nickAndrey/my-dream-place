import { Flex, Typography } from 'antd';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchFilterGroup from '../../components/SearchFilterGroup';
import { BASE_LAYOUT_WIDTH } from '../../config/consts';
import BannerWithFilters from './BannerWithFilters';
import Card from './Card';
import DownloadMobileAppBanner from './DownloadMobileAppBanner';
import { hotels, trips, vacations } from './data';

const { Title, Text } = Typography;

const Home: FC = () => {
  const navigate = useNavigate();

  const [location, setLocation] = useState('');
  const [checkInDate, setCheckinDate] = useState('');
  const [checkOutDate, setCheckoutDate] = useState('');
  const [guests, setGuests] = useState('');

  const onSearch = () => {
    navigate('/search', {
      state: {
        location,
        checkInDate,
        checkOutDate,
        guests,
      },
    });
  };

  const renderCards = (data: any[]) =>
    data.map((item) => (
      <Card
        key={item.id}
        title={item.title}
        propertiesAmount={item.propertiesAmount}
        image={item.image}
        onClick={() => navigate('/search', { state: { title: item.title } })}
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
              value: checkInDate,
              onChange: (_, dateString) => {
                console.log(dateString);
                setCheckinDate(dateString);
              },
            }}
            checkout={{
              value: checkOutDate,
              onChange: (_, dateString) => {
                console.log(dateString);
                setCheckoutDate(dateString);
              },
            }}
            guests={{
              value: guests,
              onChange: (e) => setGuests(e.target.value),
            }}
            buttonProps={{
              onClick: onSearch,
              disabled: !location || !checkInDate || !checkOutDate || !guests,
            }}
          />
        }
      />

      <Flex vertical gap='large' style={{ paddingTop: 80 }}>
        <section>
          <Title level={3}>Enjoy your dream vacation</Title>
          <Text>
            Plan and book our perfect trip with expert advice, travel tips,
            destination information and inspiration from us
          </Text>
          <Flex justify='space-between' style={{ marginTop: 40 }}>
            {renderCards(vacations)}
          </Flex>
        </section>

        <section>
          <Title level={3}>Get inspiration for your next trip</Title>
          <Flex justify='space-between'>{renderCards(trips)}</Flex>
        </section>

        <section>
          <Title level={3}>Popular hotels</Title>
          <Flex justify='space-between'>{renderCards(hotels)}</Flex>
        </section>

        <DownloadMobileAppBanner style={{ marginTop: 40 }} />
      </Flex>
    </div>
  );
};

export default Home;
