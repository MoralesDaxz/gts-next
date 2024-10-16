import React from "react";
import Form from "./Form";
import InfoContact from "./InfoContact";

const Contact = () => {
  return (
    <section className="min-h-screen bg-[--blue0] flex flex-col items-center sm:flex-row sm:justify-center gap-4 p-4 sm:p-10">
      <InfoContact/>
      <Form />
    </section>
  );
};

export default Contact;
