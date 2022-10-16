import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../redux/store";
import { ItemDetails, SingleItem, Wrapper } from "./ItemList.style";
import { URL_BLUR } from "../../public/Images/blured_img";
import Image from "next/image";


function ItemList() {
  const itemList = useSelector((state) => state.counter.filtredArray);
  const isSortedArrayByNew = useSelector((state) => state.counter.selectedSort);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(counterActions.categoryChangeRemoveFilters());
    dispatch(counterActions.filterCategory("Contact Lenses")); //default category selected
    if (isSortedArrayByNew === "1") {
      dispatch(counterActions.sortItems("1")); // when button "new" on frontpage selected, filter current itemlist by newest
    }
  }, []);

  return (
    <>
      <Wrapper>
        {itemList.map((item) => (
          <SingleItem key={item.id}>
            <Image
              src={item.image}
              alt="item image"
              width={300}
              height={200}
              placeholder="blur"
              blurDataURL={URL_BLUR}
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
