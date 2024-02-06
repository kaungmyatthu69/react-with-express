/* Instruments */
import {authSlice, counterSlice, reviewSlice} from "./slices";
import {movieSlice} from "@/lib/redux/slices/movieSlice/movieSlice";

export const reducer = {
  counter: counterSlice.reducer,
  movie: movieSlice.reducer,
  review: reviewSlice.reducer,
  auth:authSlice.reducer
};
