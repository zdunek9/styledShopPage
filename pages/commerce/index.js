import React from "react";
import CarTopBar from "../../compoments/Commerce/carTopBar";
import SortFilter from "../../compoments/Commerce/sortFilter";
import TopBar from "../../compoments/Commerce/topBar";
import { Wrapper } from "./index.style";

function CommerceMain() {
  return (
    <Wrapper>
      <TopBar />
      <CarTopBar />
      <SortFilter />
    </Wrapper>
  );
}

export default CommerceMain;
