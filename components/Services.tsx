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
        <Service color="#6c727f"></Service>
        <Service color="#6c727f"></Service>
        <Service color="#6c727f"></Service>
        <Service color="#6c727f"></Service>
        <Service color="#6c727f"></Service>
        <Service color="#6c727f"></Service>
        <Service color="#6c727f"></Service>
        <Service color="#6c727f"></Service>
      </div>
    </div>
  );
}
