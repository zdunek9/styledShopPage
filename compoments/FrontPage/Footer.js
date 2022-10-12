import React from "react";
import { ItemsWrapper, SubTitle, Wrapper } from "./Footer.style";
import { motion } from "framer-motion";
import Slider from "../Elements/Slider/Slider";
import { DUMMY_DATA } from "../Data/ItemFrontPageGlasses";
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
function Footer() {
  return (
    <Wrapper
      as={motion.section}
      variants={loadVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", bounce: 0.2, delay: 0.6 }}
    >
      <SubTitle>
        Trend <br /> Products
      </SubTitle>
      <ItemsWrapper>
        <Slider data={DUMMY_DATA} />
        </ItemsWrapper>
    </Wrapper>
  );
}

export default Footer;
