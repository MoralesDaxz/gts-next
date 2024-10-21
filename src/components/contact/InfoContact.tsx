"use client";
import React, { FC } from "react";
import Image from "next/image";
import email from "@/assets/contact/email.svg";
import phone from "@/assets/contact/phone.svg";
import wp from "@/assets/contact/whatsapp.svg";
import position from "@/assets/contact/position.svg";
import { callUs, location, sendMsg, writeUs } from "@/utils";
type Props = {
  classContain: string;
  color: string;
};
const InfoContact: FC<Props> = ({ classContain, color }) => {
  return (
    <article className={`flex flex-col gap-1 ${classContain}`}>
      <div
        className="flex items-center gap-1 opacity-100 hover:opacity-80 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          writeUs();
        }}
      >
        {/*  <Image
          src={email}
          alt="mail"
          width={30}
          height={30}
          className="W-[30px]"
        /> */}
        <svg width="27px" height="27px" viewBox="0 0 20 17" fill="none">
          <path
            d="M1 4.39258L8.8906 9.65298C9.5624 10.1008 10.4376 10.1008 11.1094 9.65298L19 4.39258M3 15.3926H17C18.1046 15.3926 19 14.4971 19 13.3926V3.39258C19 2.28801 18.1046 1.39258 17 1.39258H3C1.89543 1.39258 1 2.28801 1 3.39258V13.3926C1 14.4971 1.89543 15.3926 3 15.3926Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

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
          {/*  <Image
            src={phone}
            alt="mail"
            width={30}
            height={30}
            className="W-[30px]"
          /> */}
          <svg width="30" height="30" viewBox="0 0 24 25" fill="none">
            <path
              d="M3 5.39258C3 4.28801 3.89543 3.39258 5 3.39258H8.27924C8.70967 3.39258 9.09181 3.66801 9.22792 4.07635L10.7257 8.56979C10.8831 9.0419 10.6694 9.55789 10.2243 9.78044L7.96701 10.9091C9.06925 13.3538 11.0388 15.3233 13.4835 16.4256L14.6121 14.1683C14.8347 13.7232 15.3507 13.5095 15.8228 13.6668L20.3162 15.1647C20.7246 15.3008 21 15.6829 21 16.1133V19.3926C21 20.4971 20.1046 21.3926 19 21.3926H18C9.71573 21.3926 3 14.6768 3 6.39258V5.39258Z"
              stroke={color}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="text-parag-sm md:text-parag-md">910 117 148</p>
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            sendMsg();
          }}
          className="flex items-center gap-1 opacity-100 hover:opacity-80 cursor-pointer"
        >
          {/* <Image
            src={wp}
            alt="mail"
            width={30}
            height={30}
            className="W-[30px]"
          /> */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke={color}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>
          <p className="text-parag-sm md:text-parag-md">628 038 334</p>
        </div>
      </div>
      <div className="flex items-center gap-1 opacity-100 hover:opacity-80 cursor-pointer">
        {/*   <Image
          src={position}
          alt="mail"
          width={30}
          height={30}
          className="W-[30px]"
        /> */}
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke={color}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
        </svg>
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
