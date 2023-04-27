import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Rating } from '@mui/material';
import { CartState } from '../context/Context';

const SingleProduct = ({product}) => {
  const {cartState: {cart}, cartDispatch} = CartState();

  return (
    <Card sx={{ margin: "0.7rem", maxWidth: 345, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt="nature photo"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography gutterBottom variant="body" component="div">
                ₹ {product.price.split(".")[0]}
              </Typography>
              <Typography gutterBottom variant="body" component="div">
                {product.fastDelivery ? "Fast Delivery" : "3-4 days delivery"}
              </Typography>
              <Rating name="read-only" value={product.ratings} readOnly />
            </CardContent>
          </CardActionArea>
          <CardActions sx={{marginTop: "-13px"}}>
            {cart.some((p) => p.id === product.id) ? (<Button variant="contained" size="small" color="error" onClick={() => cartDispatch({
                type: "REMOVE_FROM_CART",
                payload: product,
              })}>
              - Remove from Cart
            </Button>) : (<Button variant="contained" size="small" color="primary" onClick={() => cartDispatch({
                type: "ADD_TO_CART",
                payload: product,
              })}>
              + Add to Cart
            </Button>)}
            {/* <Button variant="contained" size="small" color="primary" onClick={() => cartDispatch({
                type: "ADD_TO_CART",
                payload: product,
              })}>
              + Add to Cart
            </Button> */}
          </CardActions>
        </Card>
  )
}

export default SingleProduct