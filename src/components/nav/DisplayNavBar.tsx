"use client";
import React from "react";
import NavBarSM from "./NavBarSM";
import { useControlDisplay } from "@/context/ControlDisplay";
import NavBarMD from "./NavBarMD";

const DisplayNavBar = () => {
  const { windowWidth, windowScroll } = useControlDisplay();
  return (
    <nav className="fixed w-full z-50">
      {windowWidth > 750 ? (
        <NavBarMD scroll={windowScroll} />
      ) : (
        <NavBarSM scroll={windowScroll} />
      )}
    </nav>
  );
};

export default DisplayNavBar;