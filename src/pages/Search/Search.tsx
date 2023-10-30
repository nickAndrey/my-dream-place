import { Checkbox, Flex, Input, Segmented, Space, Typography } from 'antd';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';
import { BASE_LAYOUT_WIDTH } from '../../config/consts';
import FilterWidget from './FilterWidget';
import filters, { Filter, convertToSearchQuery } from './filters';

const { Text, Title } = Typography;

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
  const [budget, setBudget] = useState<Filter[]>([]);
  const [popular, setPopular] = useState<Filter[]>([]);
  const [activities, setActivities] = useState<Filter[]>([]);
  const [rating, setRating] = useState<number>(0);

  const onFilterChange = (
    filter: Filter,
    filterState: Filter[],
    setFilterState: (filters: Filter[]) => void,
  ) => {
    if (filterState.some((item) => item.id === filter.id)) {
      setFilterState(filterState.filter((item) => item.id !== filter.id));
    } else {
      setFilterState([...filterState, filter]);
    }
  };

  const onSearchChange = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    console.log(
      convertToSearchQuery({ search, budget, popular, activities, rating }),
    );
  }, [search, budget, popular, activities, rating]);

  return (
    <div style={SearchContainerStyle}>
      <Flex vertical>
        <FilterWidget title='Search by property name'>
          <Input
            suffix={<SearchIcon />}
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </FilterWidget>

        <Space size='middle' direction='vertical'>
          <Title level={4}>Filter by</Title>

          <FilterWidget title='Your budget per day'>
            <Flex vertical gap='small'>
              {filters.budget.map((filter) => (
                <Checkbox
                  key={filter.id}
                  onChange={() => onFilterChange(filter, budget, setBudget)}
                >
                  {filter.label}
                </Checkbox>
              ))}
            </Flex>
          </FilterWidget>

          <FilterWidget title='Rating'>
            <Flex gap={10} vertical>
              <Text>Show only ratings more than</Text>
              <Segmented
                options={filters.rating.map((filter) => ({
                  value: filter.value as number,
                  label: (
                    <Flex gap={4} align='center'>
                      <b>{filter.value}</b>
                      <StarIcon />
                    </Flex>
                  ),
                }))}
                size='large'
                value={rating}
                onChange={(value) => setRating(value as number)}
              />
            </Flex>
          </FilterWidget>

          {filters.popular.length > 0 && (
            <FilterWidget title='Popular Filters'>
              <Flex vertical gap='small'>
                {filters.popular.map((filter) => (
                  <Checkbox
                    key={filter.id}
                    onChange={() => onFilterChange(filter, popular, setPopular)}
                  >
                    {filter.label}
                  </Checkbox>
                ))}
              </Flex>
            </FilterWidget>
          )}

          {filters.activities.length > 0 && (
            <FilterWidget title='Activities'>
              <Flex vertical gap='small'>
                {filters.activities.map((filter) => (
                  <Checkbox
                    key={filter.id}
                    onChange={() =>
                      onFilterChange(filter, activities, setActivities)
                    }
                  >
                    {filter.label}
                  </Checkbox>
                ))}
              </Flex>
            </FilterWidget>
          )}
        </Space>
      </Flex>
      <Flex vertical>column 2</Flex>
    </div>
  );
};

export default Search;
