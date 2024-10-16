import React from "react";
import StatsCard from "./StatsCard";
import { infoStats } from "@/utils";

const Statistics = () => {
  return (
    <section className="bgStat min-h-[400px] text-[--blue0] flex flex-wrap items-center gap-6 justify-center p-4">
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
