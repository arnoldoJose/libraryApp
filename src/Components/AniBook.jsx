import React from 'react'
import styled from 'styled-components';

import poe from '../Img/poesia.jpg';

import SwiperCore, {Navigation,Pagination,EffectCoverflow,Autoplay} from "swiper";
import { Swiper,SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

const ContainerBook = styled.div`
text-align:center;
h1{
  margin:1em;
}
`;

SwiperCore.use([EffectCoverflow, Navigation, Pagination, Autoplay]);
const AniBook = () => {

  return (
    <ContainerBook className="container swiper-container ">

        <h1>Autores</h1>
      <Swiper
      effect="autoplay"
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src={poe} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={poe} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={poe} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={poe} alt=""/>
        </SwiperSlide>
        ...
      </Swiper>
    </ContainerBook>
  );
}

export default AniBook
