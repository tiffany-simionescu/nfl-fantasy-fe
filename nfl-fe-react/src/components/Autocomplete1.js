import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PlayerList from './PlayerList';

function AutoCompleteBox1() {
  return (
    <Autocomplete 
      id="autocomplete-box"
      options={PlayerList}
      getOptionLabel={(option) => option.playerFull}
      style={{ width: 500 }}
      renderInput={(params) => <TextField { ...params } label="Player 1" variant="outlined" />}
    />
  )
}

export default AutoCompleteBox1;