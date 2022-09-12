import React, { useState } from "react";
import { Wrapper } from "./filterBy.style";
import Brands from "./FilterElements/brands";

function FilterBy() {
  const [changeFilter, setChangeFilter] = useState(new Array(5).fill(false));

  const changeFilterHandler = (category) => {
    const updateChangeFilter = changeFilter.map((item, index) =>
      index === category ? !item : item
    );
    setChangeFilter(updateChangeFilter);
  };
  return (
    <Wrapper>
      <div onClick={()=>changeFilterHandler(0)}>Brands</div>
      {changeFilter[0] && <Brands />}
      <div>Frame Colors</div>
      <div>Lens Color</div>
      <div>Type</div>
      <div>Price</div>
    </Wrapper>
  );
}

export default FilterBy;
