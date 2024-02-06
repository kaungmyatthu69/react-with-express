import axios from "@/app/setting/our_axios";
import {API_URL} from "@/app/setting/api";
import {Review} from "@/lib/redux/slices/reviewSlice/review";

const   API = API_URL+"/reviews";

export const fetchAllReviewsByMovieId =async (movieId:string)=>{
    console.log('movieId',movieId)
        return await axios.get(API+`/movie/`+movieId);

}

export const addNewReview =async (review:Review)=>{
    return await axios.post(API,review);
}

export const updateReview = async (review:Review)=>{
    return await axios.put(API+'/'+review._id,review);
}

export const deleteReview = async (review:Review)=>{
    return await axios.delete(API+'/'+review._id);
}