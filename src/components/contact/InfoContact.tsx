import React from "react";
import Image from "next/image";
import Link from "next/link";
import email from "@/assets/contact/email.svg";
import phone from "@/assets/contact/phone.svg";
import wp from "@/assets/contact/whatsapp.svg";
import position from "@/assets/contact/position.svg";
const InfoContact = () => {
    /*     function enviarMsg() {
        const numero = "34628038334";
        const mensaje ="¡Hola! Me gustaría conocer y obtener más información acerca de los servicios que presta GTServicios.";
        const enlaceWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
        window.open(enlaceWhatsApp, "_blank");
      } */
  return (
    <article className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <Image
          src={email}
          alt="mail"
          width={30}
          height={30}
          className="W-[30px]"
        />
        <p className="text-parag-sm md:text-parag-md">
          informacion@gtservicios.es
        </p>
      </div>
      <div className="flex flex-col gap-1 md:flex-row md:gap-5">
        <div className="flex items-center gap-1">
          <Image
            src={phone}
            alt="mail"
            width={30}
            height={30}
            className="W-[30px]"
          />
          <p className="text-parag-sm md:text-parag-md">910 117 148</p>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src={wp}
            alt="mail"
            width={30}
            height={30}
            className="W-[30px]"
          />
          <p className="text-parag-sm md:text-parag-md">628 038 334</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Image
          src={position}
          alt="mail"
          width={30}
          height={30}
          className="W-[30px]"
        />
        <Link
          href="https://maps.app.goo.gl/qyf6gkW7sENvdu9w5"
          target="_blank"
          className="text-parag-sm md:text-parag-md"
        >
          Madrid - 28031 <b>¿Como llegar?</b>
        </Link>
      </div>
    </article>
  );
};

export default InfoContact;
