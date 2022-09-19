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
      const frameColorFilterEmpty = state.frameColorFilter.filter(
        (item) => item
      );
      const lensColorFilterEmpty = state.lensColorFilter.filter((item) => item);
      state.brandFilter = action.payload;

      if (filterItems.length === 0) {
        const array = state.items.filter((item) => item.brand !== "");
        state.filtredArray = array;

        if (frameColorFilterEmpty.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.frameColor !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.frameColorFilter.find((item2) => item2 === item.frameColor)
          );
          state.filtredArray = tempArray;
        }

        if (lensColorFilterEmpty.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.lensColor !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.lensColorFilter.find((item2) => item2 === item.lensColor)
          );
          state.filtredArray = tempArray;
        }
      } else {
        state.filtredArray = state.items.filter((item) =>
          state.brandFilter.find((item2) => item2 === item.brand)
        );
        if (frameColorFilterEmpty.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.frameColor !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.frameColorFilter.find((item2) => item2 === item.frameColor)
          );
          state.filtredArray = tempArray;
        }

        if (lensColorFilterEmpty.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.lensColor !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.lensColorFilter.find((item2) => item2 === item.lensColor)
          );
          state.filtredArray = tempArray;
        }
      }
    },

    filterFrameColor(state, action) {
      const filterItems = action.payload.filter((item) => item);
      const brandEmptyFilter = state.brandFilter.filter((item) => item);
      const lensColorFilterEmpty = state.lensColorFilter.filter((item) => item);

      state.frameColorFilter = action.payload;

      if (filterItems.length === 0) {
        const array = state.items.filter((item) => item.frameColor !== "");
        state.filtredArray = array;

        if (brandEmptyFilter.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.brand !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.brandFilter.find((item2) => item2 === item.brand)
          );
          state.filtredArray = tempArray;
        }

        if (lensColorFilterEmpty.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.lensColor !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.lensColorFilter.find((item2) => item2 === item.lensColor)
          );
          state.filtredArray = tempArray;
        }
      } else {
        state.filtredArray = state.items.filter((item) =>
          state.frameColorFilter.find((item2) => item2 === item.frameColor)
        );
        if (brandEmptyFilter.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.brand !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.brandFilter.find((item2) => item2 === item.brand)
          );
          state.filtredArray = tempArray;
        }

        if (lensColorFilterEmpty.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.lensColor !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.lensColorFilter.find((item2) => item2 === item.lensColor)
          );
          state.filtredArray = tempArray;
        }
      }
    },
    filterLensColor(state, action) {
      const filterItems = action.payload.filter((item) => item);
      const brandEmptyFilter = state.brandFilter.filter((item) => item);
      const frameColorFilterEmpty = state.frameColorFilter.filter((item) => item);

      state.lensColorFilter = action.payload;

      if (filterItems.length === 0) {
        const array = state.items.filter((item) => item.lensColor !== "");
        state.filtredArray = array;

        if (brandEmptyFilter.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.brand !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.brandFilter.find((item2) => item2 === item.brand)
          );
          state.filtredArray = tempArray;
        }

        if (frameColorFilterEmpty.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.frameColor !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.frameColorFilter.find((item2) => item2 === item.frameColor)
          );
          state.filtredArray = tempArray;
        }
      } else {
        state.filtredArray = state.items.filter((item) =>
          state.lensColorFilter.find((item2) => item2 === item.lensColor)
        );
        if (brandEmptyFilter.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.brand !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.brandFilter.find((item2) => item2 === item.brand)
          );
          state.filtredArray = tempArray;
        }

        if (frameColorFilterEmpty.length === 0) {
          const tempArray = state.filtredArray.filter(
            (item) => item.frameColor !== ""
          );
          state.filtredArray = tempArray;
        } else {
          const tempArray = state.filtredArray.filter((item) =>
            state.frameColorFilter.find((item2) => item2 === item.frameColor)
          );
          state.filtredArray = tempArray;
        }
      }
    },
  },
});
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
export const counterActions = counterSlice.actions;
export default store;
