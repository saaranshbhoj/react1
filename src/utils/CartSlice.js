//Since we know that store can contain multiples slices;
import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name: "cart",
    initialState:{
        items: [] //initially an empty array;
    },
    reducers:{
        addItems:(state,action) =>{
            state.items.push(action?.payload);
        },
        removeItems:(state) =>{
            state.items.pop();
        },
        clearCart:(state) =>{
            // state.items.length=0; //make your state empty array;
            return {items:[]};
        }
    }
});

//Here we will export two things : Actions,Reducer
export default CartSlice.reducer;
export const {addItems,removeItems,clearCart}=CartSlice.actions