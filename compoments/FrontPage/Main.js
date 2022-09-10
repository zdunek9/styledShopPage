import React from "react";
import Button1 from "../Elements/Button1";
import { BsArrowDownRightCircle } from "react-icons/bs";
import { Parting, Title, Wrapper, StyledImage } from "./Main.style";
import { motion } from "framer-motion";

const loadVariants = {
  hidden: {
    opacity: 0,
    y: "100vw",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
function Main() {
  return (
    <Wrapper
      as={motion.section}
      variants={loadVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", bounce: 0.2, delay: 0.5 }}
    >
      <Parting>
        <Title>
          <h1>
            Glasses
            <br /> & Lens
          </h1>
          <p>
            Buy the best high-quality sunglasses from us. <br />
            More than 100 types of assortment
          </p>
          <div>
            <Button1 text="Start Shopping" color="black" />
            <div>
              <Button1 text="Explore More" />
              <BsArrowDownRightCircle style={{ fontSize: "2rem" }} />
            </div>
          </div>
        </Title>
      </Parting>
      <StyledImage>
        <img
          src="/Images/glasses.jpg"
          alt="glasses"
          style={{ borderRadius: "25px" }}
        />
      </StyledImage>
    </Wrapper>
  );
}

export default Main;
