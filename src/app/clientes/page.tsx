import Companies from "@/components/companies/Companies";
import WaveOne from "@/components/divider/WaveOne";
import Statistics from "@/components/statistics/Statistics";
import React from "react";

const page = () => {
  return (
    <section className="w-full relative">
      <Companies />
      <Statistics />
      <WaveOne clase="absolute bottom-0" color="#001423" />
    </section>
  );
};

export default page;
