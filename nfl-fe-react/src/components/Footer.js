import React from 'react';

import styled from "styled-components"; 

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

export default Footer; 

const Div = styled.div`
width: 65%;
margin: auto;
padding: 2rem;
justify-content: center;
`

const Border = styled.div`
border-top: 1.25px solid #001021; 
`

const CopyRightDiv = styled.div`
color: 	#696969;
text-align: center; 
`

const A = styled.a`
text-decoration: none;
color: 	#696969; 
cursor: pointer; 
&:hover {
    color: #001021;
    }
`