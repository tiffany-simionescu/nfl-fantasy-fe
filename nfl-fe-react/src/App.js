import React from 'react';
import './App.css';
import autocomplete from "./components/autocomplete.js"; 

function App() {
  return (
    <div className="App">
    <h1> The Perfect Trade: Football Fantasy Trade Anaylzer</h1>
    <div className="Nav-Area">
    </div>

    <div className="Main-Area">
    <autocomplete/> 
    </div>

    <div className="Foot-Area">
    </div>
    </div>
  );
}

export default App;
