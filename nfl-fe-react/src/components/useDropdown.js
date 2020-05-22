import React, { useState } from "react";

const useDropdown = (label, defaultstate, options) => {
  const [state, setState] = useState();
  const Dropdownmaker = () => (
    <label htmlFor={label}>
      {label}
      <select
        id={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={!options.length}
      >
        <option>Player Name</option>
        {options
          .map((player) => (
            <option key={player.playerID} value={player.playerFull}>
              {player.playerFull} - {player.playerID}
            </option>
          ))
          .sort()}
      </select>
    </label>
  );
  return [state, Dropdownmaker, setState];
};

export default useDropdown;
