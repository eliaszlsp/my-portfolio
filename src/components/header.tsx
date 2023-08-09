"use client";

import { Logo } from "./logo";
// teste o f2 para renonear variavelz

export function Header(props: any) {
  const ref = {
    sobre: props.referenceSobre,
    projetos: props.referenceProjetos,
    conhecimentos: props.referenceConhecimentos,
    contatos: props.referenceContatos,
  };

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
    <header className="fixed top-0 z-10  flex h-16 w-screen flex-row justify-center border-b-[.0313rem] border-[#183E57] bg-[#1F4F6F] ">
      <div className="flex w-[90rem]  flex-row items-center justify-between">
        <div className="   left-4 ">
          <Logo />
        </div>
        <div className="flex justify-center ">
          <nav className="flex ">
            <ul className="flex flex-row gap-12 text-2xl font-bold text-white">
              {" "}
              {/*  clicar e levar para parte da tela  */}
              <li>
                <a
                  onClick={() => {
                    handleClick({ sobre: "sobre" });
                  }}
                  href="#sobre"
                >
                  Sobre
                </a>
              </li>
              <li>
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
              <li>
                <a
                  onClick={() => {
                    handleClick({ projetos: "projetos" });
                  }}
                  href="#projetos"
                >
                  Projetos
                </a>
              </li>
              <li>
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
