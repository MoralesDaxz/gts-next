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
const CarouselCars: FC<Props> = ({ imgWidth,imgHeight, arr, heightContainer }) => {
  return (
    <Swiper
      className={`w-full h-[${heightContainer}px] mt-10 mb-4 text-black place-content-center max-w-[1500px]`}
      effect="slide"
      spaceBetween={10}
      breakpoints={{
        340: {
          slidesPerView: 2,
          spaceBetween: 10,
          pagination:false
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      loop={true}
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      modules={[Pagination, Scrollbar, Autoplay]}
    >
      {arr?.map((item, i) => {
        return (
          <SwiperSlide key={i} className={`w-${imgWidth} ${imgHeight}`}>
            <Image
              src={item}
              width={400}
              height={400}
              alt={"Car_" + (i + 1)}
              className={`w-full h-full`}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselCars;
