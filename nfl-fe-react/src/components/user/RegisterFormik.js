import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios"; 

const RegisterFormik = () => {
    return (
        <Formik
            initialValues={{ username: '',
                            password: '',
                            email: '',
                            first_name: '',
                            last_name: '',
                            city: '',
                            state: '' 
                        }}
            validationSchema={Yup.object({
                username: Yup.string().required("Required"),
                password: Yup.string().required("Required"),
                email: Yup.string().required("Required"),
                first_name: Yup.string().required("Required"),
                last_name: Yup.string().required("Required"),
                city: Yup.string().required("Required"),
                state: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
                axios
                .post("https://tacklemytrade-api.herokuapp.com/api/fans/register", values)  // should be good 
                .then(res => {
                    console.log("RegisterFan.js: POST RES", res);  // !!!!!
                    // resetForm();
                })
                .catch(error => {
                    console.log("RegisterFan.js: Register Fan ERROR:", error); 
                });
            }}
        >
        <Form>
            <label htmlFor="username">Username</label>
                <Field 
                    name="username" 
                    type="text" 
                    />
                <ErrorMessage name="username" />
            <label htmlFor="password">Password</label>
                <Field 
                    name="password"
                    type="password" 
                    />
                <ErrorMessage name="password" />
            <label htmlFor="email">Email Address</label>
                <Field 
                    name="email" 
                    type="string" 
                    />
                <ErrorMessage name="email" />
            <label htmlFor="first_name"> First Name </label>
                <Field
                    name="first_name"
                    type="string"
                    />
                <ErrorMessage name="first_name"/>
            <label htmlFor="last_name"> Last Name </label>
                <Field 
                    name="last_name"
                    type="string"
                    /> 
                <ErrorMessage name="last_name" />
            <label htmlFor="city"> City </label>
                <Field 
                    name="city"
                    type="string"
                    />
                <ErrorMessage name="city" />
            <label htmlFor="state"> State </label>
                <Field
                    name="state"
                    type="string"
                    />
                <ErrorMessage name="state" />
            <button type="submit">Submit</button>
        </Form>
    </Formik>
    );
};

export default RegisterFormik; 
