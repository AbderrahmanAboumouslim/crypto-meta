import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const apiHeaders = {
  'X-RapidAPI-Key': process.env.REACT_APP_CRYPTO_API_KEY,
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};

const URL = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = url => ({ url, headers: apiHeaders });

export const createApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ URL }),
  endpoints: builder => {
    getCryptoQuery: builder.query({
      query: () => createRequest('/exchanges'),
    });
  },
});
