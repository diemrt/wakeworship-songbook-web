import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { apiRootUrl } from './utils'
import { getCurrentUser } from '../../firebase'

const baseQuery = fetchBaseQuery({
  baseUrl: apiRootUrl,
  prepareHeaders: async(headers) => {
    const firebaseUser = await getCurrentUser()
    const token = await firebaseUser.getIdToken()
    if(token) {
      headers.set('Authorization', `Bearer ${token}`)
      headers.set('Accept', 'application/json')
      headers.set('Content-type', 'application/json')
      return headers
    }
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