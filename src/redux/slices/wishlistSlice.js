import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems:
    JSON.parse(localStorage.getItem("wishlist")) || [],
};

const wishlistSlice = createSlice({

  name: "wishList",

  initialState,

  reducers: {

    addToWishlist: (state, action) => {

      const existingItem = state.wishlistItems.find(
        (item) =>
          String(item.id) === String(action.payload.id)
      );


      if (!existingItem) {

        state.wishlistItems.push(action.payload);


        localStorage.setItem(
          "wishlist",
          JSON.stringify(state.wishlistItems)
        );

      }

    },


    removeFromWishlist: (state, action) => {

      state.wishlistItems =
        state.wishlistItems.filter(
          (item) =>
            String(item.id) !== String(action.payload)
        );


      localStorage.setItem(
        "wishlist",
        JSON.stringify(state.wishlistItems)
      );

    },


    clearWishlist: (state) => {

      state.wishlistItems = [];


      localStorage.setItem(
        "wishlist",
        JSON.stringify([])
      );

    },

  },

});


export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;


export default wishlistSlice.reducer;