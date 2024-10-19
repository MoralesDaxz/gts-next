import Contact from "@/components/contact/Contact";
import WavesOpacity from "@/components/divider/WavesOpacity";
import EcoBox from "@/components/eco/EcoBox";
import React from "react";

const page = () => {
  return (
    <>
      <Contact />
      <WavesOpacity color={"#001423"} />
      <EcoBox />
    </>
  );
};

export default page;
