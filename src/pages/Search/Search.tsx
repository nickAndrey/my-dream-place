import { Flex } from 'antd';
import { CSSProperties, FC, useEffect, useState } from 'react';

import { BASE_LAYOUT_WIDTH } from '../../config/consts';
import Filters from './Filters/Filters';
import filtersData, {
  FilterType,
  convertSelectedFiltersToSearchQuery,
} from './Filters/filtersData';

const SearchContainerStyle: CSSProperties = {
  maxWidth: BASE_LAYOUT_WIDTH,
  margin: '0 auto',
  paddingTop: 12,
  display: 'grid',
  gridTemplateColumns: 'minmax(100px, 295px) 1fr',
  gap: 30,
};

const Search: FC = () => {
  const [search, setSearch] = useState<string>('');
  const [budget, setBudget] = useState<FilterType[]>([]);
  const [popular, setPopular] = useState<FilterType[]>([]);
  const [activities, setActivities] = useState<FilterType[]>([]);
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    console.log(
      convertSelectedFiltersToSearchQuery({
        search,
        budget,
        popular,
        activities,
        rating,
      }),
    );
  }, [search, budget, popular, activities, rating]);

  return (
    <div style={SearchContainerStyle}>
      <Filters
        filters={filtersData}
        budget={budget}
        setBudget={setBudget}
        popular={popular}
        setPopular={setPopular}
        activities={activities}
        setActivities={setActivities}
        rating={rating}
        setRating={setRating}
        search={search}
        setSearch={setSearch}
      />
      <Flex vertical>column 2</Flex>
    </div>
  );
};

export default Search;
