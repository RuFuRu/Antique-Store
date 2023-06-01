import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shopProduct } from "../Types/types";

const initialState: {value: shopProduct[]} = {
    value: [{id: 0, amount: 0}],
}

export const shopProductSlice = createSlice({
    name: "shopProduct",
    initialState,
    reducers: {
        setShopProduct: (state, action: PayloadAction<shopProduct[]>) => {
            state.value = action.payload
        },
    }
});

export const { setShopProduct } = shopProductSlice.actions;
export default shopProductSlice.reducer;