import { Flex, List, Typography } from 'antd';
import { Footer as FooterContainer } from 'antd/es/layout/layout';
import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { BASE_LAYOUT_WIDTH } from '../config/consts';

const { Text } = Typography;

const FooterContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  marginTop: 80,
  backgroundColor: '#fff',
};

const FooterContentStyle: React.CSSProperties = {
  maxWidth: BASE_LAYOUT_WIDTH,
  width: '100%',
  padding: '12px 0',
};

const links = {
  column1: {
    id: 'column1',
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Jobs', href: '/jobs' },
      { label: 'Newsroom', href: '/news' },
      { label: 'Advertising', href: '/ads' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  column2: {
    id: 'column2',
    title: 'Explore',
    items: [
      { label: 'Australia', href: '/australia' },
      { label: 'New Zealand', href: '/new-zealand' },
      { label: 'USA', href: '/usa' },
      { label: 'Greece', href: '/greece' },
      { label: 'Singapore', href: '/singapore' },
    ],
  },
  column3: {
    id: 'column3',
    title: 'Terms and Policies',
    items: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of use', href: '/terms' },
      { label: 'Accessibility', href: '/accessibility' },
      { label: 'Reward system policy', href: '/rewards' },
    ],
  },
  column4: {
    id: 'column4',
    title: 'Help',
    items: [
      { label: 'Support', href: '/support' },
      { label: 'Cancel your bookings', href: '/cancel' },
      { label: 'Use Coupon', href: '/coupon' },
      { label: 'Refund Policies', href: '/refund' },
      { label: 'International Travel Documents', href: '/documents' },
    ],
  },
};

type FooterProps = {
  topElement?: ReactNode;
};

const Footer: FC<FooterProps> = ({ topElement }) => {
  return (
    <FooterContainer style={FooterContainerStyle}>
      <Flex style={FooterContentStyle}>
        {topElement}

        <Flex justify='space-between' style={{ width: '100%' }}>
          {Object.values(links).map((column) => (
            <List
              key={column.title}
              size='small'
              header={<b>{column.title}</b>}
              dataSource={column.items}
              renderItem={(item) => (
                <li>
                  <NavLink to={item.href}>
                    <Text>{item.label}</Text>
                  </NavLink>
                </li>
              )}
            />
          ))}
        </Flex>
      </Flex>
    </FooterContainer>
  );
};

export default Footer;
