'use client'
import React from 'react';
import MovieForm from "@/app/components/Movie/MovieForm";
import {selectMovie, selectMovieById, updateMovieAsync, useDispatch, useSelector} from "@/lib/redux";
import {Movie} from "@/lib/redux/slices/movieSlice/movie";
import movieForm from "@/app/components/Movie/MovieForm";
import {useRouter} from "next/navigation";
import {Director} from "@/lib/redux/slices/movieSlice/director";

const EditPage = ({params}:{params:{id:string}}) => {
    const movies:Movie[] = useSelector(selectMovie)
    const dispatch = useDispatch();
    console.log('id',params.id)
    const router = useRouter();
    console.log('movies',movies)

    const movie:Movie = selectMovieById(movies,params.id) as  Movie

    const handleSubmit =(values:any)=>{

            let editedMovie:Movie ={
                ...movie
            }
            editedMovie.title=values.title
            editedMovie.director ={
                ...movie.director,
                name:values.director
            }
            editedMovie.year = values.year
            console.log('values',editedMovie)
            dispatch(updateMovieAsync(editedMovie)).unwrap().then((result)=>router.push('/movie'))



    }
    return (
        <div>
          <MovieForm title={'Edit Movie'} initialState={movie} formSubmitHandler={handleSubmit} />
        </div>
    );
};

export default EditPage;