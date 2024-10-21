import React from "react";
import logo from "@/assets/img/logo-principal.png";
import Image from "next/image";
import WaveOne from "../divider/WaveOne";

const MainLogo = () => {
  return (
    <section className="bgMain w-full min-h-screen flex flex-col items-center justify-center pt-[100px] md:pt-[90px] pb-2">
      <Image
        src={logo}
        width={500}
        height={500}
        alt="Logo"
        className="w-[30%] sm:w-[48%] max-w-[250px] absolute right-0 bottom-6"
      />
      <h1 className="w-[95%] text-header-sm md:text-header-md text-center text-white">
        Gestión Transporte y Servicios a toda la Península
      </h1>
      <WaveOne clase="absolute bottom-0"  color="#001423" />
    </section>
  );
};

export default MainLogo;
