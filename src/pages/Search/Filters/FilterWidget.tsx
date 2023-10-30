import { Typography } from 'antd';
import { CSSProperties, FC, ReactNode } from 'react';

const { Text } = Typography;

const FilterWidgetStyle: CSSProperties = {
  padding: '0 18px',
  border: '1px solid #e0e0e0',
  borderRadius: 6,
  overflow: 'hidden',
};

const TitleStyle: CSSProperties = {
  backgroundColor: '#f2f2f2',
  padding: '6px 18px',
  margin: '0 -18px',
  fontSize: 14,
  fontWeight: 500,
  display: 'block',
};

const ContentStyle: CSSProperties = {
  padding: '12px 0',
};

type FilterWidgetProps = {
  title: string;
  children: ReactNode;
};

const FilterWidget: FC<FilterWidgetProps> = ({ title, children }) => {
  return (
    <div style={FilterWidgetStyle}>
      <Text style={TitleStyle}>{title}</Text>

      <div style={ContentStyle}>{children}</div>
    </div>
  );
};

export default FilterWidget;
