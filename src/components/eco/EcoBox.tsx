import delivery from "@/assets/ecoBox/delivery.jpg";
import Image from "next/image";
import React from "react";

const EcoBox = () => {
  return (
    <section className="bgWhite w-full text-[--blue0]">
      <div className="bgLeaf flex flex-col items-center justify-center w-full px-4 pt-10 pb-14 min-h-[500px]">
        <h2 className="text-title-sm md:text-title-md lg:text-title-lg text-center mt-6 mb-14">
          Comprometidos con el ambiente
        </h2>
        <div className="flex justify-around items-center p-3 sm:gap-2 lg:gap-5 backdrop-blur-sm rounded-lg max-w-[1500px]">
          <article className="w-0 md:w-[50%] hidden md:block">
            <Image
              src={delivery}
              width={500}
              height={500}
              className="rounded-md shadow-[#111111c7] shadow-md"
              alt="entrega_paquetereria"
            />
          </article>
          <article className="w-full flex flex-col gap-3 md:w-[50%] text-parag-md md:text-parag-lg italic">
            <p>
              &ldquo; En cada paso que damos, nos esforzamos por superar sus
              expectativas, proporcionando un servicio que no solo es eficiente
              y confiable, sino también sostenible y respetuoso con el medio
              ambiente. 
            </p>
            <p>
            Nosotros entendemos la importancia de conservar nuestro
              planeta para las generaciones futuras, y es por eso que hemos
              integrado prácticas ecológicas en cada aspecto de nuestro negocio.
              &ldquo;
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default EcoBox;
