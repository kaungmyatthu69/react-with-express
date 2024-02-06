'use client'
import React from 'react';
import {Movie} from "@/lib/redux/slices/movieSlice/movie";
import styles from "./movie.module.css"
import {useRouter} from "next/navigation";

const MovieUi = (props:{movie:Movie ,editHandler:(movie:Movie)=>void , deleteHandler:(movie:Movie)=>void }) => {
    let {_id,title,director,year}:Movie = props.movie;
    const router = useRouter();
    const btnDetailsHandler = ()=>{
        router.push(`/movie/${_id}`)
    }
    const btnEditHandler =()=>{
        props.editHandler(props.movie)
    }
    const btnDeleteHandler=()=>{
        props.deleteHandler(props.movie)
    }
    return (
        <div className={styles.movieContainer}>
            <h3>{title}</h3>
            <div>{director?.name}</div>
            <div>{year}</div>
            <div style={{display:"flex",gap:2}}>
                <div>
                    <button className={styles.btnPrimary} onClick={btnDetailsHandler}>Details</button>
                </div>

                <div>
                    <button className={styles.btnPrimary} onClick={btnEditHandler}>Edit</button>
                </div>
                <div>
                    <button className={styles.btnPrimary} onClick={btnDeleteHandler}>Delete</button>
                </div>
            </div>



        </div>
    );
};

export default MovieUi;