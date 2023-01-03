import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";
import restaurantReducer from "./restaurantSlice";

export const store = configureStore({
    reducer: {
        basketReducer,
        restaurantReducer
    }
});