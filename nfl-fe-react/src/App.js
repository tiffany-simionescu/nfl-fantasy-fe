
import React from "react";
import './App.css';

import AppRouter from './components/AppRouter.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      
      < Nav />
      <AppRouter/>
      <Footer />
    
    </div>
  );
}

export default App;

