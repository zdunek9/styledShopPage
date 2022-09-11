import React, { useState } from "react";
import { SideWrapper, Wrapper } from "./sortFilter.style";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/Ri";
import { BsFilterRight } from "react-icons/Bs";
import SortBy from "../Elements/SortFilter/sortBy";

function SortFilter() {
  const [sortBy, setSortBy] = useState(false);

  return (
    <Wrapper>
      <p>Category Name</p>
      <SideWrapper>
        <div onClick={() => setSortBy((prev) => !prev)}>
          <span>Sort by</span>
          {sortBy ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </div>
        {sortBy && <SortBy />}
        <div>
          <span>Filter by</span>
          <BsFilterRight />
        </div>
      </SideWrapper>
    </Wrapper>
  );
}

export default SortFilter;
