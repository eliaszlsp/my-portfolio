"use client";

import { Logo } from "./logo";
// teste o f2 para renonear variavelz

export function Header(props: any) {
  const refSobre = props.referenceSobre;

  const handleClick = () => {
    refSobre.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="fixed top-0 z-10  flex h-16 w-screen flex-row justify-center border-b-[.0313rem] border-[#183E57] bg-[#1F4F6F] ">
      <div className="flex w-[90rem]  flex-row items-center justify-between">
        <div className="   left-4 ">
          <Logo />
        </div>
        <div className="flex justify-center ">
          <nav className="flex ">
            <ul className="flex flex-row gap-12 text-4xl font-bold text-white">
              {" "}
              {/*  clicar e levar para parte da tela  */}
              <li>
                <a
                  onClick={() => {
                    handleClick();
                  }}
                  href="#sobre"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a> habilidades</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
