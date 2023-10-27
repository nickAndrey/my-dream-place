import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { CSSProperties } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const LayoutStyle: CSSProperties = {
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  minHeight: '100%',
  backgroundColor: '#fff',
};

const ContentStyle: CSSProperties = {
  padding: 0,
  margin: 0,
};

function App() {
  return (
    <Layout style={LayoutStyle}>
      <Header />
      <Content style={ContentStyle}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
