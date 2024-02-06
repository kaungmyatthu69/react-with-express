import {Review} from "@/lib/redux/slices/reviewSlice/review";
import {createSlice} from "@reduxjs/toolkit";

interface ReviewSliceState{
    reviews:Review[]
}

const initialState : ReviewSliceState = {
    reviews:[

    ]
}


export const reviewSlice = createSlice({
    name:'review',
    initialState,
    reducers:{
            LoadAllReviews:(state,action) => {
            state.reviews = action.payload;
        },
        AddReview:(state, action) => {
            state.reviews= [...state.reviews, action.payload];
        },
        DeleteReview:(state, action) => {
            state.reviews = state.reviews.filter(review => review._id !== action.payload._id);
        },
        UpdateReview:(state, action) => {
            state.reviews = state.reviews.map(review => review._id === action.payload._id ? action.payload : review);
        }
    }
})