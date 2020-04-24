import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Results from './results/results.js';

function App() {
  return (
    <div className="App">
      <Nav />
        <Results/>
      <Footer />
    </div>
  );
}

export default App;

