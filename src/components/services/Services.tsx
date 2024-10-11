import Image from "next/image";
import React from "react";
import trucks from "@/assets/services/trucks.png";
import scale from "@/assets/services/scale.png";
import pack from "@/assets/services/pack.png";

const Services = () => {
  return (
    <section className="bgServices min-h-screen flex flex-col items-center gap-4 text-[--blue0] pt-[100px] sm:pt-[150px] px-4 pb-6">
      <h1 className="text-title-sm md:text-title-md lg:text-title-lg">Servicios</h1>
      <article className={"flex justify-between items-center max-w-[1000px] bg-[#fffdfd80] p-2 rounded-md"}>
        <section className="w-[60%] flex flex-col gap-4 ">
          <h3 className="text-subtitle-sm md:text-subtitle-md lg:text-subtitle-lg">Ruta diaria fija</h3>
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
        <section className="w-[30%] flex justify-center items-center">
          <Image
            src={trucks}
            alt={"flota"}
            width={400}
            height={400}
            className="w-full"
          />
        </section>
      </article>
      <article className={"flex justify-between items-center max-w-[1000px] bg-[#fffdfd80] p-2 rounded-md"}>
        <section className="w-[60%]">
          <h3 className="text-subtitle-sm md:text-subtitle-md lg:text-subtitle-lg">Tarifa por Kilómetros</h3>
          <p className="parag-sm md:text-parag-md lg:text-parag-lg">
            Servicios programados o rutas prediseñadas por el cliente a toda la
            península, carga completa y exclusiva.
          </p>
        </section>
        <section className="w-[30%] flex justify-center items-center">
          <Image
            src={scale}
            alt={"kilometraje"}
            width={200}
            height={200}
            className="w-full"
          />
        </section>
      </article>
      <article className={"flex justify-between items-center max-w-[1000px] bg-[#fffdfd80] p-2 rounded-md"}>
        <section className="w-[60%]">
          <h3 className="text-subtitle-sm md:text-subtitle-md lg:text-subtitle-lg">Tarifa Flex</h3>
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
        <section className="w-[30%] flex justify-center items-center">
          <Image
            src={pack}
            alt={"paqueteria"}
            width={400}
            height={400}
            className="w-[150px]"
          />
        </section>
      </article>
    </section>
  );
};

export default Services;
