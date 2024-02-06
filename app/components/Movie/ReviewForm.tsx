import {Review} from "@/lib/redux/slices/reviewSlice/review";
import {Formik} from "formik";
import React from "react";

export function ReviewForm(props: {
    review: Review,
    onSubmit: (values: any) => void,
    element: ({errors, touched}: { errors: any; touched: any }) => JSX.Element
}) {
    return <div>
        <Formik initialValues={{
            _id:props.review._id,
            review: props.review.review,
            movie:props.review.movie._id
        }} onSubmit={props.onSubmit}>
            {
                props.element
            }
        </Formik>
    </div>;
}