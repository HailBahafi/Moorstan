import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

//@ts-ignore
import { gsap } from "gsap/dist/gsap";

//@ts-ignore
import { Flip } from "gsap/dist/Flip";

//@ts-ignore
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

//@ts-ignore
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

export default function Divisions() {
  const ref = useRef<HTMLDivElement>(null);

  let entered = false;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(Flip);
    gsap.registerPlugin(ScrollToPlugin);

    const main = gsap.timeline({
      defaults: { duration: 1 },
      width: () => "100vw",
      height: () => "100vh",
      scrollTrigger: {
        trigger: "#sections",
        invalidateOnRefresh: true,
        start: "top bottom",
        onEnter: () => {
          if (!entered) {
            entered = true;
            // goToSection();
            flip();
          }
        },
      },
    });
  }, []);

  const flip = () => {
    console.log("flipping");
    let state = Flip.getState([ref.current], { props: "border-radius" });
    if (ref.current) {
      ref.current.classList.remove("w-1/2");
      ref.current.classList.remove("h-2/3");
      ref.current.classList.remove("rounded-full");
      ref.current.classList.add("w-full");
      ref.current.classList.add("h-full");
      ref.current.classList.add("rounded-[20px]");
    }
    Flip.from(state, {
      // delay: 0.2,
      duration: 0.5,
      ease: "expo.inOut",
      onComplete: afterFlip,
    });
  };

  let afterFlip = () => {
    console.log("after flipping");
    ref.current?.classList.add("hidden");
    let sectionsw = document.getElementById("sections");
    if (sectionsw) sectionsw.classList.remove("hidden");

    let state = Flip.getState(["#section", "#sections", "#medicalSections"], {
      props: "border-radius",
    });
    if (sectionsw) {
      sectionsw.classList.remove("rounded-[50px]");
      if (window.innerHeight > window.innerWidth) {
        sectionsw.classList.add("gap-2");
        sectionsw.classList.add("rounded-[10px]");
      } else {
        sectionsw.classList.add("gap-4");
        sectionsw.classList.add("rounded-[15px]");
      }
    }
    let sections = document.querySelectorAll("#section");
    if (sections) {
      sections.forEach((s) => {
        if (s) {
          if (window.innerHeight > window.innerWidth) {
            s.classList.add("rounded-[10px]");
          } else {
            s.classList.add("rounded-[15px]");
          }
        }
      });
    }

    Flip.from(state, {
      targets: "#sections",
      duration: 0.1,
      ease: "expo.out",
    });
    Flip.from(state, {
      targets: "#section",
      duration: 0.1,
      ease: "expo.out",
    });
  };
  const [open, setOpen] = useState(false);

  return (
    <div
      id="wrapper"
      className="lg:w-2/3 h-[100vh] w-full flex flex-col items-center relative p-6  rounded-[20px] overflow-hidden "
    >
      <div
        id="medicalSections"
        className=" w-full h-20 rounded-2xl mb-8 flex flex-col justify-center items-center p-3 pr-10 rounded-t-sm origin-top  font-main text-right text-2xl mt-4"
      >
        الاقسام الطبية
        <div className="text-center text-base text-[#6c727f] mt-2">
          نقدم خدمات طبية واسعة من افضل المختصين
          <br />
          وفي افضل المستشفيات في الهند
        </div>
      </div>
      <div
        ref={ref}
        id="elm"
        className="bg-orange w-1/2 h-2/3 rounded-full origin-top "
      ></div>
      <div
        id="sections"
        className="grid lg:grid-cols-4 lg:grid-rows-2  grid-cols-2 grid-rows-4 w-full h-full hidden rounded-[20px] overflow-hidden justify-center items-center"
      >
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div
      id="section"
      className="bg-orange w-full h-full origin-center hover:backdrop-blur-sm transition duration-150 overflow-hidden flex justify-center items-center relative cursor-pointer "
    >
      <motion.img
        transition={{ delay: 0, duration: 0.2 }}
        whileInView={{ opacity: 1 }}
        // whileHover={{ blur: 1.2 }}
        className="w-full h-full object-cover opacity-0 absolute"
        src="/sections/1.jpg"
        alt="img"
      />
      <div className="w-full h-full bg-gradient-to-t from-[#050408da] to-[#fff0] z-10 text-white flex justify-center items-end pb-4 font-main ">
        <span
          style={{
            background: "url(/link.png)",
            backgroundSize: "contain",
          }}
          className="w-4 h-4 inline-block mr-2 mb-0.5"
        ></span>
        علاج السرطان
      </div>
      <motion.div
        whileHover={{ opacity: 0.4 }}
        className="w-full h-full opacity-0 absolute bg-black z-10 text-white justify-center items-center flex"
      >
        انقر للمزيد
      </motion.div>
    </div>
  );
}
