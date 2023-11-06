type Listing = {
  id: string;
  title: string;
  description: string;
  address: {
    city: string;
    state: string;
    country: string;
    street: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  price: number;
  currency: string;
  amenities: string[];
  facilities: string[];
  images: string[];
  host: {
    id: string;
    name: string;
    profile_picture: string;
    superhost: boolean;
  };
  rating: number;
  date_listed: string;
  availability: boolean;
  reviews: {
    review: {
      id: string;
      reviewer: {
        id: string;
        name: string;
        profile_picture: string;
      };
      date: string;
      content: string;
    }[];
  };
};

export default Listing;
