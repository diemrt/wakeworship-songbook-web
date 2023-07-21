import { FieldValues } from "react-hook-form"
import { api } from "../api"
import { FetchSongsDataType } from "./songs.type"

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
        })
    })
})

export const {
    useSubmitSongItemMutation,
    useFetchSongsDataQuery
} = songsApi