import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/fan-actions';

const LoginForm = props => {
  const [fan, setFan] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setFan({
      ...fan,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.login(fan, props);
  };

  return (
    <div className="login-box-background">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="fan-box">
            <input 
              type="text"
              name="username"
              placeholder="Username"
              value={fan.username}
              onChange={handleChange}
            />
            <label>Username</label>
          </div>
          <div className="fan-box">
            <input 
              type="password"
              name="password"
              placeholder="Password"
              value={fan.password}
              onChange={handleChange} 
            />
            <label>Password</label>
          </div>
          <button type="submit" className="project-button">Login</button>
        </form>
        
        <p className="no-account">No Account?
          <Link to="/register" className="no-account-link">Create One</Link>
        </p>
      </div>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    loggedIn: state.isLoggedIn
  };
}

export default connect(mapStatetoProps, { login })(LoginForm);




// import React, {useState} from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from "axios";
// import { AxiosWithAuth } from '../../hooks/AxiosWithAuth';

// const LoginForm = (props) => {
//     // const [ credentials, setCredentials] = useState({});

//     return (
//         <div className="Login-Area">
//             <h3> Login </h3> 
//         <Formik
//             initialValues={{
//                 username: '',
//                 password: ''
//             }}
//         validationSchema={Yup.object({
//             username: Yup.string()
//             .min(6, 'Too Short!')
//             .max(65, 'Too Long!')
//             .required("Username is required!"),
//             password: Yup.string()
//             .min(6, 'Too Short!')
//             .max(65, 'Too Long!')
//             .required("Password is required!")
//         })}
//         onSubmit={(values, {isSubmitting }) => {
//             AxiosWithAuth()
//             // axios // this throws a 404, not sure why. 
//             .post("/fans/login", values)
//             .then(res => {
//                 console.log("LoginFormik.js: Post Res", res);
//                 localStorage.setItem("fan-token", res.data.authToken);
//                 console.log("Token", res.data.authToken); 
//                 props.history.push(`/dashboard`); 
//                 isSubmitting(false); 
//         })
//             .catch(error => {
//                 console.log("LoginFormik.js: Login in Form Error", error);
//             });
//         }}
//         >

//         <Form 
//         // formik does this for us  ***
//         // onSubmit={props.handleSubmit}*
//         >
//             <label htmlFor="username">Username</label>
//                 <Field
//                     name="username"
//                     type="text"
//                     placeholder="username"
//                     // onChange={props.handleChange}*
//                     />
//                 <ErrorMessage name="username"/>
//             <label htmlFor="password">Password</label>
//                 <Field 
//                     name="password"
//                     type="password"
//                     placeholder="password"
//                     // onChange={props.handleChange}*
//                     />
//                 <ErrorMessage name="password"/>
//             <button type="submit"> Login </button>            
//         </Form>   
//     </Formik>
//     </div>
//     );
// };

// export default LoginForm; 