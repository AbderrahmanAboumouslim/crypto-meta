import { Layout } from 'antd';
import React from 'react';
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
                <Route path="/crypto/:cryptoId" element={<CryptoDetails />} />
              </Routes>
            </div>
          </Layout>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
}

export default App;
