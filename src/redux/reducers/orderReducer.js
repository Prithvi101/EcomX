import { createReducer } from "@reduxjs/toolkit";

export const orderReducer = createReducer(
  {
loading:false, 
  },
  {
    placeOrderRequest: (state, action) => {

     state.loading  = true;
    },
    placeOrderSuccess: (state, action) => {
state.loading  = false;


    },

    placeOrderFailed: (state, action) => {
      state.loading  = false;
        

    },
  

   
  }
);