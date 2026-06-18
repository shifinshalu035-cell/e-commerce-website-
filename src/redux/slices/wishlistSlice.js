import { createSlice } from "@reduxjs/toolkit";
import Wishlist from "../../pages/Wishlist";
const whishListSlice = createSlice({
    name:"wishList",
    initialState:{
        wishlistItems:[],
    },
    reducers:{
        addToWishlist:(state,action)=>{
            state.wishlistItems.push(action.payload);
        },
        removeFromWishlist:(state,action)=>{
            state.wishlistItems=state.WishlistItems.filter((item)=>item.id !== action.payload);
        }
    },
});
export const {addToWishlist,removeFromWishlist} = whishListSlice.actions;
export default whishListSlice.reducer;
