import React from "react";
import logo from "@/assets/img/logo-principal.png";
import Image from "next/image";
import CardsInfo from "../cards/CardsInfo";

const MainLogo = () => {
  return (
    <section className="bgDegrade w-full min-h-screen flex flex-col items-center gap-6 pt-[125px] md:pt-[130px] pb-2">
      <Image
        src={logo}
        width={500}
        height={500}
        alt="Logo"
        className="w-[95%] sm:w-[50%] max-w-[600px]"
      />
      <h1 className="w-[95%] text-header-sm md:text-header-md text-center">
        Gestión Transporte y Servicios a toda la Península
      </h1>
      <CardsInfo />
    </section>
  );
};

export default MainLogo;
