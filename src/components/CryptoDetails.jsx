import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetDetailsQuery } from '../services/CryptoApi';
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { cryptoId } = useParams();
  const { data, isFetching } = useGetDetailsQuery(cryptoId);
  const coinData = data?.data?.coin;
  console.log(cryptoId);
  console.log(data);

  console.log('*** the above 24 & 25 are log for cryptoDetails and data');
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const abdo = {
    title: 'Price to USD',
    value: coinData.price,
  };

  const stats = [
    {
      title: 'Price to USD',
      value: coinData.price ? millify(coinData.price) : null,
      icon: <DollarCircleOutlined />,
    },
    { title: 'Rank', value: coinData.rank, icon: <NumberOutlined /> },
    {
      title: '24h Volume',
      value: `$ ${coinData.volume && millify(coinData.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: 'Market Cap',
      value: `$ ${coinData.marketCap && millify(coinData.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: 'All-time-high(daily avg.)',
      value: `$ ${millify(coinData.allTimeHigh.price)}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: 'Number Of Markets',
      value: coinData.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: 'Number Of Exchanges',
      value: coinData.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: 'Aprroved Supply',
      value: coinData.approvedSupply ? <CheckOutlined /> : <StopOutlined />,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Total Supply',
      value: `$ ${millify(coinData.totalSupply)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Circulating Supply',
      value: `$ ${millify(coinData.circulatingSupply)}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  if (isFetching) return 'Still loading...';

  return (
    <>
      <h1> lkahsdkghksldg lkhsaklhkgs klahsgklhsg lkhsg</h1>
      <Col>
        <Col>
          <Title>
            {coinData.name} {coinData.slug}
          </Title>
          <p>{coinData.name} live stats, market cap and supply.</p>
        </Col>
        <Select>
          {time.map((t, i) => (
            <Option key={i}>{t}</Option>
          ))}
        </Select>
      </Col>
    </>
  );
};

export default CryptoDetails;
