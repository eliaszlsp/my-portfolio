"use client";

import { Logo } from "./logo";
// teste o f2 para renonear variavelz
export function Header() {
  return (
    <header className="flex h-16 w-screen flex-row justify-center bg-[#5CA5BC] ">
      <div className="flex w-[1440px]  flex-row items-center justify-between">
        <div className="   left-4 ">
          <Logo />
        </div>
        <div className="flex justify-center ">
          <nav className="flex ">
            <ul className="flex flex-row gap-12 text-4xl font-bold">
              {" "}
              {/*  clicar e levar para parte da tela  */}
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#sobre">Skills</a>
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
