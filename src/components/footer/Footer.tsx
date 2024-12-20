import React from "react";
import InfoContact from "../contact/InfoContact";
import Image from "next/image";
import logo from "@/assets/img/logo-principal.png";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bgDegrade flex flex-col items-center justify-center gap-5 p-3  text-white pt-10">
      <section className="w-[90%] flex items-center justify-between gap-2 max-w-[1200px] ">
        <InfoContact color="white" classContain="text-white" />
        <Link href={"/"} className="w-fit max-h-[250px] ">
          <Image
            src={logo}
            width={200}
            height={200}
            alt="logo"
            className="hidden sm:block max-w-[100px] mx-auto mr-0 "
          />
        </Link>
      </section>
      <section>
        <p className="text-center text-sm opacity-75">
          Copyright © GTServicios.es - 2024
        </p>
      </section>
    </footer>
  );
};

export default Footer;
