import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom"; 
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

const LoginFormik = (props) => { 

    // const [ userId, setUserId] = useState([]); // getting all fans from database  

    // useEffect (() => {
    //     axios 
    //     .get("https://tacklemytrade-api.herokuapp.com/api/fans") 
    //     .then(res => {
    //         setUserId(res.data);
    //         console.log(res); 
    //         })
    //         .catch(err => {
    //         console.error(err);
    //         })
    //     }, []); 

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
        onSubmit={(values, { setSubmitting }) => {
            axios
            .post("https://tacklemytrade-api.herokuapp.com/api/fans/login", values)
            .then(res => {
                console.log("LoginFormik.js: Post Res", res.data);
                localStorage.setItem("fan-token", res.data.authToken);
                props.history.push(`/dashboard`); 
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
            type="submit"> Login </button>            
        </Form>    
    </Formik>
    );
};

export default LoginFormik; 