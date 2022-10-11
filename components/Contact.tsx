import { useEffect, useRef, useState } from "react";

//@ts-ignore
import { gsap } from "gsap/dist/gsap";

//@ts-ignore
import { Flip } from "gsap/dist/Flip";

import { motion } from "framer-motion";
import Service from "./Service";

export default function Contact() {
  useEffect(() => {}, []);

  const gotolast = () => {
    setTimeout(() => {
      window.scrollTo(0, document.documentElement.scrollHeight);
    }, 100);
  };

  return (
    <div className="w-full max-w-2xl h-full min-h-screen md:mt-[20vh] mt-[25vh]  p-4 select-none z-50">
      <div className=" w-full h-15  flex flex-col justify-center items-center p-3 mb-2 font-main text-3xl mt-6 text-pumpa">
        تواصل معنا
      </div>
      <div className=" w-full h-20  flex flex-col justify-center items-center p-10 pt-2 font-main text-center text-dark text-base ">
        يمكنك الوصول لنا عبر البيانات التالية او بامكانك ترك رساله بالأسفل ونحن
        سنقوم بالتواصل معك
      </div>
      <div className="flex justify-center items-center gap-3 p-4">
        <Info icon="icons/email.png" data="email@email.com"></Info>
        <Info icon="icons/whatsapp.png" data="+91774639193"></Info>
        <Info icon="icons/instagram.png" data="@indiahealth"></Info>
      </div>
      <div className="bg-white w-full h-full rounded-xl md:p-6 p-4 font-main flex flex-col mb-12 ">
        <div className=" flex flex-row-reverse ">
          <div className="flex flex-col items-end w-full">
            <p className="text-pumpa">الاسم</p>
            <input
              placeholder="ضع اسمك هنا"
              className="text-right border-2 rounded-lg mt-1 p-1 w-full "
            ></input>
            <p className="text-pumpa mt-1">الرقم</p>
            <input
              placeholder="ضع رقمك هنا"
              className="text-right border-2 rounded-lg mt-1 p-1 w-full "
            ></input>
            <p className="text-pumpa mt-1 w-full text-center">أو</p>
            <p className="text-pumpa mt-1">الأيميل</p>
            <input
              placeholder="ضع ايميلك هنا"
              className="text-right border-2 rounded-lg mt-1 p-1 w-full "
            ></input>
          </div>
          <div className="flex flex-col items-end mr-4 w-full">
            <p className="text-pumpa mt-1">الرسالة</p>
            <textarea
              placeholder="ضع رسالتك هنا"
              className="text-right border-2 rounded-xl mt-1 p-2 w-full h-full "
            ></textarea>
          </div>
        </div>
        <div className="items-center justify-center flex mt-6">
          <button className="bg-pumpa w-fit p-2 rounded-xl text-white">
            ارسل الرسالة
          </button>
        </div>
      </div>
    </div>
  );
}

function Info({ icon, data }: { icon: string; data: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef<HTMLDivElement>(null);
  function copy() {
    gsap
      .timeline({})
      .to(done.current, {
        duration: 0.01,
        opacity: 1,
      })
      .to(done.current, {
        delay: 1,
        opacity: 0,
      });

    if (ref.current) {
      let content = ref.current.textContent;
      navigator.clipboard.writeText(content!);
    }
  }
  return (
    <div
      className="w-full h-24 hover:bg-white cursor-pointer transition duration-200 rounded-xl flex flex-col justify-center items-center relative overflow-hidden"
      onClick={() => {
        copy();
      }}
    >
      <div
        className="absolute w-full h-full bg-pumpa opacity-0 flex justify-center items-center font-main text-white"
        ref={done}
      >
        تم النسخ
      </div>
      <img src={icon} className="h-8" />
      <p className="font-main mt-3" ref={ref}>
        {data}
      </p>
    </div>
  );
}
