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
            state.products.push(catalog[action.payload])
            },
        deleteFromCart(state, action) {
            state.products = state.products.filter(p => p.id !== action.payload)
        }
    }
})

export const { addToCart, deleteFromCart } = slice.actions


export const cartReducer = slice.reducer

export const selectCartProducts = state => state.cart.products
export const selectCartCount = (state) => selectCartProducts(state).length
