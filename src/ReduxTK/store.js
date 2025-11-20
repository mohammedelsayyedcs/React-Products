import { configureStore } from "@reduxjs/toolkit";
import { productsApiSlice } from "./productsApiSlice";
import appSettingsReducer from './appSettingsSlice';

const store = configureStore({
    reducer: {
        appSettings: appSettingsReducer,
        [productsApiSlice.reducerPath]: productsApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApiSlice.middleware),
})

export default store;