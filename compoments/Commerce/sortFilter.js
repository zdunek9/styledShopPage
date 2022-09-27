import React, { useEffect, useState } from "react";
import { PartingWrapper, SideWrapper, Wrapper } from "./sortFilter.style";
import { useSelector } from "react-redux";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/Ri";
import { BsFilterRight } from "react-icons/Bs";
import SortBy from "../Elements/SortFilter/sortBy";
import FilterBy from "../Elements/SortFilter/filterBy";

function SortFilter() {
  const [sortBy, setSortBy] = useState(false);
  const [filterBy, setFilterBy] = useState(false);
  const selectedCat = useSelector((state) => state.counter.selectedCategory);

  useEffect(() => {
    setFilterBy(false);
    setSortBy(false);
  }, [selectedCat]);
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
    <Wrapper>
      <PartingWrapper>
        <p>Category Name</p>
        <SideWrapper>
          <div onClick={turnOnSort}>
            <span>Sort by</span>
            {sortBy ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </div>
          {sortBy && <SortBy closeModal={() => setSortBy(false)} />}
          <div onClick={turnOnFilter}>
            <span>Filter by</span>
            <BsFilterRight />
          </div>
        </SideWrapper>
      </PartingWrapper>
      {filterBy && <FilterBy />}
    </Wrapper>
  );
}

export default SortFilter;
