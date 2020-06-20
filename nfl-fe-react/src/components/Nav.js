import React, { useEffect } from 'react';
import styled from "styled-components"; 
import tacklemytradelogo from "../styling/images/tacklemytradelogo.jpg"; 
import { connect } from 'react-redux';
import { logout } from '../actions/fan-actions';


function Nav (props) {

  useEffect(() => {
    
  })

  return (
    <NavSection className="nav">
      <div className="Logo-Area"> 
        <img src={tacklemytradelogo} height="150px"  alt="tacklemytrade.com" /> 
        </div>
        <Anchors className="Link-Area" > 
          <Testanchor className="link" href="/"> Home </Testanchor>
          <Testanchor className="link" href="/about-us"> About Us</Testanchor>
          <Testanchor className="link" href="/howtoguide" > How To Play </Testanchor>
          <Testanchor className="link" href="/analytics"> Analytics </Testanchor>
        </Anchors> 
        <Anchors className="Right-Link-Area">

          {props.isLoggedIn || localStorage.getItem('fan-token') ? (
            <Testanchor className="link" href="/dashboard"> Dashboard </Testanchor>
          ) : (
            null
          )}

          <Testanchor className="link" href="/register"> Register </Testanchor>

          {props.isLoggedIn || localStorage.getItem('fan-token') ? (
            <Testanchor className="link" href="/" onClick={props.logout}> Logout </Testanchor>
          ) : (
            <Testanchor className="link" href="/login"> Login </Testanchor>
          )}
        </Anchors>
    </NavSection> 
  )
}

// export default Nav;
const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, { logout })(Nav);

const NavSection = styled.div`
display: inline-flex; 
background: #007090;
width: 100%; 
`



const Anchors = styled.div`
font-size: 1.5rem; 
display: flex; 
align-items: center; 
` 

const Testanchor = styled.a`
color:#eeeeff;
padding: 3rem;
cursor: pointer;  
&:hover {
  color: #ffa630;
  }
`