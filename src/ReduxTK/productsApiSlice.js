import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    tagTypes: ['products'],

    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'products',    // https://fakestoreapi.com/products
            providesTags: ['products'],
        })
    })
})

export const { useGetAllProductsQuery } = productsApiSlice;