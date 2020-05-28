
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ResultsPage from '../results-page/results-page.js';
import Search from './SearchBar.js';
import ApiBE from "../actions/ApiBE.js"; 
import userGuide from "./userGuide.js"; 
import RegisterFan from "../components/user/RegisterFan.js";
import LoginFan from "../components/user/LoginFan.js";  

export default function AppRouter() {
    return (
        <Router>
            <Route exact path="/" component={ResultsPage} />
            {/* <Route path="/search" component={Search} /> */}
            <Route exact path="/" component={ApiBE} />
            <Route path="/howtoguide" component={userGuide} />
            <Route path="/register" component={RegisterFan} />
            <Route path="/login" component={LoginFan} />
        </Router>
    )
}
