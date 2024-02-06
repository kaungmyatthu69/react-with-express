import React from 'react';
import {Movie} from "@/lib/redux/slices/movieSlice/movie";
import styles from "./movie.module.css"
import {Review} from "@/lib/redux/slices/reviewSlice/review";

const MovieDetails = ({movie }:{movie:Movie }) => {

    const {title,director,year} = movie;
    return (
        <>
            <div className={styles.movieContainer}>
                <h3>{title}</h3>
                <div>{director?.name}</div>
                <div>{year}</div>
            </div>

        </>

    );
};

export default MovieDetails;