import {Movie} from "@/lib/redux/slices/movieSlice/movie";

export interface Review {
    _id: string,
    movie: Movie,
    rating: number,
    review: string,
}