import {Review} from "@/lib/redux/slices/reviewSlice/review";
import {Rating as ReactRating} from "@smastrom/react-rating";
import Image from "next/image";
import Edit from "@/app/assets/edit.svg";
import React from "react";

export function ReviewUI(props: { review: Review, onClick: () => void ,handleDelete:()=>void}) {
    return <>
        <div>
            <p>{props.review.review}</p>
            <ReactRating value={props.review.rating} style={{maxWidth: 100}}
                         readOnly></ReactRating>
        </div>
        <Image src={Edit} alt={"edit"} onClick={props.onClick}/>
        <button onClick={props.handleDelete}>Delete</button>
    </>;
}