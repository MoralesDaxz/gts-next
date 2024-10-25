import { tokenSubmit } from "@/utils";
import React from "react";

const Form = () => {
  return (
    <section className="bgForm w-full sm:w-[40%] lg:w-[30%] h-full text-[--blue0] rounded-lg">
      <h2 className="text-subtitle-sm md:text-subtitle-md  text-center my-5">
        ¿Cómo podemos ayudarte?
      </h2>
      <form
        action={`https://formsubmit.co/${tokenSubmit}`}
        method="POST"
        className="flex flex-col  items-center justify-center w-full px-4"
      >
        <label className="float-label">
          <input
            className="input"
            type="text"
            placeholder=""
            minLength={3}
            maxLength={40}
            pattern="^[a-zA-Z]+$"
            title="Only characters A - Z"
            required
          />
          <span className="select-none rounded-lg">Nombre</span>
        </label>
        <label className="float-label">
          <input
            className="input"
            type="text"
            placeholder=""
            minLength={3}
            maxLength={40}
            pattern="^[a-zA-Z]+$"
            title="Only characters A - Z"
            required
          />
          <span className="select-none rounded-3xl">Apellido</span>
        </label>
        <label className="float-label">
          <input className="input" type="email" placeholder="" required />
          <span className="select-none rounded-3xl">Email</span>
        </label>

        <label className="float-label">
          <input
            className="input"
            type="tel"
            placeholder=""
            required
            minLength={8}
            maxLength={16}
          />
          <span className="select-none rounded-3xl">Telefono</span>
        </label>
        <label className="float-label">
          <textarea
            className="input max-h-[100px]"
            placeholder=""
            required
            minLength={7}
            maxLength={300}
          />
          <span className="select-none rounded-3xl">
             Descríbenos lo que necesitas
          </span>
        </label>
        <div className="w-[40%] flex flex-col items-center justify-center">
          <input
            className="w-[90%] md:w-fit p-2 bg-[--blue2] hover:bg-[--blue1] hover:scale-105 shadow-[#242323d7] shadow-md text-white text-center text-parag transition-all duration-300 my-2 rounded-lg cursor-pointer"
            type="submit"
            value="Enviar"
          />
          <input type="hidden" name="_captcha" value="true" />
          <input
            type="hidden"
            name="_next"
            value="https://www.gtservicios.es"
          />
        </div>
      </form>
    </section>
  );
};

export default Form;
