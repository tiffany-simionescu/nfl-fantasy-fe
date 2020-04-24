import React, {useEffect, useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios"; 
import './App.css';
// import autocomplete from "./components/autocomplete.js"; 


const AutocompleteA = () => {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null); 

    useEffect(() => {
        const proxyurl = 'http://cors-anywhere.herokuapp.com/'; // this cor's link is causing problems, 429 TOO MANY REQUESTS. BUT getting a "response" 10 times. 

        const player = [];
        const promises = new Array(10)   // have 600 in the databases  
            .fill()  // need to study
            .map((value, index) => 
            fetch(proxyurl + `https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb/api/players/`));
        Promise.all(promises)
        .then(playerArray => {
            console.log(playerArray); // response 10 times, getting closer. 
            return playerArray.map(value =>    // this is a problem area, it can't map over something that isn't showing correctly. "response"...
                value
                .json()
                .then(({ name }) => 
                player.push({name})
            )
        );
    });
    setOptions(player);
    }, []);  
    
    // useEffect(() => {
    //     const player = [];
    //     const promises = new Array(20)   // have 600 in the databases  
    //         .fill()  // need to study
    //         .map((value, index) => 
    //         fetch(`https://pokeapi.co/api/v2/pokemon-form/${index + 1}`));
    //     Promise.all(promises)
    //     .then(res => {
    //         console.log(res); 
    //         return res.map(value => 
    //             value
    //                 .json()
    //                 .then(({ name }) => 
    //                 player.push({name})
    //         )
    //     );
    // });
    // setOptions(player);
    // }, []);

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside, true);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplay(false);
        }
    };

    const updatePlayer = player => {
        setSearch(player);
        setDisplay(false); 
    };



    return (
        <MainDiv ref={wrapperRef} className="PlayerAutoSearch">
            <TypeDiv className="PlayerA-Area">
            <Input 
                id="autocomplete" 
                onClick={() => setDisplay(!display)}
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder="Player A"
            />
            {display && ( 
                <AutoContainerDiv
                className="List-Area"> 
                    {options
                    .filter(({ name }) => name.indexOf(`${search}`, "gi") > -1) //globaly ignore 
                    .map((value, index ) => {
                        return (
                            <OptionsDiv
                                onClick={() => updatePlayer(value.name)}
                                className="options"
                                key={index}
                                tabIndex="0"
                            >
                                <span> {value.name} </span>
                                </OptionsDiv>
                        );
                    })}
                    </AutoContainerDiv>
            )}
            <button> Pick Player A</button>
            </TypeDiv>
        </MainDiv>
    );

};




/* styling */ 
const Input = styled.input`
border: 2px solid red; 
color:  palevioletred;
background:papayawhip;
`
/* always shows */ 
const MainDiv = styled.div` \
border: 2px solid black; 
width: 80%; 
`
const TypeDiv = styled.div`
border: 2px solid purple;
width: 60%;
`
/* Shows when selecting player */
const AutoContainerDiv = styled.div`
border: 2px solid green;  
width: 50%; 
`
/* options areas */ 
const OptionsDiv = styled.div`
border: 2px solid yellow;
width: 50%; 
&:hover {
    background: black;
    color: white; 
}
`

function App() {
    return (
        <div className="App">
            <h1> The Perfect Trade: Football Fantasy Trade Anaylzer</h1>
            <div className="Nav-Area">
            </div>

            <div className="Main-Area">
            <AutocompleteA/> 
            </div>

            <div className="Foot-Area">
            </div>
        </div>
    );
}

export default App;
