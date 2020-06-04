import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"; 


const LoginFan = props => {
    console.log("LoginFan.js: props:", props);
    const { values, errors, touched, status, setFieldValue } = props;
    const [fans, setFans] = useState([]);
    const [errorMessage, setErrorMessage] = useState(""); 

    useEffect(() => {
        console.log("LoginFan.js: status as changed!", status);
        status && setFans([...fans, status]);
        status && props.setCurrentFan(status);
        
        if(status !== undefined) {
            props.history.push("/api/fan/:id");  //!!!
        }
        console.log("LoginFan.js: Status", status);
        console.log("LoginFan.js, errors", errors); 

    }, [status]); 

    //redirects fan to dashboard if alread logged in
    if(localStorage.getItem("token")) {
        return <Redirect to="/dashboard" /> 
    }

    return (
        <div className="FanCard">
            <div className="LoginIn-Form">
                <Form>
                    <h2> Login </h2>
                    <label htmlFor="name">
                        Username
                        <Field
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Username"
                        />
                        {touched.username && errors.username && (
                            <p classNam="errors">{errors.username}</p>
                        )}
                    </label>

                    <label htmlFor="password">
                        Password
                        <Field
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        />
                        {touched.password && errors.password && (
                            <p className="errors">{errors.password}</p>
                        )}
                    </label>

                    <button type="submit"> Login </button>
                </Form>
                {errorMessage ? <h3>{errorMessage}</h3> : null}
            </div>
        </div>
    );
};

const FormikSignUp = withFormik({
    mapPropsToValues(props) {
        return {
            username: props.username || "",
            password: props.password || "",
        };
    },

    validateSchema: Yup.object().shape({
        username: Yup.string().required("This is required"),
        password: Yup.string().required("This is required")
    }),

    handleSubmit(values, {setStatus, resetForm, setErrors }){
        console.log("LoginFan.js: FormikSignUp submitting", values);
        axios
            .post("http://localhost:5432/api/fans/login", values) // !!!!!!!
            .then(res => {
                console.log("LoginFan.js: Login Fan Sucess, RES:", res); //!!!!!
                localStorage.setItem("token", res.data.token);  // !!!!!!
                setStatus(res.data.fan); //!!!!!
                resetForm(); 
            })
            .catch(error => {
                console.log("LoginFan.js:", error.errorMessage);  //!!!!!!
            })
    }
})(LoginFan); 

export default FormikSignUp; 