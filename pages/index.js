import { Wrapper } from "../styles/index.style";
import Header from "../compoments/FrontPage/Header";
import Main from "../compoments/FrontPage/Main";
import Footer from "../compoments/FrontPage/Footer";

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
}
