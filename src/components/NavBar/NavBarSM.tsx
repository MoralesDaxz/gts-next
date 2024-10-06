"use client";
import React, { useState } from "react";
import MenuBurger from "./MenuBurger";
import Link from "next/link";
import Image from "next/image";
import icono from "@/assets/img/icono.png";
const NavBarSM = () => {
  const [classMenu, setClassMenu] = useState("menuBurger");

  return (
    <div className="text-black">
      {/*    <div className="bg-[--white0] flex flex-col gap-3 transition-all duration-500 text-[black]"></div> */}

      <MenuBurger classMenu={classMenu} setClassMenu={setClassMenu} />
      {classMenu === "close" ? (
        <div className="bg-[--white0] transition-all duration-300 h-32 flex flex-col justify-center gap-4 p-2 text-lg font-medium">
          <Link href={"#servicio"}>Servicios</Link>
          <Link href={"#cliente"}>Nuestros Clientes</Link>
          <Link href={"#contacto"}>Contacto</Link>
        </div>
      ) : (
        <div className="transition-all duration-300 h-16 bg-[--white0] p-2">
          <Link href={"/"}>
            <Image
              src={icono}
              width={150}
              height={150}
              alt="Home"
              className="absolute top-0 left-2 w-[60px]"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBarSM;
