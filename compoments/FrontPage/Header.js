import React, { useState } from "react";
import { Category, IconShop, Logo, Menu, Wrapper } from "./Header.style";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { counterActions } from "../../redux/store";
import MenuModal from "./MenuModal/MenuModal";

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
  const dispatch = useDispatch();
  const [loadMenuModal, setLoadMenuModal] = useState(false);
  return (
    <>
      {loadMenuModal && <MenuModal isOpenHandler={loadMenuModal} />}
      <Wrapper
        as={motion.section}
        variants={loadVariants}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring", bounce: 0.2, delay: 0.3 }}
        onBlur={() => setLoadMenuModal(false)}
      >
        <Category>
          <li>HOME</li>
          <Link href="/commerce">
            <li>SHOP</li>
          </Link>
          <Link href="/commerce">
            {/* press new lead to commerse with newest filter marked */}
            <li onClick={() => dispatch(counterActions.sortItems("1"))}>NEW</li>
          </Link>
          <li>SALE</li>
        </Category>
        <Logo>
          <Image
            src="/Images/logo.webp"
            width={200}
            height={54}
            layout="fixed"
            priority={true}
            alt="logo"
          />
        </Logo>
        <Menu>
          <p onClick={() => setLoadMenuModal((prevState) => !prevState)}>
            Menu
          </p>
          <div>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <IconShop>
            <FontAwesomeIcon icon={faBagShopping} />
          </IconShop>
        </Menu>
      </Wrapper>
    </>
  );
}

export default Header;
