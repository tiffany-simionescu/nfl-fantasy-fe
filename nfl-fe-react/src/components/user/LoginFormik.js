import React, {useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { AxiosWithAuth } from '../../hooks/AxiosWithAuth';

const LoginFormik = (props) => {
    const [ credentials, setCredentials] = useState({});


    // const handleChange = event => {
    //     setCredentials: {
    //         ...credentials: {
    //             [event.target.name]:event.target.value,
            
    //         }
    // }


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
        onSubmit={(values, credentials) => {
            // e.preventDefault();
            AxiosWithAuth()
            .post("/fans/login", values, credentials)
            .then(res => {
                console.log("LoginFormik.js: Post Res", res.data);
                localStorage.setItem("fan-token", res.data.authToken);
                // props.history.push(`/dashboard/${props.fan_id}`);  // hardcode doesn't work but shows the correct data from the api in inspect 
                // setCredentials({...credentials, [e.target.name]: e.target.value})
                props.history.push(`/dashboard`); 
                // setSubmitting(true); 
        })
            .catch(error => {
                console.log("LoginFormik.js: Login in Form Error", error);
            });
        }}
        handChange={(event) => {
            setCredentials: {
                ...credentials: {
                    [event.target.name]:event.target.value,
                
                }
        }

        }}
        >
        <Form 
        // onSubmit={this.login}
        >
            <label htmlFor="username">Username</label>
                <Field
                    name="username"
                    type="text"
                    onChange={this.handleChange}
                    />
                <ErrorMessage name="username"/>
            <label htmlFor="password">Password</label>
                <Field 
                    name="password"
                    type="password"
                    onChange={this.handleChange}
                    />
                <ErrorMessage name="password"/>
            <button 
            type="submit"> Login </button>            
        </Form>    
    </Formik>
    );
};

export default LoginFormik; 