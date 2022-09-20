import React, { useEffect, useState } from "react";
import { Wrapper } from "./filterBy.style";
import Brands from "./FilterElements/brands";
import FrameColors from "./FilterElements/frameColors";
import LensColor from "./FilterElements/lensColor";
import LensType from "./FilterElements/frameType";
import Price from "./FilterElements/price";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

function FilterBy() {
  const [changeFilter, setChangeFilter] = useState(new Array(5).fill(false));
  const filterBrandItemList = useSelector((state) => state.counter.brandFilter);
  const filterFrameColorItemList = useSelector(
    (state) => state.counter.frameColorFilter
  );
  const filterLensColorItemList = useSelector(
    (state) => state.counter.lensColorFilter
  );
  const filterLensColorTypeItemList = useSelector(
    (state) => state.counter.lensColorTypeFilter
  );
  const filterLensTypeItemList = useSelector(
    (state) => state.counter.frameTypeFilter
  );

  const listBrandLength = filterBrandItemList.filter((item) => item).length;
  const listFrameColorLength = filterFrameColorItemList.filter(
    (item) => item
  ).length;
  const listLensColorLength = filterLensColorItemList.filter(
    (item) => item
  ).length;
  const listLensColorTypeLength = filterLensColorTypeItemList.filter(
    (item) => item
  ).length;
  const listLensTypeLength = filterLensTypeItemList.filter(
    (item) => item
  ).length;

  const changeFilterHandler = (category) => {
    const updateChangeFilter = changeFilter.map((item, index) =>
      index === category ? !item : false
    );
    setChangeFilter(updateChangeFilter);
  };
  return (
    <Wrapper as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div onClick={() => changeFilterHandler(0)}>
        Brands {listBrandLength > 0 ? `(${listBrandLength})` : ""}
      </div>
      {changeFilter[0] && <Brands closeModal={() => changeFilterHandler(0)} />}
      <div onClick={() => changeFilterHandler(1)}>
        Frame Colors
        {listFrameColorLength > 0 ? `(${listFrameColorLength})` : ""}
      </div>
      {changeFilter[1] && (
        <FrameColors closeModal={() => changeFilterHandler(1)} />
      )}
      <div onClick={() => changeFilterHandler(2)}>
        Lens Color
        {listLensColorLength + listLensColorTypeLength > 0
          ? `(${listLensColorLength + listLensColorTypeLength})`
          : ""}
      </div>
      {changeFilter[2] && (
        <LensColor closeModal={() => changeFilterHandler(2)} />
      )}
      <div onClick={() => changeFilterHandler(3)}>Type {listLensTypeLength > 0 ? `(${listLensTypeLength})` : ""}
</div>
      {changeFilter[3] && (
        <LensType closeModal={() => changeFilterHandler(3)} />
      )}
      <div onClick={() => changeFilterHandler(4)}>Price</div>
      {changeFilter[4] && <Price closeModal={() => changeFilterHandler(4)} />}
    </Wrapper>
  );
}

export default FilterBy;
