import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../reducers/ProductsSlice";
import { productsAPI } from "../../components/Products/productsAPI";
import CartReducer from "../reducers/CartSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: CartReducer,
        [productsAPI.reducerPath]: productsAPI.reducer
    },
     // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsAPI.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// configureStore -> It automatically configure redux dev tools for us..
// Setup the store

