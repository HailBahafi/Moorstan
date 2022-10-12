import { useEffect, useRef, useState } from "react";

//@ts-ignore
import { gsap } from "gsap/dist/gsap";

export default function Logos() {
  useEffect(() => {
    let boxWidth = 200;
    gsap.set(".wrapper", { yPercent: -50 });
    gsap.set("#no02", { y: 30 });
    gsap.set("#no03", { y: 60 });

    // let totalWidth = boxWidth * 20, //  * n of boxes
    let totalWidth = Math.ceil(window.innerWidth / boxWidth) * boxWidth, //  * n of boxes
      no01 = document.querySelectorAll("#no01 .box"),
      no02 = document.querySelectorAll("#no02 .box"),
      no03 = document.querySelectorAll("#no03 .box"),
      dirFromLeft = "+=" + (totalWidth + boxWidth * 2),
      dirFromRight = "-=" + (totalWidth + boxWidth * 2);

    var mod = gsap.utils.wrap(-boxWidth, totalWidth + boxWidth);

    function marquee(which: any, time: any, direction: any) {
      gsap.set(which, {
        x: function (i) {
          return i * boxWidth;
        },
      });
      var action = gsap.timeline().to(which, {
        x: direction,
        modifiers: {
          x: (x) => mod(parseFloat(x)) + "px",
        },
        duration: time,
        ease: "none",
        repeat: -1,
      });
      return action;
    }
    var master = gsap
      .timeline()
      .add(marquee(no01, 40, dirFromLeft), 0)
      .add(marquee(no02, 45, dirFromRight), 0)
      .add(marquee(no03, 45, dirFromLeft), 0);
  }, []);

  return (
    <div className="mt-10">
      <div id="no01" className="wrapper">
        <div className="boxes">
          {line0.map((path, i) => {
            return <Img key={i + "hospital" + 0} path={path} />;
          })}
        </div>
      </div>

      <div id="no02" className="wrapper">
        <div className="boxes">
          {line0.map((path, i) => {
            return <Img key={i + "hospital" + 1} path={path} />;
          })}
        </div>
      </div>

      <div id="no03" className="wrapper">
        <div className="boxes">
          {line0.map((path, i) => {
            return <Img key={i + "hospital" + 2} path={path} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Img({ path }: { path: string }) {
  return <img src={path} className="h-full box opacity-40" />;
}

const line0 = [
  "pngs/hospitals/1.png",
  "pngs/hospitals/2.png",
  "pngs/hospitals/3.png",
  "pngs/hospitals/1.png",
  "pngs/hospitals/2.png",
  "pngs/hospitals/3.png",
  "pngs/hospitals/1.png",
  "pngs/hospitals/2.png",
];
