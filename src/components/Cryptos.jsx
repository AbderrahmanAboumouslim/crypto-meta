import React, { useState, useEffect } from 'react';
import { Col, Row, Card, Input } from 'antd';
import { useCryptosQuery } from '../services/CryptoApi';
import { Link } from 'react-router-dom';
import millify from 'millify';

const Cryptos = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: CryptoList, isFetching } = useCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setCryptos(CryptoList?.data?.coins);
    const filteredCoin = CryptoList?.data?.coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setCryptos(filteredCoin);
  }, [CryptoList, search]);

  console.log(cryptos);

  if (isFetching) return console.log('Loading...');

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            onChange={e => setSearch(e.target.value)}
            placeholder="Find Cryptocurrencies"
          />
        </div>
      )}

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
                <p>Daily Change: {millify(coin.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptos;
