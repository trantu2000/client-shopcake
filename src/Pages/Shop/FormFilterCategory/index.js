import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



export default function FormFilterCategory() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const categories = [
    "cupcake",
    "redvelvet",
    "biscuit",
    "butter",
    "donut",
    "cookie",
  ];

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Tất cả</em>
          </MenuItem>
          {categories.map((item) => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          ))}
         
        </Select>
      </FormControl>
    </div>
  );
}
