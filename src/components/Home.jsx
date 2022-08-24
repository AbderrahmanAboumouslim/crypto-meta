import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Statistic, Typography } from 'antd';
import { useCryptosQuery } from '../services/CryptoApi';

const Home = () => {
  const { data, isFetching } = useCryptosQuery();
  const {
    totalCoins,
    totalExchanges,
    totalMarketCap,
    totalMarkets,
    total24hVolume,
  } = data.data.stats;

  return (
    <>
      <Typography.Title level={2} className="heading">
        Universe of Cryptocurrencies
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={totalCoins} />
        </Col>
        <Col span={12}>
          <Statistic title="Exchanges" value={totalExchanges} />
        </Col>
        <Col span={12}>
          <Statistic title="Market Cap" value={totalMarketCap} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h volume" value={total24hVolume} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={totalMarkets} />
        </Col>
      </Row>
    </>
  );
};

export default Home;
