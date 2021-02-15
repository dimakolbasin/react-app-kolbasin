import { createStore, combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer"
import productsReducer from './products/products.reducer'

const reducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store


