import React, {useEffect, useState, useRef } from "react";
import styled from "styled-components";

const autocomplete = () => {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null); 

    useEffect(() => {
        const player = [];
        const promises = newArray(10)
            .fill()
            .map((value, index) => 
            fetch("https://api.github.com/users/lauralyeinc"));
        Promise.all(promises).then(playersArray => {
            return playersArray.map(value => 
                value
                .json()
                .then(({name }) => 
                player.push({name})
            )
        );
    });
    setOptions(player);
}, []);

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
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
        <div ref={wrapperRef} className="PlayerAutoSearch">
            <h1> Player A Search Box </h1>
            <Input 
                id="autocomplete" 
                onClick={() => setDisplay(!display)}
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder="Player A"
            />
            {display && ( 
                <div className="autoContainer">
                    {options
                    .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
                    .map((value, index ) => {
                        return (
                            <div 
                                onClick={() => updatePlayer(value.name)}
                                className="option"
                                key={index}
                                tabIndex="0"
                            >
                                <span> {value.name} </span>
                                </div>
                        );
                    })}
                    </div>
            )}
        </div>
    );

      {/* Add Later  */}
            {/* <Input 
                id="autocomplete"
                id="autocomplete" 
                onClick={() => setDisplay(!display)}
                value={search}
                onChange={event => setSearch(event.target.value)} 
                placeholder="Player B" /> */}
};

export default autocomplete; 


/* styling */ 
const Input = styled.input`
border: 2px solid black; 
color:  palevioletred;
background:papayawhip;
`