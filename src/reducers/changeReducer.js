import { createSlice } from "@reduxjs/toolkit";

const initialState = {cardNumber: ""};

const changeSlice = createSlice({
    name: 'change',
    initialState,
    reducers: {
        change(state, action) {
            console.log('State är: ', state);
            console.log('Action är: ', action);
            return  action.payload;
        }
    }
});

export const { change } = changeSlice.actions;

export default changeSlice.reducer;