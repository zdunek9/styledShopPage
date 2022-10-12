import React from "react";
import { ListItem, Wrapper } from "./MenuModal.style";
import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemList = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
  },
};

function MenuModal() {
  const menuItems = ["Salons", "About", "FAQ", "Returns", "Contact us"];

  return (
    <Wrapper>
      <motion.ul variants={variants} initial="hidden" animate="show">
        {menuItems.map((item) => (
          <ListItem
            key={item}
            as={motion.li}
            variants={itemList}
          >
            {item}
          </ListItem>
        ))}
      </motion.ul>
    </Wrapper>
  );
}

export default MenuModal;
