import React, { FC } from "react";
type Props = {
  clase?: string;
  color?: string;
};
const WaveOne: FC <Props>= ({ clase, color }) => {
  return (
    <div className={`absolute w-full ${clase}`} >
      <svg
        data-name="Layer 1"
       
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        
          fill={color}
        ></path>
      </svg>
    </div>
  );
};

export default WaveOne;
