'use client'
import React from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from "yup"
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {saveMovieAsync, useDispatch} from "@/lib/redux";
import {Director} from "@/lib/redux/slices/movieSlice/director";
import {Movie} from "@/lib/redux/slices/movieSlice/movie";
import { useRouter} from "next/navigation";

export interface MovieFormProps {
    title:string,
    formSubmitHandler:(values:any)=>void,
    initialState?:Movie

}
const MovieForm = ({title ,formSubmitHandler ,initialState}:MovieFormProps) => {

    const  MovieSchema= Yup.object().shape({
        title:Yup.string().required('Title is required'),
        director:Yup.string().required('required'),
        year:Yup.number().required('required')
    })


    return (
        <div>
            <h3>{title}</h3>
            <Formik initialValues={{
                title:initialState?initialState.title:'',
                director:initialState?initialState.director.name:'',
                year:initialState?initialState.year:''
            }}

                    validationSchema={MovieSchema}
                    onSubmit={(values)=>formSubmitHandler(values)}>
                {
                    ({errors,touched})=>(
                        <Form>
                            <div>
                                <label>Movie Title</label>
                                <Field type={'text'} name={'title'} />
                                {
                                    errors.title && touched.title ?(<div style={{color:'red'}}>{errors.title}</div>):null

                                }
                            </div>
                            <div>
                                <label>Director </label>
                                <Field type={'text'} name={'director'} />
                                {
                                    errors.director && touched.director ?(<div style={{color:'red'}}>{errors.director}</div>):null

                                }
                            </div>
                            <div>
                                <label>year</label>
                                <Field type={'text'} name={'year'} />
                                {
                                    errors.year && touched.year ?(<div style={{color:'red'}}>{errors.year}</div>):null

                                }
                            </div>
                            <button type={'submit'} >Create</button>

                        </Form>
                    )
                }
            </Formik>

        </div>
    );
};

export default MovieForm;