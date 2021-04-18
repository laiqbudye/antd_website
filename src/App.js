import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Appheader from './components/common/Appheader';
import Apphome from './views/Apphome';
import { Layout } from 'antd';
const { Header, Content } = Layout;



function App() {
  return (
    <Layout className="mainLayout">
    <Header>
      <Appheader />
    </Header>

    <Content>
      <Apphome />
    </Content>
  </Layout>
  );
}

export default App;
