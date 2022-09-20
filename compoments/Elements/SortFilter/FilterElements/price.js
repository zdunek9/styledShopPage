import React, { useEffect, useState } from "react";
import CustomCheckbox from "../../CustomCheckbox";
import { ListStyled, Wrapper } from "./price.style";
import { motion } from "framer-motion";
import { PriceList } from "../../../Data/FilterData";
import { counterActions } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";

function Price({ closeModal }) {
  const dispatch = useDispatch();
  const filterItemList = useSelector((state) => state.counter.priceFilter);
  const [checkedState, setCheckedState] = useState(filterItemList);

  useEffect(() => {
    const loadCheckedState = PriceList.map((item, index) =>
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
      item ? PriceList[index] : ""
    );
    dispatch(counterActions.filterPrice(transformedArray));

    closeModal();
  };
  return (
    <Wrapper as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ListStyled>
        {PriceList.map((item, index) => (
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

export default Price;
