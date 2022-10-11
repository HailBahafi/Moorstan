import "../styles/globals.css";
import type { AppProps } from "next/app";
import SmoothScroll from "../components/SmothScroll";
import { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

function MyApp({ Component, pageProps }: AppProps) {
  const size = useWindowSize();
  const [elm, setElm] = useState(
    <SmoothScroll>
      <Component {...pageProps} />
    </SmoothScroll>
  );
  useEffect(() => {
    if (size.width < size.height) {
      setElm(<Component {...pageProps} />);
    }
  }, [size]);

  useEffect(() => {});
  return (
    <>
      <SmoothScroll>
        <Component {...pageProps} />
      </SmoothScroll>
    </>
  );
}

export default MyApp;
