'use client'
import React, {useState} from 'react';
import {Review} from "@/lib/redux/slices/reviewSlice/review";
import {Rating as ReactRating} from '@smastrom/react-rating'
import {ReviewUI} from "@/app/components/Movie/ReviewUi";
import {Field, Form} from "formik";
import {ReviewForm} from "@/app/components/Movie/ReviewForm";
import {deleteMovieAsync, deleteReviewAsync, updateReviewAsync, useDispatch} from "@/lib/redux";
import {Movie} from "@/lib/redux/slices/movieSlice/movie";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const ReviewLists = ({reviews}: { reviews: Review[] }) => {
    const [edit, setEdit] = useState<Review>()
    const [rating, setRating] = useState<number>(0)
    const dispatch = useDispatch()
    const MySwal = withReactContent(Swal)
    const handleRate = (value: number) => {
        console.log('value', value)
        setRating(value)
    }

    const btnEditHandler = (review: Review) => {
        setRating(review.rating)
        setEdit(review)

    }
    const editHandler = (values: any) => {
        let updateReview = {
            ...values,
            rating,
            movie:values.movie
        }
        console.log('update',updateReview)
        dispatch(updateReviewAsync(updateReview))
        setEdit(undefined)
    }

    const btnCancelHandler =()=>{
        setEdit(undefined);
    }


    const btnDeleteHandler =(review:Review)=>{
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
                dispatch(deleteReviewAsync(review))
            }
        });
    }
    return (
        <div>
            {
                reviews?.map((review: Review) => {
                    return (
                        <div>
                            {
                                edit?._id === review._id ?

                                    <ReviewForm review={review} onSubmit={editHandler} element={({errors, touched}) => (
                                        <Form>
                                            <div>
                                                <label>Review</label>
                                                <Field type={'text'} name={'review'}/>
                                            </div>
                                            <div>
                                                <ReactRating style={{maxWidth: 77}} value={rating}
                                                             onChange={handleRate}/>
                                            </div>
                                            <button type={'submit'}>Update</button>
                                            <button onClick={btnCancelHandler}>Cancel</button>

                                        </Form>
                                    )}/> :
                                    <ReviewUI review={review} handleDelete={()=>btnDeleteHandler(review)} onClick={() => btnEditHandler(review)}/>


                            }


                        </div>
                    );
                })
            }


        </div>
    );
};

export default ReviewLists;