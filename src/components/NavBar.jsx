import {
  Button,
  Stack,
  Typography,
  ButtonGroup,
  Badge,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { PersonAdd } from "@mui/icons-material";
import NavCartItem from "./NavCartItem";
import { CartState } from "../context/Context";

const NavBar = () => {
  const {
    cartState: { cart },
  } = CartState();
  // console.log(cart[0].qty);

  const [itemCount, setItemCount] = useState(0);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      position="fixed"
      top="0"
      width="100%"
      zIndex={10}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      sx={{ background: "#444", color: "#fff", padding: "1rem" }}
    >
      <Link to="/">
        <Typography variant="h6">CART</Typography>
      </Link>
      <SearchBar />

      <div
        onClick={handleClick}
        style={{ background: "#333", padding: "10px", borderRadius: "14px", cursor: "pointer" }}
      >
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />
          {cart.length}
        </Badge>
        <Typography variant="body" sx={{ marginLeft: "15px" }}>
          Cart
        </Typography>
      </div>

      {/* <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
          {/* <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>Cart
          </IconButton> */}
      {/* <Typography onClick={handleClick}>abc</Typography>
      </Box> */}

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {cart.map((p) => (
          <MenuItem product={p} key={p.id} onClick={handleClose}>
            <NavCartItem product={p} key={p.id}/>
          </MenuItem>
        ))}
        {/* <MenuItem onClick={handleClose}>
          <NavCartItem />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavCartItem />
        </MenuItem> */}
        <Divider />
        <Link to="/cart">
          <Button variant="contained" sx={{ width: "80%", left: "10%" }}>
            Go to Cart{" "}
          </Button>
        </Link>
      </Menu>
    </Stack>
  );
};

export default NavBar;
