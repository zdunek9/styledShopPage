import React from "react";
import { Category, IconShop, Logo, Menu, Wrapper } from "./Header.style";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../public/Images/logo.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";

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
function Header() {
  return (
    <Wrapper
      as={motion.section}
      variants={loadVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", bounce: 0.2, delay: 0.3 }}
    >
      <Category>
        <li>HOME</li>
        <li>
          <Link href="/commerce">SHOP</Link>
        </li>
        <li>NEW</li>
        <li>SALE</li>
      </Category>
      <Logo>
        <Image src={logo} />
      </Logo>
      <Menu>
        <p>Menu</p>
        <div>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <IconShop>
          <FontAwesomeIcon icon={faBagShopping} />
        </IconShop>
      </Menu>
    </Wrapper>
  );
}

export default Header;
