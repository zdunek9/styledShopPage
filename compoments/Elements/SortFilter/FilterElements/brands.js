import React, { useState } from "react";
import { BrandsList } from "../../../Data/FilterData";

import CustomCheckbox from "../../CustomCheckbox";
import { ListStyled, Wrapper } from "./brands.style";

function Brands() {
  const [checkedState, setCheckedState] = useState(
    new Array(BrandsList.length).fill(false)
  );

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
    const clearedArra = transformedArray.filter((item) => item);
  };
  return (
    <Wrapper>
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
