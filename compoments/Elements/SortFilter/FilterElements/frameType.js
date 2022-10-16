import React, { useEffect, useState } from "react";
import { LensTypeList } from "../../../Data/FilterData";
import CustomCheckbox from "../../CustomCheckbox";
import { ListStyled, Wrapper } from "./frameType.style";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../../../redux/store";

function LensType({ closeModal }) {
  const dispatch = useDispatch();
  const filterItemList = useSelector((state) => state.counter.frameTypeFilter);

  const [checkedState, setCheckedState] = useState(filterItemList);

  useEffect(() => {
    const loadCheckedState = LensTypeList.map((item, index) =>
      item.type === filterItemList[index] ? item : ""
    );
    setCheckedState(loadCheckedState);
  }, []);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };
  const submitFilters = () => {
    const transformedArray = checkedState.map((item, index) =>
      item ? LensTypeList[index].type : ""
    );
    dispatch(counterActions.filterFrameType(transformedArray));

    closeModal();
  };

  return (
    <Wrapper as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ListStyled>
        {LensTypeList.map((item, index) => (
          <li key={index}>
            <label>
              <img
                src={item.imageSource}
                alt="GlassesType"
                style={{ width: "45px", height: "18px" }}
              />
              {item.type}
              <CustomCheckbox
                name={item.type}
                value={item.type}
                checked={checkedState[index]}
                index={index}
                handleOnChangeProp={handleOnChange}
              />
            </label>
          </li>
        ))}
      </ListStyled>
      <button onClick={submitFilters}>Apply</button>
    </Wrapper>
  );
}

export default LensType;
