import { Button, DatePicker, DatePickerProps, Input } from 'antd';
import dayjs from 'dayjs';
import { CSSProperties, ChangeEvent, FC } from 'react';
import { ReactComponent as CalendarIcon } from '../assets/icons/calendar.svg';
import { ReactComponent as GuestsIcon } from '../assets/icons/guests.svg';
import { ReactComponent as MapPinIcon } from '../assets/icons/mapPin.svg';

const SearchFilterGroupStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr) auto',
  gap: 12,
  padding: '10px 12px',
  backgroundColor: '#fff',
  borderRadius: 8,
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
};

const dateFormat = 'YYYY/MM/DD';

type SearchFilterGroupProps = {
  destination: {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  checkin: {
    value: string;
    onChange: DatePickerProps['onChange'];
  };
  checkout: {
    value: string;
    onChange: DatePickerProps['onChange'];
  };
  guests: {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  buttonProps: {
    onClick: () => void;
    disabled: boolean;
  };
};

const SearchFilterGroup: FC<SearchFilterGroupProps> = ({
  destination,
  checkin,
  checkout,
  guests,
  buttonProps,
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
        onChange={checkin.onChange}
        suffixIcon={<CalendarIcon />}
        value={checkin.value ? dayjs(checkin.value, dateFormat) : undefined}
        format={dateFormat}
      />
      <DatePicker
        placeholder='Check out date'
        onChange={checkout.onChange}
        suffixIcon={<CalendarIcon />}
        value={checkout.value ? dayjs(checkout.value, dateFormat) : undefined}
        format={dateFormat}
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

      <Button
        type='primary'
        onClick={buttonProps.onClick}
        disabled={buttonProps.disabled}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchFilterGroup;
