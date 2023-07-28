import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { apiRootUrl } from './utils'

const baseQuery = fetchBaseQuery({
    baseUrl: apiRootUrl,
    prepareHeaders: async(headers) => {
        headers.set('Accept', 'application/json')
        headers.set('Content-type', 'application/json')
        return headers
    },
  })

  
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({}),
  tagTypes: [
    'formItems',
    'songs',
    'song'
  ]
})