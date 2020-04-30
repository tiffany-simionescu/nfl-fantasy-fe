import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ResultsPage from '../results-page/results-page.js';

export default function AppRouter() {
    return (
        <Router>
            {/* <Route exact path="/" component={inputpage}/> */}
            <Route path="/results" component={ResultsPage} />
        </Router>
    )
}