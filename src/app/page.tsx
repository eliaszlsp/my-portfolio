"use client";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeaderResponsive } from "@/components/headeresponsive";
import { useRef } from "react";

export default function Home() {
  const refs = {
    sobre: useRef<HTMLElement>(null),
    projetos: useRef<HTMLDivElement>(null),
    conhecimentos: useRef<HTMLElement>(null),
    contatos: useRef<HTMLDivElement>(null),
  };

  return (
    <div className="h-full w-screen   bg-gradient-to-r  from-[#35868d] to-[#1F4F6F] ">
      <div>
        <div className=" max-lg:hidden">
          <Header
            referenceSobre={refs.sobre}
            referenceProjetos={refs.projetos}
            referenceConhecimentos={refs.conhecimentos}
            referenceContatos={refs.contatos}
          />
        </div>
        <div className="lg:hidden">
          <HeaderResponsive
            referenceSobre={refs.sobre}
            referenceProjetos={refs.projetos}
            referenceConhecimentos={refs.conhecimentos}
            referenceContatos={refs.contatos}
          />
        </div>
        <About
          referenceSobre={refs.sobre}
          referenceProjetos={refs.projetos}
          referenceConhecimentos={refs.conhecimentos}
        />
        <div ref={refs.contatos}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
