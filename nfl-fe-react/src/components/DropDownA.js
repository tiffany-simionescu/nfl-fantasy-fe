import React from "react"; 
import styled from "styled-components"; 
import Dropdown from "react-bootstrap/Dropdown"; 

function DropDownA() { 

    return(
    <PlayeraArea className="PlayA-Area">
        <Dropdown>
            <Dropdown.Toggle variant="success" id="player-A">
                Pick Player A 
            </Dropdown.Toggle>
        <Dropdown.Menu className="playerA-dropdown">
            <Dropdown.Item eventkey="1"> Tom Brady </Dropdown.Item>  
            <Dropdown.Item eventkey="2" disabled> Aaron Donald </Dropdown.Item>
            <Dropdown.Item eventkey="3" diabled> Drew Brees </Dropdown.Item>
            <Dropdown.Item eventkey="4" diabled> Khalil Mack </Dropdown.Item>
        </Dropdown.Menu>          
        </Dropdown>
    </PlayeraArea> 
    ); 
}


const PlayeraArea = styled.div`
padding: 5rem; 
`

export default DropDownA; 



