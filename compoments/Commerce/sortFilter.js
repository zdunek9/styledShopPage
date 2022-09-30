import React, { useEffect, useState } from "react";
import { PartingWrapper, SideWrapper, Wrapper } from "./sortFilter.style";
import { useSelector } from "react-redux";
import SortBy from "../Elements/SortFilter/sortBy";
import FilterBy from "../Elements/SortFilter/filterBy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";

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
            {sortBy ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </div>
          {sortBy && <SortBy closeModal={() => setSortBy(false)} />}
          <div onClick={turnOnFilter}>
            <span>Filter by</span>
            <FontAwesomeIcon icon={faChartSimple} />
          </div>
        </SideWrapper>
      </PartingWrapper>
      {filterBy && <FilterBy />}
    </Wrapper>
  );
}

export default SortFilter;
