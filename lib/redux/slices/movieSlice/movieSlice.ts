import {Movie} from "@/lib/redux/slices/movieSlice/movie";
import {createSlice} from "@reduxjs/toolkit";
import {getAllMoviesAsync, saveMovieAsync} from "./thunks";
import {redirect} from "next/navigation";

export interface MovieSliceState{
    movies:Movie[]
}
const initialState : MovieSliceState = {
    movies:[


            ]
}

export const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers:{
        LoadAllMovies:(state,action) => {
            state.movies = action.payload;
        },
        AddMovie:(state, action) => {
            state.movies= [...state.movies, action.payload];
        },
        DeleteMovie:(state, action) => {
            state.movies = state.movies.filter(movie => movie._id !== action.payload._id);
        },
        UpdateMovie:(state, action) => {
            state.movies = state.movies.map(movie => movie._id === action.payload._id ? action.payload : movie);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveMovieAsync.fulfilled, (state,action) => {
                   // redirect('/movie')
            })

    }
})