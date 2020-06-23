import React from 'react';
import styled from "styled-components";

import twitter from "../styling/icomoon/PNG/twitter.png"; 
import facebook2 from "../styling/icomoon/PNG/facebook2.png";
import instagram from "../styling/icomoon/PNG/instagram.png";
import share from "../styling/icomoon/PNG/share.png";

const Footer = () => {
    return (
    <Div className="Footer">
        <Border className="styling">
        <div className="Link-Area">
            <CopyRightDiv className="Copyright-Info">
            <h5>Copyright © 2020. All Rights Reserved, built by Students at <A href="https://lambdaschool.com/">Lambda School </A> </h5>
            </CopyRightDiv>
        </div>
        </Border> 
    </Div>
    ); 
};

const FooterSection = styled.div` 
width: 100%;
background: #007090;
padding: 2rem; 
`

const Icons = styled.img `
padding: 1rem; 
`

const Testanchor = styled.a`
color:#eeeeff;
padding: 3rem;
font-size: 1.25rem; 
cursor: pointer;  
&:hover {
  color: #ffa630;
  }
`

export default Footer;