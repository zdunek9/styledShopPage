import React from "react";
import SingleItem from "../Elements/SingleItem/SingleItem";
import { ItemsWrapper, SubTitle, Wrapper } from "./Footer.style";
import { motion } from "framer-motion";

import Image from "next/image";

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
function Footer({ data }) {
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
        {data.map((item) => (
          <SingleItem
            key={item.name}
            name={item.name}
            secondName={item.secondName}
            price={item.price}
            source={item.source}
          />
        ))}
      </ItemsWrapper>
    </Wrapper>
  );
}

export default Footer;
