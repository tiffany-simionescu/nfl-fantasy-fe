import React from "react";
import AppRouter from './components/AppRouter.js';
import './App.css';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import Footer from "./components/Footer.js";
import Nav from "./components/Nav.js";
<<<<<<< HEAD
=======
import styled from "styled-components"; 
>>>>>>> fa8e9e26bec6aeb1daa392ce3f6103370fca5576


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

<<<<<<< HEAD
            <div className="Main-Area">
            <AppRouter/>
            </div>
=======
            <MainDiv className="Main-Area">
            <h2> Fantasy Football Trade Analyzer </h2>
            <AppRouter/>
            </MainDiv>
>>>>>>> fa8e9e26bec6aeb1daa392ce3f6103370fca5576

            <div className="Foot-Area">
            </div>
                <Footer />
            </div>
    );
};
<<<<<<< HEAD
=======

>>>>>>> fa8e9e26bec6aeb1daa392ce3f6103370fca5576


export default App;

const MainDiv = styled.div`
width: 85%;
height: 55rem; 
margin: 0 auto; 
padding: 3rem; 
`