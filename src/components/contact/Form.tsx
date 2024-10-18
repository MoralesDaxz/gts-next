import React from "react";

const Form = () => {
  return (
    <article className="bgForm w-full sm:w-[40%] lg:w-[30%] h-full text-[--blue0] rounded-lg">
      <h2 className="text-subtitle-sm md:text-subtitle-md  text-center my-5">
        Formulario
      </h2>
      <form
        action="https://formsubmit.co/9082d01547371417ba67e65fc192568b"
        method="POST"
        className="flex flex-col  items-center justify-center w-full px-4"
      >
        <label className="float-label">
          <input
            className="input"
            type="text"
            placeholder=""
            minLength={4}
            maxLength={50}
            required
          />
          <span className="select-none rounded-lg">Nombre</span>
        </label>
        <label className="float-label">
          <input
            className="input"
            type="text"
            placeholder=""
            minLength={4}
            maxLength={50}
            required
          />
          <span className="select-none rounded-3xl">Apellido</span>
        </label>
        <label className="float-label">
          <input className="input" type="email" placeholder="" required />
          <span className="select-none rounded-3xl">Email</span>
        </label>

        <label className="float-label">
          <input className="input" type="tel" placeholder="" required />
          <span className="select-none rounded-3xl">Telefono</span>
        </label>
        <label className="float-label">
          <textarea className="input" placeholder="" required />
          <span className="select-none rounded-3xl">
            ¿Cómo podemos ayudarte?
          </span>
        </label>
        <div className="w-[40%] bg-slate-600">
          <input id="btnEnviar" type="submit" value="Enviar" />
          <input type="hidden" name="_captcha" value="true" />
          <input
            type="hidden"
            name="_next"
            value="https://www.gtservicios.es"
          />
        </div>
      </form>
    </article>
  );
};

export default Form;
