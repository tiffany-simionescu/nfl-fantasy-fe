import React from "react";
import styled from "styled-components"; 

import github from "../styling/icomoon/PNG/github.png";
import linkedin from "../styling/icomoon/PNG/linkedin.png"; 
import LargeDivder from "../styling/LargeDivder.js";  
import JimPicture from "../styling/images/JimPicture.jpg"; 
import ThatcherPicture from "../styling/images/ThatcherPicture.png";
import TiffanyPicture from "../styling/images/TiffanyPicture.jpeg"; 
import LauraPicture from "../styling/images/LauraPicture.png"; 
import MockPicture from "../styling/images/MockPicture.png"; 
import ZorigPicture from "../styling/images/ZorigPicture.jpg"; 

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Heading className="Title">
            <h1> About Us </h1> 
            <LargeDivder />
                </Heading>
            <MainArea className="Card-Area">
                <TeamMembers className="team-members">
                    <div className="Data-Science">
                        <Titles> Data Science  <LargeDivder /> </Titles> 
                    <Box className="Enkihzorig-Batsaikhan">
                        <img src={ZorigPicture} alt="Enkhzorig Batsaikhan" height="254px" width="200px" />
                        <h3> Enkhzorig Batsaikhan </h3>
                        <a href="https://github.com/ezorigo">
                            <Img src={github} alt="github link" /> </a>
                        <a href="https://www.linkedin.com/in/   enkhzorig-batsaikhan-b5785a133/">
                            <Img src={linkedin} alt="linkedin link" /> </a>
                    </Box>
                    <Box className="Jim-King">
                        <img src={JimPicture} alt="Jim King" />
                        <h3>Jim King </h3>
                        <a href="https://github.com/JimKing100" >
                            <Img src={github} alt="github link" /> </a>
                        <a href="https://www.linkedin.com/in/jimkinghomes/">
                            <Img src={linkedin} alt="linkedin link" /> </a>
                    </Box>
                    </div>
                <div className="Web-Development">
                    <Titles> Web Development  <LargeDivder /> </Titles>
                    <Box className="Thatcher-Phan">
                        <img src={ThatcherPicture} alt="Thatcher Phan" height="254px" width="250px"/>
                        <h3> Thatcher Phan </h3>
                        <a href="https://github.com/Th5tch3r">
                            <Img src={github} alt="github link" /> </a>
                        <a href="https://www.linkedin.com/in/nghi-phan-6b742b18a/ ">
                            <Img src={linkedin} alt="linkedin link" /> </a>
                    </Box>
                    <Box className="Tiffany-Simionescu">
                        <img src={TiffanyPicture} alt="Tiffany Simionescu" height="254px" width="250px" />
                        <h3> Tiffany Simionescu </h3>
                        <a href="https://github.com/tiffany-simionescu" >
                            <Img src={github} alt="github link" /> </a>
                        <a href="https://www.linkedin.com/in/tiffanysimionescu/">
                            <Img src={linkedin} alt="linkedin link"/> </a>
                    </Box>
                    <Box className="Laura-Theimer">
                        <img src={LauraPicture} alt="Laura Theimer" height="254px" width="250px"/>
                        <h3> Laura Theimer  </h3>
                        <a href="https://github.com/lauralyeinc">
                            <Img src={github} alt="github link" /> </a>
                        <a href="https://www.linkedin.com/in/theimerlaura/" >
                            <Img src={linkedin} alt="linkedin link" /> </a>
                    </Box>
                </div>
                </TeamMembers>
            </MainArea>
        </div>
    )
}

export default AboutPage; 


const Box = styled.div`
box-shadow: 10px 10px 5px grey; 
border: 1px solid grey; 
padding: 2rem; 
margin-left: 2rem;
margin-right: 2rem;
margin-bottom: 2rem;
`

const MainArea = styled.div`
width: 65%;
margin: auto; 
padding-bottom: 1rem; 
`

const Titles = styled.div`
padding: 1.5rem; 
font-size: 2rem;  
`

const Heading = styled.div`
background: #ffa630;
`

const TeamMembers = styled.div`
display: flex;
justify-content: space-between;
width: 75%; 
`

const Img = styled.img`
padding: .5rem; 
`



