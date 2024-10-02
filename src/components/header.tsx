"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "./logo";
// teste o f2 para renonear variavelz

export function Header(props: any) {
  const [positionScroll, setPositionScroll] = useState(false);
  const ref = {
    sobre: props.referenceSobre,
    projetos: props.referenceProjetos,
    conhecimentos: props.referenceConhecimentos,
    contatos: props.referenceContatos,
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 5) {
      setPositionScroll(true);
    } else {
      setPositionScroll(false);
    }

    // Faça algo com a posição do scroll, se necessário
    console.log("gostou manda msg: 1197800-3500");
  };
 
  useEffect(() => {
 window.addEventListener("scroll", handleScroll);
  
  // Lembre-se de remover o evento na limpeza
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };

    
  }, []);

  const handleClick = ({ sobre, projetos, conhecimentos, contatos }: any) => {
    sobre === "sobre"
      ? ref.sobre.current?.scrollIntoView({ behavior: "smooth" })
      : "";
    projetos === "projetos"
      ? ref.projetos.current?.scrollIntoView({ behavior: "smooth" })
      : "";
    conhecimentos === "conhecimentos"
      ? ref.conhecimentos.current?.scrollIntoView({ behavior: "smooth" })
      : "";
    contatos === "contatos"
      ? ref.contatos.current?.scrollIntoView({ behavior: "smooth" })
      : "";
  };
  return (
    <header
      className={`elemento-com-transicao fixed top-0  z-10 flex h-16 w-screen flex-row justify-center ${
        positionScroll
          ? " border-b-[.0313rem] border-[#183E57] bg-[#1F4F6F] "
          : " bg-gradient-to-r  from-[#35868d]  to-[#1F4F6F]"
      }  `}
    >
      <div className="flex w-full flex-row  items-center justify-between px-6">
        <div className="   left-4 ">
          <Logo />
        </div>
        <div className="flex justify-center ">
          <nav className="flex ">
            <ul className="flex flex-row gap-12 text-2xl font-bold text-white ">
              {" "}
              {/*  clicar e levar para parte da tela  */}
              <li className="opacity-80 hover:opacity-100">
                <a
                  onClick={() => {
                    handleClick({ sobre: "sobre" });
                  }}
                  href="#sobre"
                >
                  Sobre mim
                </a>
              </li>
              <li className="opacity-80 hover:opacity-100">
                <a
                  href="#conhecimentos"
                  onClick={() => {
                    handleClick({ conhecimentos: "conhecimentos" });
                  }}
                >
                  {" "}
                  Conhecimentos
                </a>
              </li>
              <li className="opacity-80 hover:opacity-100">
                <a
                  onClick={() => {
                    handleClick({ projetos: "projetos" });
                  }}
                  href="#projetos"
                >
                  Projetos
                </a>
              </li>
              <li className="opacity-80 hover:opacity-100">
                <a
                  onClick={() => {
                    handleClick({ contatos: "contatos" });
                  }}
                  href="#contato"
                >
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
