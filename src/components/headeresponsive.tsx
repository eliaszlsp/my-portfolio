import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { Logo } from "./logo";

export function HeaderResponsive(props: any) {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    isOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  });
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
    <div
      className={`fixed top-0 z-10 flex w-screen flex-col justify-between  bg-[#1F4F6F]  ${
        isOpen && " h-screen"
      }   `}
    >
      <div className=" min-w-screen flex flex-row justify-between ">
        <Logo />
        <div>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            duration={0.4}
            distance="md"
            easing="ease-in"
            color="#ffffff"
          />
        </div>
      </div>
      <div className={`${!isOpen && " hidden "}   h-full`}>
        <div className="flex  ">
          <nav className=" flex w-full items-center ">
            <ul className="ml-3 flex flex-col items-center justify-center gap-12 text-2xl font-bold text-white ">
              {" "}
              {/*  clicar e levar para parte da tela  */}
              <li className=" flex h-32  w-screen items-center border-y border-[#183E57]  pt-5 opacity-80 hover:opacity-100">
                <a
                  onClick={() => {
                    handleClick({ sobre: "sobre" });
                    setOpen(false);
                  }}
                  href="#sobre"
                >
                  Sobre mim
                </a>
              </li>
              <li className=" flex w-screen  opacity-80  hover:opacity-100">
                <a
                  href="#conhecimentos"
                  onClick={() => {
                    handleClick({ conhecimentos: "conhecimentos" });
                    setOpen(false);
                  }}
                >
                  {" "}
                  Conhecimentos
                </a>
              </li>
              <li className="flex  h-32 w-screen items-center border-y border-[#183E57]  opacity-80  hover:opacity-100">
                <a
                  onClick={() => {
                    handleClick({ projetos: "projetos" });
                    setOpen(false);
                  }}
                  href="#projetos"
                >
                  Projetos
                </a>
              </li>
              <li className="w-screen   opacity-80  hover:opacity-100">
                <a
                  onClick={() => {
                    handleClick({ contatos: "contatos" });
                    setOpen(false);
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
    </div>
  );
}
