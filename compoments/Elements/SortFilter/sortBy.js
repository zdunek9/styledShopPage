import React, { useState } from "react";
import { SortByStyle } from "./sortBy.style";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../../redux/store";

function SortBy() {
  const selectedSortBy = useSelector((state) => state.counter.selectedSort);
  const [selectedFilter, setSelectedFilter] = useState(selectedSortBy);

  const dispatch = useDispatch();
  const changeSort = (e) => {
    setSelectedFilter(e);
    dispatch(counterActions.sortItems(e));
  };

  return (
    <SortByStyle
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <form>
        <label>
          <input
            type="radio"
            id="Newest"
            checked={selectedFilter === "1"}
            name="filter"
            value="1"
            onChange={(e) => changeSort(e.target.value)}
          />
          Newest
        </label>

        <label>
          <input
            type="radio"
            id="Low"
            checked={selectedFilter === "2"}
            name="filter"
            value="2"
            onChange={(e) => changeSort(e.target.value)}
          />
          Price Low - High
        </label>

        <label>
          <input
            type="radio"
            id="High"
            checked={selectedFilter === "3"}
            name="filter"
            value="3"
            onChange={(e) => changeSort(e.target.value)}
          />
          Price High - Low
        </label>
      </form>
    </SortByStyle>
  );
}

export default SortBy;
