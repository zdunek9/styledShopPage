import React, {  useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../redux/store";
import { Wrapper } from "./ItemList.style";
import ItemListSingleItem from "./ItemListSingleItem";

function ItemList() {
  const [tState, setTstate] = useState();
  const isSortedArrayByNew = useSelector((state) => state.counter.selectedSort);
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.counter.filtredArray);
  useEffect(() => {
    dispatch(counterActions.categoryChangeRemoveFilters());
    dispatch(counterActions.filterCategory("Contact Lenses"));
    if (isSortedArrayByNew === "1") {
      dispatch(counterActions.sortItems("1"));
    }
    setTstate(itemList);
  }, []);

  useEffect(() => {
    setTstate(itemList);
  }, [itemList]);

  return (
    <>
      <Wrapper>
        {tState && tState.map((item) => <ItemListSingleItem item={item} />)}
      </Wrapper>
    </>
  );
}

export default ItemList;
