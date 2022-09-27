import React, { useEffect, useState } from "react";
import { BrandsList } from "../../../Data/FilterData";
import CustomCheckbox from "../../CustomCheckbox";
import { ListStyled, Wrapper } from "./brands.style";
import { motion } from "framer-motion";
import { counterActions } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";

function Brands({ closeModal }) {
  const dispatch = useDispatch();
  const filterItemList = useSelector((state) => state.counter.brandFilter);

  const [checkedState, setCheckedState] = useState(filterItemList);

  useEffect(() => {
    const loadCheckedState = BrandsList.map((item, index) =>
      item === filterItemList[index] ? item : ""
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
      item ? BrandsList[index] : ""
    );
    dispatch(counterActions.filterBrand(transformedArray));
    closeModal();
  };

  return (
    <Wrapper as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <ListStyled>
          {BrandsList.map((item, index) => (
            <li key={index}>
              <label>
                <CustomCheckbox
                  name={item}
                  value={item}
                  checked={checkedState[index]}
                  index={index}
                  handleOnChangeProp={handleOnChange}
                />
                {item}
              </label>
            </li>
          ))}
        </ListStyled>
        <button onClick={submitFilters}>Apply</button>
    </Wrapper>
  );
}

export default Brands;
