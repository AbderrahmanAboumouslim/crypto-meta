import React from 'react';
import { useNewsQuery } from '../services/NewsApi';

const News = ({ simplified }) => {
  const { data: news } = useNewsQuery({
    newsCategory: 'Cryptocurrency',
    count: simplified ? 10 : 100,
  });
  console.log(news);

  return <div>News</div>;
};

export default News;
