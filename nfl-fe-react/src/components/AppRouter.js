
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ResultsPage from '../results-page/results-page.js';
import Search from './SearchBar.js';
import ApiBE from "../actions/ApiBE.js"; 

export default function AppRouter() {
    return (
        <Router>
            <Route path="/results" component={ResultsPage} />
            {/* <Route path="/search" component={Search} /> */}
            <Route exact path="/" component={ApiBE} />
        </Router>
    )
}
