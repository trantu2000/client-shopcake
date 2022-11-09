import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment } from "@mui/material";
import { Colors } from "../../../styles/theme";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";


const Search = ({ history }) => {
  const [keyword, setKeyWord] = useState("");
  console.log(keyword);

  const searchHandle = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/shop");
    }
  };

  return (
    <Box
      sx={{
        color: Colors.black,
      }}
      onSubmit={searchHandle}
      component="form"
    >
      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Tìm kiếm…"
          onChange={(e) => setKeyWord(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment sx={{ mr: 2 }} position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </Box>
  );
};

export default Search;
