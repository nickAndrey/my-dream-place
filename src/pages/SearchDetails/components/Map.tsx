import { FC } from 'react';
import Listing from '../../../types/Listing';

type MapProps = {
  coordinates: Listing['coordinates'];
};

const Map: FC<MapProps> = ({ coordinates }) => {
  let url =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20829.806715883507!2d-123.07885455000002!3d49.26264215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1699595071707!5m2!1sen!2sca';

  let longitude = coordinates.longitude;
  let latitude = coordinates.latitude;

  let updatedUrl = url
    .replace(/2d-?\d+\.\d+/, `2d${longitude}`)
    .replace(/3d-?\d+\.\d+/, `3d${latitude}`);

  return (
    <iframe
      title='map'
      src={updatedUrl}
      width='100%'
      height='400px'
      style={{ border: 0 }}
      allowFullScreen
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    />
  );
};

export default Map;
