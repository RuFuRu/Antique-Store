import { configureStore } from "@reduxjs/toolkit";
import filteringReducer from "../Features/filterSlice";
import unFilteringReducer from "../Features/unFilterSlice";
import shopProductsReducer from "../Features/shopProductsSlice";

export const store = configureStore({
    reducer: {
        filtering: filteringReducer,
        unFiltering: unFilteringReducer,
        shopProducts: shopProductsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.getState