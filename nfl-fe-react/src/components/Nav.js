import React from 'react';
import styled from "styled-components"; 
import tacklemytradelogo from "../styling/images/tacklemytradelogo.jpg"; 


function Nav () {
  return (
    <NavSection className="nav">
      <Logodiv className="Logo-Area"> 
        <img src={tacklemytradelogo} height="150px"  alt="tacklemytrade.com" /> 
        </Logodiv>
        <Anchors className="Link-Area" > 
          <Testanchor href="https://www.tacklemytrade.com"> Home </Testanchor>
          <Testanchor href="#"> About Us</Testanchor>
          <Testanchor href="#" > How To Play </Testanchor>
        </Anchors> 
    </NavSection> 
  )
}

export default Nav;

const NavSection = styled.div`
border: 2px soild red; 
display: inline-flex; 
background: #007090;
width: 100%; 
`

const Logodiv = styled.div`
border: 2px solid red; 
`

const Anchors = styled.div`
border: 2px solid red; 
font-size: 1.5rem; 
display: flex; 
align-items: center; 
` 

const Testanchor = styled.a`
border: 2px solid red; 
color:#eeeeff;
padding: 3rem;
cursor: pointer;  
&:hover {
  color: #ffa630;
  }
`