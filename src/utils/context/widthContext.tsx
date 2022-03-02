import React, { useEffect, useState } from "react";

import { createContext } from "react";

export const WidthContext = createContext<number>(0);

export const WidthProvider = ({ children }) => {
  const isBrowser = typeof window !== "undefined";

  const [width, setWidth] = useState<number>(isBrowser && window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WidthContext.Provider value={width}>{children}</WidthContext.Provider>
  );
};
