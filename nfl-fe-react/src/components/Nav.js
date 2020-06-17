import React from 'react';
import styled from "styled-components"; 
import tacklemytradelogo from "../styling/images/tacklemytradelogo.jpg"; 


function Nav () {
  return (
    <NavSection className="nav">
      <div className="Logo-Area"> 
        <img src={tacklemytradelogo} height="150px"  alt="tacklemytrade.com" /> 
        </div>
        <Anchors className="Link-Area" > 
          <Testanchor href="/"> Home </Testanchor>
          <Testanchor href="#"> About Us</Testanchor>
          <Testanchor href="/howtoguide" > How To Play </Testanchor>
          <Testanchor href="/analytics"> Analytics </Testanchor>
        </Anchors> 
        <Anchors>
          <Testanchor href="/register"> Register </Testanchor>
          <Testanchor href="/login"> Login </Testanchor>
          {/* <Testanchor href='/api/fan/:id'> Dashboard </Testanchor> */}
        </Anchors>
    </NavSection> 
  )
}

export default Nav;

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