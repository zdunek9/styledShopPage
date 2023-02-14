import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../redux/store";
import { ItemDetails, SingleItem, Wrapper } from "./ItemList.style";

function ItemList() {
  const [tState, setTstate] = useState();
  const isSortedArrayByNew = useSelector((state) => state.counter.selectedSort);
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.counter.filtredArray);
  useEffect(() => {
    dispatch(counterActions.categoryChangeRemoveFilters());
    dispatch(counterActions.filterCategory("Contact Lenses")); //default category selected
    if (isSortedArrayByNew === "1") {
      dispatch(counterActions.sortItems("1")); // when button "new" on frontpage selected, filter current itemlist by newest
    }
    setTstate(itemList);
  }, []);
  useEffect(() => {
    setTstate(itemList);
  }, [itemList]);

  return (
    <>
      <Wrapper>
        {tState &&
          tState.map((item) => (
            <SingleItem key={item.id}>
              <img
                src={item.image}
                alt="item image"
                height={200}
                placeholder="blur"
              />
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
