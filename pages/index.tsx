import type { NextPage } from "next";

import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

//@ts-ignore
import { gsap } from "gsap/dist/gsap";

import SmoothScroll from "../components/SmothScroll";
import Hero from "../components/Hero";

import Divisions from "../components/Divisions";

import Service from "../components/Service";
import Background from "../components/Background";
const Home: NextPage = () => {
  return (
    <SmoothScroll>
      <Background></Background>
      <div className="md:h-[110vh] h-[120vh] w-full">
        <div className="w-full h-14 pt-2 flex flex-row justify-center items-center">
          <button
            id="contact"
            className="p-3 h-full rounded-b-3xl bg-pumpa hover:bg-orange rounded-xl text-white transition duration-150 z-30 font-main mt-10"
          >
            تواصل معنا
          </button>
        </div>
        <div className="relative w-full h-[60vh] pt-20 flex justify-center  items-center font-main">
          <Hero></Hero>
        </div>
        <div className="flex justify-center items-center w-full md:h-[120px] gap-6 mt-8 flex-wrap">
          <Service color="#dcd2f6"></Service>
          <Service color="#f9edcc"></Service>
          <Service color="#f3f3f3"></Service>
        </div>
      </div>
      <Divisions></Divisions>
      <div className="h-[120vh] w-full bg-none"></div>
    </SmoothScroll>
  );
};

export default Home;
