import React from "react";

import { useSelector } from "react-redux";
import { ItemDetails, SingleItem, Wrapper } from "./ItemList.style";

function ItemList() {
  const itemList = useSelector((state) => state.counter.filtredArray);
  return (
    <>
      <Wrapper>
        {itemList.map((item) => (
          <SingleItem key={item.id}>
            <img src={item.image} alt="item image" />
            <ItemDetails>
              <div>
              <h3>{item.brand}</h3>
              <h4>${item.price}</h4>
              </div>
              <p>{item.name}</p>
            </ItemDetails>
          </SingleItem>
        ))}
      </Wrapper>
    </>
  );
}

export default ItemList;
