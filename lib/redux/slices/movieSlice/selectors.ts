import {ReduxState} from "@/lib/redux";
import {Movie} from "@/lib/redux/slices/movieSlice/movie";

export const selectMovie = (state: ReduxState) => state.movie.movies;
export const selectMovieById = (movies:Movie[], id: string) => movies.find(movie => movie._id === id);