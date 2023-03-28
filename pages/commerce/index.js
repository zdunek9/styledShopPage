import React from "react";
import CarTopBar from "../../compoments/Commerce/carTopBar";
import SortFilter from "../../compoments/Commerce/sortFilter";
import TopBar from "../../compoments/Commerce/topBar";
import { Wrapper } from "../../styles/indexCommerce.style";
import Head from "next/head";
import dynamic from "next/dynamic";

function CommerceMain() {
  const DynamicElement = dynamic(
    () => import("../../compoments/Commerce/ItemList"),
    {
      loading: () => <p>Loading...</p>,
    }
  );
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
        {/* <ItemList /> */}
        <DynamicElement />
      </Wrapper>
    </>
  );
}

export default CommerceMain;
