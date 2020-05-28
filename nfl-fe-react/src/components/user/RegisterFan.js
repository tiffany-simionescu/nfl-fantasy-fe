import React, {useState, useEffect} from 'react'; 
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"; 

const RegisterFan = props => {
    const { values, errors, touched, status, setFieldValue } = props; 
    const [fans, setFans] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {
        console.log("RegisterFan.js: status has changed!", status);
        status && setFans([... fans, status]);
        if(status !== undefined) {
            props.history.push('/dashboard/:id');    //!!!! fan's dashboard with their id #. 
        }
        console.log("RegisterFan.js: Status:", status);
        console.log(" RegisterFan.js: Fans:", fans);
    }, [status]);


    return (
        <div className="Register-Card">
            <div className="Register-Form">
                <Form>
                    <h2> Sign Up to be a Member of TackleMyTrade.com </h2>
                    <label htmlFor="name">
                        Username
                        <Field
                        id="username"
                        type="text"
                        name="username"
                        placeholder="username"
                        />
                        {touched.username && errors.username && (
                            <p className="errors">{errors.username}</p>
                        )}
                    </label>

                    <label htmlFor="password">
                        Password
                        <Field
                        id="password"
                        type="password"
                        name="password"
                        placeholder="password"
                        />
                        {touched.password && errors.password && (
                            <p className="errors">{errors.password}</p>
                        )}
                    </label>

                    <label htmlFor="email">
                        Email
                        <Field
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Email"
                        />
                        {touched.email && errors.email && (
                            <p className="errors">{errors.email}</p>
                        )}
                    </label>

                    <label htmlFor="firstname">
                        First Name 
                        <Field
                        id="firstname"
                        type="string"
                        name="firstname"
                        placeholder="First Name"
                        />
                        {touched.firstname && errors.firstname && (
                            <p className="errors">{errors.firstname}</p>
                        )}
                    </label>

                    <lable htmlFor="lastname">
                        Last Name
                        <Field
                        id="lastname"
                        type="string"
                        name="lastname"
                        placeholder="Last Name"
                        />
                        {touched.lastname && errors.lastname (
                            <p className="errors">{errors.lastname}</p>
                        )}
                    </lable>

                    <label htmlFor="city">
                        City
                        <Field 
                        id="city"
                        type="string"
                        name="city"
                        placeholder="City"
                        />
                        {touched.city && errors.city (
                            <p className="errors">{errors.city}</p>
                        )}
                    </label>

                    <label htmlFor="state">
                        State
                        <Field
                        id="state"
                        type="string"
                        name="state"
                        placeholder="State Example TX"
                        />
                        {touched.state && errors.state (
                            <p className="errors">{errors.state}</p>
                        )}
                    </label>

                    <label htmlFor="profileImgURL">
                        Profile Image URL
                        <Field
                        id="profileImgURL"
                        type="text"
                        name="profileImgURL"
                        placeholder="Profile Image URL"
                        />
                        {touched.desciption && errors. desciption && (
                            <p className="errors">{errors.profileImgURL}</p>
                        )}
                    </label>
                    <button type="submit"> Register </button>
                </Form>
                {errorMessage ? <h3>{errorMessage}</h3> : null}
            </div>
        </div>
    );
};

const myMapPropsToValues = props => {
    console.log("RegisterFan.js: myMapPropsToValues", props);
    return{
        username: props.username || "",
        password: props.password || "",
        email: props.email || "",
        firstname: props.firstname || "",
        lastname: props.lastname || "",
        city: props.city || "",
        state: props.state || "",
        profileImgURL: props.profileImgURL || "", 
        props: props
    };
};

const myHandleSubmit = (values, { setStatus, resetForm, setErrors }) => {
    console.log("RegisterFan.js: RegisterFan.js: POST RQ VALUES", values); 
    axios
        .post("https://tacklemytrade-api.herokuapp.com/api/fans/register", values)  // !!!!!!
        .then(res => {
            console.log("RegisterFan.js: POST RES", res.data, res.data.tokens);  ///!!!!!!
            localStorage.setItem("token", res.data.token);  //!!!!!
            setStatus(res.data.newFan); //!!!!
            resetForm();
        })
        .catch(error => {
            console.log("RegisterFan.js: Register Fan ERROR:", error.response.data.errorMessage);  
            setErrors(error.response.data.errorMessage);
        });
};

const yupSchema = Yup.object().shape({
    username: Yup.string().required("This is required"),
    password: Yup.string().required("This is required"),
    email: Yup.string().required("This is required"),
    firstname: Yup.string().required("This is required"),
    lastname: Yup.string().required("This is required"),
    city: Yup.string().required("This is required"),
    state: Yup.string().required("This is required"),
    profileImgUrl: Yup.string().required("This is required")
});

const formikObj = {
    mapPropsToValues: myMapPropsToValues, 
    handleSubmit: myHandleSubmit,
    validationSchema: yupSchema
};

const EnhancedFormHOC = withFormik(formikObj);

const EnhancedRegisterForm = EnhancedFormHOC(RegisterFan);

export default EnhancedRegisterForm; 

