import { FieldValues } from "react-hook-form"
import { api } from "../api"
import { FetchSongDataType, FetchSongsDataType } from "./songs.type"

const baseRoute = '/songs'
export const songsApi = api.injectEndpoints({
    endpoints: build => ({
        submitSongItem: build.mutation({
            query: ({values}: {values: FieldValues}) => ({
                url: `${baseRoute}`,
                method: 'POST',
                body: values
            }),
            invalidatesTags: ['songs']
        }),
        fetchSongsData: build.query({
            query: () => ({
                url: `${baseRoute}`
            }),
            transformResponse: (response: { data: FetchSongsDataType[] }) => response.data,
            providesTags: ['songs']
        }),
        fetchSongData: build.query({
             query: (id: string) => ({
                url: `${baseRoute}/${id}`
            }),
            transformResponse: (response: { data: FetchSongDataType }) => response.data,
            providesTags: ['song']
        })
    })
})

export const {
    useSubmitSongItemMutation,
    useFetchSongsDataQuery,
    useFetchSongDataQuery
} = songsApi