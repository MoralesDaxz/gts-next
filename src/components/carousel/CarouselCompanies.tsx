"use client";
import Image from "next/image";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
type Props = {
  imgWidth: number;
  imgHeight: number;
  heightContainer: string;
  arr: string[];
};
const CarouselCompanies: FC<Props> = ({
  imgWidth,
  imgHeight,
  arr,
  heightContainer,
}) => {
  return (
    <Swiper
      className={`w-full h-[90px] sm:h-[${heightContainer}px] mt-10 mb-4 text-black place-content-center max-w-[1000px]`}
      effect="slide"
      breakpoints={{
        330: {
          slidesPerView: 2,
          spaceBetween: 10,
          pagination: false,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          pagination: false,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
          pagination: false,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
          pagination: false,
        },
      }}
      loop={true}
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      modules={[Pagination, Scrollbar, Autoplay]}
    >
      {arr?.map((item, i) => {
        return (
          <SwiperSlide
            key={i}
            className={`sm:w-${imgWidth} sm:h-${imgHeight} p-2 border-solid border-2 border-[blue2] bg-[#0000009c] rounded-lg`}
          >
            <Image
              src={item}
              width={600}
              height={600}
              alt={"Car_" + (i + 1)}
              className={`w-full h-full `}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselCompanies;
