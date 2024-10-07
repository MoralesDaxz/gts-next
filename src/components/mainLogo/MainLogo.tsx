import React from "react";
import logo from "@/assets/img/logo-principal.png";
import Image from "next/image";
const MainLogo = () => {
  return (
    <section className="bgMain w-full min-h-screen flex flex-col items-center gap-3 pt-[125px] md:pt-[50px]">
      <Image
        src={logo}
        width={500}
        height={500}
        alt="Logo"
        className="w-[95%] sm:w-[60%]"
      />
      <h1 className="text-title-base sm:text-title-sm md:text-title-md text-center">Gestión Transporte y Servicios a toda la Península</h1>
    </section>
  );
};

export default MainLogo;
