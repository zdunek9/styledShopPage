import { ItemListData } from "../compoments/Data/ItemListData";
import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialStoreState = {
  items: ItemListData,
  filtredArray: ItemListData,
  brandFilter: [],
  frameColorFilter: [],
  lensColorFilter: [],
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialStoreState,

  reducers: {
    filterBrand(state, action) {
      const filterItems = action.payload.filter((item) => item);
      state.brandFilter = action.payload;

      if (filterItems.length === 0) {
        state.filtredArray = state.items.filter((item) => item.brand !== "");
        if (state.frameColorFilter.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.frameColor !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.frameColorFilter.filter((item2) => item2 === item.frameColor)
          );
          state.filtredArray = tempArray;
        }

        if (state.lensColorFilter.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.lensColor !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.lensColorFilter.filter((item2) => item2 === item.lensColor)
          );
          state.filtredArray = tempArray;
        }
      } else {
        state.filtredArray = state.items.filter((item) =>
          state.brandFilter.find((item2) => item2 === item.brand)
        );
        if (state.frameColorFilter.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.frameColor !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.frameColorFilter.filter((item2) => item2 === item.frameColor)
          );
          state.filtredArray = tempArray;
        }

        if (state.lensColorFilter.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.lensColor !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.lensColorFilter.filter((item2) => item2 === item.lensColor)
          );
          state.filtredArray = tempArray;
        }
      }
    },

    filterFrameColor(state, action) {
      const filterItems = action.payload.filter((item) => item);
      state.frameColorFilter = action.payload;

      if (filterItems.length === 0) {
        state.filtredArray = state.items.filter(
          (item) => item.frameColor !== ""
        );

        if (state.brandFilter.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.brand !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.brandFilter.filter((item2) => item2 === item.brand)
          );
          state.filtredArray = tempArray;
        }

        if (state.lensColorFilter.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.lensColor !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.lensColorFilter.filter((item2) => item2 === item.lensColor)
          );
          state.filtredArray = tempArray;
        }

        return;
      }

      // state.filtredArray = state.items.filter((item) =>
      //   filterItems.find((filterItem) => item.frameColor === filterItem)
      // );
      const tempArray = state.filtredArray.filter((item) =>
        filterItems.filter((item2) => item.frameColor === item2)
      );
      state.filtredArray = tempArray;
    },
    filterLensColor(state, action) {},
  },
});
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
export const counterActions = counterSlice.actions;
export default store;
