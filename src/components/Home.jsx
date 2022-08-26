import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Statistic, Typography } from 'antd';
import { useCryptosQuery } from '../services/CryptoApi';
import millify from 'millify';
import Cryptos from './Cryptos';
import News from './News';

const Home = () => {
  const { data, isFetching } = useCryptosQuery(10);
  const stats = data?.data?.stats;

  if (isFetching) return console.log('Still loading...');

  return (
    <>
      <Typography.Title level={2} className="heading">
        Universe of Cryptocurrencies
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={stats.totalCoins} />
        </Col>
        <Col span={12}>
          <Statistic title="Exchanges" value={stats.totalExchanges} />
        </Col>
        <Col span={12}>
          <Statistic title="Market Cap" value={millify(stats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h volume"
            value={millify(stats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={stats.totalMarkets} />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Top 10 Cryptocurrencies
        </Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/cryptos">Read more</Link>
        </Typography.Title>
      </div>
      <Cryptos simplified />
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Hot Crypto News
        </Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/news">Read more</Link>
        </Typography.Title>
      </div>
      <News simplified />
    </>
  );
};

export default Home;
