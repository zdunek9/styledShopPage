import React from "react";
import CarTopBar from "../../compoments/Commerce/carTopBar";
import SortFilter from "../../compoments/Commerce/sortFilter";
import TopBar from "../../compoments/Commerce/topBar";
import { Wrapper } from "../../styles/indexCommerce.style";
import ItemList from "../../compoments/Commerce/ItemList";
import Head from "next/head";

function CommerceMain() {
  return (
    <>
      <Head>
        <title>Optico e-shop</title>
        <meta
          name="description"
          content="Optico e-shop. Author: Michal Zdunczyk"
        ></meta>
      </Head>
      <Wrapper>
        <TopBar />
        <CarTopBar />
        <SortFilter />
        <ItemList />
      </Wrapper>
    </>
  );
}

export default CommerceMain;
