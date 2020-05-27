import React, {useState, useEffect} from 'react'; 
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"; 

const RegisterFan = props => {
    const { errors, touched, status } = props; 
    const [fans, setFans] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {
        console.log("RegisterFan.js: status has changed!", status);
        status && setFans([... fans, status]);
        if(status !== undefined) {
            props.history.push('/dashboard-fan');    //!!!!
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

const myMapPropsToValue = props => {
    console.log("RegisterFan.js: myMapPropsToValues", props);
    return{
        username: props.username || "",
        password: props.password || "",
        profileImgURL: props.profileImgURL || "", 
        props: props
    };
};

const myHandleSubmit = (values, { setStatus, resetForm, setErrors }) => {
    console.log("RegisterFan.js: RegisterFan.js: POST RQ VALUES", values); 
    axios
        .post("", values)  // !!!!!!
        .then(res => {
            console.log("RegisterFan.js: POST RES", res.data, res.data.tokens);  ///!!!!!!
            localStorage.setItem("fan-token", res.data.token);  //!!!!!
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

