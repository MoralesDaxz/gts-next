import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import email from "@/assets/contact/email.svg";
import phone from "@/assets/contact/phone.svg";
import wp from "@/assets/contact/whatsapp.svg";
import position from "@/assets/contact/position.svg";
import contact from "@/assets/contact/contact.jpg";

const InfoContact = () => {
/*     function enviarMsg() {
        const numero = "34628038334";
        const mensaje ="¡Hola! Me gustaría conocer y obtener más información acerca de los servicios que presta GTServicios.";
        const enlaceWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
        window.open(enlaceWhatsApp, "_blank");
      } */
  return (
    <article className="bgContact w-full h-full sm:w-[50%] text-white rounded-lg p-4 flex flex-col justify-center gap-3 ">
   
    <p className="text-parag-sm md:text-parag-md lg:text-parag-lg">
      Si tienes dudas, ponte en contacto con nosotros a través del
      formulario y te responderemos lo antes posible.
    </p>
    <p className="text-parag-sm md:text-parag-md lg:text-parag-lg">
      También puedes ponerte en contacto con nosotros a través del teléfono.
    </p>
    <div className="flex gap-2">
      <Image
        src={email}
        alt="mail"
        width={30}
        height={30}
        className="W-[30px]"
      />
      <p>informacion@gtservicios.es</p>
    </div>
    <div className="flex gap-6">
      <div className="flex gap-2">
        <Image
          src={phone}
          alt="mail"
          width={30}
          height={30}
          className="W-[30px]"
        />
        <p>910 117 148</p>
      </div>
      <div className="flex gap-2">
        <Image
          src={wp}
          alt="mail"
          width={30}
          height={30}
          className="W-[30px]"
        />
        <p>628 038 334</p>
      </div>
    </div>
    <div className="flex gap-2">
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
      >
        Madrid - 28031 ¿Como llegar?
      </Link>
    </div>
<Image src={contact} alt='img_contact' width={300} height={300} className='w-80% mx-auto rounded-md'/>
  </article>
  )
}

export default InfoContact