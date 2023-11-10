import { Flex, Typography } from 'antd';
import { FC } from 'react';
import Listing from '../../../types/Listing';
import splitArrayIntoChunks from '../../../utils/splitArrayIntoChunks';
import FacilityIcon from './FacilityIcon';

const { Text } = Typography;

type FacilitiesProps = {
  facilities: Listing['facilities'];
};

const Facilities: FC<FacilitiesProps> = ({ facilities }) => {
  return (
    <Flex gap={50}>
      {splitArrayIntoChunks(facilities, 3).map((chunk) => (
        <Flex
          key={chunk[0].id}
          component='ul'
          gap={10}
          style={{
            listStyleType: 'none',
            margin: 0,
            padding: 0,
          }}
          vertical
        >
          {chunk.map(({ id, name, label }) => (
            <li key={id}>
              <Flex align='center' gap={5}>
                <FacilityIcon facility={label} />
                <Text>{name}</Text>
              </Flex>
            </li>
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

export default Facilities;
