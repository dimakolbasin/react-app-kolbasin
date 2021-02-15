import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART } from "./cart.actions";
import products from "../../data/products.mock";

const initialCartState = new Map();

function cartReducer(state = initialCartState, action) {
    switch (action.type) {

        case ADD_TO_CART:
            const catalog = products
            if (state.has(action.payload)) {
                let productFromCart = state.get(action.payload);
                ++productFromCart.count;
                productFromCart.totalPrice = productFromCart.count * productFromCart.price;
                state.set(action.payload, productFromCart);


            } else {
                const product = catalog[action.payload];
                ++product.count;
                product.totalPrice = product.count * product.price;
                state.set(action.payload, product);
                console.log(state)
            }
            return state


        case DELETE_FROM_CART:
            if (state.has(action.payload)) {
                let productFromCart = state.get(action.payload);
                --productFromCart.count;

                if (productFromCart.count === 0) {
                    state.delete(action.payload);

                } else {
                    productFromCart.totalPrice = productFromCart.count * productFromCart.price;
                    state.set(action.payload, productFromCart);
                }
            }

            else {
                return state;
            }
            return state

        case CLEAR_CART: {
            return state.clear()
        }

        default:
            return state;
    }

}



export default cartReducer
