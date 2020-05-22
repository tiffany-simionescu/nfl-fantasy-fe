import React from "react";
import styled from "styled-components";


function userGuide() {
    return (
        <GuideDiv className="UserGuide">
            <h2> Guide: How To Use the Trade Analyzer</h2>
                <h4>
                Let's do an analyzed trade with a member on your fantasy team with another person's team. We will compare the scores and know if you should trade or not trade. 
                Team A is your team and Team B is another person's team within your football fantasy league. Pick a player in your team and fill in above. Also do the same for Team B. Once you click submit that's when you get your stats back to know if it's a good trade or not. 
                Looking at the predicted score, the highest score wins. That player is predicted to get more points per game. The points you could win are based on how your fantasy football league is set up.  
                Ranking is also important because that means they are the top scoring player. The Higher the number, the better amount of points they are projected to make during each game.  It's all about having the highest rank, #1, and the most points per game. That's the basics of using the Trade Analyzer. 
                </h4>
            </GuideDiv>
    )
}

export default userGuide; 

const GuideDiv = styled.div`
margin: 0 auto;
width: 65%; 
padding: 2.5rem; 
height: 40rem; 
`