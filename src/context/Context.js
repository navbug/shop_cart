import React, { createContext, useContext, useReducer } from 'react'
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from './Reducers';


const Cart = createContext();

const Context = ({children}) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.nature(),
    fastDelivery: faker.datatype.boolean(),
    inStock: faker.helpers.arrayElement([1,2,3,4,5]),
    ratings: faker.helpers.arrayElement([1,2,3,4,5]),
  }));

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  })

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  })

  return (
    <Cart.Provider value={{cartState, cartDispatch, productState, productDispatch}}>
      {children}
    </Cart.Provider>
  )
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
}