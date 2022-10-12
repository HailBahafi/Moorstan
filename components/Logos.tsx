import { useEffect, useRef, useState } from "react";

//@ts-ignore
import { gsap } from "gsap/dist/gsap";

export default function Logos() {
  useEffect(() => {
    gsap.to("#hosp", {
      stagger: 0.2,
      opacity: 0.5,
    });
  }, []);

  return (
    <div className="mt-10">
      <div
        id="no01"
        className="flex flex-wrap md:gap-x-16 gap-x-4 gap-y-6 justify-center items-center md:pr-28 pr-4 pl-4 md:pl-28"
      >
        {line0.map((path, i) => {
          return <Img key={i + "hospital" + 0} path={path} />;
        })}
      </div>
    </div>
  );
}

function Img({ path }: { path: string }) {
  return <img id="hosp" src={path} className="h-8 opacity-0" />;
}

const line0 = [
  "pngs/hospitals/1.png",
  "pngs/hospitals/2.png",
  "pngs/hospitals/3.png",
  "pngs/hospitals/4.png",
  "pngs/hospitals/5.png",
  "pngs/hospitals/6.png",
  "pngs/hospitals/7.png",
  "pngs/hospitals/8.png",
];
