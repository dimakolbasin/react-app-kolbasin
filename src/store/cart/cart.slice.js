import { createSlice } from '@reduxjs/toolkit'
import products from "../../data/products.mock";



const initialState = {
    products: []
};

const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart(state, action) {
            const catalog = products
            state.products.push(catalog[action.payload]);
            },
        deleteFromCart(state, action) {
            let arrFilter = state.products.filter(p => p.id === action.payload);
            state.products = state.products.filter(p => p.id !== action.payload);
            arrFilter.pop()
            arrFilter.forEach( items => state.products.push(items))
        }
    }
})

export const { addToCart, deleteFromCart } = slice.actions;


export const cartReducer = slice.reducer;

export const selectCartProducts = state => state.cart.products;
export const selectCartCount = (state) => selectCartProducts(state).length;
