import React from "react";
import Image from "next/image";
import contact from "@/assets/contact/contact.jpg";
import InfoContact from "./InfoContact";

const CardContact = () => {
  return (
    <section className="bgContact w-full h-full sm:w-[50%] text-white rounded-lg p-4 flex flex-col justify-center items-center gap-6 ">
      <p className="text-parag-sm md:text-parag-md w-[90%] opacity-90">
        Si tienes dudas, ponte en contacto con nosotros a través del formulario
        y te responderemos lo antes posible.
      </p>
      <p className="text-parag-sm md:text-parag-md w-[90%] opacity-90">
        También puedes ponerte en contacto con nosotros a través del teléfono.
      </p>
      <InfoContact color="white" classContain="text-white"/>
      <Image
        src={contact}
        alt="img_contact"
        width={300}
        height={300}
        className="w-[60%] lg:w-80% mx-auto rounded-md shadow-[#000000da] shadow-md"
      />
    </section>
  );
};

export default CardContact;
