import React from 'react';
import { Layout, Space, Typography } from 'antd';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import {
  Navbar,
  Home,
  Exchanges,
  News,
  CryptoDetails,
  Cryptos,
} from './components';

function App() {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/news" element={<News />} />
                <Route path="/cryptos" element={<Cryptos />} />
                <Route path="/coin/:cryptoId" element={<CryptoDetails />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: 'white', textAlign: 'center' }}
            >
              CryptoMeta. All rights reserved 2022
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
