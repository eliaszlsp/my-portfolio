"use client";
import Laptop from "@phosphor-icons/react/dist/icons/Laptop";

export function Logo() {
  return (
    <div>
      <div className="flex flex-row items-center ">
        <Laptop size={48} color="#0a0a0a" />
        <div className="leading-none">
          <p className="font-bold">Elias Lopes</p>
          <p className="font-serif ">front-end developer</p>
        </div>
      </div>
    </div>
  );
}
