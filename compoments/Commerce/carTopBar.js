import React, { useState } from "react";
import { Lens, UnderListLenses, Wrapper } from "./catTopBar.style";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { counterActions } from "../../redux/store";
import CarTopBarMobile from "./carTopBarMobile";

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
  const dispatch = useDispatch();
  const selectCategory = (category) => {
    dispatch(counterActions.categoryChangeRemoveFilters());
    dispatch(counterActions.filterCategory(category));
  };
  return (
    <>
      <CarTopBarMobile />
      <Wrapper>
        <Lens as={motion.li} initial="rest" whileHover="hover" animate="rest">
          <p>CONTACT LENSES</p>
          <UnderListLenses as={motion.ul} variants={showItems}>
            <li onClick={() => selectCategory("Contact Lenses")}>
              CONTACT LENSES
            </li>
            <li onClick={() => selectCategory("Lens Fluid")}>LENS FLUID</li>
            <li onClick={() => selectCategory("Eye Drops")}>EYE DROPS</li>
            <li onClick={() => selectCategory("Containers")}>CONTAINERS</li>
          </UnderListLenses>
        </Lens>
        <Lens as={motion.li} initial="rest" whileHover="hover" animate="rest">
          <p>FRAMES AND EYEGLASSES</p>
          <UnderListLenses as={motion.ul} variants={showItems}>
            <li onClick={() => selectCategory("Women Frames")}>WOMEN'S</li>
            <li onClick={() => selectCategory("Men Frames")}>MEN'S</li>
            <li onClick={() => selectCategory("Children Frames")}>
              CHILDREN'S
            </li>
            <li onClick={() => selectCategory("Accessories")}>ACCESSORIES</li>
            <li onClick={() => selectCategory("Ready Glasses")}>
              READY GLASSES
            </li>
            <li onClick={() => selectCategory("Custom Eyeglass")}>
              CUSTOM EYEGLASS FRAME
            </li>
          </UnderListLenses>
        </Lens>
        <Lens as={motion.li} initial="rest" whileHover="hover" animate="rest">
          <p>SUNGLASSES</p>
          <UnderListLenses as={motion.ul} variants={showItems}>
            <li onClick={() => selectCategory("WOMEN SUNGLASSES")}>WOMEN'S</li>
            <li onClick={() => selectCategory("MEN SUNGLASSES")}>MEN'S</li>
            <li onClick={() => selectCategory("CHILDREN SUNGLASSES")}>
              CHILDREN'S
            </li>
            <li onClick={() => selectCategory("ACCESSORIES SUNGLASSES")}>
              ACCESSORIES
            </li>
          </UnderListLenses>
        </Lens>
      </Wrapper>
    </>
  );
}

export default CarTopBar;
