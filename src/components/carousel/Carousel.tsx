'use client'
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Carousel = () => {
  const arrayImagenes = [
    "https://i.ibb.co/ZS7zcgp/vehiculo1.png",
    "https://i.ibb.co/Y0kgy61/vehiculo2.png",
    "https://i.ibb.co/cLyZ7tH/vehiculo3.png",
    "https://i.ibb.co/6YpWCWm/vehiculo4.png",
    "https://i.ibb.co/hC6wvV4/vehiculo5.png",
    "https://i.ibb.co/VBMPrQY/vehiculo6.png",
  ];

  return (
    <Swiper
      className="w-full h-auto mt-10 mb-4 text-black place-content-center max-w-[1150px]"
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
      {arrayImagenes.map((item, i) => {
        return (
          <SwiperSlide key={i} className="w-auto h-full">
            <Image
              src={item}
              width={250}
              height={0}
              alt={"Car_" + (i + 1)}
              className=" mx-auto"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
