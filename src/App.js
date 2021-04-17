import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Appheader from './components/common/Appheader';
import { Layout } from 'antd';
const { Header } = Layout;



function App() {
  return (
    <Layout className="mainLayout">
    <Header>
      <Appheader />
    </Header>
  </Layout>
  );
}

export default App;
