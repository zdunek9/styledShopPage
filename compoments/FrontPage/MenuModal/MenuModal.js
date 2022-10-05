import React from "react";
import { ListItem, Wrapper } from "./MenuModal.style";

function MenuModal() {
  return (
    <Wrapper>
      <ul>
        <ListItem>Salons</ListItem>
        <ListItem>About</ListItem>
        <ListItem>FAQ</ListItem>
        <ListItem>Returns</ListItem>
        <ListItem>Contact us</ListItem>
      </ul>
    </Wrapper>
  );
}

export default MenuModal;
