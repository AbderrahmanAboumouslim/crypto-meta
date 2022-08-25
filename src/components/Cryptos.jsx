import React, { useState } from 'react';
import { Col, Row, Card, Input } from 'antd';
import { useCryptosQuery } from '../services/CryptoApi';
import { Link } from 'react-router-dom';
import millify from 'millify';

const Cryptos = () => {
  const { data: CryptoList, isFetching } = useCryptosQuery();
  const [cryptos, setCryptos] = useState(CryptoList?.data?.coins);
  console.log(cryptos);
  return (
    <>
      <Row gutter={[33, 33]} className="crypto-card-container">
        {cryptos.map(coin => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.uuid}>
            <Link to={`crypto/${coin.uuid}`}>
              <Card
                title={`${coin.rank}. ${coin.name}`}
                extra={<img className="crypto-image" src={coin.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(coin.price)}</p>
                <p>Market Cap: {millify(coin.marketCap)}</p>
                <p>Daily Change: {millify(coin.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptos;
