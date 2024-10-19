import Image from "next/image";
import React, { FC } from "react";
import blueBall from "@/assets/statistics/blueBall.png";
type Props = {
  title: string;
  left: number;
  right: string;
  text: string;
};
const StatsCard: FC<Props> = ({ title, left, right, text }) => {
  return (
    <div className="relative bg-[#ffffff6e] rounded-3xl flex flex-col items-center p-4 h-[210px] w-[70%] md:w-[80%] min-w-[250px] md:max-w-[250px]  shadow-[#080a0f] shadow-md">
      <Image
        src={blueBall}
        width={100}
        height={100}
        alt="bg"
        className="absolute mx-auto top-14 w-[130px] z-0"
      />
      <p className="text-subtitle-sm md:text-subtitle-md">{title}</p>
      <p className="h-[120px] z-10 text-[24px] flex flex-row gap-2 justify-center items-center font-bold text-center">
        <span className="text-[80px]">{left}</span> &nbsp;{right}
      </p>
      {/*   <div className="h-[1px] w-[80%] bg-[#01255396] self-center"></div> */}

      <p className="text-center text-base font-normal leading-4">{text}</p>
    </div>
  );
};

export default StatsCard;
