"use client";
import React, { useState } from "react";
import MenuBurger from "./MenuBurger";
import Link from "next/link";
import Image from "next/image";
import icono from "/assets/img/icono.png";
import { useControlDisplay } from "@/context/ControlDisplay";
const NavBarSM = () => {
  const [classMenu, setClassMenu] = useState("menuBurger");
  const { windowScroll } = useControlDisplay();
  const bgNavBarDefault = "text-black bg-[--white0] rounded-br-lg  rounded-bl-lg";
  const bgNavBarScrolled =
    "text-black  bg-[#b1b4b6c7] backdrop-blur-sm  rounded-br-lg  rounded-bl-lg";

  return (
    <div className={windowScroll > 50 ? bgNavBarScrolled : bgNavBarDefault}>
      <MenuBurger classMenu={classMenu} setClassMenu={setClassMenu} />
      {classMenu === "close" ? (
        <div className=" transition-all  duration-300 h-32 flex flex-col justify-center gap-4 py-2 px-4 text-lg font-medium">
          <Link href={"#servicio"}>Servicios</Link>
          <Link href={"#cliente"}>Nuestros Clientes</Link>
          <Link href={"#contacto"}>Contacto</Link>
        </div>
      ) : (
        <div className="transition-all duration-300 h-16 p-2">
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
