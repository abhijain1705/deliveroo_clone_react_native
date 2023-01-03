import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RestaurantProp {
  restaurant: {
    id: number;
    image: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: Array<any>;
    long: number;
    lat: number;
  };
}

const initialState = {
  restaurant: {
    id: null,
    image: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: [],
    long: null,
    lat: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurants(state, action: PayloadAction<any>) {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurants } = restaurantSlice.actions;

const restaurantReducer = restaurantSlice.reducer;

export const selectRestaurant = (state: any) => {
  return state.restaurantReducer.restaurant;
};

export default restaurantReducer;
