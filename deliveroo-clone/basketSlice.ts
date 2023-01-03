import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BasketProp {
  items: Array<any>;
}

const initialState = {
  items: [],
} as BasketProp;

interface PayloadType {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<PayloadType>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<PayloadType>) => {
      
      const index = state.items.findIndex(
        (itm) => itm.id === action.payload.id 
      );
      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id} as its not in basket!)`
        );
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

const basketReducer = basketSlice.reducer;

export const selectBasketItems = (state: any) => {
  return state.basketReducer.items;
};

export const selectBasketTotal = (state: any) =>
  state.basketReducer.items.reduce((acc: any, curr: any) => {
    return acc += curr["price"];
  }, 0);

export const selectBasketItemsWithId = (state: any, id: string) =>
  state.basketReducer.items.filter((itm: any, ind: number) => {
    if (itm.id === id) {
      return itm;
    }
  });

export default basketReducer;
