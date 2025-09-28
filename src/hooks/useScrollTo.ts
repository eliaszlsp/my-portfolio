import { useRef } from "react";

type Refs = {
  [key: string]: React.RefObject<HTMLElement>;
};

export const useScrollTo = (refs: Refs) => {
  const scrollTo = (section: string) => {
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return { scrollTo };
};