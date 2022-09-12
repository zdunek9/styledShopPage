import React from "react";

function FrameColors() {
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
    console.log(checkedState);
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

export default FrameColors;
