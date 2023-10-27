import { Layout } from 'antd';
import { Content, Footer as FooterContainer } from 'antd/es/layout/layout';
import { CSSProperties } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const LayoutStyle: CSSProperties = {
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  minHeight: '100%',
};

const FooterStyle: CSSProperties = {
  backgroundColor: '#fff',
  padding: 0,
};

const ContentStyle: CSSProperties = {
  padding: 0,
  margin: 0,
  backgroundColor: '#fff',
};

function App() {
  return (
    <Layout style={LayoutStyle}>
      <Header />
      <Content style={ContentStyle}>
        <Outlet />
      </Content>
      <FooterContainer style={FooterStyle}>Footer</FooterContainer>
    </Layout>
  );
}

export default App;
