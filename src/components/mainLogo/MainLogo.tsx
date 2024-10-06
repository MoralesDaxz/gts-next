import React from "react";
import logo from "@/assets/img/logo-principal.png";
import Image from "next/image";
const MainLogo = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center">
      <Image
        src={logo}
        width={500}
        height={500}
        alt="Logo"
        className="w-[70%]"
      />
      <h1>Gestión Transporte y Servicios a toda la Península</h1>
    </section>
  );
};

export default MainLogo;
