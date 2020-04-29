import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import styled from "styled-components"; 
import './App.css';

const AutocompleteA = () => {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null); 

    useEffect(() => {
        const url = `https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb.json`; 
        // const testurl = `https://pokeapi.co/api/v2/pokemon-form/`
        const player = [];
        const promises = new Array(10)   // have 600 in the databases  
            .fill()  // need to study
            .map((value, index) => 
            fetch(url));       // need to see and find the res.data and the name it's call in the API.   
        Promise.all(promises)
        .then(playerArray => {
            console.log(playerArray); 
            return playerArray;   // errors stop with this set of code for now, // but need below to have options drop down. 
        //     return playerArray.map(value =>   
        //         value
        //         .json()
        //         .then(({ name }) => 
        //         player.push({name})
        //     )
        // );
    });
    setOptions(player);
    }, []);  


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
            <TypeDiv className="PlayerA-Textbox">
            <Input 
                id="autocompleteA" 
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
};

// /* styling */ 
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


export default App;
