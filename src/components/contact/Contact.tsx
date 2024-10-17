import React from "react";
import Form from "./Form";
import InfoContact from "./InfoContact";

const Contact = () => {
  return (
    <section className="min-h-[700px] bg-[--blue0] p-4 sm:p-10 flex flex-col">
      <h2 className="text-title-sm md:text-title-md lg:text-title-lg text-center my-12">
        Contacto
      </h2>
      <div className="sm:h-[500px] flex flex-col items-center sm:flex-row sm:justify-center sm:items-center gap-4 self-center">
        <InfoContact />
        <Form />
      </div>
    </section>
  );
};

export default Contact;
