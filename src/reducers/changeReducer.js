import { createSlice } from "@reduxjs/toolkit";
import AppData from "../AppData.json";
console.log(AppData.Cards)
const { Cards, Button, Top} =AppData;
const initialState = {
    Cards,
    Button,
    Top
    /* cardID: 4,
    card: "vendor-bitcoin",
    cardNumber: "9999 1221 2311 0011",
    cardHolder: "Christofer Nils",
    dateExpiry: "01 / 23",
    ccv: 432,
    cardActive: 1,
    cardColor: "#FFAE34" */
};

const changeSlice = createSlice({
    name: 'change',
    initialState,
    reducers: {
        change(state, action) {
            console.log('State är: ', state);
            console.log('Action är: ', action.payload.cardActive);
            console.log();
            const w = Cards[0].cardActive
           // state.Cards.push(action.payload) 
         return  {...state,
             Cards:{
                cardActive:action.payload.cardActive
             } }
           
           
           
        } ,
        addNewCard(state, action) {
            console.log('State är: ', state);
            console.log('Action är: ', action);          
            return  action.payload;
        } 
    }
}



);




export const { change, addNewCard } = changeSlice.actions;

export default changeSlice.reducer ;