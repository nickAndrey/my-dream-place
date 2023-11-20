import { Menu } from 'antd';
import { Header as HeaderContainer } from 'antd/es/layout/layout';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/myDreamPlaceLogo.svg';
import { BASE_LAYOUT_WIDTH } from '../../config/consts';
import Path from '../../types/Path';
import UserDropdown from './UserDropdown';

const items = [
  {
    key: Path.Home,
    label: <NavLink to={Path.Home}>Home</NavLink>,
  },
  {
    key: Path.Search,
    label: <NavLink to={Path.Search}>Discover</NavLink>,
  },
];

const HeaderStyle: CSSProperties = {
  backgroundColor: '#fff',
  padding: 0,
};

const LogoLinkStyle: CSSProperties = {
  display: 'flex',
};

const ContainerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: BASE_LAYOUT_WIDTH,
  width: '100%',
  margin: '0 auto',
};

const Header: FC = () => {
  const location = useLocation();

  const [activeKey, setActiveKey] = useState(location.pathname);

  useEffect(() => {
    setActiveKey(location.pathname);
  }, [location]);

  return (
    <HeaderContainer style={HeaderStyle}>
      <div style={ContainerStyle}>
        <NavLink to={Path.Home} style={LogoLinkStyle}>
          <Logo />
        </NavLink>

        <Menu
          theme='light'
          mode='horizontal'
          items={items}
          selectedKeys={[activeKey]}
          disabledOverflow
        />

        <UserDropdown />
      </div>
    </HeaderContainer>
  );
};

export default Header;
