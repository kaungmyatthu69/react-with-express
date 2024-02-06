'use client'
import React, {useEffect, useState} from 'react';

import MovieDetails from "@/app/components/Movie/MovieDetails";
import {
    addNewReviewAsync,
    fetchAllReviewsByMovieIdAsync,
    getAllMoviesAsync,
    selectMovie,
    selectMovieById,
    useDispatch,
    useSelector
} from "@/lib/redux";
import {useRouter} from "next/navigation";
import {Review} from "@/lib/redux/slices/reviewSlice/review";
import {selectReviews} from "@/lib/redux/slices/reviewSlice/selectors";
import ReviewLists from "@/app/components/Movie/ReviewLists";
import {Movie} from "@/lib/redux/slices/movieSlice/movie";
import {Field, Form, Formik} from "formik";
import { Rating as ReactRating } from '@smastrom/react-rating'


const MoviePage = ({params}:{params:{id:string}}) => {
    const movies = useSelector(selectMovie);
    const movie = selectMovieById(movies,params.id) as Movie;
    const [rate,setRate] = useState<number>(0);
    const router = useRouter()
    const reviews:Review[] = useSelector(selectReviews)
    const btnBackHandler = ()=>{
        router.push('/movie')
    }
    const  dispatch = useDispatch()
    const handleRating =(value:number)=>{
       setRate(value)
    }
    useEffect(()=>{
       dispatch( fetchAllReviewsByMovieIdAsync(params.id))
    },[])
    return (
        <div>
                <MovieDetails movie={movie}   />
            <ReviewLists reviews={reviews}/>
            <h4>Give Reviews</h4>
            <div>
                <Formik initialValues={{
                    review:''
                }} onSubmit={(values)=>{
                    let review ={
                        ...values,
                        rating:rate,
                        movie:params.id
                    }
                   dispatch(addNewReviewAsync(review))
                }}>
                    {
                        ({errors,touched})=>(
                            <Form>
                                <div>
                                    <label>Rating</label>
                                    <ReactRating value={rate} style={{maxWidth:90}} onChange={handleRating} />
                                </div>
                                <div >
                                    <label>Review</label>
                                    <Field type={'text'} name={'review'} />
                                    {
                                        errors.review && touched.review ?(<div style={{color:'red'}}>{errors.review}</div>):null

                                    }
                                </div>
                                <button type={'submit'} >Submit</button>

                            </Form>
                        )
                    }
                </Formik>
            </div>
            <button onClick={btnBackHandler}>Back</button>
        </div>
    );
};

export default MoviePage;