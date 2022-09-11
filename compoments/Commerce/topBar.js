import React from "react";
import { Image, Options, Wrapper } from "./topBar.style";
import { GoLocation } from "react-icons/go";
import { BsArrowRepeat, BsCart2 } from "react-icons/bs";
import { MdOutlineManageAccounts } from "react-icons/md";

function TopBar() {
  return (
    <Wrapper>
      <Image src="/Images/logo.png" alt="logo" />
      <Options>
        <div>
          <span>
            <GoLocation />
          </span>
          <p>Salons</p>
        </div>
        <div>
          <span>
            <BsArrowRepeat />
          </span>
          <p>Last Order</p>
        </div>
        <div>
          <span>
            <MdOutlineManageAccounts />
          </span>
          <p>My account</p>
        </div>
        <div>
          <span>
            <BsCart2 />
          </span>
          <p>Cart (0)</p>
        </div>
      </Options>
    </Wrapper>
  );
}

export default TopBar;
