import React, { useState } from 'react';
import { Col, Row, Typography, Card, Avatar, Select } from 'antd';
import moment from 'moment';
import { useNewsQuery } from '../services/NewsApi';
import { useCryptosQuery } from '../services/CryptoApi';

const { Option } = Select;

const standardImage =
  'https://media.istockphoto.com/photos/bitcoin-cryptocurrency-trends-graphs-and-charts-picture-id1294303237?k=20&m=1294303237&s=612x612&w=0&h=0-igz1A4-GdGa-ApF4Mvyxc4-NLjcZ6DFNWW4ptVFYA=';
const News = ({ simplified }) => {
  const { data } = useCryptosQuery(100);

  const [newsCategory, setNewsCategory] = useState('');

  const { data: cryptoNews } = useNewsQuery({
    newsCategory,
    count: simplified ? 6 : 20,
  });
  console.log(cryptoNews);

  if (!cryptoNews?.value) return console.log('Loading the news ...');

  return (
    <Row gutter={[25, 25]}>
      <Col span={24}>
        <Select
          className="select-news"
          showSearch
          placeholder="News by Cryptos"
          optionFilterProp="children"
          onChange={x => setNewsCategory(x)}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="Cryptocurrency">Cryptocurrency</Option>
          {data?.data.coins.map(coin => (
            <Option value={coin.name}>{coin.name}</Option>
          ))}
        </Select>
      </Col>
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <img
                style={{
                  maxWidth: '200px',
                  maxHeight: '100px',
                  borderRadius: '1rem',
                  marginBottom: '1rem',
                }}
                src={news?.image?.thumbnail?.contentUrl || standardImage}
                alt="news"
              />
              <div className="news-image-container">
                <Typography.Title className="news-title" level={4}>
                  {news.name}
                </Typography.Title>
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news?.provider[0]?.image?.thumbnail?.contentUrl ||
                      standardImage
                    }
                    alt="news"
                  />
                  <Typography.Text className="provider-name">
                    {news?.provider[0]?.name}
                  </Typography.Text>
                </div>
                <Typography.Text>
                  {moment(news.datePublished).startOf('ss').fromNow()}
                </Typography.Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
