import { Wrapper } from "../styles/index.style";
import Header from "../compoments/FrontPage/Header";
import Main from "../compoments/FrontPage/Main";
import Footer from "../compoments/FrontPage/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Optico e-shop</title>
        <meta
          name="description"
          content="Optico welcome page. Author: Michal Zdunczyk"
        ></meta>
      </Head>
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </>
  );
}
