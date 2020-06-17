import React from "react";
import styled from "styled-components"; 

import github from "../styling/icomoon/PNG/github.png";
import linkedin from "../styling/icomoon/PNG/linkedin.png"; 

const AboutPage = () => {
    return (
        <div className="AboutPage"> 
            <div className="Card-Area">
                <h1> About Us </h1>
                <div className="team-members">
                    <Div className="DataScience">
                        <h1> Data Science </h1> 
                    <Div className="Enkihzorig-Batsaikhan">
                        <h4> Photo here </h4>
                        <h3> Enkhzorig Batsaikhan </h3>
                    </Div>
                    <Div className="Jim-King">
                        <h4> Photo here </h4>
                        <h3>Jim King </h3>
                    </Div>
                    </Div>
                <Div className="WebDevelopment">
                    <div className="Jim-King">
                        <h4> Photo here </h4>
                        <h3> Thacher Phan </h3>
                    </div>
                    <div className="Jim-King">
                        <h4> Photo here </h4>
                        <h3> Tiffany Simionescu </h3>
                    </div>
                    <div className="Jim-King">
                        <h4> Photo here </h4>
                        <h3> Laura Theimer  </h3>
                    </div>
                </Div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage; 


const Div = styled.div`
border: 2px solid red; 
`

