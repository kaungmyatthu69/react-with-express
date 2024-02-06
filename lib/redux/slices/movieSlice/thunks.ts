import {createAsyncThunk} from "@reduxjs/toolkit";
import {deleteMovieApi, fetchAllMovies, saveMovie, updateMovieApi} from "@/lib/redux/slices/movieSlice/movieApi";
import {movieSlice} from "@/lib/redux";
import {Movie} from "@/lib/redux/slices/movieSlice/movie";

export const getAllMoviesAsync = createAsyncThunk(
    "movie/loadAllMovies",
    async (arg, thunkAPI) => {
        const movies = await fetchAllMovies();
        thunkAPI.dispatch(movieSlice.actions.LoadAllMovies(movies.data));
        return movies.data;

    }
)

export const saveMovieAsync = createAsyncThunk(
    "movie/saveMovieAsync",
    async (movie: Movie, thunkAPI) => {

        const response = await saveMovie(movie);
        thunkAPI.dispatch(movieSlice.actions.AddMovie(movie));
        return response.data;
    }
)

export const updateMovieAsync = createAsyncThunk(
    "movie/updateMovieAsync",
    async (movie: Movie, thunkAPI) => {
        const response = await updateMovieApi(movie);
        thunkAPI.dispatch(movieSlice.actions.UpdateMovie(response.data));
        return response.data;
    }
)
export const deleteMovieAsync = createAsyncThunk(
    "movie/deleteMovieAsync",
    async (movie: Movie, thunkAPI) => {
        const response = await deleteMovieApi(movie);
        thunkAPI.dispatch(movieSlice.actions.DeleteMovie(movie));
        return response.data;
    }
)