import delivery from "@/assets/ecoBox/delivery.jpg";
import Image from "next/image";
import React from "react";

const EcoBox = () => {
  return (
    <section className="bgEco w-full text-[--blue0]">
      <div className=" flex items-center justify-center w-full bgLeaf px-20 py-10 min-h-[500px]">
        <div className="flex justify-center items-center gap-4 backdrop-blur-md rounded-lg max-w-[1000px]">
          <article className="w-0 md:w-[50%] hidden md:block">
            <Image
              src={delivery}
              width={500}
              height={500}
              className="rounded-md shadow-[#111111c7] shadow-md"
              alt="entrega_paquetereria"
            ></Image>
          </article>
          <article className="w-full md:w-[50%]">
            <p className="text-header sm:text-header-sm italic">
             &ldquo; En cada paso que damos, nos esforzamos por superar sus
              expectativas, proporcionando un servicio que no solo es eficiente
              y confiable, sino también sostenible y respetuoso con el medio
              ambiente. Nosotros entendemos la importancia de conservar nuestro
              planeta para las generaciones futuras, y es por eso que hemos
              integrado prácticas ecológicas en cada aspecto de nuestro negocio. &ldquo;
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default EcoBox;
