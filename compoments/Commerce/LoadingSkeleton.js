import React from "react";
import { ItemDetails, SingleItem, Wrapper } from "./ItemList.style";

import Skeleton from "react-loading-skeleton";

function LoadingSkeleton() {
  return (
    <SingleItem>
      <Skeleton height={150}/>
      <ItemDetails>
          <Skeleton height={50}/>
      </ItemDetails>
    </SingleItem>
  );
}

export default LoadingSkeleton;
