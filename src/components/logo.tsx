"use client";
import Laptop from "@phosphor-icons/react/dist/icons/Laptop";
import { useRef } from "react";

export function Logo() {
  const ref = useRef() as any;

  const scrollToTarget = () => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div
        className="flex cursor-pointer flex-row  items-center "
        onClick={() => {
          scrollToTarget();
        }}
        ref={ref}
      >
        <Laptop size={48} color="#ffffff" />
        <div className="leading-none">
          <p className="font-bold text-white">Elias Lopes</p>
          <p className="font-serif text-[#47B4FC]  ">Front-end Developer</p>
        </div>
      </div>
    </div>
  );
}
