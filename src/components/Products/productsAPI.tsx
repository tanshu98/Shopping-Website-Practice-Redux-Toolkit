import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// We can use this create API to create our API service

export const productsAPI = createApi({
    reducerPath: "productsAPI",
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}),
    endpoints: (builder)=> ({
        getAllProducts: builder.query({
            query: ()=> "products"
        })
    })
})

// So this product url will be added to the base url..thus making the request..and then this getAllProducts will be used to create a custom hook automatically..
// Later we can also export this custom hook

export const {useGetAllProductsQuery} = productsAPI

// So this..useGetAllProductsQuery custom hook was automatically created from getAllProducts

// Now we can use this custom hook to call our apis data..

// note: We need to import this file into the store 😉
