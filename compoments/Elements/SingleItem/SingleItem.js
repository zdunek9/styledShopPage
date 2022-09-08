import React from "react";
import {
  AddButton,
  NamePrice,
  NameWrapper,
  Photo,
  Wrapper,
} from "./SingleItem.style";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";

function SingleItem({ name, secondName, price, source }) {
  return (
    <Wrapper>
      <NamePrice>
        <NameWrapper>
          <h3>{name}</h3>
          <p>{secondName}</p>
        </NameWrapper>
        <span>${price}</span>
        <AddButton>
          <AiOutlinePlus />
        </AddButton>
      </NamePrice>
      <Image src={source} alt="itemPic" width={180} height={180} />
    </Wrapper>
  );
}

export default SingleItem;
