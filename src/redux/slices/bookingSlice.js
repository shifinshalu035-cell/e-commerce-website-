import { createSlice } from "@reduxjs/toolkit";


const savedOrders = localStorage.getItem("orders");


const initialState = {

    orders: savedOrders 
    ? JSON.parse(savedOrders) 
    : []

};


const saveOrdersToLocalStorage = (orders)=>{

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

};



const bookingSlice = createSlice({

    name:"booking",

    initialState,


    reducers:{


        addOrder:(state,action)=>{

            state.orders.push(action.payload);

            saveOrdersToLocalStorage(state.orders);

        },


        removeOrder:(state,action)=>{

            state.orders = state.orders.filter(
                (order)=>order.id !== action.payload
            );


            saveOrdersToLocalStorage(state.orders);

        },


        clearOrders:(state)=>{

            state.orders=[];

            saveOrdersToLocalStorage(state.orders);

        }


    }


});


export const {
    addOrder,
    removeOrder,
    clearOrders

}=bookingSlice.actions;


export default bookingSlice.reducer;