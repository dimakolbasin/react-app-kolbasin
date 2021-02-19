import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProducts} from "../../components/main/main.component";

const initialState = {
    products: []
};

export const loadProducts = createAsyncThunk(
    'loadProducts',
    getProducts
);

const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(loadProducts.pending, (state) => {
            console.log('pending...');
        })

        builder.addCase(loadProducts.fulfilled, (state, action) => {
            state.products = action.payload
            console.log('fulfilled');
        })

        builder.addCase(loadProducts.rejected, (state) => {
            console.log('rejected');

        })
    }
})

export const productsReducer = slice.reducer;
export const selectProducts = state => state.products.products;

