import Image from "next/image";
import React from "react";
import trucks from "@/assets/services/trucks.png";
import indicator from "@/assets/services/indicator.png";
import pack from "@/assets/services/pack.png";
const Services = () => {
  return (
    <section className="bgServices flex flex-col items-center text-black">
      <h1>Servicios</h1>
      <article className={'flex justify-between items-center max-w-[1000px]'}>
        <section className="w-[60%]" >
          <h3>Ruta diaria fija</h3>
          <ul>
            <li>Furgoneta</li>
            <li>Furgón</li>
            <li>Carrozado</li>
            <li>Mozo ayudante</li>
          </ul>
          <p>
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
      <article className={'flex justify-between max-w-[1000px]'}>
        <section className="w-[60%]">
          <h3>Tarifa por Kilómetros</h3>

          <p>
            Servicios programados o rutas prediseñadas por el cliente a toda la
            península, carga completa y exclusiva.
          </p>
        </section>
        <section className="w-[30%] flex justify-center items-center">
          <Image
            src={indicator}
            alt={"kilometraje"}
            width={200}
            height={200}
            className="w-full"
          />
        </section>
      </article>
      <article className={'flex justify-between max-w-[1000px]'}>
        <section  className="w-[60%]">
          <h3>Tarifa Flex</h3>
          <ul>
            <li>Entregas</li>
            <li>Horas</li>
            <li>Kilómetros</li>
          </ul>
          <p>
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
