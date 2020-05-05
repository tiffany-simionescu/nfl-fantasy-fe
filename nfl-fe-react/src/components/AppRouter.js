import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ResultsPage from '../results-page/results-page.js';
import DropDownA from './DropDownA.js';
import DropDownB from './DropDownB.js'; 
import Search from './SearchBar.js';


export default function AppRouter() {
    return (
        <Router>
            <Route exact path="/" component={DropDownA} /> 
            <Route exact path="/" component={DropDownB} />
            <Route path="/results" component={ResultsPage} />
            {/* <Route path="/search" component={Search} /> */}
        </Router>
    )
}