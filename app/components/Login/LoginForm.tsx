'use client'
import React from 'react';
import {Field, Form, Formik} from "formik";
import {User} from "@/lib/redux/slices/authSlice/user";

const LoginForm = ({handleSubmit}:{handleSubmit:(value:User , resetForm:any)=>void}) => {

    return (
        <div>
            <h3>Login Form</h3>
            <Formik initialValues={{
                userName:'',
                password:''
            }} onSubmit={(values:User , {resetForm}) => {
                handleSubmit(values , resetForm)
            }}>
                {
                    ({errors, touched}) => (
                        <Form>
                            <div>
                                <label>UserName</label>
                                <Field type={'text'} name={'userName'} />
                            </div>
                            <div>
                                <label>Password</label>
                                <Field name={'password'} types={'password'} />
                            </div>
                            <button type={'submit'}>Login</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};

export default LoginForm;