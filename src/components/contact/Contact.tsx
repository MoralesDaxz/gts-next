import React from "react";
import Form from "./Form";
import CardContact from "./CardContact";

const Contact = () => {
  return (
    <section className="min-h-[700px] bg-[--blue0] px-5 pt-[100px] flex flex-col items-center pb-6 sm:pb-20 ">
      <h2 className="text-title-sm md:text-title-md lg:text-title-lg text-center text-white mt-6 mb-14">
        Contacto
      </h2>
      <div className="sm:h-[500px] flex flex-col items-center sm:flex-row sm:justify-center sm:items-center gap-6 sm:gap-4 self-center">
        <CardContact />
        <Form />
      </div>
    </section>
  );
};

export default Contact;
