import React from "react";
import PlayerList from "./PlayerList";
import useDropdown from "./useDropdown";

function DropDownB() {
  const [player, PlayerDropDown] = useDropdown("Players", "", PlayerList);
  return <PlayerDropDown class="PlayB-Area" />;
}
export default DropDownB;
