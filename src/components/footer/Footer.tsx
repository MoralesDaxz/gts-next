import React from "react";
import InfoContact from "../contact/InfoContact";
import Image from "next/image";
import logo from "@/assets/img/logo-principal.png";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bgDegrade flex flex-col items-center gap-5 pt-[60px]">
        <div className="h-[1px] bg-[#ffffffb2] w-[95%] max-w-[1100px] rounded-md"></div>
      <section className="w-[90%] flex items-center justify-between gap-2 max-w-[1100px]">
        <InfoContact/>
        <Link href={"/"} className="w-fit max-h-[250px]">
          <Image
            src={logo}
            width={200}
            height={200}
            alt="logo"
            className="w-[70%] sm:w-[40%] lg:w-[50%] mx-auto max-h-[250px] mr-0"
          />
        </Link>
      </section>
      <section>
        <p className="text-center text-sm text-white opacity-75">
          Copyright © GTServicios.es - 2024
        </p>
      </section>
    </footer>
  );
};

export default Footer;
