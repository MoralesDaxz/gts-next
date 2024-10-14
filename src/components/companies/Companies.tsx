import React from "react";

import { companiesImgages } from "@/utils/companies/companies";
import CarouselCompanies from "../carousel/CarouselCompanies";
const Companies = () => {
  return (
    <div className="bg-[--blue0] text-white text-center flex flex-col justify-between pt-[30px] sm:pt-[60px]">
      <h2 className="text-title-sm md:text-title-md lg:text-title-lg">
        Empresas que confían en nosotros
      </h2>

      <CarouselCompanies imgHeight={100} imgWidth={150} heightContainer="220" arr={companiesImgages}/>
      <p className="self-center text-parag-sm md:text-parag-md lg:text-parag-lg my-10 w-[80%] md:w-[70%] max-w-[900px]">
        En nuestra empresa de <strong>servicios y transportes de carga</strong>,
        reconocemos nuestros clientes como el pilar fundamental de nuestro
        éxito. En cada envío, no solo entregamos mercancías, sino también
        confianza, seguridad y compromiso inquebrantable con la satisfacción de
        quienes confían en nosotros.
      </p>

      <div className="bgCompanies"></div>
    </div>
  );
};

export default Companies;
