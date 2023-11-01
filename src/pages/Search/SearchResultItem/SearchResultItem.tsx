import { Button, Flex, Typography } from 'antd';
import { FC } from 'react';
import StarRating from './StarRating';

const { Title, Text } = Typography;

const SearchResultItemStyle: React.CSSProperties = {
  gap: 24,
  padding: 20,
  border: '1px solid #E0E0E0',
  borderRadius: 5,
};

const ImageStyle: React.CSSProperties = {
  maxWidth: 285,
  width: '100%',
  maxHeight: 200,
  height: 'auto',
  borderRadius: 5,
  objectFit: 'cover',
};

type SearchResultItemProps = {
  title: string;
  rating: number;
  description: string;
  price: number;
  duration: number;
  location: string;
  image: string;
  onItemClicked: () => void;
};

const SearchResultItem: FC<SearchResultItemProps> = ({
  title,
  rating,
  description,
  price,
  duration,
  location,
  image,
  onItemClicked,
}) => {
  return (
    <Flex wrap='wrap' style={SearchResultItemStyle} onClick={onItemClicked}>
      <img src={image} alt='location' style={ImageStyle} />

      <Flex flex={2} gap='small' vertical>
        <Title level={4} style={{ margin: 0 }}>
          {title}
        </Title>

        <Flex gap='small'>
          <StarRating rating={rating} />
          <Text>({rating})</Text>
        </Flex>

        <Text style={{ maxWidth: 380 }}>{description}</Text>

        <Button
          type='primary'
          style={{ width: 'fit-content' }}
          onClick={() => {
            console.log('item clicked');
          }}
        >
          See availability
        </Button>
      </Flex>

      <Flex vertical flex={1} justify='end' style={{ textAlign: 'end' }}>
        <Text>
          {location} - {duration} days
        </Text>
        <Text>
          <b>${price}</b> / person
        </Text>
        <Text>Including taxes and fees</Text>
      </Flex>
    </Flex>
  );
};

export default SearchResultItem;
