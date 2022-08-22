import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': process.env.REACT_APP_CRYPTO_API_KEY,
};

const baseURL = 'https://coinranking1.p.rapidapi.com';

const createRequest = url => ({ url, headers: apiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: builder => ({
    cryptos: builder.query({
      query: () => createRequest('/coins'),
    }),
  }),
});
// getCryptos =====> useGetCryptosQuery
export const { useCryptosQuery } = cryptoApi;
