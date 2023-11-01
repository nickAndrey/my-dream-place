import { Button, Flex, Typography } from 'antd';
import { CSSProperties, FC, useEffect, useState } from 'react';

import { BASE_LAYOUT_WIDTH } from '../../config/consts';
import Filters from './Filters/Filters';
import filtersData, {
  FilterType,
  convertSelectedFiltersToSearchQuery,
} from './Filters/filtersData';
import SearchResultItem from './SearchResultItem/SearchResultItem';
import placesToBook, { splitPlacesToBookIntoChunks } from './placesData';

const { Title } = Typography;

const SearchContainerStyle: CSSProperties = {
  maxWidth: BASE_LAYOUT_WIDTH,
  margin: '0 auto',
  paddingTop: 12,
  display: 'grid',
  gridTemplateColumns: 'minmax(100px, 295px) 1fr',
  gap: 30,
};

const ITEMS_PER_PAGE = 10;

const Search: FC = () => {
  const [search, setSearch] = useState<string>('');
  const [budget, setBudget] = useState<FilterType[]>([]);
  const [popular, setPopular] = useState<FilterType[]>([]);
  const [activities, setActivities] = useState<FilterType[]>([]);
  const [rating, setRating] = useState<number>(0);

  const [searchResults, setSearchResults] = useState(
    splitPlacesToBookIntoChunks(placesToBook, ITEMS_PER_PAGE)[0],
  );

  const onLoadMoreResults = () => {
    const currentChunkIndex = Math.ceil(searchResults.length / ITEMS_PER_PAGE);

    const nextChunk = splitPlacesToBookIntoChunks(placesToBook, ITEMS_PER_PAGE)[
      currentChunkIndex
    ];

    if (!nextChunk) return;

    setSearchResults([...searchResults, ...nextChunk]);
  };

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

      <Flex vertical gap='middle'>
        <Title level={2} style={{ margin: 0 }}>
          Search Results
        </Title>

        {searchResults.map((place) => (
          <SearchResultItem
            key={place.id}
            title={place.name}
            rating={place.rating}
            description={place.description}
            price={place.price}
            duration={2}
            location={place.location}
            image={place.image}
            onItemClicked={() => {}}
          />
        ))}

        <Button
          style={{ width: 'fit-content', margin: '0 auto' }}
          size='large'
          type='primary'
          onClick={onLoadMoreResults}
        >
          Load more results
        </Button>
      </Flex>
    </div>
  );
};

export default Search;
