import { Button, Flex, Menu } from 'antd';
import { Header as HeaderContainer } from 'antd/es/layout/layout';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/myDreamPlaceLogo.svg';
import { BASE_LAYOUT_WIDTH } from '../config/consts';
import Path from '../types/Path';

const items = [
  {
    key: Path.Home,
    label: <NavLink to={Path.Home}>Home</NavLink>,
  },
  {
    key: Path.Discover,
    label: <NavLink to={Path.Discover}>Discover</NavLink>,
  },
  {
    key: Path.Activities,
    label: <NavLink to={Path.Activities}>Activities</NavLink>,
  },
  {
    key: Path.About,
    label: <NavLink to={Path.About}>About</NavLink>,
  },
  {
    key: Path.Contact,
    label: <NavLink to={Path.Contact}>Contact</NavLink>,
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
        />

        <Flex align='center' gap='small'>
          <Button size='middle'>Register</Button>
          <Button size='middle' type='primary'>
            Sign In
          </Button>
        </Flex>
      </div>
    </HeaderContainer>
  );
};

export default Header;
