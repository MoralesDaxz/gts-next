import React, { FC } from "react";
type Props = {
  clase?: string;
  color?: string;
};
const WaveOne: FC<Props> = ({ clase, color }) => {
  return (
    <div className={`waveOne ${clase}`}>
      <svg
        data-name="Layer 1"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          fill={color}
        ></path>
      </svg>
    </div>
  );
};

export default WaveOne;
