import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { cartReducer } from "./cart/cart.slice";
import { productsReducer } from './products/products.slice';
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";




const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
})

export default store


