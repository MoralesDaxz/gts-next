import React from "react";
import StatsCard from "./StatsCard";
import { infoStats } from "@/utils";

const Statistics = () => {
  return (
    <section className="bgStat min-h-[450px] text-[--blue0] flex flex-wrap items-center gap-6 lg:gap-4 justify-center py-14 px-2 md:px-[100px] lg:px-2">
      {infoStats.map((item, i) => {
        return (
          <StatsCard
            title={item.title}
            left={item.left}
            right={item.right}
            text={item.text}
            key={i}
          />
        );
      })}
    </section>
  );
};

export default Statistics;
