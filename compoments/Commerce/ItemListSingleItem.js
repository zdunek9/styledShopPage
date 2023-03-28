import Image from "next/image";
import React from "react";
import { ItemDetails, SingleItem } from "./ItemList.style";

function ItemListSingleItem({ item }) {
  return (
    <SingleItem key={item.id}>
      <Image
        src={item.image}
        alt="item image"
        height={200}
        width={300}
        loading="eager"
        priority={true}
      />
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
