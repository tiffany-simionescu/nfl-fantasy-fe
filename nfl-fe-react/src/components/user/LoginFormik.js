import React, {useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { AxiosWithAuth } from '../../hooks/AxiosWithAuth';

const LoginFormik = (props) => {
    // const [ credentials, setCredentials] = useState({});

    return (
        <div className="Login-Area">
            <h3> Login </h3>
        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
        validationSchema={Yup.object({
            username: Yup.string()
            .min(6, 'Too Short!')
            .max(65, 'Too Long!')
            .required("Username is required!"),
            password: Yup.string()
            .min(6, 'Too Short!')
            .max(65, 'Too Long!')
            .required("Password is required!")
        })}
        onSubmit={(values, {isSubmitting }) => {
            AxiosWithAuth()
            // axios // this throws a 404, not sure why. 
            .post("/fans/login", values)
            .then(res => {
                console.log("LoginFormik.js: Post Res", res);
                localStorage.setItem("fan-token", res.data.authToken);
                console.log("Token", res.data.authToken); 
                props.history.push(`/dashboard`); 
                isSubmitting(false); 
        })
            .catch(error => {
                console.log("LoginFormik.js: Login in Form Error", error);
            });
        }}
        >

        <Form 
        // formik does this for us  ***
        // onSubmit={props.handleSubmit}*
        >
            <label htmlFor="username">Username</label>
                <Field
                    name="username"
                    type="text"
                    placeholder="username"
                    // onChange={props.handleChange}*
                    />
                <ErrorMessage name="username"/>
            <label htmlFor="password">Password</label>
                <Field 
                    name="password"
                    type="password"
                    placeholder="password"
                    // onChange={props.handleChange}*
                    />
                <ErrorMessage name="password"/>
            <button type="submit"> Login </button>            
        </Form>   
    </Formik>
    </div>
    );
};

export default LoginFormik; 