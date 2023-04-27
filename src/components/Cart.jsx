import React from "react";
import NavBar from "./NavBar";
import { Box, Button, IconButton, MenuItem, Rating, Select, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CartItem from "./CartItem";
import { CartState } from "../context/Context";

const Cart = () => {
  const { cartState: {cart}, cartDispatch } = CartState();

  const cartTotal = cart.reduce((acc, curr) => acc + Number(curr.price), 0);

  return (
    <Stack
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      sx={{ marginTop: "80px" }}
    >
      <Box height="90vh" bgcolor="#d1d1d1" sx={{ width: "78%", margin: "15px" }}>
          {cart.map(item => {
            return <CartItem product={item} key={item.id}/>
          })}
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ background: "#888", width: "22%", padding: "10px" }}
      >
        <Typography variant="body1">Subtotal ({cart.length}) items:</Typography>
        <Typography variant="body1">{cartTotal}</Typography>
        <Button variant="contained">Checkout</Button>
      </Box>
    </Stack>
  );
};

export default Cart;
