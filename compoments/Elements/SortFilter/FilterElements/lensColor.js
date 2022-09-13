import React, { useEffect, useState } from "react";
import { LensColorsList } from "../../../Data/FilterData";
import CustomCheckbox from "../../CustomCheckbox";
import {
  ButtonWrapper,
  ColorFrame,
  LensColorType,
  Wrapper,
  WrapperParting,
} from "./lensColor.style";
import { GrCheckboxSelected } from "react-icons/gr";
import { ListStyled } from "./lensColor.style";

function LensColor({ closeModal }) {
  const [checkedState, setCheckedState] = useState(
    new Array(LensColorsList.length).fill(false)
  );
  const [selectedType, setSelectedType] = useState(new Array(4).fill(false));

  useEffect(() => {}, [checkedState]);
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };
  const selectType = (selectedUserType) => {
    const updatedCheckedState = selectedType.map((item, index) =>
      index === selectedUserType ? !item : item
    );
    setSelectedType(updatedCheckedState);
  };

  const submitFilters = () => {
    const transformedArray = checkedState.map((item, index) =>
      item ? LensColorsList[index].color : ""
    );
    const clearedArra = transformedArray.filter((item) => item);
    console.log(clearedArra);
    console.log(selectedType);
    closeModal();
  };

  const clearFilters = () => {
    const clearedFilters = checkedState.fill(false);
    setSelectedType(clearedFilters);
    console.log("clear");
  };

  return (
    <Wrapper>
      <WrapperParting>
        <LensColorType>
          <h3>Type</h3>
          <h4 onClick={() => selectType(0)}>
            Gradient {selectedType[0] && <GrCheckboxSelected />}
          </h4>
          <p>Darker at the top and clearer at the bottom</p>
          <h4 onClick={() => selectType(1)}>
            Mirror {selectedType[1] && <GrCheckboxSelected />}
          </h4>
          <p>Reduces glare and strong enviromental reflections</p>
          <h4 onClick={() => selectType(2)}>
            Prizm {selectedType[2] && <GrCheckboxSelected />}
          </h4>
          <p>Oakley technology desinged to enhance details</p>
          <h4 onClick={() => selectType(3)}>
            Solid {selectedType[3] && <GrCheckboxSelected />}
          </h4>
          <p>Uniform tinted lenses in various different colors </p>
        </LensColorType>
        <ListStyled>
          {LensColorsList.map((item, index) => (
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
      </WrapperParting>
      <ButtonWrapper>
        <button onClick={submitFilters}>Apply</button>
        <button onClick={clearFilters}>Clear Filters</button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default LensColor;
