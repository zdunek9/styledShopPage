import React, { useState } from "react";
import CustomCheckbox from "../../CustomCheckbox";
import { ListStyled, Wrapper } from "./price.style";
import { motion } from "framer-motion";

function Price({ closeModal }) {
  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));
  const priceList = ["Under $200", "$200-$300", "$300 And Over"];

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const submitFilters = () => {
    const transformedArray = checkedState.map((item, index) =>
      item ? priceList[index] : ""
    );
    const clearedArra = transformedArray.filter((item) => item);
    console.log(clearedArra);
    closeModal();
  };
  return (
    <Wrapper as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ListStyled>
        {priceList.map((item, index) => (
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
