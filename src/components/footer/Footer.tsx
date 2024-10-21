import React from "react";
import InfoContact from "../contact/InfoContact";
import Image from "next/image";
import logo from "@/assets/img/logo-principal.png";
import Link from "next/link";
const Footer = () => {
  /* bg-[#ffffffb2] */
  return (
    <footer className="bgDegrade flex flex-col items-center justify-center gap-5 p-3  text-white pt-10">
   
      <section className="w-[90%] flex items-center justify-between gap-2 max-w-[1100px] ">
        <InfoContact color="white" classContain="text-white"/>
        <Link href={"/"} className="w-fit max-h-[250px] ">
          <Image
            src={logo}
            width={200}
            height={200}
            alt="logo"
            className="w-[80px] h-[70px] sm:w-[110px] sm:h-[100px] lg:w-[180px] lg:h-[170px] mx-auto  mr-0 bg-[#05131dde] rounded-full p-2"
          />
        </Link>
      </section>
      <section>
        <p className="text-center text-sm  opacity-75">
          Copyright © GTServicios.es - 2024
        </p>
      </section>
    </footer>
  );
};

export default Footer;
