import { Col, Row, Typography, Card, Avatar } from 'antd';
import moment from 'moment';
import React from 'react';
import { useNewsQuery } from '../services/NewsApi';

const standardImage =
  'https://media.istockphoto.com/photos/bitcoin-cryptocurrency-trends-graphs-and-charts-picture-id1294303237?k=20&m=1294303237&s=612x612&w=0&h=0-igz1A4-GdGa-ApF4Mvyxc4-NLjcZ6DFNWW4ptVFYA=';
const News = ({ simplified }) => {
  const { data: cryptoNews } = useNewsQuery({
    newsCategory: 'Cryptocurrency',
    count: simplified ? 6 : 20,
  });
  console.log(cryptoNews);

  if (!cryptoNews?.value) return console.log('Loading the news ...');

  return (
    <Row gutter={[25, 25]}>
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <img
                style={{
                  width: '100%',
                  height: '100%',
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
