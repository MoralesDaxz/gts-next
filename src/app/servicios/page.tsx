import WaveOne from "@/components/divider/WaveOne";
import Services from "@/components/services/Services";
import Statistics from "@/components/statistics/Statistics";
import React from "react";

const page = () => {
  return (
    <section className="w-full relative">
      <Services />
      <Statistics />
      <WaveOne clase="absolute bottom-0" color="#001423" />
    </section>
  );
};

export default page;
