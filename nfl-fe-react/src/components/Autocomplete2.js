import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {PlayerList} from './PlayerList';

function AutoCompleteBox2(props) {
  return (
    <Autocomplete 
      // id={props.id}
      id="combo-box-demo"
      options={PlayerList}
      onChange={props.onChange}
      // options={PlayerList.map(option => option.playerFull)}
      getOptionSelected={(option, value) => option.playerFull === value.playerFull}
      getOptionLabel={(option) => option.playerFull}
      style={{ width: 500 }}
      renderInput={(params) => <TextField 
        { ...params } 
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        inputValue={props.inputValue}
        label={props.label} 
        variant="outlined" />}
    />
  )
}

export default AutoCompleteBox2;