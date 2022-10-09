import { useEffect, useRef, useState } from "react";

//@ts-ignore
import { gsap } from "gsap/dist/gsap";

//@ts-ignore
import { Flip } from "gsap/dist/Flip";

import { motion } from "framer-motion";
import Service from "./Service";

export default function Services() {
  useEffect(() => {}, []);

  return (
    <div className="w-full max-w-2xl md:h-screen h-[110vh] mt-[10vh] items-center justify-center">
      <div className=" w-full h-20  flex flex-col justify-center items-center p-3 font-main text-3xl mt-16 ">
        خدماتنا
      </div>
      <div className="w-full p-4 flex flex-row flex-wrap justify-center gap-x-10 md:gap-y-6 gap-y-4 items-center justify-items-center">
        {data.map((s, i) => (
          <Service
            key={i + "s"}
            color={s.color}
            title={s.title}
            desc={s.desc}
            icon={"icons/" + s.icon}
          ></Service>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    color: "#f7edcf",
    title: "إستشارة مجانية",
    desc: "نقدم استشارات مجانية من قبل أطبائنا المعتمدين",
    icon: "consulting.png",
  },
  {
    color: "#f7edcf",
    title: "خدمات المختبرات",
    desc: "نساعدكم على اجراء الفحوصات المتطلبة للإجراء الطبي",
    icon: "microscope.png",
  },
  {
    color: "#f7edcf",
    title: "خدمات الأشعة",
    desc: "نقدم لكم خطة علاج شاملة ونتائج مثالية",
    icon: "mri.png",
  },
  {
    color: "#f7edcf",
    title: "الاستقبال من المطار",
    desc: "هدفنا هو مساعدتكم في رحلتكم بشكل كامل",
    icon: "airport.png",
  },
  {
    color: "#f7edcf",
    title: "مترجمون طبيون",
    desc: "يرافقكم فريقنا الطبي اينما ذهبتم",
    icon: "woman.png",
  },
  {
    color: "#f7edcf",
    title: "المتابعة",
    desc: "يتابع فريقنا الطبي حالتك حتى بعد عودتكم الى الوطن",
    icon: "follow.png",
  },
  {
    color: "#f7edcf",
    title: "منتجات طبية",
    desc: "نقدم لكم خدمات شراء وتوصيل جميع انواع الأدوية من الهند",
    icon: "medicine.png",
  },
  {
    color: "#f7edcf",
    title: "حجز رحلة الطيران",
    desc: "نقدم ايضاً لكم خدمة حجز الطيران ذهاباً وعودة",
    icon: "ticket.png",
  },
  {
    color: "#f7edcf",
    title: "توفير سكن",
    desc: "نتعامل مع افضل اماكن السكن والفنادق باسعار مناسبة",
    icon: "calendar.png",
  },
];
