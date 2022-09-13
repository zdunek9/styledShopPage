import React, { useEffect, useState } from "react";
import { Wrapper } from "./filterBy.style";
import Brands from "./FilterElements/brands";
import FrameColors from "./FilterElements/frameColors";
import LensColor from "./FilterElements/lensColor";
import LensType from "./FilterElements/lensType";

function FilterBy() {
  const [changeFilter, setChangeFilter] = useState(new Array(5).fill(false));

  const changeFilterHandler = (category) => {
    const updateChangeFilter = changeFilter.map((item, index) =>
      index === category ? !item : false
    );
    setChangeFilter(updateChangeFilter);
  };
  return (
    <Wrapper>
      <div onClick={() => changeFilterHandler(0)}>Brands</div>
      {changeFilter[0] && <Brands />}
      <div onClick={() => changeFilterHandler(1)}>Frame Colors</div>
      {changeFilter[1] && <FrameColors />}
      <div onClick={() => changeFilterHandler(2)}>Lens Color</div>
      {changeFilter[2] && <LensColor />}
      <div onClick={() => changeFilterHandler(3)}>Type</div>
      {changeFilter[3] && <LensType />}
      <div>Price</div>
    </Wrapper>
  );
}

export default FilterBy;
