import React from "react";
import AppRouter from './components/AppRouter.js';
import './App.css';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import Footer from "./components/Footer.js";
import Nav from "./components/Nav.js";

// Google Analytics for the whole app
    ReactGA.initialize('UA-145773395-3');
    const history = createBrowserHistory();
    // Initialize google analytics page view tracking
    history.listen(location => {
        ReactGA.set({ page: location.pathname }); // Update the user's current page
        ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });
    history.listen(location => ReactGA.pageview(location.pathname));


function App() {
    return (
        <div className="App">
            <div className="Nav-Area">
                <Nav />
            </div>

            <div className="Main-Area">
            <AppRouter/>
            </div>

            <div className="Foot-Area">
            </div>
                <Footer />
            </div>
    );
};



export default App;