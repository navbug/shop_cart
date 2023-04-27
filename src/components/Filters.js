import { Star } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { CartState } from "../context/Context";

const Filters = () => {
  const {productDispatch, productState: {byStock, byFastDelivery, sort, byRating}} = CartState();
  const [value, setValue] = React.useState(3);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    event.preventDefault();
    // setChecked(event.target.checked);
  };

  return (
    <Box
      position="absolute"
      top="80px"
      display="flex"
      flexDirection="column"
      height="90vh" 
      p="2" 
      width="25vw"
      sx={{ padding: "1rem", margin: "15px" }}
    >
      <Typography variant="h5" mb="15px">
        Filters
      </Typography>

      <FormControl sx={{ marginBottom: "15px" }}>
        <RadioGroup
        // aria-labelledby="demo-radio-buttons-group-label"
        // defaultValue="ascending"
        // name="radio-buttons-group"
        >
          <FormControlLabel
            value="ascending"
            control={<Radio />}
            label="Ascending"
            onChange={() => productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh"
            })}
            checked={sort === "lowToHigh" ? true : false}
          />
          <FormControlLabel
            value="descending"
            control={<Radio />}
            label="Descending"
            onChange={() => productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })}
            checked={sort === "highToLow" ? true : false}
          />
        </RadioGroup>

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={byStock}
                onChange={() => productDispatch({
                  type: "FILTER_BY_STOCK",
                })}
                name="outOfStock"
              />
            }
            label="Include out of stock"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={false}
                onChange={handleChange}
                name="fastDelivery"
              />
            }
            label="Fast delivery only"
          />
        </FormGroup>
      </FormControl>

      <Box>
        <Typography variant="body" sx={{fontSize: "1.24rem", marginRight: "10px"}}>Rating:</Typography>
        <Rating
          name="text-feedback"
          value={value}
          onChange={(e, v) => {
            setValue(v);
          }}
          on
          emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </Box>

      <Button variant="contained" sx={{margin: "35px 15px", maxWidth: "160px", padding: "10px", fontSize: "1rem"}}>
        Clear Filters
      </Button>
    </Box>
  );
};

export default Filters;
