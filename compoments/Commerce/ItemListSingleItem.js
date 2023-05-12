import React from "react";
import { ItemDetails, SingleItem } from "./ItemList.style";

function ItemListSingleItem({ item, images }) {
  return (
    <SingleItem key={item.id}>
      <img src={images} alt="item image" height={200} />
      <ItemDetails>
        <div>
          <h3>{item.brand}</h3>
          <h4>${item.price}</h4>
        </div>
        <p>{item.name}</p>
      </ItemDetails>
    </SingleItem>
  );
}

export default ItemListSingleItem;
