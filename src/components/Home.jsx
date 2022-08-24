import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Statistic, Typography } from 'antd';
import { useCryptosQuery } from '../services/CryptoApi';

const Home = () => {
  const { data, isFetching } = useCryptosQuery();
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
          <Statistic title="Market Cap" value={stats.totalMarketCap} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h volume" value={stats.total24hVolume} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={stats.totalMarkets} />
        </Col>
      </Row>
    </>
  );
};

export default Home;
