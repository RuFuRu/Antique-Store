import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {value: boolean} = {
    value: true
};

export const unFilterSlice = createSlice({
    name: "unFiltering",
    initialState,
    reducers: {
        setUnFilter: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        }
    }
});

export const { setUnFilter } = unFilterSlice.actions;
export default unFilterSlice.reducer;