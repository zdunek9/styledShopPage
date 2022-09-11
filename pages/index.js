import { Wrapper } from "../styles/index.style";
import Header from "../compoments/FrontPage/Header";
import Main from "../compoments/FrontPage/Main";
import Footer from "../compoments/FrontPage/Footer";
import CommerceMain from "./commerce";


export default function Home() {
  const DUMMY_DATA = [
    {
      name: "Dolma",
      secondName: "vision",
      price: "233",
      source: "/Images/glassesItem7.png",
    },
    {
      name: "Merrit",
      secondName: "sunglasses",
      price: "199",
      source: "/Images/glassesItem2.png",
    },
    {
      name: "Josen",
      secondName: "sunglasses",
      price: "213",
      source: "/Images/glassesItem5.png",
    },
  ];
  return (
    // <Wrapper>
    //   <Header />
    //   <Main />
    //   <Footer data={DUMMY_DATA} />
    // </Wrapper>
    <CommerceMain />
  );
}
