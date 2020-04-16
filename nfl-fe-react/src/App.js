import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [players, setPlayers] = useState("");
  useEffect(()=> {
    fetch('https://nfl-perfect-trader.herokuapp.com/api/trade/?player0_id=RD-0150&player1_id=DC-0725&week=1')
      .then(response => response.json())
      .then(response => setPlayers(response.data))
      .catch(err =>{console.log("there is an error fetching the data")})
  },[players])
   
  return (
    <div className="App">
    </div>
  );
}

export default App;
