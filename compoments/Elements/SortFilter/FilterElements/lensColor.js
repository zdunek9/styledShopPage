import React, { useEffect, useState } from "react";
import { LensColorsList, LensColorTypeList } from "../../../Data/FilterData";
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
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "../../../../redux/store";

function LensColor({ closeModal }) {
  const dispatch = useDispatch();
  const filterItemList = useSelector((state) => state.counter.lensColorFilter);
  const filterItemTypeList = useSelector(
    (state) => state.counter.lensColorTypeFilter
  );

  const [checkedState, setCheckedState] = useState(filterItemList);
  const [selectedType, setSelectedType] = useState(filterItemTypeList);

  useEffect(() => {
    const loadCheckedState = LensColorsList.map((item, index) =>
      item.color === filterItemList[index] ? item : ""
    );
    setCheckedState(loadCheckedState);

    const loadCheckedState2 = LensColorTypeList.map((item, index) =>
      item === filterItemTypeList[index] ? item : ""
    );
    setCheckedState(loadCheckedState);
    setSelectedType(loadCheckedState2);
  }, []);

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
    const transformedArrayType = selectedType.map((item, index) =>
      item ? LensColorTypeList[index] : ""
    );

    dispatch(
      counterActions.filterLensColor([transformedArray, transformedArrayType])
    );
    closeModal();
  };

  const clearFilters = () => {
    // const clearedFilters = checkedState.fill(false);
    // setSelectedType(clearedFilters);
  };

  return (
    <Wrapper as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
