import { useEffect, useRef, useState } from "react";

//@ts-ignore
import { gsap } from "gsap/dist/gsap";

//@ts-ignore
import { Flip } from "gsap/dist/Flip";

import { motion } from "framer-motion";
import Service from "./Service";

export default function Contact() {
  useEffect(() => {}, []);

  return (
    <div className="w-full max-w-2xl h-full min-h-screen mt-[20vh]">
      <div className=" w-full h-15  flex flex-col justify-center items-center p-3 mb-2 font-main text-3xl mt-6 ">
        تواصل معنا
      </div>
      <div className=" w-full h-20  flex flex-col justify-center items-center p-10 pt-2 font-main text-center text-dark text-base ">
        يمكنك الوصول لنا عبر البيانات التالية او بامكانك ترك رساله بالأسفل ونحن
        سنقوم بالتواصل معك
      </div>
      <div className="flex justify-center items-center gap-3 p-4">
        <Info></Info>
        <Info></Info>
        <Info></Info>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="w-full h-24 hover:bg-white cursor-pointer transition duration-200 rounded-xl flex flex-col justify-center items-center">
      <img src="no.png" className="h-10" />
      <p className="font-main mt-1 ">77463726</p>
    </div>
  );
}
