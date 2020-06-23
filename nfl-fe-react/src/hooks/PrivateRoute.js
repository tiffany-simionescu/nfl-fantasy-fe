import React from "react";
import { Route, Redirect }  from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
        {...rest}
        render={() => { 
            if (localStorage.getItem("fan-token")) {
                return <Component />;
            } else {
                console.log(
                    "PrivateRoute.js: Route.render: redirecting"
                );
                return <Redirect to="/login" />;
            } 
        }}
        />
    );
};

export default PrivateRoute; 