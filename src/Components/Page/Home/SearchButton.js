import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const options = ["Dhaka", "Kuakata", "Cox'sBazar"];
const SearchButton = () => {
  const [sValue, setSValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const navigator = useNavigate();

  const handleSubmit = () => {
    console.log(inputValue);

    navigator(`/hostels/${inputValue}`);
  };
  return (
    <div className="lg:mt-32">
      <h1 className="mb-5 text-3xl font-bold text-blue-700">
        Please Input Location
      </h1>
      {/* <div>{`sValue: ${sValue !== null ? `'${sValue}'` : "null"}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div> */}
      <Autocomplete
        value={sValue}
        onChange={(event, newValue) => {
          setSValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 500 }}
        renderInput={(params) => <TextField {...params} label="Search Hotel" />}
      />
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded lg:w-96 mt-2 text-2xl"
        >
          Search Hotel
        </button>
      </div>
    </div>
  );
};

export default SearchButton;
