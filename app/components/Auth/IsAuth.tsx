'use client'
import React from 'react';

import { useSelector} from "@/lib/redux";
import {useRouter, useSearchParams} from "next/navigation";
import { usePathname } from 'next/navigation';
import {selectUsers} from "@/lib/redux/slices/authSlice/selectors";
function IsAuth<T>(Component: React.ComponentType<T>) {
    return (props: T) => {

        const router = useRouter();
        const auth = useSelector(selectUsers);
        const searchParams = useSearchParams();
        const redirectUrl = searchParams.get('redirectUrl')
        let login = auth.token;
        const pathname = usePathname();
        console.log('redirectUrl',redirectUrl)

        console.log('Path name ',pathname);
        if (!login) {
            router.push('/login?redirectUrl=' + pathname);
           

        }

        return (
            <>
                <Component {...props!} />
            </>
        );
    };
}

export default IsAuth;