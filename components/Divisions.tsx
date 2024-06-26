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

import { data } from "./divisionsData";

export default function Divisions() {
  const ref = useRef<HTMLDivElement>(null);

  let entered = false;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(Flip);
    gsap.registerPlugin(ScrollToPlugin);

    if (window.innerHeight < window.innerWidth) {
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
    } else {
      if (ref.current) {
        ref.current.classList.remove("w-1/2");
        ref.current.classList.remove("h-2/3");
        ref.current.classList.remove("rounded-full");
        ref.current.classList.add("w-full");
        ref.current.classList.add("h-full");
        ref.current.classList.add("rounded-[20px]");
        ref.current?.classList.add("hidden");
        let sectionsw = document.getElementById("sections");
        if (sectionsw) {
          sectionsw.classList.remove("hidden");
          sectionsw.classList.add("gap-2");
          sectionsw.classList.add("rounded-[10px]");
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
      }
    }
  }, []);

  const flip = () => {
    console.log("flipping");

    console.log(ref.current);
    let state = Flip.getState(["#elmss"], { props: "border-radius" });
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
      onComplete: () => {
        afterFlip();
      },
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
      className="lg:w-2/3 h-[100vh] w-full flex flex-col items-center relative p-6  rounded-[20px] overflow-hidden"
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
        id="elmss"
        className="bg-orange w-1/2 h-2/3 rounded-full origin-top "
      ></div>
      <div
        id="sections"
        className="grid lg:grid-cols-4 lg:grid-rows-2  grid-cols-2 grid-rows-4 w-full h-full hidden rounded-[20px] overflow-hidden justify-center items-center"
      >
        {data.map((d, i) => {
          return (
            <Section
              thumbnail={d.thumbnail}
              cover={d.cover}
              key={"divi" + i}
              title={d.title}
              header={d.header}
              data={d.data}
            />
          );
        })}
      </div>
    </div>
  );
}

function Section({
  data,
  title,
  header,
  thumbnail,
  cover,
}: {
  data: any;
  title: string;
  header: string;
  thumbnail: string;
  cover: string;
}) {
  const [open, setOpen] = useState(false);

  const _open = () => {
    setOpen(true);
    let w = document.getElementById("wrapper");
    if (w) {
      document.documentElement.scrollTop = w.offsetTop;
    }

    setTimeout(() => {
      gsap.to("#division", {
        opacity: 1,
        duration: 0.5,
        ease: "expo.out",
      });
    }, 100);
  };
  return (
    <>
      {open && (
        <div
          className="mostly-customized-scrollbar w-full h-screen bg-white absolute z-[100] -m-6 overflow-y-scroll  opacity-0 rounded-t-lg "
          id="division"
        >
          <button
            onClick={() => setOpen(false)}
            className={
              "fixed lg:w-2/3 w-full  text-white font-main text-xl -translate-y-1 rounded-t-lg bg-pumpa"
            }
          >
            X
          </button>
          <img src={cover} alt="" className="w-full h-80 object-cover mt-4" />
          <p className="font-main text-xl  p-4 mt-1 text-right text-pumpa">
            {header}
          </p>
          <p className="font-main text-lg p-4 mt-1  text-dark text-justify leading-8 mb-20">
            {data}
          </p>
        </div>
      )}
      <div
        id="section"
        className="bg-orange w-full h-full origin-center hover:backdrop-blur-sm transition duration-150 overflow-hidden flex justify-center items-center relative cursor-pointer "
        onClick={() => _open()}
      >
        <motion.img
          transition={{ delay: 0, duration: 0.2 }}
          whileInView={{ opacity: 1 }}
          // whileHover={{ blur: 1.2 }}
          className="w-full h-full object-cover opacity-0 absolute"
          src={thumbnail}
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
          {title}
        </div>
        <motion.div
          whileHover={{ opacity: 0.4 }}
          className="w-full h-full opacity-0 absolute bg-black z-10 text-white justify-center items-center flex"
        >
          انقر للمزيد
        </motion.div>
      </div>
    </>
  );
}
