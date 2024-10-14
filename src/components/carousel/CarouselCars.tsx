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
      className={`w-full h-[${heightContainer}px] mt-10 mb-4 text-black place-content-center max-w-[1150px]`}
      effect="slide"
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      loop={true}
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      modules={[Pagination, Scrollbar, Autoplay]}
    >
      {arr?.map((item, i) => {
        return (
          <SwiperSlide key={i} className="w-auto">
            <Image
              src={item}
              width={600}
              height={600}
              alt={"Car_" + (i + 1)}
              className={` w-${imgWidth} h-${imgHeight}`}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselCars;
