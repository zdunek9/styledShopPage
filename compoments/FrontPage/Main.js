import React from "react";
import Button1 from "../Elements/Button1";
import { Parting, Title, Wrapper, StyledImage } from "./Main.style";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import MainPageImage from "../../public/Images/glasses.webp";

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
            <Link href="/commerce">
              <div>
                <Button1 text="Start Shopping" color="black" />
              </div>
            </Link>
            <div>
              <div>
                <Button1 text="Explore More" />
                <FontAwesomeIcon icon={faSquareArrowUpRight} />
              </div>
            </div>
          </div>
        </Title>
      </Parting>
      <StyledImage>
        <Image src={MainPageImage} layout="intrinsic" alt="glasses" priority />
      </StyledImage>
    </Wrapper>
  );
}

export default Main;
