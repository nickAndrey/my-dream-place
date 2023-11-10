import { FC } from 'react';
import { ReactComponent as BusinessServicesIcon } from '../../../assets/icons/facilities/business-services.svg';
import { ReactComponent as ConditioningIcon } from '../../../assets/icons/facilities/conditioning.svg';
import { ReactComponent as ParkingIcon } from '../../../assets/icons/facilities/parking.svg';
import { ReactComponent as SwimmingPoolIcon } from '../../../assets/icons/facilities/swimming-pool.svg';
import { ReactComponent as TopRatedIcon } from '../../../assets/icons/facilities/top-rated.svg';
import { ReactComponent as WifiIcon } from '../../../assets/icons/facilities/wifi.svg';

type FacilityIconProps = {
  facility: string;
};

const FacilityIcon: FC<FacilityIconProps> = ({ facility }) => {
  switch (facility) {
    case 'business-services':
      return <BusinessServicesIcon />;
    case 'air-conditioning':
      return <ConditioningIcon />;
    case 'parking-available':
      return <ParkingIcon />;
    case 'swimming-pool':
      return <SwimmingPoolIcon />;
    case 'top-rated-in-area':
      return <TopRatedIcon />;
    case 'free-wifi':
      return <WifiIcon />;
    default:
      return null;
  }
};

export default FacilityIcon;
