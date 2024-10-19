"use client";
import React, { FC, useState } from "react";
import MenuBurger from "./MenuBurger";
import Link from "next/link";
import Image from "next/image";
import icono from "@/assets/img/icono.png";

type Props = { scroll: number };
const NavBarSM: FC<Props> = ({ scroll }) => {
  const [classMenu, setClassMenu] = useState("menuBurger");
  const bgNavBarDefault =
    "text-black bg-[--white0] rounded-br-lg  rounded-bl-lg";
  const bgNavBarScrolled =
    "text-[--white1] bg-[#828586b6] backdrop-blur-sm  rounded-br-lg  rounded-bl-lg";

  return (
    <nav className={scroll > 50 ? bgNavBarScrolled : bgNavBarDefault}>
      <MenuBurger classMenu={classMenu} setClassMenu={setClassMenu} />
      {classMenu === "close" ? (
        <article className="transition-all duration-300 h-32 flex flex-col justify-center gap-4 py-2 px-4 text-lg font-medium">
          <Link href={"/servicios"} className="w-fit">Servicios</Link>
          <Link href={"/clientes"} className="w-fit">Nuestros Clientes</Link>
          <Link href={"/contacto"} className="w-fit">Contacto</Link>
        </article>
      ) : (
        <article className="transition-all duration-300 h-16 p-2">
          <Link href={"/"}>
            <Image
              src={icono}
              width={150}
              height={150}
              alt="Home"
              className="absolute top-0 left-2 w-[60px]"
            />
          </Link>
        </article>
      )}
    </nav>
  );
};

export default NavBarSM;
