import { useEffect, useRef } from "react";
import Circles from "./svgs/circles";
import Hero1 from "./svgs/Hero1";
import Hero2 from "./svgs/Hero2";
import Network from "./svgs/network";

//@ts-ignore
import { gsap } from "gsap/dist/gsap";

//@ts-ignore
import { Flip } from "gsap/dist/Flip";

export default function Hero() {
  useEffect(() => {
    const main = gsap
      .timeline({
        defaults: { duration: 0.8, ease: "expo.out" },
      })
      .to("#yourwaywrapper", {
        width: "192px",
      });
    gsap.to("#yourway", {
      delay: 0.4,
      duration: 1.5,
      opacity: 1,
    });
    gsap.to("#hosp", {
      stagger: 0.5,
      opacity: 1,
    });
  }, []);

  return (
    <>
      <div className="absolute w-full h-full -z-50">
        <Circles></Circles>
      </div>
      <div className="md:w-1/4 2xl:w-1/5 sm:w-1/3 w-1/2 h-1/4 hidden items-center justify-center lg:flex">
        <Hero1></Hero1>
      </div>
      <div className="w-1/3 h-1/4 relative -z-10 flex flex-col justify-center items-center">
        <div
          id="yourwaywrapper"
          className="bg-[#fec146] w-10 h-12 text-center p-2 rounded-full mb-2"
        >
          <p id="yourway" className="whitespace-nowrap opacity-0">
            طريقك للعلاج في الهند
          </p>
        </div>
        <p className="text-5xl text-center text-[#494949] text-top leading-tight">
          شبكة مستشفيات
        </p>
        <p className="text-5xl text-center pt-2">
          <span className="text-pumpa">هندية</span>
          <span className="text-orange pr-4">عالمية</span>
        </p>
        <div className="flex flex-row justify-center items-center h-12 mt-8 gap-4">
          <img
            id="hosp"
            src="pngs/hospitals/1.png"
            className="h-full opacity-0"
          ></img>
          <img
            id="hosp"
            src="pngs/hospitals/2.png"
            className="h-full opacity-0"
          ></img>
          <img
            id="hosp"
            src="pngs/hospitals/3.png"
            className="h-full opacity-0"
          ></img>
        </div>
        <Network></Network>
      </div>
      <div className="md:w-1/4  2xl:w-1/5 sm:w-1/3 w-1/2 h-1/4 -translate-y-14 hidden justify-center items-center lg:flex">
        <Hero2></Hero2>
      </div>
    </>
  );
}
