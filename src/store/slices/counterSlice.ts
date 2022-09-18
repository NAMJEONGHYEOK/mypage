import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  countvalue : number
}

const initialState : InitialState = {
  countvalue : 0,
}


const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
      up : (state,action : PayloadAction<number>) => {
        state.countvalue = state.countvalue + action.payload;
      }
    },

  })
  
  export default counterSlice.reducer;
  export const { up } = counterSlice.actions