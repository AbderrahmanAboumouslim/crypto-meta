import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiNewsHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': process.env.REACT_APP_NEWS_API_KEY,
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = url => ({ url, headers: apiNewsHeaders });

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: builder => ({
    news: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});
export const { useNewsQuery } = newsApi;
