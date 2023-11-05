import { Dropdown } from 'antd';
import { FC } from 'react';

import { ReactComponent as AccountIcon } from '../../assets/icons/account.svg';
import { ReactComponent as SignOutIcon } from '../../assets/icons/sign-out.svg';
import { ReactComponent as TripIcon } from '../../assets/icons/trips.svg';
import { ReactComponent as WalletIcon } from '../../assets/icons/wallet.svg';

import { useNavigate } from 'react-router-dom';
import userAvatar from '../../assets/images/user-avatar.png';
import { useAuth } from '../../contexts/auth';
import Path from '../../types/Path';

const UserDropdown: FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const items = [
    {
      key: 'manage-account',
      label: 'Manage Account',
      icon: <AccountIcon />,
      onClick: () => {
        console.log('manage account');
      },
    },
    {
      key: 'my-trips',
      label: 'My Trips',
      icon: <TripIcon />,
      onClick: () => navigate(Path.Trips),
    },
    {
      key: 'reward-and-wallet',
      label: 'Reward & Wallet',
      icon: <WalletIcon />,
      onClick: () => {
        console.log('reward and wallet');
      },
    },
    {
      key: 'sign-out',
      label: 'Sign Out',
      icon: <SignOutIcon />,
      onClick: () => {
        logout();
        navigate(Path.SignIn);
      },
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
        <img
          src={userAvatar}
          alt={userAvatar}
          style={{ width: '100%', objectFit: 'cover' }}
        />
      </button>
    </Dropdown>
  );
};

export default UserDropdown;
