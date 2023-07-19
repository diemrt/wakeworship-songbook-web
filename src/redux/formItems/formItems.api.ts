import { api } from "../api";
import { FetchFormItemsDataType } from "./formItems.type";

const baseRoute = '/form-items'
export const formItemsApi = api.injectEndpoints({
    endpoints: build => ({
        fetchFormItemsData: build.query({
            query: () => ({
                url: `${baseRoute}`
            }),
            transformResponse: (response: { data: FetchFormItemsDataType }) => response.data,
            providesTags: ['formItems']
        })
    })
})

export const {
     useFetchFormItemsDataQuery
} = formItemsApi