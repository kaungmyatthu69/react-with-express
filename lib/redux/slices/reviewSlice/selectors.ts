import {ReduxState} from "@/lib/redux";

export const selectReviews = (state:ReduxState) => state.review.reviews;