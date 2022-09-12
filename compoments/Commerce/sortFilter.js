import React, { useState } from "react";
import { SideWrapper, Wrapper } from "./sortFilter.style";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/Ri";
import { BsFilterRight } from "react-icons/Bs";
import SortBy from "../Elements/SortFilter/sortBy";
import FilterBy from "../Elements/SortFilter/filterBy";

function SortFilter() {
  const [sortBy, setSortBy] = useState(false);
  const [filterBy, setFilterBy] = useState(false);

  const turnOnFilter = () => {
    setFilterBy((prev) => !prev);
    if (sortBy) {
      setSortBy(false);
    }
  };
  const turnOnSort = () => {
    setSortBy((prev) => !prev);
    if (filterBy) {
      setFilterBy(false);
    }
  };
  return (
    <>
      <Wrapper>
        <p>Category Name</p>
        <SideWrapper>
          <div onClick={turnOnSort}>
            <span>Sort by</span>
            {sortBy ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </div>
          {sortBy && <SortBy />}
          <div onClick={turnOnFilter}>
            <span>Filter by</span>
            <BsFilterRight />
          </div>
        </SideWrapper>
      </Wrapper>
      {filterBy && <FilterBy />}
    </>
  );
}

export default SortFilter;
