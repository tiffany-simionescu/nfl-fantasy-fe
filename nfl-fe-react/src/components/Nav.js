import React from 'react';
import styled from "styled-components"; 
import tacklemytradelogo from "../styling/images/tacklemytradelogo.jpg"; 
import { connect } from 'react-redux';
import { logout } from '../actions/fan-actions';


function Nav (props) {
  return (
    <NavSection className="nav">
      <div className="Logo-Area"> 
        <img src={tacklemytradelogo} height="150px"  alt="tacklemytrade.com" /> 
        </div>
        <Anchors className="Link-Area" > 
          <Testanchor href="/"> Home </Testanchor>
          <Testanchor href="/about-us"> About Us</Testanchor>
          <Testanchor href="/howtoguide" > How To Play </Testanchor>
          <Testanchor href="/analytics"> Analytics </Testanchor>
        </Anchors> 
        <Anchors>

          {props.isLoggedIn ? (
            <Testanchor href="/dashboard"> Dashboard </Testanchor>
          ) : (
            null
          )}

          <Testanchor href="/register"> Register </Testanchor>

          {props.isLoggedIn ? (
            <Testanchor href="/" onClick={props.logout}> Logout </Testanchor>
          ) : (
            <Testanchor href="/login"> Login </Testanchor>
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