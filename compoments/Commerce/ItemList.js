import Image from "next/image";
import React, { Suspense, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../redux/store";
import { ItemDetails, SingleItem, Wrapper } from "./ItemList.style";
import ItemListSingleItem from "./ItemListSingleItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import LoadingSkeleton from "./LoadingSkeleton";

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
        {!tState && <LoadingSkeleton />}
        {!tState && <LoadingSkeleton />}
        {!tState && <LoadingSkeleton />}
        {!tState && <LoadingSkeleton />}
        {tState && tState.map((item) => <ItemListSingleItem item={item} />)}
      </Wrapper>
    </>
  );
}

export default ItemList;
