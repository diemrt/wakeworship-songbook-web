import { FieldValues } from "react-hook-form"
import { api } from "../api"

const baseRoute = '/songs'
export const songsApi = api.injectEndpoints({
    endpoints: build => ({
        submitSongItem: build.mutation({
            query: ({values}: {values: FieldValues}) => ({
                url: `${baseRoute}`,
                method: 'POST',
                body: values
            })
        })
    })
})

export const {
    useSubmitSongItemMutation
} = songsApi