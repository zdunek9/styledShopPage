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
      // if (filterItems.length === 0) {
      //   const clearFilter = state.filtredArray.map((item) => item.brand !== "");
      //   state.filtredArray = clearFilter;
      //   state.brandFilter = [];
      //   return;
      // }
      state.brandFilter = action.payload;
      state.filtredArray = state.items.filter((item) =>
        filterItems.find((filterItem) => item.brand === filterItem)
      );
    },
    filterFrameColor(state, action) {
      const filterItems = action.payload.filter((item) => item);
      // if (filterItems.length === 0) {
      //   const clearFilter = state.filtredArray.map((item) => item.brand !== "");
      //   state.filtredArray = clearFilter;
      //   state.brandFilter = [];
      //   return;
      // }
      state.frameColorFilter = action.payload;
      state.filtredArray = state.items.filter((item) =>
        filterItems.find((filterItem) => item.frameColor === filterItem)
      );
    },
    filterLensColor(state, action) {
      const filterItems = action.payload.filter((item) => item);
      // if (filterItems.length === 0) {
      //   const clearFilter = state.filtredArray.map((item) => item.brand !== "");
      //   state.filtredArray = clearFilter;
      //   state.brandFilter = [];
      //   return;
      // }
      state.lensColorFilter = action.payload;
      state.filtredArray = state.items.filter((item) =>
        filterItems.find((filterItem) => item.lensColor === filterItem)
      );
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
