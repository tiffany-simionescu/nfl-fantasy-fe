import React from "react";
import styled from "styled-components"; 



export default function LargeDivider() {
    return (
        <div className="Styled Divider">
            <Div className="styling"></Div>
        </div>
    )
} 


const Div = styled.div`
border-bottom: 2.5px solid black;
viewpoint-width: 100%;  
`