import React from "react";
import CarTopBar from "../../compoments/Commerce/carTopBar";
import SortFilter from "../../compoments/Commerce/sortFilter";
import TopBar from "../../compoments/Commerce/topBar";
import { Wrapper } from "../../styles/indexCommerce.style";
import ItemList from "../../compoments/Commerce/ItemList";
function CommerceMain() {
  return (
    <Wrapper>
      <TopBar />
      <CarTopBar />
      <SortFilter />
      <ItemList />
    </Wrapper>
  );
}

export default CommerceMain;
