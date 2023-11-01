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
    name: 'Luxury Hotel A',
    location: 'City Center',
    country: 'United States',
    price: 250,
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    image:
      'https://images.unsplash.com/photo-1685665018224-ff01441aead8?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    availableFrom: '2023-11-01',
    rating: 4.5,
    type: 'hotel',
    description: 'A luxurious hotel in the heart of the city.',
  },
  {
    id: 2,
    name: 'Cozy Apartment B',
    location: 'Suburbia',
    country: 'Canada',
    price: 120,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1.5,
    image:
      'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&q=80&w=1980&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    availableFrom: '2023-11-05',
    rating: 4.2,
    type: 'apartment',
    description: 'A comfortable apartment in a peaceful neighborhood.',
  },
  {
    id: 3,
    name: 'Friendly Hostel C',
    location: 'Downtown',
    country: 'Germany',
    price: 50,
    guests: 6,
    bedrooms: 4,
    bathrooms: 2,
    image:
      'https://images.unsplash.com/photo-1571415681693-b0fb64c48b6b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R2VybWFueSUyMGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D',
    availableFrom: '2023-11-10',
    rating: 3.9,
    type: 'hostel',
    description: 'A budget-friendly hostel for backpackers.',
  },
  {
    id: 4,
    name: 'Charming House D',
    location: 'Countryside',
    country: 'France',
    price: 180,
    guests: 8,
    bedrooms: 3,
    bathrooms: 2.5,
    image:
      'https://images.unsplash.com/photo-1610286986642-057ece0c3656?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RnJhbmNlJTIwYXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D',
    availableFrom: '2023-11-15',
    rating: 4.7,
    type: 'house',
    description: 'A picturesque cottage in a peaceful countryside.',
  },
  {
    id: 5,
    name: 'Elegant Hotel E',
    location: 'Beachfront',
    country: 'Spain',
    price: 300,
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    image:
      'https://images.unsplash.com/photo-1670236815012-ba57a69d0b41?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    availableFrom: '2023-11-20',
    rating: 4.8,
    type: 'hotel',
    description: 'An elegant beachfront hotel for a romantic getaway.',
  },
  {
    id: 6,
    name: 'Modern Apartment F',
    location: 'City Center',
    country: 'United Kingdom',
    price: 140,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1.5,
    image:
      'https://images.unsplash.com/photo-1597335590872-782da3d5f1c1?auto=format&fit=crop&q=80&w=2156&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    availableFrom: '2023-11-25',
    rating: 4.1,
    type: 'apartment',
    description: 'A modern apartment in the heart of the city.',
  },
  {
    id: 7,
    name: 'Budget Hostel G',
    location: 'Downtown',
    country: 'Italy',
    price: 40,
    guests: 6,
    bedrooms: 4,
    bathrooms: 2,
    image:
      'https://images.unsplash.com/photo-1590232108242-b13b1186a64a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SXRhbHklMjBhcGFydG1lbnRzfGVufDB8fDB8fHww',
    availableFrom: '2023-11-30',
    rating: 3.8,
    type: 'hostel',
    description: 'A budget-friendly hostel in the city center.',
  },
  {
    id: 8,
    name: 'Rustic House H',
    location: 'Countryside',
    country: 'Greece',
    price: 160,
    guests: 8,
    bedrooms: 3,
    bathrooms: 2.5,
    image:
      'https://images.unsplash.com/photo-1541929164234-0d8e7ec1e8c0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JlZWNlJTIwYXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D',
    availableFrom: '2023-12-01',
    rating: 4.6,
    type: 'house',
    description: 'A charming rustic house in a tranquil countryside setting.',
  },
  {
    id: 9,
    name: 'Seaside Hotel I',
    location: 'Beachfront',
    country: 'Portugal',
    price: 280,
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    image:
      'https://images.unsplash.com/photo-1541612048636-31b38fd23ec4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UG9ydHVnYWwlMjBhcGFydG1lbnRzfGVufDB8fDB8fHww',
    availableFrom: '2023-12-05',
    rating: 4.9,
    type: 'hotel',
    description: 'A luxurious hotel with stunning seaside views.',
  },
  {
    id: 10,
    name: 'Spacious Apartment J',
    location: 'Suburbia',
    country: 'Australia',
    price: 130,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1.5,
    image:
      'https://images.unsplash.com/photo-1580387128798-a5abad264ac4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXVzdHJhbGlhJTIwYXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D',
    availableFrom: '2023-12-10',
    rating: 4.3,
    type: 'apartment',
    description: 'A spacious apartment in a quiet suburban neighborhood.',
  },
  {
    id: 11,
    name: 'Friendly Hostel K',
    location: 'Downtown',
    country: 'Japan',
    price: 55,
    guests: 6,
    bedrooms: 4,
    bathrooms: 2,
    image:
      'https://images.unsplash.com/photo-1647165339104-e2467b543347?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEphcGFuJTIwYXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D',
    availableFrom: '2023-12-15',
    rating: 4.0,
    type: 'hostel',
    description: 'A welcoming hostel for travelers exploring the city.',
  },
  {
    id: 12,
    name: 'Cozy House L',
    location: 'Countryside',
    country: 'Brazil',
    price: 170,
    guests: 8,
    bedrooms: 3,
    bathrooms: 2.5,
    image:
      'https://images.unsplash.com/photo-1669236392098-133cf2fe76af?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnJhemlsJTIwYXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D',
    availableFrom: '2023-12-20',
    rating: 4.5,
    type: 'house',
    description: 'A cozy house in a peaceful countryside setting.',
  },
  {
    id: 13,
    name: 'Boutique Hotel M',
    location: 'City Center',
    country: 'Netherlands',
    price: 270,
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    image:
      'https://plus.unsplash.com/premium_photo-1680028256635-17e7f3ebbb23?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmV0aGVybGFuZHMlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
    availableFrom: '2023-12-25',
    rating: 4.7,
    type: 'hotel',
    description: 'A boutique hotel in the vibrant city center.',
  },
  {
    id: 14,
    name: 'Modern Apartment N',
    location: 'City Center',
    country: 'South Korea',
    price: 150,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1.5,
    image:
      'https://images.unsplash.com/photo-1652688117184-a76bf51a6fa3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U291dGglMjBLb3JlYSUyMGhvdXNlfGVufDB8fDB8fHww',
    availableFrom: '2023-12-30',
    rating: 4.2,
    type: 'apartment',
    description: 'A stylish and modern apartment in the heart of the city.',
  },
  {
    id: 15,
    name: 'Budget Hostel O',
    location: 'Downtown',
    country: 'China',
    price: 45,
    guests: 6,
    bedrooms: 4,
    bathrooms: 2,
    image:
      'https://images.unsplash.com/photo-1557921561-62af92f3fb8b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpbmElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
    availableFrom: '2024-01-01',
    rating: 3.9,
    type: 'hostel',
    description: 'An affordable hostel for budget-conscious travelers.',
  },
  {
    id: 16,
    name: 'Charming House P',
    location: 'Countryside',
    country: 'Russia',
    price: 190,
    guests: 8,
    bedrooms: 3,
    bathrooms: 2.5,
    image:
      'https://images.unsplash.com/photo-1559029873-e8a8af03aafe?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFJ1c3NpYSUyMGhvdXNlfGVufDB8fDB8fHww',
    availableFrom: '2024-01-05',
    rating: 3.3,
    type: 'house',
    description: 'A charming house in a serene countryside location.',
  },
  {
    id: 17,
    name: 'Seaside Hotel Q',
    location: 'Beachfront',
    country: 'Thailand',
    price: 290,
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    image:
      'https://images.unsplash.com/photo-1651376318405-f1055f37a511?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFRoYWlsYW5kJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D',
    availableFrom: '2024-01-10',
    rating: 4.8,
    type: 'hotel',
    description: 'A luxurious hotel with stunning beachfront views.',
  },
  {
    id: 18,
    name: 'Spacious Apartment R',
    location: 'Suburbia',
    country: 'New Zealand',
    price: 140,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1.5,
    image:
      'https://images.unsplash.com/photo-1516501312919-d0cb0b7b60b8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmV3JTIwWmVhbGFuZCUyMGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D',
    availableFrom: '2024-01-15',
    rating: 4.4,
    type: 'apartment',
    description: 'A spacious apartment in a peaceful suburban neighborhood.',
  },
  {
    id: 19,
    name: 'Friendly Hostel S',
    location: 'Downtown',
    country: 'Mexico',
    price: 60,
    guests: 6,
    bedrooms: 4,
    bathrooms: 2,
    image:
      'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWV4aWNvJTIwaG9zdGVsfGVufDB8fDB8fHww',
    availableFrom: '2024-01-20',
    rating: 4.1,
    type: 'hostel',
    description: 'A friendly hostel for budget travelers exploring the city.',
  },
  {
    id: 20,
    name: 'Cozy House T',
    location: 'Countryside',
    country: 'Argentina',
    price: 175,
    guests: 8,
    bedrooms: 3,
    bathrooms: 2.5,
    image:
      'https://images.unsplash.com/photo-1599420187202-a83ab1652350?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXJnZW50aW5hJTIwaG91c2V8ZW58MHx8MHx8fDA%3D',
    availableFrom: '2024-01-25',
    rating: 2.5,
    type: 'house',
    description: 'A cozy house in a tranquil countryside setting.',
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
