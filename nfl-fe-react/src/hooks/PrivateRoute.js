import React from "react";
import { Route, Redirect }  from "react-router-dom";

const PrivateRoute = ({ component: Component, ...theRest }) => {
    return (
        <Route 
        {...theRest}
        render={(props) => {
            if (localStorage.getItem("fan-token")) {
                return <Component {...props} />;
            } else {
                console.log(
                    "PrivateRoute.js: Route.render: redirecting"
                );
                return <Redirect to="/fans/login" />;
            } 
        }}
        />
    );
};

export default PrivateRoute; 