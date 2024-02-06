import {createSlice} from "@reduxjs/toolkit";

export interface AuthShape {
    token?:string
}

const initialState:AuthShape = {
    token:undefined
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        Login:(state,action) => {
            state.token = action.payload;
        },
        Logout:(state,action) => {
            state.token = undefined;
        }
    }
})