import { useEffect, useRef, useState } from "react";

//@ts-ignore
import { gsap } from "gsap/dist/gsap";

//@ts-ignore
import { Flip } from "gsap/dist/Flip";

import { motion } from "framer-motion";

export default function Service({ color }: { color: string }) {
  useEffect(() => {
    // gsap.to("#hosp", {
    //   stagger: 0.5,
    //   opacity: 1,
    // });
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="flex flex-col p-2 justify-center items-center font-main w-32 md:w-40 h-full  rounded-2xl text-center relative overflow-hidden"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <motion.div
        // onMouseEnter={() => console.log("ener")}
        layout
        data-open={open}
        className="service absolute rounded-full top-0 -z-10 origin-top "
        style={{ backgroundColor: color }}
      ></motion.div>
      <img src="no.png" className="h-10" />
      <p className="text-lg mt-2">ارسل تقاريرك</p>
      <p className="text-sm mt-2 text-gray-500">
        ارسل تقاريرك الطبية ونحن نقوم بمراجعتها
      </p>
    </motion.div>
  );
}
