import React from "react";
import Card from "./Card";
import { infoCards } from "@/utils";

const CardsInfo = () => {
  return (
    <>
    <section className="flex flex-wrap justify-center gap-3 gap-y-5 mt-[80px] max-w-[1100px]">
      {infoCards.map((item, i) => {
        return (
          <Card
            src={item.img}
            alt={item.alt}
            prf={item.prf}
            title={item.title}
            key={i}
          />
        );
      })}
    </section>
    </>
  );
};

export default CardsInfo;
