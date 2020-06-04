import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

const LoginFormik = () => {
    return (
        <Formik
            initialValuess={{
                username: '',
                password: ''
            }}
        validationSchema={Yup.object({
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required")
        })}
        onSubmit={(values, { setSubmitting}) => {
            axios
            .post("https://tacklemytrade-api.herokuapp.com/api/fans/login", values)
            .then(res => {
                console.log("LoginFormik.js: Post Res", res);
            })
            .catch(error => {
                console.log("LoginFormik.js: Login in Form Error", error);
            });
        }}
        >
        <Form>
            <label htmlFor="username">Username</label>
                <Field
                    name="username"
                    type="text"
                    />
                <ErrorMessage name="username"/>
            <label htmlFor="password">Password</label>
                <Field 
                    name="password"
                    type="password"
                    />
                <ErrorMessage name="password"/>
            <button type="submit"> Login </button>            
        </Form>    
    </Formik>
    );
};

export default LoginFormik; 