"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import top from "@/assets/mainLogo/top.svg";
type Props = {
  src: string;
  alt: string;
  prf: string;
  title: string;
  id: string;
  children?: React.ReactNode;
};
const Card: FC<Props> = ({ src, alt, prf, title, children, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classContain =
    "w-[45%] md:w-[30%] flex flex-col items-center justify-center gap-3 text-center text-white shadow-black shadow-md rounded-lg pt-2 px-2 bg-[#050c1a2c] cursor-pointer h-[300px] border-solid border-2 border-[#77869e8e] hover:border-solid hover:border-2 hover:border-[#a5b2c5b9]";
  const inactivePrf = "h-0 opacity-0 ease-out";
  const activePrf = "h-[130px] md:h-[110px] ease-in";
  return (
    <article id={id} className={classContain} onClick={() => setIsOpen(!isOpen)}>
      <h2 className=" text-subtitle-sm md:text-subtitle-md">{title}</h2>
      <Image
        src={src}
        width={300}
        height={300}
        className="w-[70px] opacity-80 "
        alt={alt}
      />

      <p
        className={`font-extralight text-sm md:text-base transition-all duration-300 ${
          isOpen ? activePrf : inactivePrf
        }`}
      >
        {prf}
      </p>

      {children}

      <Image
        src={top}
        width={300}
        height={300}
        className={`w-[20px] transition-all duration-300 ${
          isOpen ? " rotate-0" : " rotate-180"
        }`}
        alt={"touch"}
      />
    </article>
  );
};

export default Card;
