import React from "react";
import { Image, Options, Wrapper } from "./topBar.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faRepeat,
  faUserGear,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function TopBar() {
  return (
    <Wrapper>
      <Image src="/Images/logo.png" alt="logo" />
      <Options>
        <div>
          <span>
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <p>Salons</p>
        </div>
        <div>
          <span>
            <FontAwesomeIcon icon={faRepeat} />
          </span>
          <p>Last Order</p>
        </div>
        <div>
          <span>
            <FontAwesomeIcon icon={faUserGear} />
          </span>
          <p>My account</p>
        </div>
        <div>
          <span>
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
          <p>Cart (0)</p>
        </div>
      </Options>
    </Wrapper>
  );
}

export default TopBar;
