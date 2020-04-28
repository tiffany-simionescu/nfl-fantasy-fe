// The Links are for the component, AppRouter that Thatcher made
import React from 'react';
import { Link } from 'react-router-dom';

function Nav () {
  return (
    <div className="nav">
      <Link to={'/home'} classname="footer-item">
        Home
      </Link>
      <Link to={"/how-to-play"} classname="footer-item">
        How To Play
      </Link>
    </div>
  )
}

export default Nav;