import React from "react";
import { useState } from "react";
import { FrameColorsList } from "../../../Data/FilterData";
import CustomCheckbox from "../../CustomCheckbox";
import { ColorFrame, ListStyled, Wrapper } from "./frameColors.style";
function FrameColors({closeModal}) {
  const [checkedState, setCheckedState] = useState(
    new Array(FrameColorsList.length).fill(false)
  );

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
    const clearedArra = transformedArray.filter((item) => item);
    closeModal();

    console.log(clearedArra);
  };
  return (
    <Wrapper>
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
