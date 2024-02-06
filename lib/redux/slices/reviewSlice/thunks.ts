import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    addNewReview,
    deleteReview,
    fetchAllReviewsByMovieId,
    updateReview
} from "@/lib/redux/slices/reviewSlice/reviewApi";
import { reviewSlice} from "@/lib/redux";

export const fetchAllReviewsByMovieIdAsync = createAsyncThunk(
    "movie/loadAllMovies",
    async (movieId:string, thunkAPI) => {
        const reviews = await fetchAllReviewsByMovieId(movieId);
        thunkAPI.dispatch(reviewSlice.actions.LoadAllReviews(reviews.data));
        return reviews.data;

    }
)

export const addNewReviewAsync = createAsyncThunk(
    "review/addNewReviewAsync",
    async (review:any, thunkAPI) => {
        console.log('review thunk',review)
        const newReview = await addNewReview(review);
        thunkAPI.dispatch(reviewSlice.actions.AddReview(newReview.data));
        return newReview.data;

    }
)

export const updateReviewAsync = createAsyncThunk(
    "review/updateReviewAsync",
    async (review:any, thunkAPI) => {
        console.log('review thunk',review)
        const newReview = await updateReview(review);
        console.log('newReview',newReview)
        thunkAPI.dispatch(reviewSlice.actions.UpdateReview(newReview.data));
        return newReview.data;

    }
)

export const deleteReviewAsync = createAsyncThunk(
    "review/deleteReviewAsync",
    async (review:any, thunkAPI) => {
        console.log('review thunk',review)
        const newReview = await deleteReview(review);
        // console.log('newReview',newReview)
        thunkAPI.dispatch(reviewSlice.actions.DeleteReview(newReview.data));
        return newReview.data;

    }
)