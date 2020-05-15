import React from 'react';
import styled from "styled-components";

import twitter from "../styling/icomoon/PNG/twitter.png"; 
import facebook2 from "../styling/icomoon/PNG/facebook2.png";
import instagram from "../styling/icomoon/PNG/instagram.png";
import share from "../styling/icomoon/PNG/share.png";

function Footer () {
  return (
    <FooterSection className="footer">
      <div className="Social-Media">
        <h3> Keep updated on players, content adds or share with your friends </h3> <Icons src={share} alt="share icon" />
        <Icons src={facebook2} alt="facebook logo" />
        <Icons src={twitter} alt="twitter logo" />
        <Icons src={instagram} alt="instagram logo" />

      </div>
      <div className="links">
        <Testanchor href="http://www.tacklemytrade.com/">
          Home
        </Testanchor>
        <Testanchor href="#">
          How To Play
        </Testanchor>
      <div className="copyright">
          <h5>Copyright © 2020 Tackle My Trade. All Rights Reserved</h5>
      </div>
      </div>
    </FooterSection>
  )
}

const FooterSection = styled.div`
border: 2px solid red; 
width: 100%;
background: #007090;
padding: 2rem; 
`

const Icons = styled.img `
padding: 1rem; 
`

const Testanchor = styled.a`
border: 2px solid red; 
color:#eeeeff;
padding: 3rem;
font-size: 1.25rem; 
cursor: pointer;  
&:hover {
  color: #ffa630;
  }
`

export default Footer;