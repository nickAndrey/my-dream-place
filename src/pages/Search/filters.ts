type Filter = {
  id: number;
  value: string | number | number[];
  label: string;
};

type Filters = {
  budget: Filter[];
  rating: Filter[];
  popular: Filter[];
  activities: Filter[];
};

const filters: Filters = {
  budget: [
    { id: 0, value: [0, 200], label: '$0 - $200' },
    { id: 1, value: [200, 500], label: '$200 - $500' },
    { id: 2, value: [500, 1000], label: '$500 - $1000' },
    { id: 3, value: [1000, 2000], label: '$1000 - $2000' },
    { id: 4, value: [2000, 5000], label: '$2000 - $5000' },
  ],
  rating: [
    { id: 0, value: 1, label: '0' },
    { id: 1, value: 2, label: '2' },
    { id: 2, value: 3, label: '3' },
    { id: 3, value: 4, label: '4' },
    { id: 4, value: 5, label: '5' },
  ],
  popular: [
    { id: 0, value: 'free-cancelation', label: 'Free cancellation' },
    { id: 1, value: 'spa', label: 'Spa' },
    { id: 2, value: 'beach-front', label: 'Beach front' },
    { id: 3, value: 'hot-tub', label: 'Hot tub / jacuzzi' },
    {
      id: 4,
      value: 'book-without-credit-card',
      label: 'Book without credit card',
    },
    { id: 5, value: 'no-prepayment', label: 'No prepayment' },
  ],
  activities: [
    { id: 0, value: 'fishing', label: 'Fishing' },
    { id: 1, value: 'hiking', label: 'Hiking' },
    { id: 2, value: 'beach', label: 'Beach' },
    { id: 3, value: 'cycling', label: 'Cycling' },
    { id: 4, value: 'sauna', label: 'Sauna' },
    { id: 5, value: 'night-lights', label: 'Night lights' },
  ],
};

const createQuery = (filters: Filter[], name: string) => {
  return filters
    .map(
      (filter) =>
        `${name}[${filter.id}]=${
          Array.isArray(filter.value) ? filter.value.join('-') : filter.value
        }`,
    )
    .join('&');
};

const convertToSearchQuery = (filters: {
  search: string;
  rating: number;
  budget: Filter[];
  popular: Filter[];
  activities: Filter[];
}): string => {
  const { search, budget, popular, activities, rating } = filters;

  const budgetQuery = createQuery(budget, 'budget');
  const popularQuery = createQuery(popular, 'popular');
  const activitiesQuery = createQuery(activities, 'activities');
  const ratingQuery = `rating=${rating}`;

  const query = [budgetQuery, popularQuery, activitiesQuery, ratingQuery]
    .filter((q) => q !== '')
    .join('&');

  return `search=${search}${query !== '' ? `&${query}` : ''}`;
};

export default filters;
export { convertToSearchQuery };
export type { Filter };
