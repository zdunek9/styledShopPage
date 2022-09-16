import React from "react";

import { useSelector } from "react-redux";
import { SingleItem, Wrapper } from "./ItemList.style";

function ItemList() {
  const itemList = useSelector((state) => state.counter.filtredArray);
  // console.log(itemList);
  return (
    <>
      <Wrapper>
        {itemList.map((item) => (
          <SingleItem key={item.id}>{item.name}</SingleItem>
        ))}
        <SingleItem>Test Item</SingleItem>
      </Wrapper>
    </>
  );
}

export default ItemList;
