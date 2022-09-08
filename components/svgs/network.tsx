import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="absolute scale-150 lg:flex hidden"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1094.92 388.06"
    {...props}
    style={{
      stroke: "url(#gradient)",
      fill: "none",
      strokeMiterlimit: 10,
      mixBlendMode: "color-dodge",
    }}
  >
    <defs>
      <linearGradient
        id="gradient"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%"
        gradientTransform="rotate(-90) "
      >
        <stop offset="0%" stopColor="#87888a" />
        <stop offset="30%" stopColor="#87888a" stopOpacity={0.1} />
        <stop offset="50%" stopColor="#87888a" stopOpacity={0} />
        <stop offset="70%" stopColor="#87888a" stopOpacity={0.1} />
        <stop offset="100%" stopColor="#87888a" />
      </linearGradient>
    </defs>
    <g
      data-name="Layer 2"
      style={{
        isolation: "isolate",
      }}
    >
      <g
        style={{
          opacity: 0.43,
        }}
        data-name="Layer 1"
      >
        {/* <path d="M3.84 188.68s164 178.09 359.54 155.92c193.1-21.88 405.4-396.17 705.38-259.16" /> */}
        <path d="M.27 161.83s90.15-56.57 200.22-47.24c100.58 8.54 341.54 177 451.45 198.85 123.72 24.56 307.87-35.18 408.3-292.07" />
        <path d="M27.49 366.56s127.56 46.27 271.89 1.44c123.79-38.45 260-244.11 407.93-263.58 142.3-18.72 242.7 28.93 387.26 175.11" />
        <path d="M1064.87 56.17s-279.13-162.25-571.23 67.24C265.11 303 218.58 351.62 13.84 263.94" />
      </g>
    </g>
  </svg>
);

export default SvgComponent;
