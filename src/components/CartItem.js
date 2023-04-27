import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  MenuItem,
  Rating,
  Select,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartState } from "../context/Context";

const CartItem = ({ product }) => {
  const {
    cartState: { cart },
    cartDispatch,
  } = CartState();

  const [val, setVal] = useState(1);
  const [total, setTotal] = useState();

  useEffect(() => {
    setVal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
    cartDispatch({
      type: "CHANGE_CART_ITEM_QTY",
      payload: { id: product.id, qty: val },
    });
    console.log(val);
  }, [val]);

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ background: "#fff" }}
    >
      <img src={product.image} alt="nature photo" width="50px" height="50px" />
      <Typography variant="body1">{product.name}</Typography>
      <Typography variant="body1">{product.price.split(".")[0]}</Typography>
      <Rating name="read-only" value={product.ratings} readOnly />

      <Select
        // disableUnderline
        // classes={{ root: borderSelectClasses.select }}
        // labelId="inputLabel"
        // IconComponent={iconComponent}
        // MenuProps={menuProps}
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
          cartDispatch({
            type: "CHANGE_CART_ITEM_QTY",
            payload: { id: product.id, qty: e.target.value },
          });
        }}
      >
        {[...Array(product.inStock).keys()].map((x) => (
          <MenuItem value={x + 1}>{x + 1}</MenuItem>
        ))}
        {/* <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem> */}
      </Select>

      <IconButton
        sx={{ color: "#444" }}
        onClick={() =>
          cartDispatch({
            type: "REMOVE_FROM_CART",
            payload: product,
          })
        }
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default CartItem;
