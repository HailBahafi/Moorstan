import * as React from "react";
import { SVGProps } from "react";

//@ts-ignore
import { gsap } from "gsap/dist/gsap";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  React.useEffect(() => {
    gsap.to("#circles", {
      duration: 1,
      stagger: 0.1,
      opacity: 0.07,
    });
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1419.5 1419.5"
      {...props}
      className="w-full -translate-y-1/2 z-50"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1={709.75}
          y1={-11.35}
          x2={709.75}
          y2={1394.33}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} />
          <stop offset={0.97} stopColor="#fff" />
        </linearGradient>
        <style>{".cls-1{}.cls-2{fill:url(#linear-gradient)}"}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g className="cls-1 opacity-0 " id="circles">
            <path
              className="cls-2 "
              d="M709.75 1419.5A709.93 709.93 0 0 1 433.47 55.79 709.93 709.93 0 0 1 986 1363.71a705.37 705.37 0 0 1-276.25 55.79Zm0-1333.82c-344.11 0-624.07 280-624.07 624.07s280 624.07 624.07 624.07 624.07-280 624.07-624.07S1053.86 85.68 709.75 85.68Z"
            />
          </g>
          <g className="cls-1 opacity-0 " id="circles">
            <path
              className="cls-2 "
              d="M709.75 1271.69a560.29 560.29 0 1 1 218.75-44.17 558.57 558.57 0 0 1-218.75 44.17Zm0-1038.2c-262.61 0-476.26 213.65-476.26 476.26S447.14 1186 709.75 1186 1186 972.36 1186 709.75 972.36 233.49 709.75 233.49Z"
            />
          </g>
          <g className="cls-1  opacity-0 " id="circles">
            <path
              className="cls-2 "
              d="M709.75 1123.18c-110.43 0-214.25-43-292.34-121.09S296.32 820.18 296.32 709.75s43-214.25 121.09-292.34 181.91-121.09 292.34-121.09 214.25 43 292.34 121.09 121.09 181.91 121.09 292.34-43 214.25-121.09 292.34-181.91 121.09-292.34 121.09Zm0-741.17C529 382 382 529 382 709.75s147 327.74 327.74 327.74 327.74-147 327.74-327.74S890.47 382 709.75 382Z"
            />
          </g>
          <g className="cls-1 opacity-0  " id="circles">
            <circle className="cls-2" cx={709.75} cy={709.75} r={267.76} />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default SvgComponent;
