import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../redux/store";
import { ItemDetails, SingleItem, Wrapper } from "./ItemList.style";

function ItemList() {
  const itemList = useSelector((state) => state.counter.filtredArray);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(counterActions.categoryChangeRemoveFilters());
    dispatch(counterActions.filterCategory("Contact Lenses"));  //default category selected
  }, []);
  return (
    <>
      <Wrapper>
        {itemList.map((item) => (
          <SingleItem key={item.id}>
            <img src={item.image} alt="item image" layout="fill" />
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
