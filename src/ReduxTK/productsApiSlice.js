import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    tagTypes: ['products'],

    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'products',    // https://fakestoreapi.com/products
            providesTags: ['products'],
        }),
        getProductById: builder.query({
            query: (id) => `products/${id}`,
            providesTags: ['products'],
        }),
        addProduct: builder.mutation({
            query: (productObj) => ({
                url: 'products',
                method: 'POST',
                body: productObj,
            }),
            invalidatesTags: ['products'],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            })
        }),
        updateProduct: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'PUT',
            })
        })
    })
})

export const {
     useGetAllProductsQuery, 
     useGetProductByIdQuery, 
     useAddProductMutation, 
     useDeleteProductMutation,
     useUpdateProductMutation,
     } 
     = productsApiSlice;