import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type shopProduct = {
    id: number,
    amount: number | undefined;
}

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