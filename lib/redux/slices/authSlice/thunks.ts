import {createAsyncThunk} from "@reduxjs/toolkit";
import {User} from "@/lib/redux/slices/authSlice/user";
import {login} from "@/lib/redux/slices/authSlice/authApi";
import {authSlice} from "@/lib/redux";

export const LoginAsync =  createAsyncThunk(
    'auth/login',
    async (user:User , thunkAPI) => {
        console.log('user',user);
        let response;
        try {
            response = await login(user);
            if(response.status === 200){
                console.log('response',response);
                thunkAPI.dispatch(authSlice.actions.Login(response.data.token))
                return response.data;
            }
        }catch (e:any) {
            console.log('e',e);
            return thunkAPI.rejectWithValue(e.response.data);
        }




    }
)