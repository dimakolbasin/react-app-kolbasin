const initialProductsState = {
    products: []
}

function productsReducer(state = initialProductsState, action) {
    switch (action.type) {

        case 'setProducts':
            return {
                ...state,
                products: action.payload,
            }


        default:
            return state
    }
}

export default productsReducer
