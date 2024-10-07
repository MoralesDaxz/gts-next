"use client";
import React from "react";
import NavBarSM from "./NavBarSM";
import { useControlDisplay } from "@/context/ControlDisplay";
import NavBarMD from "./NavBarMD";

const DisplayNavBar = () => {
  const { windowWidth } = useControlDisplay();
  return (
    <nav className="fixed w-full z-50">
      {windowWidth > 750 ? <NavBarMD /> : <NavBarSM />}
    </nav>
  );
};

export default DisplayNavBar;
