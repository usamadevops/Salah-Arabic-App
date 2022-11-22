/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Authentication:false
}

export const counterSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    Authorize: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if(state.Authentication){
        state.Authentication = false;
      } else {
        state.Authentication= true;
      }
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { Authorize } = counterSlice.actions

export default counterSlice.reducer