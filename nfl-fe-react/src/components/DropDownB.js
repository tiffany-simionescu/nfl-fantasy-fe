import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";

function DropDownA() {
  return (
    <PlayerAreaB className="PlayA-Area">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="player-B">
          Pick Player B
        </Dropdown.Toggle>
        <Dropdown.Menu className="playerB-dropdown">
          <Dropdown.Item href="#"> Tom Brady </Dropdown.Item>
          <Dropdown.Item href="#"> Aaron Donald </Dropdown.Item>
          <Dropdown.Item href="#"> Drew Brees </Dropdown.Item>
          <Dropdown.Item href="#"> Khalil Mack </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </PlayerAreaB>
  );
}

const PlayerAreaB = styled.div`
  padding: 5rem;
`;

export default DropDownA;
