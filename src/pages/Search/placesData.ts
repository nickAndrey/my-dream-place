interface Place {
  id: number;
  name: string;
  location: string;
  country: string;
  price: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  availableFrom: string;
  rating: number;
  type: 'hotel' | 'apartment' | 'hostel' | 'house';
  description: string;
}

const placesToBook: Place[] = [
  {
    id: 1,
    name: 'Cozy Cabin Retreat',
    location: 'Lake Tahoe',
    country: 'United States',
    price: 150,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1.5,
    image: 'cabin.jpg',
    availableFrom: '2023-11-15',
    rating: 4.5,
    type: 'hostel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 2,
    name: 'Luxury Villa',
    location: 'Bali',
    country: 'Indonesia',
    price: 300,
    guests: 8,
    bedrooms: 4,
    bathrooms: 4,
    image: 'villa.jpg',
    availableFrom: '2023-12-01',
    rating: 4.8,
    type: 'apartment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 3,
    name: 'Beachfront Bungalow',
    location: 'Maldives',
    country: 'Maldives',
    price: 500,
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    image: 'bungalow.jpg',
    availableFrom: '2023-11-20',
    rating: 4.9,
    type: 'apartment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 4,
    name: 'Mountain Chalet',
    location: 'Swiss Alps',
    country: 'Switzerland',
    price: 250,
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    image: 'chalet.jpg',
    availableFrom: '2023-11-25',
    rating: 4.7,
    type: 'apartment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 5,
    name: 'Seaside Cottage',
    location: 'Cornwall',
    country: 'United Kingdom',
    price: 180,
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    image: 'cottage.jpg',
    availableFrom: '2023-11-30',
    rating: 4.6,
    type: 'hotel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 6,
    name: 'Downtown Loft',
    location: 'New York City',
    country: 'United States',
    price: 200,
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    image: 'loft.jpg',
    availableFrom: '2023-11-15',
    rating: 4.4,
    type: 'hotel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 7,
    name: 'Rustic Farmhouse',
    location: 'Tuscany',
    country: 'Italy',
    price: 280,
    guests: 5,
    bedrooms: 2,
    bathrooms: 2,
    image: 'farmhouse.jpg',
    availableFrom: '2023-12-05',
    rating: 4.9,
    type: 'hotel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 8,
    name: 'City View Apartment',
    location: 'Tokyo',
    country: 'Japan',
    price: 220,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1.5,
    image: 'apartment.jpg',
    availableFrom: '2023-11-28',
    rating: 4.5,
    type: 'house',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 9,
    name: 'Desert Oasis',
    location: 'Dubai',
    country: 'United Arab Emirates',
    price: 400,
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    image: 'oasis.jpg',
    availableFrom: '2023-11-18',
    rating: 4.7,
    type: 'house',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 10,
    name: 'Ski Lodge',
    location: 'Aspen',
    country: 'United States',
    price: 300,
    guests: 6,
    bedrooms: 3,
    bathrooms: 2.5,
    image: 'ski-lodge.jpg',
    availableFrom: '2023-12-10',
    rating: 4.6,
    type: 'house',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 11,
    name: 'Modern Beach House',
    location: 'Miami',
    country: 'United States',
    price: 350,
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    image: 'beach-house.jpg',
    availableFrom: '2023-11-23',
    rating: 4.8,
    type: 'house',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 12,
    name: 'Historic Castle',
    location: 'Edinburgh',
    country: 'United Kingdom',
    price: 600,
    guests: 10,
    bedrooms: 5,
    bathrooms: 5,
    image: 'castle.jpg',
    availableFrom: '2023-12-15',
    rating: 4.9,
    type: 'hotel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 13,
    name: 'Lakeside Retreat',
    location: 'Banff',
    country: 'Canada',
    price: 190,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    image: 'lakeside.jpg',
    availableFrom: '2023-11-20',
    rating: 4.5,
    type: 'hotel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 14,
    name: 'Bohemian Studio',
    location: 'Prague',
    country: 'Czech Republic',
    price: 100,
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    image: 'bohemian.jpg',
    availableFrom: '2023-11-18',
    rating: 4.2,
    type: 'hotel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 15,
    name: 'Mansion in the Hills',
    location: 'Los Angeles',
    country: 'United States',
    price: 700,
    guests: 12,
    bedrooms: 6,
    bathrooms: 4,
    image: 'mansion.jpg',
    availableFrom: '2023-12-20',
    rating: 4.8,
    type: 'hotel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 16,
    name: 'Scenic Lake House',
    location: 'Amsterdam',
    country: 'Netherlands',
    price: 260,
    guests: 5,
    bedrooms: 3,
    bathrooms: 2,
    image: 'lake-house.jpg',
    availableFrom: '2023-11-22',
    rating: 4.6,
    type: 'hotel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 17,
    name: 'Jungle Treehouse',
    location: 'Costa Rica',
    country: 'Costa Rica',
    price: 180,
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    image: 'treehouse.jpg',
    availableFrom: '2023-11-19',
    rating: 4.4,
    type: 'hotel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 18,
    name: 'Mountain View Cabin',
    location: 'Colorado',
    country: 'United States',
    price: 220,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1.5,
    image: 'mountain-cabin.jpg',
    availableFrom: '2023-11-28',
    rating: 4.7,
    type: 'hotel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 19,
    name: 'Artistic Loft',
    location: 'Paris',
    country: 'France',
    price: 170,
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    image: 'artistic-loft.jpg',
    availableFrom: '2023-11-25',
    rating: 4.3,
    type: 'hostel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
  {
    id: 20,
    name: 'Beachfront Condo',
    location: 'Cancun',
    country: 'Mexico',
    price: 280,
    guests: 6,
    bedrooms: 2,
    bathrooms: 2,
    image: 'beachfront-condo.jpg',
    availableFrom: '2023-12-02',
    rating: 4.6,
    type: 'hostel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro accusantium eveniet veritatis! Error beatae ex incidunt accusamus eius amet quod.',
  },
];

const filtersFunctions = {
  rating: (rating: number) => {
    return placesToBook.filter((place) => place.rating >= rating);
  },
  price: (min: number, max: number) => {
    return placesToBook.filter(
      (place) => place.price >= min && place.price <= max,
    );
  },
  type: (type: string) => {
    return placesToBook.filter((place) => place.type === type);
  },
};

const getAmountOfPlacesByPriceRange = (min: number, max: number) => {
  return placesToBook.filter(
    (place) => place.price >= min && place.price <= max,
  ).length;
};

export default placesToBook;
export { filtersFunctions, getAmountOfPlacesByPriceRange };
