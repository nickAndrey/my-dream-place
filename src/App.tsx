import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { CSSProperties } from 'react';
import { Outlet } from 'react-router-dom';

const LayoutStyle: CSSProperties = {
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  height: '100%',
};

const HeaderStyle: CSSProperties = {
  backgroundColor: '#fff',
  padding: 0,
};
const FooterStyle: CSSProperties = {
  backgroundColor: '#fff',
  padding: 0,
};

const ContentStyle: CSSProperties = {
  padding: 0,
  margin: 0,
};

function App() {
  return (
    <Layout style={LayoutStyle}>
      <Header style={HeaderStyle}>Header</Header>
      <Content style={ContentStyle}>
        <Outlet />
      </Content>
      <Footer style={FooterStyle}>Footer</Footer>
    </Layout>
  );
}

export default App;
