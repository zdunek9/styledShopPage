import React from "react";
import { Lens, UnderListLenses, Wrapper } from "./catTopBar.style";
import { motion } from "framer-motion";

const showItems = {
  rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

function CarTopBar() {
  return (
    <Wrapper>
      <Lens as={motion.li} initial="rest" whileHover="hover" animate="rest">
        CONTACT LENSES
        <UnderListLenses as={motion.ul} variants={showItems}>
          <li>CONTACT LENSES</li>
          <li>LENS FLUID</li>
          <li>EYE DROPS</li>
          <li>CONTAINERS</li>
        </UnderListLenses>
      </Lens>
      <Lens as={motion.li} initial="rest" whileHover="hover" animate="rest">
        FRAMES AND EYEGLASSES
        <UnderListLenses as={motion.ul} variants={showItems}>
          <li>WOMEN'S</li>
          <li>MEN'S</li>
          <li>CHILDREN'S</li>
          <li>ACCESSORIES</li>
          <li>READY GLASSES</li>
          <li>CUSTOM EYEGLASS FRAME</li>
        </UnderListLenses>
      </Lens>
      <Lens as={motion.li} initial="rest" whileHover="hover" animate="rest">
        SUNGLASSES
        <UnderListLenses as={motion.ul} variants={showItems}>
          <li>WOMEN'S</li>
          <li>MEN'S</li>
          <li>CHILDREN'S</li>
          <li>ACCESSORIES</li>
          <li>CUSTOM EYEGLASS FRAME</li>
        </UnderListLenses>
      </Lens>
      <Lens>PROMOTIONS</Lens>
    </Wrapper>
  );
}

export default CarTopBar;
