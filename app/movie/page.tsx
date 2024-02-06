'use client'
import React, {useEffect} from 'react';
import MovieList from "@/app/components/Movie/MovieList";
import {deleteMovieAsync, getAllMoviesAsync, useDispatch, useSelector} from "@/lib/redux";
import {selectMovie} from "@/lib/redux/slices/movieSlice/selectors";
import {Movie} from "@/lib/redux/slices/movieSlice/movie";
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import IsAuth from "@/app/components/Auth/IsAuth";


const MoviePage = () => {
    const MySwal = withReactContent(Swal)
    const router = useRouter()
    const movies = useSelector(selectMovie)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllMoviesAsync())
    },[])

    const btnNewHandler =()=>{
     router.push('/movie/create')

    }

    const btnDeleteHandler =(movie:Movie)=>{
        MySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
               dispatch(deleteMovieAsync(movie))
            }
        });
    }

    const btnEditHandler =(movie:Movie)=>{
       router.push(`/movie/edit/${movie._id}`)
    }

    return (
        <div>
          <MovieList movies = {movies} editHandler={btnEditHandler}  deleteHandler = {btnDeleteHandler}/>
            <button onClick={btnNewHandler}>New</button>
        </div>
    );
};

export default IsAuth(MoviePage) ;