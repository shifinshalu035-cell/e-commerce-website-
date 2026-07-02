import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    products :[],
    loading :false,
    error :null

};
const productSlice = createSlice ({
    name:"product",
    initialState,
    reducer:{
        setProducts:(state,actin)=>{
            state.products = actin.payload;

        },
        setLoading:(state,action)=>{
            state.loading = action.payload;
        }
    }
});
export const {
    setLoading,
    setProducts
}=productSlice.actions;
export default productSlice.reducer;
