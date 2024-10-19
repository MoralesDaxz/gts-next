import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import logo from "@/assets/img/icono.png";
type Props = { scroll: number };
const NavBarMD: FC<Props> = ({ scroll }) => {
  const styleDefault =
    "relative z-40 w-full text-black flex justify-center items-center  rounded-br-lg  rounded-bl-lg transition-all duration-300";
  const bgNavBarDefault = `${styleDefault} h-[70px] bg-[--white0]`;
  const bgNavBarScrolled = `${styleDefault} h-[55px] text-[--white1] bg-[#828586b6] backdrop-blur-md `;
  return (
    <nav className={scroll > 80 ? bgNavBarScrolled : bgNavBarDefault}>
      <Link href={"/"} className="absolute top-0 left-4 flex items-center h-full opacity-70 hover:opacity-100 transition-all duration-300">
        <Image
          src={logo}
          alt="Inicio"
          width={60}
          height={60}
          className=" w-[40px]"
        />
      </Link>
      <article className="flex justify-center gap-10">
        <Link href={"/servicios"} className="group/services">
          <p className="text-parag-sm md:text-parag-md lg:text-parag-lg">
            Servicios
          </p>
          <div className="w-0 mt-[2px] bg-[--blue2] h-[2px] group-hover/services:w-full transition-all duration-500"></div>
        </Link>
        <Link href={"/clientes"} className="group/clients">
          <p className="text-parag-sm md:text-parag-md lg:text-parag-lg">
            Nuestros Clientes
          </p>
          <div className="w-0 mt-[2px] bg-[--blue2] h-[2px] group-hover/clients:w-full transition-all duration-500"></div>
        </Link>
        <Link href={"/contacto"} className="group/contact">
          <p className="text-parag-sm md:text-parag-md lg:text-parag-lg">
            Contacto
          </p>
          <div className="w-0 mt-[2px] bg-[--blue2] h-[2px] group-hover/contact:w-full transition-all duration-500"></div>
        </Link>
      </article>
    </nav>
  );
};

export default NavBarMD;
