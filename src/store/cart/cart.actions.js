export const ADD_TO_CART = 'addToCart'
export const DELETE_FROM_CART = 'deleteFromCart'
export const CLEAR_CART = 'clearCart'

export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        payload: id,
    }
}

export function deleteFromCart(id) {
    return {
        type: DELETE_FROM_CART,
        payload: id
    }
}

export function clearCart() {
    return {
        type: CLEAR_CART
    }
}
