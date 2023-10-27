import hotel1 from '../../assets/images/hotel1.jpg';
import hotel2 from '../../assets/images/hotel2.jpg';
import hotel3 from '../../assets/images/hotel3.jpg';
import hotel4 from '../../assets/images/hotel4.jpg';
import trip1 from '../../assets/images/trip1.jpg';
import trip2 from '../../assets/images/trip2.jpg';
import trip3 from '../../assets/images/trip3.jpg';
import vacation1 from '../../assets/images/vacation1.jpg';
import vacation2 from '../../assets/images/vacation2.jpg';
import vacation3 from '../../assets/images/vacation3.jpg';
import vacation4 from '../../assets/images/vacation4.jpg';

const vacations: {
  id: number;
  title: string;
  propertiesAmount: number;
  image: string;
}[] = [
  {
    id: 1,
    title: 'Australia',
    propertiesAmount: 100,
    image: vacation1,
  },
  {
    id: 2,
    title: 'Japan',
    propertiesAmount: 100,
    image: vacation2,
  },
  {
    id: 3,
    title: 'New Zealand',
    propertiesAmount: 100,
    image: vacation3,
  },
  {
    id: 4,
    title: 'Greece',
    propertiesAmount: 100,
    image: vacation4,
  },
];

const trips: {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}[] = [
  {
    id: 1,
    title: 'Sydeny’s 10 most fashionable 5 star hotels',
    subtitle:
      'Browse the fastest growing tourism sector in the heart of Australia tourism capital ....',
    image: trip1,
  },
  {
    id: 2,
    title: 'Top cities for Vegan Travellers',
    subtitle:
      'Top sites where you do not have to worry about being a vegan. Our tourist guide is here...',
    image: trip2,
  },
  {
    id: 3,
    title: 'World’s top destinations during and post covid timeline',
    subtitle:
      'Pandemic is still intact and will be here for a longer time. Here’s where your next destination...',
    image: trip3,
  },
];

const hotels: {
  id: number;
  title: string;
  propertiesAmount: number;
  image: string;
}[] = [
  {
    id: 1,
    title: 'Lakeside Motel Warefront',
    propertiesAmount: 100,
    image: hotel1,
  },
  {
    id: 2,
    title: 'Recce Graham resort',
    propertiesAmount: 100,
    image: hotel2,
  },
  {
    id: 3,
    title: 'Fireside Dinners',
    propertiesAmount: 100,
    image: hotel3,
  },
  {
    id: 4,
    title: 'Oculous Inn Stay',
    propertiesAmount: 100,
    image: hotel4,
  },
];

export { hotels, trips, vacations };
