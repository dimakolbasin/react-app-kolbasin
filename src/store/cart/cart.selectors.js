export const selectCartProducts = state => state.cart
export const selectCartCount = (state) => {
    let counter = 0;
    selectCartProducts(state).forEach(value => counter += value.count);
    return counter;
}
