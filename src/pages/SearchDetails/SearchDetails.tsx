import { Divider, Empty, Flex, Image, Typography } from 'antd';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as MapPinIcon } from '../../assets/icons/map-pin.svg';
import { BASE_LAYOUT_WIDTH } from '../../config/consts';
import stubData from '../../stub-data/stub-data.json';
import Listing from '../../types/Listing';
import Facilities from './components/Facilities';
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

  let url =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20829.806715883507!2d-123.07885455000002!3d49.26264215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1699595071707!5m2!1sen!2sca';

  let longitude = listingDetails.coordinates.longitude;
  let latitude = listingDetails.coordinates.latitude;

  let updatedUrl = url
    .replace(/2d-?\d+\.\d+/, `2d${longitude}`)
    .replace(/3d-?\d+\.\d+/, `3d${latitude}`);

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
          <iframe
            title='map'
            src={updatedUrl}
            width='100%'
            height='240'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </Flex>
      </div>
    </Flex>
  );
};

export default SearchDetails;
