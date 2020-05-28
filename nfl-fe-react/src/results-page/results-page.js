import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Form } from 'semantic-ui-react';

import ResultsCard from './results-card.js';
import styled from "styled-components"; 

const initial_state = {
  player0_name: "",
  player1_name: "",
  week: "",
  searchResults: [],
}

const SearchPlayersStatForm = ({ onFormSubmit = () => {} }) => {
    const [state, setState] = useState(initial_state);
    
    const handleSubmit = async event => {
      event.preventDefault();
      const { player0_name, player1_name, week} = state;
      onFormSubmit(state);
      const searchResults = await searchNflPLayers({ player0_name, player1_name, week });
      setState({ ...state, searchResults });
      console.log(searchResults)
    };

  const handleChange = event => {
    setState({
      ...state, 
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };

  const searchNflPLayers = async ({ player0_name, player1_name, week }) => {
    try {
      const { data: { data: searchResults } = {} } = await axios.get(
        `https://nfl-perfect-trader.herokuapp.com/api/trade/?player0_id=${player0_name}&player1_id=${player1_name}&week=${week}`
      );
      return searchResults;
    } catch (err) {
      console.log(err)
    }
    return [];
  }


  const { player0_name, player1_name, week } = state;

  const PlayersStat = state.searchResults.map(result => {
    return (
    <div>
      <ResultsCard
        playersname={result.name}
        position={result.position}
        rankPrediction={result.rankPred}
        week_1={result.weekPred}
        isWinner={result.winner}
      />
    </div>
    )
  });
  
  return(
    <React.Fragment>
      <div>
        <Form onSubmit={handleSubmit}>
          <H3> Team 1 </H3>
          <Form.Input 
            type="text"
            name="player0_name"
            value={player0_name}
            onChange={handleChange}
            placeholder="1st player"
          />
          <H3> Team 2 </H3>
          <Form.Input 
            type="text"
            name="player1_name"
            value={player1_name}
            onChange={handleChange}
            placeholder="2nd player"
          />
          <H3> Week </H3>
          <Form.Input 
            type="number"
            name="week"
            value={week}
            onChange={handleChange}
            placeholder="week number"
          />
          <ButtonArea className="ButtonDiv"> 
          <Form.Button type="submit">Submit</Form.Button>
          </ButtonArea>
        </Form>
      </div>

      {PlayersStat}

    </React.Fragment>
  );
};

const H3 = styled.h3`
text-align: justify;
`

const ButtonArea =styled.div`
padding: 2rem; 
`


export default SearchPlayersStatForm;



