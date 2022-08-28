import { Col, Row, Typography, Card } from 'antd';
import React from 'react';
import { useNewsQuery } from '../services/NewsApi';

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
            <a href={news.url} placeholder="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Typography.Title className="news-title" level={4}>
                  {news.name}
                </Typography.Title>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
