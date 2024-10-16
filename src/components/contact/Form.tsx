import React from "react";

const Form = () => {
  return (
    <article className="sm:w-[30%] min-h-[400px] bgForm text-[--blue0] rounded-lg">
      <h2 className="text-title-sm md:text-title-md lg:text-title-lg">
        Formulario
      </h2>
      <form
        action="https://formsubmit.co/9082d01547371417ba67e65fc192568b"
        method="POST"
      >
        <div id="formDiv">
          <label>Nombre </label>
          <input type="text" name="Nombre" required />
          <label>E-mail</label>
          <input type="email" name="Correo" required />
          <label>Número telefónico</label>
          <input type="tel" name="Telefono" required />
          <label>Comentarios</label>
          <textarea
            rows={4}
            name="Comentarios"
            placeholder="¡Dejanos saber tus inquietudes!"
          ></textarea>
        </div>
        <div className="boxBtn">
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
