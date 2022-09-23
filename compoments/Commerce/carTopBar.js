import React from "react";
import { Lens, UnderListLenses, Wrapper } from "./catTopBar.style";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../redux/store";

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
    <Wrapper>
      <Lens as={motion.li} initial="rest" whileHover="hover" animate="rest">
        CONTACT LENSES
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
        FRAMES AND EYEGLASSES
        <UnderListLenses as={motion.ul} variants={showItems}>
          <li onClick={() => selectCategory("Women Frames")}>WOMEN'S</li>
          <li onClick={() => selectCategory("Men Frames")}>MEN'S</li>
          <li onClick={() => selectCategory("Children Frames")}>CHILDREN'S</li>
          <li onClick={() => selectCategory("Accessories")}>ACCESSORIES</li>
          <li onClick={() => selectCategory("Ready Glasses")}>READY GLASSES</li>
          <li onClick={() => selectCategory("Custom Eyeglass")}>
            CUSTOM EYEGLASS FRAME
          </li>
        </UnderListLenses>
      </Lens>
      <Lens as={motion.li} initial="rest" whileHover="hover" animate="rest">
        SUNGLASSES
        <UnderListLenses as={motion.ul} variants={showItems}>
          <li>WOMEN'S</li>
          <li>MEN'S</li>
          <li>CHILDREN'S</li>
          <li>ACCESSORIES</li>
        </UnderListLenses>
      </Lens>
      <Lens>PROMOTIONS</Lens>
    </Wrapper>
  );
}

export default CarTopBar;
