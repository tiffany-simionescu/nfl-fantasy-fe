// The Links are for the component, AppRouter that Thatcher made
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Footer () {
  return (
    <div className="footer">
      <Link to={'/home'} classname="footer-item">
        Home
      </Link>
      <Link to={"/how-to-play"} classname="footer-item">
        How To Play
      </Link>
      <div classname="copyright">
          Copyright © 2020 Tackle My Trade. All Rights Reserved
      </div>
    </div>
  )
}

export default Footer;