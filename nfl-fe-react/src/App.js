import React, {useEffect, useState, useRef } from "react";
import styled from "styled-components";
import express from "express"; 
// import axios from "axios"; 
import './App.css';
// import autocomplete from "./components/autocomplete.js"; 

//dependencies 
const { createProxyMiddle } = require('http-proxy-middleware'); 


// proxy middleware options
const apioptions = {
    target: `https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb/api/players/`,
    changeOrigin: true,
    ws: true, //proxy websockets
    pathRewrite: {
        '^/api/old-path' : '/pai/new-path',  //rewrite path
        '^/api/remove/path' : '/path'  // remove base path
    },
    router: {
        // when request.headers.host == 'dev.localhost:3000',
        // overide target to localhost:8080
        'dev.localhost:3000' : 'http://localhost:8080'
    }
}
//create proxy (without context)
const Proxy = createProxyMiddle(apioptions);
//mount Proxy in web server
const app = express();
app.use('/api', Proxy);
app.listen(3000); 


const AutocompleteA = () => {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null); 

    useEffect(() => {
        const proxyurl = 'http://cors-anywhere.herokuapp.com/'; // this cor's link is causing problems, 429 TOO MANY REQUESTS. BUT getting a "response" 600 times in console.log ine 24. 
        const url = `https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb/api/players/`; 
        const player = [];
        const promises = new Array(600)   // have 600 in the databases  
            .fill()  // need to study
            .map((value, index) => 
            fetch(proxyurl + url));       // need to see and find the res.data and the name it's call in the API.   
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
            <TypeDiv className="PlayerA-Area">
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

const AutocompleteB = () => {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null); 

    useEffect(() => {
        const proxyurl = 'http://cors-anywhere.herokuapp.com/'; // this cor's link is causing problems, 429 TOO MANY REQUESTS. BUT getting a "response" 600 times in console.log ine 24. 
        const url = `https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb/api/players/`; 
        const player = [];
        const promises = new Array(600)   // have 600 in the databases  
            .fill()  // need to study
            .map((value, index) => 
            fetch(proxyurl + url));
        Promise.all(promises)
        .then(playerArray => {
            console.log(playerArray); 
            return playerArray;   // errors stop with this set of code for now, // but need below to have options to pick from.
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
            <TypeDiv className="PlayerB-Area">
            <Input 
                id="autocompleteB" 
                onClick={() => setDisplay(!display)}
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder="Player B"
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
            <button> Pick Player B</button>
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
            <AutocompleteB/>  
            </div>

            <div className="Foot-Area">
            </div>
        </div>
    );
}

export default App;
