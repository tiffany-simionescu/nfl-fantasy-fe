import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [players, setPlayers] = useState("");
  useEffect(()=> {

    async function fetchAPI() {

    const data = await fetch('https://nfl-perfect-trader.herokuapp.com/api/trade/?player0_id=RD-0150&player1_id=DC-0725&week=1');
          data
            .json()
            .then(res => setPlayers(res.data))
            .catch(err => console.log(err))
  }


  fetchAPI()

  })

   
  return (
    <div className="App">
      <div>
          {JSON.stringify(players[0])}
          {JSON.stringify(players[1])}
      </div>
    </div>
  );
}

export default App;
