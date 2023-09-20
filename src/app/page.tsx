"use client";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeaderResponsive } from "@/components/headeresponsive";
import { useRef } from "react";

export default function Home() {
  const ref = {
    sobre: useRef(),
    projetos: useRef(),
    Conhecimentos: useRef(),
    contatos: useRef() as any,
  };
  return (
    <div className="h-full w-screen   bg-gradient-to-r  from-[#35868d] to-[#1F4F6F] ">
      <div>
        <div className=" max-lg:hidden">
          <Header
            referenceSobre={ref.sobre}
            referenceProjetos={ref.projetos}
            referenceConhecimentos={ref.Conhecimentos}
            referenceContatos={ref.contatos}
          />
        </div>
        <div className="lg:hidden">
          <HeaderResponsive
            referenceSobre={ref.sobre}
            referenceProjetos={ref.projetos}
            referenceConhecimentos={ref.Conhecimentos}
            referenceContatos={ref.contatos}
          />
        </div>
        <About
          referenceSobre={ref.sobre}
          referenceProjetos={ref.projetos}
          referenceConhecimentos={ref.Conhecimentos}
        />
        <div ref={ref.contatos}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
