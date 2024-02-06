'use client'
import React from 'react';
import LoginForm from "@/app/components/Login/LoginForm";
import {User} from "@/lib/redux/slices/authSlice/user";
import {LoginAsync, useDispatch} from "@/lib/redux";
import {Simulate} from "react-dom/test-utils";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {useRouter} from "next/navigation";


const Page = () => {
    const dispatch = useDispatch()
    const MySwal = withReactContent(Swal)
    const router = useRouter();


    const handleFormSubmit =(value:User,resetForm:any)=>{
       dispatch(LoginAsync(value)).unwrap().then((response)=>router.push('/movie'),
           error=>{
           MySwal.fire("Invalid password or username")
               resetForm()
           }
       )
    }
    return (
        <div>
           <LoginForm handleSubmit={(value:User,resetForm:any)=>handleFormSubmit(value , resetForm)}/>

        </div>
    );
};

export default Page;