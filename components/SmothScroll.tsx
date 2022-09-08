import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  FC,
  Dispatch,
  SetStateAction,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  useTransform,
  useSpring,
  motion,
  useScroll,
  useMotionValue,
} from "framer-motion";

interface SmoothScrollProps {
  pins?: {
    ref: React.RefObject<HTMLDivElement>;
    openCallback: Dispatch<SetStateAction<boolean>>;
  }[];
  children: React.ReactNode;
}

const SmoothScroll: FC<SmoothScrollProps> = (props: SmoothScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [h, setH] = useState(0);

  let intro = false;

  const [pageHeight, setPageHeight] = useState(0);

  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = {
    damping: 10,
    mass: 0.21,
    stiffness: 60,
    restDelta: 0.05,
  };

  const spring = useSpring(transform, physics);

  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    if (scrollRef) resizeObserver.observe(scrollRef.current as Element);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{
          y: spring,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          overflow: "hidden",
          willChange: "transform",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "#292a2d",
        }}
      >
        {props.children}
      </motion.div>
      <div style={{ height: pageHeight }} />
    </>
  );
};

export default SmoothScroll;
