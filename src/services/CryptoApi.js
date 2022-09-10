import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiHeaders = {
  'X-RapidAPI-Key': process.env.REACT_APP_CRYPTO_API_KEY,
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = url => ({ url, headers: apiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    cryptos: builder.query({
      query: count => createRequest(`/coins?limit=${count}`),
    }),
    getDetails: builder.query({
      query: cryptoId => createRequest(`/coin/${cryptoId}`),
    }),
  }),
});

// getCryptos =====> useGetCryptosQuery
export const { useCryptosQuery, useGetDetailsQuery } = cryptoApi;
