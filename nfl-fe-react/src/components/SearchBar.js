// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Autosuggest from 'react-autosuggest';

// // import Players from '../components/PlayersApi.js';
// // import {PlayerList} from './PlayerList.js';

// const players = [
//     { 
//         name: 'Tom Brady'
//     },
//     {
//         name: 'Dan Bailey'
//     },
//     {
//         name: 'Matt Bryant'
//     }
// ];

// // const players = PlayerList[0];


// const getSuggestions = value => {
//     const inputValue = value.trim().toLowerCase();
//     const inputLength = inputValue.length;

//     return inputLength === 0 ? [] : players.filter(player =>
//         player.name.toLowerCase().slice(0, inputLength) === inputValue
//     );
// };

// const getSuggestionsValue = suggestion => suggestion.name;

// const renderSuggestion = suggestion => ( 
//     <div>
//         {suggestion.name}
//     </div>
// );

// class Search extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             value: '',
//             suggestions: []
//         }
//     }

//     onChange = (event, { newValue }) => {
//         this.setState({
//             value: newValue
//         });
//     }

//     onSuggestionsFetchRequested = ({ value }) => {
//         this.setState({
//             suggestions: getSuggestions(value)
//         })
//     }

//     onSuggestionsClearRequested = () => {
//         this.setState({
//             suggestions: []
//         })
//     }

//     render() {
//         const { value, suggestions } = this.state;

//         const inputProps = {
//             placeholder: "Enter player's name",
//             value,
//             onChange: this.onChange
//         };

//         return(
//             <Autosuggest 
//                 suggestions={suggestions}
//                 onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//                 onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//                 getSuggestionValue={getSuggestionsValue}
//                 renderSuggestion={renderSuggestion}
//                 inputProps={inputProps}
//             />
//         )
//     }

// }

// export default Search;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';
import Autosuggest from 'react-autosuggest';

import ResultsCard from '../results-page/results-card.js';
import styled from "styled-components"; 
import { PlayerList } from './PlayerList.js';

const initial_state = {
  player0_name: "",
  player1_name: "",
  week: "",
  searchResults: [],
}

const Search= ({ onFormSubmit = () => {} }) => {
    const [state, setState] = useState(initial_state);
    const [playerList, setPlayerList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const thisurl = ('https://tacklemytrade-api.herokuapp.com/api/players')
    useEffect(() => {
        setIsLoading(true);
        console.log(isLoading);
            axios.get(thisurl)
                .then(res => {
                    setPlayerList(res.data)
                    console.log("res.data", res.data);
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log("SearchErrorBE", err)
                    setIsLoading(false);
                })
    }, []);
    
    // var PlayersAPI = playerList.map(res => console.log(res))

    const getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : playersList.push.filter(player =>
            player.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };
    
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


export default Search;
