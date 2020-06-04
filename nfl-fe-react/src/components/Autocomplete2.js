import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PlayerList from './PlayerList';

function AutoCompleteBox2(props) {
  return (
    <Autocomplete 
      id={props.id}
      options={PlayerList}
      value={props.value}
      onChange={props.onChange}
      getOptionSelected={(option, value) => option.playerFull === value.playerFull}
      getOptionLabel={(option) => option.playerFull}
      style={{ width: 500 }}
      renderInput={(params) => <TextField { ...params } label={props.label} variant="outlined" />}
    />
  )
}

export default AutoCompleteBox2;