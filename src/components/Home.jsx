import { Box, Stack } from "@mui/material";
import React from "react";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import { CartState } from "../context/Context";

const Home = () => {
  const {
    cartState: { products },
    productDispatch: { byStock, byFastDelivery, sort, byRating, searchQuery },
  } = CartState();
  console.log(CartState());

  const sortedProducts = products;
  console.log(sortedProducts);
  if (sort) {
    console.log("abc");
    sortedProducts = sortedProducts.sort((a, b) =>
      sort === "lowToHigh" ? a.price - b.price : b.price - a.price
    );
    console.log(sortedProducts);
  }

  // if (!byStock) {
  //   sortedProducts = sortedProducts.filter((p) => p.inStock);
  // }

  return (
    <Stack display="flex" flexDirection="row">
      <Box height="90vh" p="2" width="25vw">
        <Filters />
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        p={2}
        flex="2"
        bgcolor="#999"
        mt="75px"
      >
        {sortedProducts.map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </Box>
    </Stack>
  );
};

export default Home;
