import axios from "@/app/setting/our_axios";
import {API_URL} from "@/app/setting/api";

const   API = API_URL+"/movies";

 export  const fetchAllMovies =async ()=>{
     return await axios.get(API);

}

export const saveMovie = async (movie: any) => {
    return await axios.post(API, movie);
}

export const updateMovieApi = async (movie: any)  => {
     // console.log('movie',movie)

    return await axios.put(API+"/"+movie._id, movie);
}


export const deleteMovieApi = async (movie: any) => {
    return await axios.delete(API+"/"+movie._id);
}