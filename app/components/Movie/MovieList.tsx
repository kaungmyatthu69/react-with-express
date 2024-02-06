'use client'
import React from 'react';
import {Movie} from "@/lib/redux/slices/movieSlice/movie";
import MovieUi from "@/app/components/Movie/MovieUi";


const MovieList = ({movies ,editHandler ,deleteHandler}:{movies:Movie[],editHandler:(movie:Movie)=>void , deleteHandler:(movie:Movie)=>void}) => {


    return (
        <div >
            {
                movies.map((movie: Movie) => <MovieUi key={movie._id} editHandler={editHandler} deleteHandler={deleteHandler} movie={movie}/>)
            }

        </div>
    );
};

export default MovieList;