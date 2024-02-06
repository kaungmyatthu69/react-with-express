'use client'
import React from 'react';
import MovieForm from "@/app/components/Movie/MovieForm";
import {Director} from "@/lib/redux/slices/movieSlice/director";
import {Movie} from "@/lib/redux/slices/movieSlice/movie";
import {saveMovieAsync, useDispatch} from "@/lib/redux";
import {useRouter} from "next/navigation";

const NewMoviePage = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit=(values:any)=>{
        let director:Director ={
            name:values.director
        }
        let movie:Movie = {
            title:values.title,
            director,
            year:values.year
        }
        dispatch(saveMovieAsync(movie)).unwrap().then((result)=>router.push('/movie'))

    }

    return (
        <div>
            <MovieForm title={'Create Movie'} formSubmitHandler={handleSubmit} />
        </div>
    );
};

export default NewMoviePage;