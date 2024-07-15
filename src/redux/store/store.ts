import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../reducers/ProductsSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// configureStore -> It automatically configure redux dev tools for us..
// Setup the store

