import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const cryptoApiHead={
  'X-RapidAPI-Key': 'b72edae838mshd3b6e3eeb8a098ap1a1dcbjsn7acab4896c12',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}
const baseUrl ='https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHead})
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder)=>({
    getCryptos: builder.query({
      query: (count)=> createRequest(`/coins?limit=${count}`),
    })
  })
});

export const {
  useGetCryptosQuery,
} = cryptoApi;


