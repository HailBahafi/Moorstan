import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { gsap } from "gsap/dist/gsap";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function Calculator() {
  const [cat, setCat] = useState(0);
  const [treatment, setTreatment] = useState(100);

  return (
    <div className="lg:w-2/3 lg:h-[100vh] w-full h-full min-h-screen flex flex-col justify-start items-center p-6  rounded-[20px] mt-[20vh] z-20 font-main">
      <div className=" w-full h-20  flex flex-col justify-center items-center p-3  font-main text-3xl ">
        حاسبة التكلفة
      </div>
      <div className="flex flex-col w-full justify-start items-center border-black border-0">
        {/* <Categories setCat={setCat} /> */}
        {cat == 0 && <Treatment setTreatment={setTreatment} />}
      </div>
    </div>
  );
}

function Bill() {
  useEffect(() => {
    const main = gsap
      .timeline({
        defaults: { ease: "expo.out" },
      })
      .to("#progressB", {
        delay: 2.2,
        // strokeWidth: 500,
        duration: 1.5,
        transformOrigin: "center center",
        r:
          window.innerHeight < window.innerWidth
            ? window.innerHeight
            : window.innerWidth,
      });
    gsap.to("#resultW", {
      delay: 2.4,
      duration: 0.1,
      transformOrigin: "center center",
      borderWidth: 5,
    });
    gsap.set("#result", { height: "0%" });
    gsap.to("#result", {
      delay: 2.4,
      duration: 0.1,
      transformOrigin: "center center",
      height: "100%",
    });
    gsap.to("#progressHole", {
      delay: 2.4,
      duration: 2,
      ease: "expo.out",
      transformOrigin: "center center",
      // scale: 20,
      r:
        window.innerHeight < window.innerWidth
          ? window.innerHeight
          : window.innerWidth,
      // width: 1000,
      // height: 1000,
    });
  }, []);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      return {
        pathLength: 1.1,
        opacity: 1,
        transition: {
          pathLength: { type: "spring", duration: 3, bounce: 0 },
          opacity: { duration: 0.01 },
        },
      };
    },
  };
  return (
    <div
      className="md:w-[600px] md:h-[350px] w-full h-[500px] max-w-6xl md:p-10 p-4  overflow-hidden"
      id="bill"
    >
      <motion.svg
        className={
          "flex justify-center items-center w-full h-full rounded-3xl border-black"
        }
        id="resultW"
        stroke={"#000"}
        strokeWidth={0}
        fill={"none"}
        width={"100%"}
        // viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          id={"progressB"}
          className={"w-full h-full"}
          cx="50%"
          cy="50%"
          r="40"
          fill={"#000"}
          stroke="#000"
          strokeWidth={10}
          variants={draw}
          custom={1}
        />
        <motion.circle
          id={"progressHole"}
          className={"w-full h-full -z-10"}
          cx="50%"
          cy="50%"
          r="41"
          fill={"#f3f3f3"}
          variants={draw}
          custom={1}
        />
        <motion.foreignObject
          id={"result"}
          className={"w-full"}
          height={"100%"}
          width={"100%"}
        >
          <body>
            <div className="w-full  text-black font-main z-30 p-4 flex flex-col justify-center items-center">
              <div className="flex flex-row-reverse  gap-8 flex-wrap items-center justify-center mt-4">
                <Price
                  label="تكلفة العلاج"
                  price1={2000}
                  price2={3000}
                  className="text-2xl"
                ></Price>
                <div className="flex flex-col justify-center items-center ">
                  <p className="text-lg">مقارنة الاسعار</p>
                  <div className="flex flex-row flex-wrap gap-4 justify-center mt-2">
                    <Price label="تركيا" price1={2000}></Price>
                    <Price label="مصر" price1={2000}></Price>
                    <Price label="امريكا" price1={2000}></Price>
                    <Price label="المانيا" price1={2000}></Price>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <p className="text-lg">المدة</p>
                  <div className="flex flex-row flex-wrap gap-6 justify-center mt-2">
                    <Info label=" في المستشفى" info={"5 ايام"}></Info>
                    <Info label="في الهند" info={"5 ايام"}></Info>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center ">
                  <p className="text-lg">التكاليف اليومية</p>
                  <div className="flex flex-row flex-wrap gap-4 justify-center mt-2">
                    <Price label="الاكل والشرب" price1={4}></Price>
                    <Price label="السكن" price1={15} price2={20}></Price>
                    <Price label="المواصلات" price1={5}></Price>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </motion.foreignObject>
      </motion.svg>
    </div>
  );
}

function Price({
  label,
  price1,
  price2,
  className = "text-xs",
}: {
  label: string;
  price1: number;
  price2?: number;
  className?: string;
}) {
  return (
    <div className={"flex flex-col items-center w-fit " + className}>
      <p className=" border-b-2 border-black pb-1 w-full text-center">
        {label}
      </p>
      <p className=" text-center">
        {price2 ? "$" + price2 + " - " : ""}${price1}
      </p>
    </div>
  );
}
function Info({
  label,
  info,
  className = "text-xs",
}: {
  label: string;
  info: string | number;
  className?: string;
}) {
  return (
    <div className={"flex flex-col items-center w-fit " + className}>
      <p className=" border-b-2 border-black pb-1 w-full text-center">
        {label}
      </p>
      <p className=" text-center " style={{ direction: "rtl" }}>
        {info}
      </p>
    </div>
  );
}

function DropDown({
  options,
  placeholder,
  onChange,
}: {
  options: any;
  placeholder: string;
  onChange: any;
}) {
  return (
    <Dropdown
      className=" text-black w-64 text-center mr-4 transition duration-150 cursor-pointer z-50"
      controlClassName="text-right border-b-2 pb-2  border-black flex flex-row-reverse"
      baseClassName="text-center items-center "
      menuClassName="dropdownMenu absolute items-center text-center w-64 transition duration-150 flex flex-col mt-2 bg-lightDark h-64 overflow-scroll overflow-x-hidden z-[50] text-base"
      placeholderClassName="w-full"
      arrowOpen={<span className="ml-2">&#708;</span>}
      arrowClosed={<span className="ml-2">&#709;</span>}
      options={options}
      onFocus={() => onChange(100)}
      onChange={onChange}
      // value={defaultOption}
      placeholder={placeholder}
    />
  );
}

function Categories({ setCat }: { setCat: any }) {
  const options = [
    { value: 0, label: "العلاج في الهند" },
    { value: 1, label: "خدمات المختبرات" },
    { value: 2, label: "أدوية من الهند" },
    { value: 3, label: "استشارة طبية اونلاين" },
    { value: 4, label: "مترجمون طبيون" },
  ];

  const onselectCat = (o: any) => {
    setCat(o.value);
  };

  return (
    <div className="text-center text-[#6c727f] mt-2 text-xl lg:w-96 pt-4 flex flex-row-reverse flex-wrap justify-center gap-y-4 items-center">
      <p className="flex-1">تبحث عن</p>
      <DropDown
        options={options}
        onChange={onselectCat}
        placeholder={"اختر خدمة"}
      />
    </div>
  );
}
function Treatment({ setTreatment }: { setTreatment: any }) {
  const options = [
    { value: 0, label: "زراعة شعر" },
    { value: 1, label: "علاج اورام" },
    { value: 2, label: "علاج سرطان" },
    { value: 3, label: "علاج امراض عيون" },
    { value: 4, label: "علاج قلب" },
    { value: 1, label: "علاج اورام" },
    { value: 2, label: "علاج سرطان" },
    { value: 3, label: "علاج امراض عيون" },
    { value: 4, label: "علاج قلب" },
    { value: 1, label: "علاج اورام" },
    { value: 2, label: "علاج سرطان" },
    { value: 3, label: "علاج امراض عيون" },
    { value: 4, label: "علاج قلب" },
  ];

  let loadingTime = 2000;
  const [chose, setChose] = useState(false);
  const [ShowBill, setShowBill] = useState(false);

  const btn = useRef<HTMLButtonElement>(null);
  const calculate = useRef<HTMLParagraphElement>(null);
  const calculating = useRef<HTMLParagraphElement>(null);
  const done = useRef<HTMLParagraphElement>(null);

  const onSelectTreatment = (o: any) => {
    setTreatment(o.value);
    setChose(true);
    if (done.current) {
      done.current.classList.remove("opacity-100");
      done.current.classList.add("opacity-0");
    }
    if (calculate.current) {
      calculate.current.classList.remove("opacity-0");
      calculate.current.classList.add("opacity-100");
    }
  };

  const _setShowBill = () => {
    setShowBill(false);
    setTimeout(() => {
      setShowBill(true);
    }, 50);
  };
  const onClick = () => {
    _setShowBill();
    setChose(false);
    if (calculate.current) {
      calculate.current.classList.remove("opacity-100");
      calculate.current.classList.add("opacity-0");
    }
    if (calculating.current) {
      calculating.current.classList.remove("opacity-0");
      calculating.current.classList.add("opacity-100");
    }
    if (done.current) {
      done.current.classList.add("opacity-0");
      done.current.classList.remove("opacity-100");
    }
    setTimeout(() => {
      if (calculating.current) {
        calculating.current.classList.remove("opacity-100");
        calculating.current.classList.add("opacity-0");
      }
      if (done.current) {
        done.current.classList.remove("opacity-0");
        done.current.classList.add("opacity-100");
      }
      // let scrollTween = gsap.to(window, {
      //   duration: 0.5,
      //   onUpdate: () => {
      //     document.documentElement.scrollTop += 5;
      //     document.body.style.overflow = "hidden";
      //   },
      //   onComplete: () => {
      //     document.body.style.overflow = "auto";
      //   },
      //   overwrite: true,
      // });
    }, loadingTime);
  };

  return (
    <>
      <div className="text-center text-[#6c727f] lg:w-96 mt-2 text-xl flex md:flex-row-reverse flex-col flex-wrap justify-center gap-y-4 items-center">
        <p className="flex-1">من أجل</p>
        <DropDown
          options={options}
          onChange={onSelectTreatment}
          placeholder={"اختر علاجاً"}
        />
        <button
          ref={btn}
          className="rounded-lg w-full h-10 bg-black text-white mt-5 disabled:bg-[#e5e5e5] disabled:text-gray-400 transition duration-500 relative flex justify-center items-center z-0"
          disabled={!chose}
          onClick={() => {
            onClick();
          }}
        >
          <p ref={calculate} className={"absolute transition duration-300"}>
            حساب التكلفة
          </p>
          <p
            ref={calculating}
            className="opacity-0 absolute transition duration-300"
          >
            جاري حساب التكلفة
          </p>
          <p ref={done} className="opacity-0 absolute transition duration-300">
            تم
          </p>
        </button>
      </div>
      {ShowBill && <Bill></Bill>}
    </>
  );
}
