import React from "react";
import Carousel from "../carousel/CarouselCars";
import { companiesImgages } from "@/utils/companies/companies";
import CarouselCompanies from "../carousel/CarouselCompanies";
const Companies = () => {
  return (
    <div className="relative bg-[--blue0] min-h-screen text-white text-center flex flex-col gap-4">
      <h2 className="text-title-sm md:text-title-md lg:text-title-lg mt-6">
        Empresas que confían en nosotros
      </h2>

      <CarouselCompanies imgHeight={180} imgWidth={150} heightContainer="200" arr={companiesImgages}></CarouselCompanies>
      <p className="text-parag-sm md:text-parag-sm lg:text-parag-lg">
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
