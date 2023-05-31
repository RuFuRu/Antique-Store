import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {value: string} = {
    value: ''
};

export const filterSlice = createSlice({
    name: "filtering",
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;