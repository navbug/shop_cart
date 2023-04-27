import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartState } from "../context/Context";

const NavCartItem = ({product}) => {
  const { cartState, cartDispatch } = CartState();

  
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ minWidth: "250px" }}
    >
      <img
        src={product.image}
        alt=""
        width="50px"
        height="50px"
        style={{ borderRadius: "15px" }}
      />
      <Box display="flex" flexDirection="column" p="5px 10px">
      <Typography variant="body1">{product.name}</Typography>
      <Typography variant="body1">{" ₹"}{product.price.split(".")[0]}</Typography>
      </Box>
      <IconButton onClick={() => cartDispatch({
        type: "REMOVE_FROM_CART",
        payload: product,
      })} sx={{}}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default NavCartItem;
