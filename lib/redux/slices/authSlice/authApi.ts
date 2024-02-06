import axios from "@/app/setting/our_axios";
import {API_URL} from "@/app/setting/api";
import {User} from "@/lib/redux/slices/authSlice/user";

const   API = API_URL+"/users";

export const login = async (user:User)=>{
    return await axios.post(API+"/login",user);
}