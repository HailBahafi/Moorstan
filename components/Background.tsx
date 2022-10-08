import { useEffect, useRef, useState } from "react";

//@ts-ignore
import { gsap } from "gsap/dist/gsap";

//@ts-ignore
import { Flip } from "gsap/dist/Flip";

//@ts-ignore
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Background() {
  let enter = true;
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
  }, []);

  const flip = (trigger: ScrollTrigger) => {
    console.log("scrolling");
    let scrollTween = gsap.to(window, {
      duration: 0.5,
      onUpdate: () => {
        document.documentElement.scrollTop =
          (trigger.trigger as HTMLDivElement)!.offsetTop;
        document.body.style.overflow = "hidden";
      },
      onComplete: () => {
        document.body.style.overflow = "auto";
      },
      overwrite: true,
    });
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-full absolute -z-50">
      {/* <div className="w-full md:h-[105vh] h-[115vh]"></div> */}
      <div
        id="bg"
        className="w-full h-[200vh] bg-lightOrange rounded-t-full absolute md:top-[105vh] top-[115vh]"
      ></div>
      <div
        id="bg"
        className="w-full h-[200vh] bg-lightDark rounded-t-full absolute md:top-[225vh] top-[235vh]"
      ></div>
      <div
        id="bg"
        className="w-full h-[200vh] bg-lightPumpa rounded-t-full absolute md:top-[340vh] top-[350vh]"
      ></div>
      <div
        id="bg"
        className="w-full h-[120vh] bg-lightOrange rounded-t-full absolute md:top-[450vh] top-[470vh]"
      ></div>
    </div>
  );
}
