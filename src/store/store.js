import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import cartReducer from "./cart/cart.reducer";
import productsReducer from './products/products.reducer';
import thunk from "redux-thunk";


const reducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store


