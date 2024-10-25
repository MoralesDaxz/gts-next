import Image from "next/image";
import React from "react";
import trucks from "@/assets/services/trucks.png";
import scale from "@/assets/services/scale.png";
import pack from "@/assets/services/pack.png";
import Carousel from "@/components/carousel/CarouselCars";
import { carsImages } from "@/utils/services/car";

const Services = () => {
  return (
    <section className="bgServices min-h-screen flex flex-col items-center gap-6 text-[--blue0] pt-[100px] px-4">
      <h2 className="text-title-sm md:text-title-md lg:text-title-lg mt-6 mb-14">
        Servicios
      </h2>
      <section
        className={
          "flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-[1000px] bg-[#fffdfd80] px-2 pt-2 rounded-md"
        }
      >
        <section className="sm:w-[60%] flex flex-col gap-4 ">
          <h3 className="text-subtitle-sm md:text-subtitle-md lg:text-subtitle-lg">
            Ruta diaria fija
          </h3>
          <ul className="parag-sm md:text-parag-md lg:text-parag-lg list-inside list-disc">
            <li>Furgoneta</li>
            <li>Furgón</li>
            <li>Carrozado</li>
            <li>Mozo ayudante</li>
          </ul>
          <p className="parag-sm md:text-parag-md lg:text-parag-lg">
            Nos adaptamos a sus necesidades, para rutas fijas, diarias, días
            alternos o día fijo, solicite presupuesto sin compromiso.
          </p>
        </section>
        <section className="sm:w-[30%] flex justify-center items-center">
          <Image
            src={trucks}
            alt={"flota"}
            width={400}
            height={400}
            className="w-[80%] sm:w-full"
          />
        </section>
      </section>
      <section
        className={
          "flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-[1000px] bg-[#fffdfd80] px-2 pt-2 rounded-md"
        }
      >
        <section className="sm:w-[60%] flex flex-col gap-4">
          <h3 className="text-subtitle-sm md:text-subtitle-md lg:text-subtitle-lg">
            Tarifa por Kilómetros
          </h3>
          <p className="parag-sm md:text-parag-md lg:text-parag-lg">
            Servicios programados o rutas prediseñadas por el cliente a toda la
            península, carga completa y exclusiva.
          </p>
        </section>
        <section className="sm:w-[30%] flex justify-center items-center">
          <Image
            src={scale}
            alt={"kilometraje"}
            width={200}
            height={200}
            className="w-[80%] sm:w-full"
          />
        </section>
      </section>
      <section
        className={
          "flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-[1000px] bg-[#fffdfd80] px-2 pt-2 rounded-md"
        }
      >
        <section className="sm:w-[60%] flex flex-col gap-4">
          <h3 className="text-subtitle-sm md:text-subtitle-md lg:text-subtitle-lg">
            Tarifa Flex
          </h3>
          <ul className="parag-sm md:text-parag-md lg:text-parag-lg list-inside list-disc">
            <li>Entregas</li>
            <li>Horas</li>
            <li>Kilómetros</li>
          </ul>
          <p className="parag-sm md:text-parag-md lg:text-parag-lg">
            Ponemos a disposición del cliente nuestro conocimiento en la
            confección consensuada de los servicios para una mayor optimización
            en los costes y entregas.
          </p>
        </section>
        <section className="sm:w-[30%] flex justify-center items-center">
          <Image
            src={pack}
            alt={"paqueteria"}
            width={400}
            height={400}
            className="w-[80%] sm:w-full shadow-[#1f1f1ffa] drop-shadow-md"
          />
        </section>
      </section>
      <article className="w-full">
        <h3 className="text-center text-title-sm md:text-title-md lg:text-title-lg mt-5">
          Logística con flota a disposición del cliente
        </h3>
        <Carousel imgHeight={200} imgWidth={200} heightContainer="250"  arr={carsImages}/>
      </article>
    </section>
  );
};

export default Services;
