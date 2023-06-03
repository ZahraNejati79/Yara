import { MenuItem, Select } from "@mui/material";
import * as cities from "../city";
const SelectCity = () => {
  return (
    <Select>
      {console.log(cities)}
      {/* {map((city) => (
        <MenuItem key={city} value={city}>
          {city}
        </MenuItem>
      ))} */}
    </Select>
  );
};

export default SelectCity;
