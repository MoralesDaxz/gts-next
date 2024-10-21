import Contact from "@/components/contact/Contact";
import WaveCurves from "@/components/divider/WaveCurves";
import WaveOne from "@/components/divider/WaveOne";

import EcoBox from "@/components/eco/EcoBox";
import React from "react";

const page = () => {
  return (
    <section className="w-full relative">
      <Contact />
      <WaveCurves color={"#001423"} />
      <EcoBox />
      <WaveOne clase="absolute bottom-0" color="#001423" />
    </section>
  );
};

export default page;
