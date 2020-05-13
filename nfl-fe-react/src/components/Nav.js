import React from 'react';
import tacklemytradelogo from "../styling/tacklemytradelogo.jpg"; 

function Nav () {
  return (
    <div className="nav">
      <div className="Logo-Area"> <h1> Tackle My Trade</h1> 
      <img style={{ width: "200px", width: "70px" }} src={{tacklemytradelogo}} alt="tacklemytrade.com" />
      <a href="#" className="footer-item">
        Home
      </a>
      <a href="#" className="footer-item">
        How To Play
      </a>
    </div>
    </div> 
  )
}

export default Nav;