import React from 'react';
import styled from "styled-components"; 
import tacklemytradelogo from "../styling/images/tacklemytradelogo.jpg"; 
// this is a message


function Nav () {
  return (
    <NavSection className="nav">
      <Logo className="Logo-Area"> 
        <img src={{tacklemytradelogo}} alt="tacklemytrade.com" /> 
        </Logo>
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
padding: 50px; 
margin: auto 10px; 
weight: 98%; 
height: 9rem; 
// display: inline-block; 
background: #332e3c; 
color: #eeeeff
`

const Logo = styled.div`
display: inline; 
margin: 0 auto; 
`
const Anchors = styled.div`
display: inline-flex;
` 
const Testanchor = styled.a`
padding: 1rem;
font-size: 1.5rem; 
margin: auto;
color: #eeeeff; 
`