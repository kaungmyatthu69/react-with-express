'use client'
import React from 'react';
import {authSlice, useDispatch} from "@/lib/redux";
import {useRouter} from "next/navigation";


const LogoutPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const handleLogout =()=>{
        dispatch(authSlice.actions.Logout())
        router.push('/')

    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>

        </div>
    );
};

export default LogoutPage;