import React from "react";
import CarTopBar from "../../compoments/Commerce/carTopBar";
import TopBar from "../../compoments/Commerce/topBar";
import { Wrapper } from "./index.style";

function CommerceMain() {
  return (
    <Wrapper>
      <TopBar />
      <CarTopBar />
    </Wrapper>
  );
}

export default CommerceMain;
