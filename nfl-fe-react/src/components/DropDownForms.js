import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import { useForm } from "react-hook-form";
import PlayerList from "./PlayerList";

function DropDownForms(props) {
  const { register, handleSubmit, setValue } = useForm();
  //################################ This is for multiple Players ###################################

  // React.useEffect(() => {
  //   register({ name: "multiple" });
  // });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* ################################ This is for multiple Players ################################### */}
      {/* <Autocomplete
        id="combo-box-demo"
        multiple
        options={PlayerList}
        getOptionLabel={(option: PlayerNames) => option.playerFull}
        style={{ width: 300 }}
        onChange={(data) => {
          setValue("multiple", data);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            name="multiple"
            label="Combo box - Multiple"
            variant="outlined"
            fullWidth
            // inputRef={register}
          />
        )}
      />
      <div style={{ padding: "10px" }} /> */}
      <div class="autocomplete-form">
        <Autocomplete
          id="combo-box-demo"
          options={PlayerList}
          getOptionLabel={(option) => option.playerFull}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              name="single1"
              value={props.player0_name}
              label="Enter Players Name"
              variant="outlined"
              fullWidth
              inputRef={register}
            />
          )}
        />

        <Autocomplete
          id="combo-box-demo"
          options={PlayerList}
          getOptionLabel={(option) => option.playerFull}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              name="single2"
              value={props.player1_name}
              label="Enter Players Name"
              variant="outlined"
              fullWidth
              inputRef={register}
            />
          )}
        />
      </div>
      <div style={{ padding: "30px" }}>
        <input type="submit" />
      </div>
    </form>
  );
}

// interface PlayerNames {
//   playerFull: string;
//   playerID: string;
// }
export default DropDownForms;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
