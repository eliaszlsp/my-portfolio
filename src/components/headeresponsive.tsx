import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { useScrollTo } from "@/hooks/useScrollTo";

interface HeaderResponsiveProps {
  referenceSobre: React.RefObject<HTMLElement>;
  referenceProjetos: React.RefObject<HTMLDivElement>;
  referenceConhecimentos: React.RefObject<HTMLElement>;
  referenceContatos: React.RefObject<HTMLDivElement>;
}

export function HeaderResponsive({
  referenceSobre,
  referenceProjetos,
  referenceConhecimentos,
  referenceContatos,
}: HeaderResponsiveProps) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const refs = {
    sobre: referenceSobre,
    projetos: referenceProjetos,
    conhecimentos: referenceConhecimentos,
    contatos: referenceContatos,
  };

  const { scrollTo } = useScrollTo(refs);

  const handleLinkClick = (section: string) => {
    scrollTo(section);
    setOpen(false);
  };

  return (
    <div
      className={`fixed top-0 z-10 flex w-screen flex-col justify-between bg-[#1F4F6F] ${
        isOpen && "h-screen"
      }`}
    >
      <div className="min-w-screen flex flex-row justify-between">
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
      <div className={`${!isOpen && "hidden"} h-full`}>
        <div className="flex">
          <nav className="flex w-full items-center">
            <ul className="ml-3 flex flex-col items-center justify-center gap-12 text-2xl font-bold text-white">
              <li className="flex h-32 w-screen items-center border-y border-[#183E57] pt-5 opacity-80 hover:opacity-100">
                <a onClick={() => handleLinkClick("sobre")} href="#sobre">
                  Sobre mim
                </a>
              </li>
              <li className="flex w-screen opacity-80 hover:opacity-100">
                <a
                  href="#conhecimentos"
                  onClick={() => handleLinkClick("conhecimentos")}
                >
                  Conhecimentos
                </a>
              </li>
              <li className="flex h-32 w-screen items-center border-y border-[#183E57] opacity-80 hover:opacity-100">
                <a onClick={() => handleLinkClick("projetos")} href="#projetos">
                  Projetos
                </a>
              </li>
              <li className="w-screen opacity-80 hover:opacity-100">
                <a onClick={() => handleLinkClick("contatos")} href="#contato">
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
