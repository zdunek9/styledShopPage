import React, { useEffect } from "react";
import { useState } from "react";
import { FrameColorsList } from "../../../Data/FilterData";
import CustomCheckbox from "../../CustomCheckbox";
import { ColorFrame, ListStyled, Wrapper } from "./frameColors.style";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../../../redux/store";

function FrameColors({ closeModal }) {
  const dispatch = useDispatch();
  const filterItemList = useSelector((state) => state.counter.frameColorFilter);

  const [checkedState, setCheckedState] = useState(filterItemList);

  useEffect(() => {
    const loadCheckedState = FrameColorsList.map((item, index) =>
      item.color === filterItemList[index] ? item : ""
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
      item ? FrameColorsList[index].color : ""
    );
    // const clearedArra = transformedArray.filter((item) => item);
    closeModal();

    dispatch(counterActions.filterFrameColor(transformedArray));
  };
  // console.log(checkedState);
  return (
    <Wrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ListStyled>
        {FrameColorsList.map((item, index) => (
          <li key={index}>
            <label>
              <ColorFrame colors={item.code}></ColorFrame>
              <CustomCheckbox
                name={item.color}
                value={item.color}
                checked={checkedState[index]}
                index={index}
                handleOnChangeProp={handleOnChange}
              />
              {item.color}
            </label>
          </li>
        ))}
      </ListStyled>
      <button onClick={submitFilters}>Apply</button>
    </Wrapper>
  );
}

export default FrameColors;
