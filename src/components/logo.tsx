"use client";
import Laptop from "@phosphor-icons/react/dist/icons/Laptop";

export function Logo() {
  return (
    <div>
      <div className="flex flex-row items-center ">
        <Laptop size={48} color="#ffffff" />
        <div className="leading-none">
          <p className="font-bold text-white">Elias Lopes</p>
          <p className="font-serif text-[#47B4FC]  ">Front-end Developer</p>
        </div>
      </div>
    </div>
  );
}
