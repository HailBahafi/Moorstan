import { useEffect, useRef, useState } from "react";

//@ts-ignore
import { gsap } from "gsap/dist/gsap";

//@ts-ignore
import { Flip } from "gsap/dist/Flip";

//@ts-ignore
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Background() {
  let enter = true;
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(Flip);

    const bgs = gsap.utils.toArray("#bg");

    bgs.forEach((bg) => {
      gsap.to(bg as HTMLDivElement, {
        borderRadius: "0px",
        ease: "expo.out",
        duration: 0.4,
        scrollTrigger: {
          once: true,
          trigger: bg as HTMLDivElement,
          invalidateOnRefresh: true,
          start: "top center",
          onEnter: flip,
        },
      });
    });

    setIsPhone(window.innerHeight > window.innerWidth);
  }, []);

  function movePics(elm: Element | undefined) {
    let children = gsap.utils.toArray((elm as HTMLDivElement).children);

    children.forEach((img) => {
      console.log((img as HTMLImageElement).y);
      gsap.to(img as HTMLImageElement, {
        y: "-=1000",
        ease: "expo.out",
        duration: 1,
        delay: gsap.utils.random(0, 0.5),
      });
    });
    console.log(children);
  }

  let flipping = false;
  let offset = 0;
  const flip = (trigger: ScrollTrigger) => {
    if (!flipping) {
      flipping = true;
      movePics(trigger.trigger);
      let scrollTween = gsap.to(window, {
        duration: 0.7,
        onStart: () => {},
        onUpdate: () => {
          document.documentElement.scrollTop =
            (trigger.trigger as HTMLDivElement)!.offsetTop;
          document.body.style.overflow = "hidden";
        },
        onComplete: () => {
          document.body.style.overflow = "auto";
          flipping = false;
        },
        overwrite: true,
      });
    }
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-full absolute -z-50">
      {/* <div className="w-full md:h-[105vh] h-[115vh]"></div> */}
      <div
        id="bg"
        className="w-full h-[200vh] bg-lightOrange rounded-t-full absolute md:top-[105vh] top-[115vh] will-change-auto"
      >
        {!isPhone && (
          <>
            <img
              src="pics/heart.png"
              className="w-56 translate-x-20 translate-y-[1100px] absolute will-change-transform"
            />
            <img
              src="pics/Syringe.png"
              className="w-48 -translate-x-20 right-0 translate-y-[1200px] absolute will-change-transform"
            />
          </>
        )}
      </div>
      <div
        id="bg"
        className="w-full h-[200vh] bg-lightDark rounded-t-full absolute md:top-[225vh] top-[235vh] will-change-auto"
      >
        {!isPhone && (
          <>
            <img
              src="pics/caculator.png"
              className="w-48 translate-x-20 translate-y-[1300px] absolute will-change-transform"
            />
            <img
              src="pics/money.png"
              className="w-48 -translate-x-20 right-0 translate-y-[1200px] absolute will-change-transform"
            />
          </>
        )}
      </div>
      <div
        id="bg"
        className="w-full h-[200vh] bg-lightPumpa rounded-t-full absolute md:top-[340vh] top-[350vh] will-change-auto"
      >
        <div className="w-full flex justify-center items-center">
          <img
            src="pics/scroll.png"
            className="w-32 place-self-center translate-y-[2000px] absolute will-change-transform"
          />
        </div>
        {!isPhone && (
          <>
            {/* <img
              src="pics/hand.png"
              className="w-48 translate-x-20 translate-y-[1100px] absolute will-change-transform"
            /> */}
            {/* <img
              src="pics/check.png"
              className="w-48 -translate-x-20 right-0 translate-y-[1300px] absolute will-change-transform"
            /> */}
          </>
        )}
      </div>
      <div
        id="bg"
        className="w-full h-[120vh] bg-lightOrange rounded-t-full absolute md:top-[455vh] top-[485vh] will-change-auto"
      ></div>
    </div>
  );
}
