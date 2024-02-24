import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const apikey = "59fa4bdb4e864ffaa1ef47bc444d3504"
const baseUrl = "https://newsapi.org/v2"
const NewsHeaders = {

  "X-Api-Key": apikey
  
  }
const createRequest = (url) => ({url, headers: NewsHeaders})

export const NewsApi = createApi({
    reducerPath: 'NewsApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder)=>({
      getNews: builder.query({
        query: ({newsCat})=>  createRequest(`/everything?q=${newsCat}&apiKey=${apikey}`)
      })
    })
  });

  export const { useGetNewsQuery } =  NewsApi;