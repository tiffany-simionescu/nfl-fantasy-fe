import React, { useState } from 'react';
import { Redirect } from "react-router-dom"; 
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

const LoginFormik = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false); 

    const AuthPage =({ isLoggedIn }) => {
        if (isLoggedIn === true ) {
            return <Redirect to="/api/fans/:id" />;
        } else {
            return <h3> User is not Logged In!</h3>;
        }
    }; 

    return (
        <Formik
            initialValues={{
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
                console.log("LoginFormik.js: Post Res", res.data);
                localStorage.setItem("fan-token", res.data.token); 
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
            <button 
            // medium example 
            onClick={AuthPage} 
            type="submit"> Login </button>            
        </Form>    
    </Formik>
    );
};

export default LoginFormik; 