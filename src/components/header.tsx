"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { useScrollTo } from "@/hooks/useScrollTo";

interface HeaderProps {
  referenceSobre: React.RefObject<HTMLElement>;
  referenceProjetos: React.RefObject<HTMLDivElement>;
  referenceConhecimentos: React.RefObject<HTMLElement>;
  referenceContatos: React.RefObject<HTMLDivElement>;
}

export function Header({
  referenceSobre,
  referenceProjetos,
  referenceConhecimentos,
  referenceContatos,
}: HeaderProps) {
  const [positionScroll, setPositionScroll] = useState(false);

  const refs = {
    sobre: referenceSobre,
    projetos: referenceProjetos,
    conhecimentos: referenceConhecimentos,
    contatos: referenceContatos,
  };

  const { scrollTo } = useScrollTo(refs);

  const handleScroll = () => {
    setPositionScroll(window.scrollY > 5);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`elemento-com-transicao fixed top-0 z-10 flex h-16 w-screen flex-row justify-center ${
        positionScroll
          ? "border-b-[.0313rem] border-[#183E57] bg-[#1F4F6F]"
          : "bg-gradient-to-r from-[#35868d] to-[#1F4F6F]"
      }`}
    >
      <div className="flex w-full flex-row items-center justify-between px-6">
        <div className="left-4">
          <Logo />
        </div>
        <div className="flex justify-center">
          <nav className="flex">
            <ul className="flex flex-row gap-12 text-2xl font-bold text-white">
              <li className="opacity-80 hover:opacity-100">
                <a onClick={() => scrollTo("sobre")} href="#sobre">
                  Sobre mim
                </a>
              </li>
              <li className="opacity-80 hover:opacity-100">
                <a
                  href="#conhecimentos"
                  onClick={() => scrollTo("conhecimentos")}
                >
                  Conhecimentos
                </a>
              </li>
              <li className="opacity-80 hover:opacity-100">
                <a onClick={() => scrollTo("projetos")} href="#projetos">
                  Projetos
                </a>
              </li>
              <li className="opacity-80 hover:opacity-100">
                <a onClick={() => scrollTo("contatos")} href="#contato">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
