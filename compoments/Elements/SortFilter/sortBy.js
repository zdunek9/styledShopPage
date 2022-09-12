import React, { useState } from "react";
import { SortByStyle } from "./sortBy.style";

function SortBy() {
  const [selectedFilter, setSelectedFilter] = useState("1");

  return (
    <SortByStyle>
      <form>
        <label>
          <input
            type="radio"
            id="Newest"
            checked={selectedFilter === "1"}
            name="filter"
            value="1"
            onChange={(e) => setSelectedFilter(e.target.value)}
          />
          Newest
        </label>

        <label>
          <input
            type="radio"
            id="Relevance"
            checked={selectedFilter === "2"}
            name="filter"
            value="2"
            onChange={(e) => setSelectedFilter(e.target.value)}
          />
          Sale
        </label>

        <label>
          <input
            type="radio"
            id="Low"
            checked={selectedFilter === "3"}
            name="filter"
            value="3"
            onChange={(e) => setSelectedFilter(e.target.value)}
          />
          Price Low - High
        </label>

        <label>
          <input
            type="radio"
            id="High"
            checked={selectedFilter === "4"}
            name="filter"
            value="4"
            onChange={(e) => setSelectedFilter(e.target.value)}
          />
          Price High - Low
        </label>
      </form>
    </SortByStyle>
  );
}

export default SortBy;
