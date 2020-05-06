import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ResultsPage from '../results-page/results-page.js';
import Search from './SearchBar.js';

export default function AppRouter() {
    return (
        <Router>
            <Route path="/results" component={ResultsPage} />
            <Route path="/results" component={ResultsPage} />
            {/* <Route path="/search" component={Search} /> */}
        </Router>
    )
}