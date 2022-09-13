import React, { useEffect, useState } from "react";
import { Wrapper } from "./filterBy.style";
import Brands from "./FilterElements/brands";
import FrameColors from "./FilterElements/frameColors";
import LensColor from "./FilterElements/lensColor";
import LensType from "./FilterElements/lensType";
import Price from "./FilterElements/price";

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
      {changeFilter[0] && <Brands closeModal={() => changeFilterHandler(0)} />}
      <div onClick={() => changeFilterHandler(1)}>Frame Colors</div>
      {changeFilter[1] && <FrameColors closeModal={() => changeFilterHandler(1)} />}
      <div onClick={() => changeFilterHandler(2)}>Lens Color</div>
      {changeFilter[2] && <LensColor closeModal={() => changeFilterHandler(2)} />}
      <div onClick={() => changeFilterHandler(3)}>Type</div>
      {changeFilter[3] && <LensType closeModal={() => changeFilterHandler(3)} />}
      <div onClick={() => changeFilterHandler(4)}>Price</div>
      {changeFilter[4] && <Price closeModal={() => changeFilterHandler(4)} />}
    </Wrapper>
  );
}

export default FilterBy;
