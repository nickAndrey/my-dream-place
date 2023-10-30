import { Checkbox, Flex, Input, Segmented, Space, Typography } from 'antd';
import { FC } from 'react';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';
import { ReactComponent as StarIcon } from '../../../assets/icons/star.svg';
import FilterWidget from './FilterWidget';
import { FilterType, FiltersDataType } from './filtersData';

const { Title, Text } = Typography;

type FiltersProps = {
  filters: FiltersDataType;
  budget: FilterType[];
  setBudget: (filters: FilterType[]) => void;
  popular: FilterType[];
  setPopular: (filters: FilterType[]) => void;
  activities: FilterType[];
  setActivities: (filters: FilterType[]) => void;
  rating: number;
  setRating: (rating: number) => void;
  search: string;
  setSearch: (value: string) => void;
};

const Filters: FC<FiltersProps> = ({
  filters,
  budget,
  setBudget,
  popular,
  setPopular,
  activities,
  setActivities,
  rating,
  setRating,
  search,
  setSearch,
}) => {
  const onFilterChange = (
    filter: FilterType,
    filterState: FilterType[],
    setFilterState: (filters: FilterType[]) => void,
  ) => {
    if (filterState.some((item) => item.id === filter.id)) {
      setFilterState(filterState.filter((item) => item.id !== filter.id));
    } else {
      setFilterState([...filterState, filter]);
    }
  };

  return (
    <Flex vertical>
      <FilterWidget title='Search by property name'>
        <Input
          suffix={<SearchIcon />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
  );
};

export default Filters;
