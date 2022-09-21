import { ItemListData } from "../compoments/Data/ItemListData";
import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialStoreState = {
  items: ItemListData,
  filtredArray: ItemListData,
  brandFilter: [],
  frameColorFilter: [],
  lensColorFilter: [],
  lensColorTypeFilter: [],
  frameTypeFilter: [],
  priceFilter: [],
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
      const lensColorTypeFilterEmpty = state.lensColorTypeFilter.filter(
        (item) => item
      );
      const frameTypeFilterEmpty = state.frameTypeFilter.filter((item) => item);
      const priceFilterEmpty = state.priceFilter.filter((item) => item);

      state.brandFilter = action.payload;
      if (filterItems.length === 0) {
        const array = state.items.filter((item) => item.brand !== "");
        state.filtredArray = array;
      } else {
        state.filtredArray = state.items.filter((item) =>
          state.brandFilter.find((item2) => item2 === item.brand)
        );
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

      if (lensColorTypeFilterEmpty.length === 0) {
        const tempArray = state.filtredArray.filter(
          (item) => item.lensColorType !== ""
        );
        state.filtredArray = tempArray;
      } else {
        const tempArray = state.filtredArray.filter((item) =>
          state.lensColorTypeFilter.find(
            (item2) => item2 === item.lensColorType
          )
        );
        state.filtredArray = tempArray;
      }

      if (frameTypeFilterEmpty.length === 0) {
        const tempArray = state.filtredArray.filter(
          (item) => item.frameType !== ""
        );
        state.filtredArray = tempArray;
      } else {
        const tempArray = state.filtredArray.filter((item) =>
          state.frameTypeFilter.find((item2) => item2 === item.frameType)
        );
        state.filtredArray = tempArray;
      }

      if (
        priceFilterEmpty.length === 0 ||
        (priceFilterEmpty[0] && priceFilterEmpty[1] && priceFilterEmpty[2])
      ) {
        const tempArray = state.filtredArray.filter(
          (item) => item.price !== ""
        );
        state.filtredArray = tempArray;
      } else {
        if (priceFilterEmpty[0] && priceFilterEmpty[1]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price < 300
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[0] && priceFilterEmpty[2]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price > 300 || item.price < 200
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[1] && priceFilterEmpty[2]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price > 200
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[0]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price < 200
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[1]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price < 300 && item.price > 200
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[2]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price > 300
          );
          state.filtredArray = tempArray;
        }
      }
    },
    filterFrameColor(state, action) {
      const filterItems = action.payload.filter((item) => item);
      const brandEmptyFilter = state.brandFilter.filter((item) => item);
      const lensColorFilterEmpty = state.lensColorFilter.filter((item) => item);
      const lensColorTypeFilterEmpty = state.lensColorTypeFilter.filter(
        (item) => item
      );
      const frameTypeFilterEmpty = state.frameTypeFilter.filter((item) => item);
      const priceFilterEmpty = state.priceFilter.filter((item) => item);

      state.frameColorFilter = action.payload;

      if (filterItems.length === 0) {
        const array = state.items.filter((item) => item.frameColor !== "");
        state.filtredArray = array;
      } else {
        state.filtredArray = state.items.filter((item) =>
          state.frameColorFilter.find((item2) => item2 === item.frameColor)
        );
      }
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

      if (lensColorTypeFilterEmpty.length === 0) {
        const tempArray = state.filtredArray.filter(
          (item) => item.lensColorType !== ""
        );
        state.filtredArray = tempArray;
      } else {
        const tempArray = state.filtredArray.filter((item) =>
          state.lensColorTypeFilter.find(
            (item2) => item2 === item.lensColorType
          )
        );
        state.filtredArray = tempArray;
      }
      if (frameTypeFilterEmpty.length === 0) {
        const tempArray = state.filtredArray.filter(
          (item) => item.frameType !== ""
        );
        state.filtredArray = tempArray;
      } else {
        const tempArray = state.filtredArray.filter((item) =>
          state.frameTypeFilter.find((item2) => item2 === item.frameType)
        );
        state.filtredArray = tempArray;
      }
      if (
        priceFilterEmpty.length === 0 ||
        (priceFilterEmpty[0] && priceFilterEmpty[1] && priceFilterEmpty[2])
      ) {
        const tempArray = state.filtredArray.filter(
          (item) => item.price !== ""
        );
        state.filtredArray = tempArray;
      } else {
        if (priceFilterEmpty[0] && priceFilterEmpty[1]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price < 300
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[0] && priceFilterEmpty[2]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price > 300 || item.price < 200
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[1] && priceFilterEmpty[2]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price > 200
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[0]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price < 200
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[1]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price < 300 && item.price > 200
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[2]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price > 300
          );
          state.filtredArray = tempArray;
        }
      }
    },
    filterLensColor(state, action) {
      const filterItemsColor = action.payload[0].filter((item) => item);
      const filterItemsType = action.payload[1].filter((item) => item);

      const brandEmptyFilter = state.brandFilter.filter((item) => item);
      const frameColorFilterEmpty = state.frameColorFilter.filter(
        (item) => item
      );
      const frameTypeFilterEmpty = state.frameTypeFilter.filter((item) => item);
      const priceFilterEmpty = state.priceFilter.filter((item) => item);

      state.lensColorFilter = action.payload[0];
      state.lensColorTypeFilter = action.payload[1];

      if (filterItemsColor.length === 0 && filterItemsType.length === 0) {
        const array = state.items.filter(
          (item) => item.lensColor !== "" || item.lensColorType !== ""
        );
        state.filtredArray = array;
      } else if (filterItemsColor.length > 0 && filterItemsType.length === 0) {
        state.filtredArray = state.items.filter(
          (item) => item.lensColorType !== ""
        );
        const tempArray = state.filtredArray.filter((item) =>
          state.lensColorFilter.find((item2) => item2 === item.lensColor)
        );
        state.filtredArray = tempArray;
      } else if (filterItemsColor.length === 0 && filterItemsType.length > 0) {
        state.filtredArray = state.items.filter(
          (item) => item.lensColor !== ""
        );
        const tempArray = state.filtredArray.filter((item) =>
          state.lensColorTypeFilter.find(
            (item2) => item2 === item.lensColorType
          )
        );
        state.filtredArray = tempArray;
      } else {
        const tempArray = state.filtredArray.filter((item) =>
          state.lensColorFilter.find((item2) => item2 === item.lensColor)
        );
        state.filtredArray = tempArray;

        const tempArray2 = state.filtredArray.filter((item) =>
          state.lensColorTypeFilter.find(
            (item2) => item2 === item.lensColorType
          )
        );
        state.filtredArray = tempArray2;
      }

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
      if (frameTypeFilterEmpty.length === 0) {
        const tempArray = state.filtredArray.filter(
          (item) => item.frameType !== ""
        );
        state.filtredArray = tempArray;
      } else {
        const tempArray = state.filtredArray.filter((item) =>
          state.frameTypeFilter.find((item2) => item2 === item.frameType)
        );
        state.filtredArray = tempArray;
      }
      if (
        priceFilterEmpty.length === 0 ||
        (priceFilterEmpty[0] && priceFilterEmpty[1] && priceFilterEmpty[2])
      ) {
        const tempArray = state.filtredArray.filter(
          (item) => item.price !== ""
        );
        state.filtredArray = tempArray;
      } else {
        if (priceFilterEmpty[0] && priceFilterEmpty[1]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price < 300
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[0] && priceFilterEmpty[2]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price > 300 || item.price < 200
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[1] && priceFilterEmpty[2]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price > 200
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[0]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price < 200
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[1]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price < 300 && item.price > 200
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[2]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price > 300
          );
          state.filtredArray = tempArray;
        }
      }
    },
    filterFrameType(state, action) {
      const filterItems = action.payload.filter((item) => item);
      const frameColorFilterEmpty = state.frameColorFilter.filter(
        (item) => item
      );
      const lensColorFilterEmpty = state.lensColorFilter.filter((item) => item);
      const lensColorTypeFilterEmpty = state.lensColorTypeFilter.filter(
        (item) => item
      );
      const brandEmptyFilter = state.brandFilter.filter((item) => item);
      const priceFilterEmpty = state.priceFilter.filter((item) => item);

      state.frameTypeFilter = action.payload;
      if (filterItems.length === 0) {
        const array = state.items.filter((item) => item.frameType !== "");
        state.filtredArray = array;
      } else {
        state.filtredArray = state.items.filter((item) =>
          state.frameTypeFilter.find((item2) => item2 === item.frameType)
        );
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

      if (lensColorTypeFilterEmpty.length === 0) {
        const tempArray = state.filtredArray.filter(
          (item) => item.lensColorType !== ""
        );
        state.filtredArray = tempArray;
      } else {
        const tempArray = state.filtredArray.filter((item) =>
          state.lensColorTypeFilter.find(
            (item2) => item2 === item.lensColorType
          )
        );
        state.filtredArray = tempArray;
      }
      if (
        priceFilterEmpty.length === 0 ||
        (priceFilterEmpty[0] && priceFilterEmpty[1] && priceFilterEmpty[2])
      ) {
        const tempArray = state.filtredArray.filter(
          (item) => item.price !== ""
        );
        state.filtredArray = tempArray;
      } else {
        if (priceFilterEmpty[0] && priceFilterEmpty[1]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price < 300
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[0] && priceFilterEmpty[2]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price > 300 || item.price < 200
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[1] && priceFilterEmpty[2]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price > 200
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[0]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price < 200
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[1]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price < 300 && item.price > 200
          );
          state.filtredArray = tempArray;
        } else if (priceFilterEmpty[2]) {
          const tempArray = state.filtredArray.filter(
            (item) => item.price > 300
          );
          state.filtredArray = tempArray;
        }
      }
    },
    filterPrice(state, action) {
      const filterItems = action.payload.filter((item) => item);
      const brandEmptyFilter = state.brandFilter.filter((item) => item);
      const frameColorFilterEmpty = state.frameColorFilter.filter(
        (item) => item
      );
      const lensColorFilterEmpty = state.lensColorFilter.filter((item) => item);
      const lensColorTypeFilterEmpty = state.lensColorTypeFilter.filter(
        (item) => item
      );
      const frameTypeFilterEmpty = state.frameTypeFilter.filter((item) => item);

      state.priceFilter = action.payload;

      if (
        filterItems.length === 0 ||
        (action.payload[0] && action.payload[1] && action.payload[2])
      ) {
        const array = state.items.filter((item) => item.price !== "");
        state.filtredArray = array;
      } else {
        if (action.payload[0] && action.payload[1]) {
          const tempArray = state.items.filter((item) => item.price < 300);
          state.filtredArray = tempArray;
        } else if (action.payload[0] && action.payload[2]) {
          const tempArray = state.items.filter(
            (item) => item.price > 300 || item.price < 200
          );
          state.filtredArray = tempArray;
        } else if (action.payload[1] && action.payload[2]) {
          const tempArray = state.items.filter((item) => item.price > 200);
          state.filtredArray = tempArray;
        } else if (action.payload[0]) {
          const tempArray = state.items.filter((item) => item.price < 200);
          state.filtredArray = tempArray;
        } else if (action.payload[1]) {
          const tempArray = state.items.filter(
            (item) => item.price < 300 && item.price > 200
          );
          state.filtredArray = tempArray;
        } else if (action.payload[2]) {
          const tempArray = state.items.filter((item) => item.price > 300);
          state.filtredArray = tempArray;
        }
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

      if (lensColorTypeFilterEmpty.length === 0) {
        const tempArray = state.filtredArray.filter(
          (item) => item.lensColorType !== ""
        );
        state.filtredArray = tempArray;
      } else {
        const tempArray = state.filtredArray.filter((item) =>
          state.lensColorTypeFilter.find(
            (item2) => item2 === item.lensColorType
          )
        );
        state.filtredArray = tempArray;
      }
      if (frameTypeFilterEmpty.length === 0) {
        const tempArray = state.filtredArray.filter(
          (item) => item.frameType !== ""
        );
        state.filtredArray = tempArray;
      } else {
        const tempArray = state.filtredArray.filter((item) =>
          state.frameTypeFilter.find((item2) => item2 === item.frameType)
        );
        state.filtredArray = tempArray;
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
