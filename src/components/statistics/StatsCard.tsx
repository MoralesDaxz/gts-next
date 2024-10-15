import Image from 'next/image'
import React from 'react'
import blueBall from "@/assets/statistics/blueBall.png";
const StatsCard = () => {
  return (
    <div className="relative bg-[#ffffff6e] rounded-3xl flex flex-col items-center p-4 h-[210px] w-[70%] md:w-[35%] lg:w-[22%] max-w-[250px] shadow-[#080a0f] shadow-md">
        <Image
          src={blueBall}
          width={100}
          height={100}
          alt="bg"
          className="absolute mx-auto top-14 w-[120px] z-0"
        />
        <p className="text-subtitle-sm md:text-subtitle-md">Experiencia</p>
        <p className="h-[120px] z-10 text-[24px] flex flex-row gap-2 justify-center items-center font-bold text-center">
          <span className="text-[80px]">40</span> &nbsp;Años
        </p>
      {/*   <div className="h-[1px] w-[80%] bg-[#01255396] self-center"></div> */}

        <p className="text-center text-base font-normal leading-4">
        Consolidados en el sector, brindando confianza a nuestros clientes.
        </p>
      </div>
  )
}

export default StatsCard