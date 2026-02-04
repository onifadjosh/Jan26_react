import { createSlice } from "@reduxjs/toolkit";


export const appSlice = createSlice({
    name:"appslice",
    initialState:{
        userName:"Josh",
        friends:["pampam", "Ridwan", "Femmzy"],
        number:10
    },

    reducers:{
        increaseNum: (state)=>{
            state.number++
        },

        increaseNumBySome:(state, action)=>{
            state.number+=action.payload
        }
    }


})


export default appSlice.reducer;

export const {increaseNum, increaseNumBySome}= appSlice.actions

