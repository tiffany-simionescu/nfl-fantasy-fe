import React from "react";
import styled from "styled-components"; 

import github from "../styling/icomoon/PNG/github.png";
import linkedin from "../styling/icomoon/PNG/linkedin.png"; 

import JimPicture from "../styling/images/JimPicture.jpg"; 
import ThatcherPicture from "../styling/images/ThatcherPicture.png";
import TiffanyPicture from "../styling/images/TiffanyPicture.jpeg"; 
import LauraPicture from "../styling/images/LauraPicture.png"; 
import MockPicture from "../styling/images/MockPicture.png"; 

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Heading className="Title">
            <h1> About Us </h1> 
                </Heading>
            <MainArea className="Card-Area">
                <TeamMembers className="team-members">
                    <div className="Data-Science">
                        <Titles> Data Science </Titles> 
                    <Box className="Enkihzorig-Batsaikhan">
                        <img src={MockPicture} alt="Enkhzorig Batsaikhan" height="254px" width="250" />
                        <h3> Enkhzorig Batsaikhan </h3>
                        <a href="https://github.com/ezorigo">
                            <img src={github} alt="github link" /> </a>
                        <img src={linkedin} alt="linkedin link" />
                    </Box>
                    <Box className="Jim-King">
                        <img src={JimPicture} alt="Jim King" />
                        <h3>Jim King </h3>
                        <a href="https://github.com/JimKing100" >
                            <img src={github} alt="github link" /> </a>
                        <a href="https://www.linkedin.com/in/jimkinghomes/">
                            <img src={linkedin} alt="linkedin link" /> </a>
                    </Box>
                    </div>
                <div className="Web-Development">
                    <Titles> Web Development </Titles>
                    <Box className="Thatcher-Phan">
                        <img src={ThatcherPicture} alt="Thatcher Phan" height="254px" width="250px"/>
                        <h3> Thatcher Phan </h3>
                        <a href="https://github.com/Th5tch3r">
                            <img src={github} alt="github link" /> </a>
                        <a href="https://www.linkedin.com/in/nghi-phan-6b742b18a/ ">
                            <img src={linkedin} alt="linkedin link" /> </a>
                    </Box>
                    <Box className="Tiffany-Simionescu">
                        <img src={TiffanyPicture} alt="Tiffany Simionescu" height="254px" width="250px" />
                        <h3> Tiffany Simionescu </h3>
                        <a href="https://github.com/tiffany-simionescu" >
                            <img src={github} alt="github link" /> </a>
                        <a href="https://www.linkedin.com/in/tiffanysimionescu/">
                            <img src={linkedin} alt="linkedin link"/> </a>
                    </Box>
                    <Box className="Laura-Theimer">
                        <img src={LauraPicture} alt="Laura Theimer" height="254px" width="250px"/>
                        <h3> Laura Theimer  </h3>
                        <a href="https://github.com/lauralyeinc">
                            <img src={github} alt="github link" /> </a>
                        <a href="https://www.linkedin.com/in/theimerlaura/" >
                            <img src={linkedin} alt="linkedin link" /> </a>
                    </Box>
                </div>
                </TeamMembers>
            </MainArea>
        </div>
    )
}

export default AboutPage; 


const Div = styled.div`
border: 2px solid red; 
`

const Box = styled.div`
box-shadow: 10px 10px 5px grey; 
border: 1px solid grey; 
padding: 1rem; 
`

const MainArea = styled.div`
width: 65%;
margin: auto; 
padding-bottom: 2rem; 
`

const Titles = styled.div`
padding: 2.5rem; 
font-size: 2rem; 
`

const Heading = styled.div`
background: #ffa630;
font-color: white; 
`

const TeamMembers = styled.div`
display: flex;
justify-content: space-between;
width: 75%; 
`

