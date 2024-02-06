import {Director} from "@/lib/redux/slices/movieSlice/director";

export interface Movie{
        _id?: string,
        title: string,
        director:Director,
        year:number,
}