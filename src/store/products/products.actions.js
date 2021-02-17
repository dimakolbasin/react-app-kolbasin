export const SET_PRODUCTS = 'setProducts'


export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}
