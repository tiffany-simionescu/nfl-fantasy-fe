import React from 'react'; 
import { Redirect } from 'react-router-dom'; 


const AuthPage =({ isLoggedIn }) => {
        if (isLoggedIn) {
            return <Redirect to="/api/fans/:id" />;
        } else {
            return <h3> User is not Logged In!</h3>;
        }
    };

export default AuthPage; 