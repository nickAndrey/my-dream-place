import { Flex, Typography } from 'antd';
import { FC } from 'react';
import StarRating from '../../Search/SearchResultItem/StarRating';

const { Text } = Typography;

type RatingOverviewProps = {
  rating: number;
  reviewsCount: number;
};

const RatingOverview: FC<RatingOverviewProps> = ({ rating, reviewsCount }) => {
  return (
    <Flex align='center' gap={5}>
      <StarRating rating={rating} />
      <Text>{rating}</Text>
      <Text>({reviewsCount} reviews)</Text>
    </Flex>
  );
};

export default RatingOverview;
