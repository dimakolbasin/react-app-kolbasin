import {SET_PRODUCTS, setProducts} from "./products.actions";
import {getProducts as getProductsFromData} from "../../components/main/main.component";

const initialProductsState = {
    products: []
}

function productsReducer(state = initialProductsState, action) {
    switch (action.type) {

        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }

        default:
            return state
    }
}

export function getProductsReducer() {
    return async (dispatch) => {
        const products = await getProductsFromData()
        dispatch(setProducts(products))
    }
}



export default productsReducer
