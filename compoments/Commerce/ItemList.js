import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../redux/store";
import { Wrapper } from "./ItemList.style";
import ItemListSingleItem from "./ItemListSingleItem";

function ItemList() {
  const [tState, setTstate] = useState();
  const [images, setImages] = useState([]);
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
    const imagePromises = itemList.map((imageName) => {
      const imageUrl = `${imageName.image}`;
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(imageUrl);
        img.onerror = (error) => reject(error);
        img.src = imageUrl;
      });
    });

    Promise.all(imagePromises)
      .then((loadedImages) => {
        setImages(loadedImages);
      })
      .catch((error) => {
        console.error("Failed to load images:", error);
      });
  }, [itemList]);

  return (
    <>
      <Wrapper>
        {tState && tState.map((item, i) => (
            <ItemListSingleItem item={item} images={images[i]} />
          ))}
      </Wrapper>
    </>
  );
}

export default ItemList;
