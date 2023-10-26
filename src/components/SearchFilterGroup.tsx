import { Button, DatePicker, DatePickerProps, Input } from 'antd';
import { CSSProperties, ChangeEvent, FC } from 'react';
import { ReactComponent as CalendarIcon } from '../assets/images/calendar.svg';
import { ReactComponent as GuestsIcon } from '../assets/images/guests.svg';
import { ReactComponent as MapPinIcon } from '../assets/images/mapPin.svg';

const SearchFilterGroupStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr) auto',
  gap: 12,
  padding: '10px 12px',
  backgroundColor: '#fff',
  borderRadius: 8,
};

const InputStyle: CSSProperties = {
  // backgroundColor: '#f2f2f2',
};

type SearchFilterGroupProps = {
  destination: {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  checkin: {
    onChange: DatePickerProps['onChange'];
  };
  checkout: {
    onChange: DatePickerProps['onChange'];
  };
  guests: {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  onClick?: () => void;
};

const SearchFilterGroup: FC<SearchFilterGroupProps> = ({
  destination,
  checkin,
  checkout,
  guests,
  onClick,
}) => {
  return (
    <div style={SearchFilterGroupStyle}>
      <Input
        placeholder='Where are you going?'
        value={destination.value}
        onChange={destination.onChange}
        suffix={<MapPinIcon />}
      />
      <DatePicker
        placeholder='Check in date'
        style={InputStyle}
        onChange={checkin.onChange}
        suffixIcon={<CalendarIcon />}
      />
      <DatePicker
        placeholder='Check out date'
        style={InputStyle}
        onChange={checkout.onChange}
        suffixIcon={<CalendarIcon />}
      />
      <Input
        placeholder='Guests'
        value={guests.value}
        onChange={(e) => {
          if (e.target.value === '' || /^\d+$/.test(e.target.value)) {
            guests.onChange(e);
          }
        }}
        suffix={<GuestsIcon />}
        pattern='[0-9]*'
      />

      <Button type='primary' onClick={onClick}>
        Search
      </Button>
    </div>
  );
};

export default SearchFilterGroup;
