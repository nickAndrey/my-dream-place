import { Divider, Empty, Flex, Image, Typography } from 'antd';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as MapPinIcon } from '../../assets/icons/map-pin.svg';
import { BASE_LAYOUT_WIDTH } from '../../config/consts';
import stubData from '../../stub-data/stub-data.json';
import Listing from '../../types/Listing';
import Facilities from './components/Facilities';
import Map from './components/Map';
import RatingOverview from './components/RatingOverview';

const { Title, Text } = Typography;

const SearchContainerStyle: CSSProperties = {
  maxWidth: BASE_LAYOUT_WIDTH,
  margin: '0 auto',
  paddingTop: 12,
};

const ContentContainerStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '60% auto',
  gap: 20,
};

const ImageWrapperStyle: CSSProperties = {
  borderRadius: 8,
  overflow: 'hidden',
};

const ImageStyle: CSSProperties = {
  objectFit: 'cover',
  maxWidth: '100%',
  height: '100%',
};

const OverviewStyle: CSSProperties = {
  border: '1px solid #E4E4E4',
  padding: '24px 30px',
  borderRadius: 6,
};

const SearchDetails: FC = () => {
  const location = useLocation();

  const [listingDetails, setListingDetails] = useState<Listing | undefined>(
    undefined,
  );

  useEffect(() => {
    if (!location.state) return;

    // TODO: make a request to the server to get the listing details
    const listing = stubData.find(({ id }) => id === location.state.id);
    setListingDetails(listing);
  }, [location]);

  if (!listingDetails) return <Empty />;

  const { street, city, state, country } = listingDetails.address;

  return (
    <Flex style={SearchContainerStyle} vertical gap={40}>
      <Image.PreviewGroup>
        <div style={ContentContainerStyle}>
          <Image
            src={listingDetails?.images[0]}
            style={ImageStyle}
            wrapperStyle={{ ...ImageWrapperStyle, height: 452 }}
          />

          <Flex vertical gap={16}>
            <Image
              src={listingDetails?.images[1]}
              style={ImageStyle}
              wrapperStyle={{ ...ImageWrapperStyle, height: 218 }}
            />
            <Image
              src={listingDetails?.images[2]}
              style={ImageStyle}
              wrapperStyle={{ ...ImageWrapperStyle, height: 218 }}
            />
          </Flex>
        </div>
      </Image.PreviewGroup>

      <div style={ContentContainerStyle}>
        <Flex vertical gap={30}>
          <Flex vertical gap={12}>
            <Title level={2} style={{ margin: 0 }}>
              {listingDetails.title}
            </Title>

            <RatingOverview
              rating={listingDetails.rating}
              reviewsCount={listingDetails.reviews.review.length}
            />

            <Flex align='center' gap={5}>
              <MapPinIcon />
              <Text>{`${street}, ${city}, ${state}, ${country}`}</Text>
            </Flex>
          </Flex>

          <div style={OverviewStyle}>
            <Title level={3}>Overview</Title>
            <Text>{listingDetails.overview}</Text>

            <Divider
              style={{
                margin: '44px -30px 26px -30px',
                width: 'calc(100% + 60px)',
              }}
            />

            <Title level={3}>Top facilities</Title>
            <Facilities facilities={listingDetails.facilities} />
          </div>
        </Flex>

        <Flex>
          <Map
            coordinates={{
              latitude: listingDetails.coordinates.latitude,
              longitude: listingDetails.coordinates.longitude,
            }}
          />
        </Flex>
      </div>
    </Flex>
  );
};

export default SearchDetails;
