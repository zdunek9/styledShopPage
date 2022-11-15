import React, { useState } from "react";
import { Lens, UnderListLenses, Wrapper } from "./carTopBarMobile.style";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
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

function CarTopBarMobile() {
  const dispatch = useDispatch();
  const [showItemMobile, setShowItemMobile] = useState("");
  const selectCategory = (category) => {
    dispatch(counterActions.categoryChangeRemoveFilters());
    dispatch(counterActions.filterCategory(category));
    setShowItemMobile("");
  };

  const changeSubCategory = (catId) => {
    if (showItemMobile === catId) {
      setShowItemMobile("");
    } else {
      setShowItemMobile(catId);
    }
  };
  return (
    <Wrapper>
      <Lens>
        <p onClick={() => changeSubCategory("1")}>CONTACT LENSES</p>
        {showItemMobile === "1" && (
          <UnderListLenses as={motion.ul} variants={showItems}>
            <li onClick={() => selectCategory("Contact Lenses")}>
              CONTACT LENSES
            </li>
            <li onClick={() => selectCategory("Lens Fluid")}>LENS FLUID</li>
            <li onClick={() => selectCategory("Eye Drops")}>EYE DROPS</li>
            <li onClick={() => selectCategory("Containers")}>CONTAINERS</li>
          </UnderListLenses>
        )}
      </Lens>
      <Lens>
        <p onClick={() => changeSubCategory("2")}>FRAMES AND EYEGLASSES</p>
        {showItemMobile === "2" && (
          <UnderListLenses as={motion.ul} variants={showItems}>
            <li onClick={() => selectCategory("Women's Frames")}>WOMEN'S</li>
            <li onClick={() => selectCategory("Men's Frames")}>MEN'S</li>
            <li onClick={() => selectCategory("Children's Frames")}>
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
        )}
      </Lens>
      <Lens>
        <p onClick={() => changeSubCategory("3")}>SUNGLASSES</p>
        {showItemMobile === "3" && (
          <UnderListLenses as={motion.ul} variants={showItems}>
            <li onClick={() => selectCategory("Women's Sunglasses")}>WOMEN'S</li>
            <li onClick={() => selectCategory("Mens's Sunglasses")}>MEN'S</li>
            <li onClick={() => selectCategory("Children's Sunglasses")}>
              CHILDREN'S
            </li>
            <li onClick={() => selectCategory("Accessories Sunglasses")}>
              ACCESSORIES
            </li>
          </UnderListLenses>
        )}
      </Lens>
    </Wrapper>
  );
}

export default CarTopBarMobile;
