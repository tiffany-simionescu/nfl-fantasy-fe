
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ResultsPage from '../results-page/results-page.js';
import Search from './SearchBar.js';
import ApiBE from "../actions/ApiBE.js"; 
import userGuide from "./userGuide.js"; 
import RegisterFormik from "../components/user/RegisterFormik.js"; 
import LoginFormik from "../components/user/LoginFormik.js"; 
import Dashboard from "../components/user/Dashboard.js";  

export default function AppRouter() {
    return (
        <Router>
            <Route exact path="/" component={ResultsPage} />
            {/* <Route path="/search" component={Search} /> */}
            <Route exact path="/" component={ApiBE} />
            <Route path="/howtoguide" component={userGuide} />

            <Route path="/register" component={RegisterFormik} />
            <Route path="/login" component={LoginFormik} />
            <Route path="/api/fan/:id" component={Dashboard} />
        </Router>
    )
}
