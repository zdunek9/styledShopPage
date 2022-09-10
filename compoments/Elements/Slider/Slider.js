import React from "react";
import { AddButton, NamePrice, NameWrapper, Wrapper } from "./Slider.style";
import { AiOutlinePlus } from "react-icons/ai";
// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Slider({ data }) {
  return (
    <Swiper
      modules={[Navigation, Autoplay ]}
      slidesPerView="auto"
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
      }}
      spaceBetween={0}
      loop
      speed={1500}
      navigation
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      style={{
        padding: "10px",
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.name}>
          <Wrapper>
            <NamePrice>
              <NameWrapper>
                <h3>{item.name}</h3>
                <p>{item.secondName}</p>
              </NameWrapper>
              <span>${item.price}</span>
              <AddButton>
                <AiOutlinePlus />
              </AddButton>
            </NamePrice>
            <img src={item.source} alt="itemPic" width={180} height={80} />
          </Wrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
