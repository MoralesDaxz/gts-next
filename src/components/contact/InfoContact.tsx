'use client'
import React from "react";
import Image from "next/image";
import email from "@/assets/contact/email.svg";
import phone from "@/assets/contact/phone.svg";
import wp from "@/assets/contact/whatsapp.svg";
import position from "@/assets/contact/position.svg";
import { callUs, location, sendMsg, writeUs } from "@/utils";

const InfoContact = () => {
  return (
    <article className="flex flex-col gap-1">
      <div
        className="flex items-center gap-1 opacity-100 hover:opacity-80 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          writeUs();
        }}
      >
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
        <div
          className="flex items-center gap-1 opacity-100 hover:opacity-80 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            callUs();
          }}
        >
          <Image
            src={phone}
            alt="mail"
            width={30}
            height={30}
            className="W-[30px]"
          />
          <p className="text-parag-sm md:text-parag-md">910 117 148</p>
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            sendMsg();
          }}
          className="flex items-center gap-1 opacity-100 hover:opacity-80 cursor-pointer"
        >
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
      <div className="flex items-center gap-1 opacity-100 hover:opacity-80 cursor-pointer">
        <Image
          src={position}
          alt="mail"
          width={30}
          height={30}
          className="W-[30px]"
        />
        <p
          onClick={(e) => {
            e.preventDefault();
            location();
          }}
          className="text-parag-sm md:text-parag-md"
        >
          Madrid - 28031 <b> ¿Como llegar?</b>
        </p>
      </div>
    </article>
  );
};

export default InfoContact;