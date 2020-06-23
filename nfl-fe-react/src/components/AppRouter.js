
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ResultsPage from '../results-page/results-page.js';
import ApiBE from "../actions/ApiBE.js"; 
import userGuide from "./userGuide.js"; 
import RegisterForm from "../components/user/RegisterForm.js"; 
import LoginForm from "../components/user/LoginForm.js"; 
import Dashboard from "../components/user/Dashboard.js"; 
import PrivateRoute from "../hooks/PrivateRoute.js"; 
import AnalyticsPage from "../components/AnalyticsPage.js"; 
import AboutPage from "../components/AboutPage.js"; 

export default function AppRouter() {
    return (
        <Router>
            <Route exact path="/" component={ResultsPage} />
            <Route exact path="/" component={ApiBE} />
            <Route path="/howtoguide" component={userGuide} />
            <Route path="/analytics" component={AnalyticsPage} />
            <Route path="/about-us" component={AboutPage} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
        </Router>  
    )
}
