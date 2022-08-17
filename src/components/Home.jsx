import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Statistic, Typography } from 'antd';
import { useGetCryptosQuery } from '../services/CryptoApi';

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery();
  console.log(data);
  return (
    <>
      <Typography.Title level={2} className="heading">
        Universe of Cryptocurrencies
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Exchanges" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Market Cap" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h volume" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={5} />
        </Col>
      </Row>
    </>
  );
};

export default Home;
