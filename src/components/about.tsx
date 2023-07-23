"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export function About() {
  const photosElements = [
    "html5icon",
    "css3icon",
    "javascripticon",
    "githubicon",
    "reacticon",
    "tailwindcssicon",
    "graphqlicon",
    "nodejsicon",
  ];
  // icones baixados do icons8
  return (
    <main
      className="  animate-slide-in-blurred-left animate-slide mt-5 flex h-max w-screen flex-col 
     items-center justify-around gap-y-5 text-white  "
    >
      <section className=" flex w-[1440px] flex-col items-center  justify-between">
        <div className=" text-5xl font-bold">
          <h1> Sobre</h1>
        </div>
        <div className="flex w-[1440px] flex-row items-center  justify-between">
          <div>
            <div className="slide-in-blurred-left   ">
              <h1 className="flex self-start text-center text-2xl  font-bold">
                Frontend Developer
              </h1>
              <br />
              <p className=" w-96 text-white ">
                Olá! Sou o Elias Lopes, um Desenvolvedor Front-end apaixonado
                por tecnologia e inovação. Aqui neste portfólio, você encontrará
                projetos que utilizam as principais tecnologias front-end do
                mercado, resultando em interfaces atraentes e interativas.
                Explore-os para desvendar o potencial das soluções digitais que
                posso criar. Estou empolgado para compartilhar minhas ideias e
                trabalhar em projetos emocionantes com você! Vamos construir
                algo incrível! 🚀🎨
              </p>
            </div>
          </div>

          <div>
            <Image
              className="animate-slide-in-blurred-right   "
              src="/codetyping-bro.svg"
              alt="imagem aleatoria"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>

      <section className=" flex w-[1440px] flex-col items-center  justify-between">
        <div className=" text-5xl font-bold">
          <h1> Sobre</h1>
        </div>
        <div className="flex w-[1440px] flex-row items-center  justify-between">
          <div>
            <div className="slide-in-blurred-left   ">
              <h1 className="text-center text-2xl  font-bold">
                Frontend Developer
              </h1>
              <br />
              <p className=" w-96 text-white ">
                Olá! Meu nome é Elias. Sou um[a] [Profissão] apaixonado[a] por
                [Área de Atuação]. Com [X] anos de experiência, desenvolvi{" "}
                <br />
                habilidades sólidas em [Habilidades Principais],
                <br />
                sempre buscando aprimorar meus conhecimentos e acompanhar as
                tendências do mercado. Ao longo da minha carreira, tive a
                oportunidade de trabalhar em diversos projetos desafiadores,{" "}
                <br />
                desde [Tipo de Projeto] até [Outro Tipo de Projeto]. Essas
                experiências me permitiram adquirir uma compreensão profunda de
              </p>
            </div>
          </div>

          <div>
            <Image
              className="animate-slide-in-blurred-right  inline-block  rounded-full  border-white bg-gradient-to-r from-blue-400 to-gray-900 p-1 text-indigo-900 "
              src="/codetyping-bro.svg"
              alt="imagem aleatoria"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>

      <section
        className=" flex h-[320px] w-[1440px] flex-col items-center justify-center  
      gap-12 text-5xl font-bold   "
      >
        <div>
          <h1 className=" text-5xl font-bold"> Conhecimentos</h1>
        </div>
        <div>
          <ul className=" flex w-full  flex-row justify-center gap-20  ">
            {photosElements.map((nameElement, index) => (
              <li className=" text-center text-sm uppercase" key={index}>
                <div className="w-fit">
                  <Image
                    className="animate-slide-in-blurred-right w-[6.25rem]  
                "
                    src={`/${nameElement}.svg`}
                    alt={`${nameElement.replace(/icon$/, "")}`}
                    width={100}
                    height={100}
                  />
                </div>
                <p> {`${nameElement.replace(/icon$/, "")}`} </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className=" flex w-[1440px] flex-col items-center  justify-between">
        <div className=" text-5xl font-bold">
          <h1> Sobre</h1>
        </div>
        <div className="flex w-[1440px] flex-row items-center  justify-between">
          <div>
            <div className="slide-in-blurred-left   ">
              <h1 className="text-center text-2xl  font-bold">
                Frontend Developer
              </h1>
              <br />
              <p className=" w-96 text-white ">
                Olá! Meu nome é Elias. Sou um[a] [Profissão] apaixonado[a] por
                [Área de Atuação]. Com [X] anos de experiência, desenvolvi{" "}
                <br />
                habilidades sólidas em [Habilidades Principais],
                <br />
                sempre buscando aprimorar meus conhecimentos e acompanhar as
                tendências do mercado. Ao longo da minha carreira, tive a
                oportunidade de trabalhar em diversos projetos desafiadores,{" "}
                <br />
                desde [Tipo de Projeto] até [Outro Tipo de Projeto]. Essas
                experiências me permitiram adquirir uma compreensão profunda de
              </p>
            </div>
          </div>

          <div>
            <Image
              className="animate-slide-in-blurred-right  inline-block  rounded-full  border-white bg-gradient-to-r from-blue-400 to-gray-900 p-1 text-indigo-900 "
              src="/codetyping-bro.svg"
              alt="imagem aleatoria"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>

      <footer className=" flex w-[1440px] flex-col items-center  justify-between">
        <div className=" text-5xl font-bold">
          <h1> Sobre</h1>
        </div>
        <div className="flex w-[1440px] flex-row items-center  justify-between">
          <div>
            <div className="slide-in-blurred-left   ">
              <h1 className="text-center text-2xl  font-bold">
                Frontend Developer
              </h1>
              <br />
              <p className=" w-96 text-white ">
                Olá! Meu nome é Elias. Sou um[a] [Profissão] apaixonado[a] por
                [Área de Atuação]. Com [X] anos de experiência, desenvolvi{" "}
                <br />
                habilidades sólidas em [Habilidades Principais],
                <br />
                sempre buscando aprimorar meus conhecimentos e acompanhar as
                tendências do mercado. Ao longo da minha carreira, tive a
                oportunidade de trabalhar em diversos projetos desafiadores,{" "}
                <br />
                desde [Tipo de Projeto] até [Outro Tipo de Projeto]. Essas
                experiências me permitiram adquirir uma compreensão profunda de
              </p>
            </div>
          </div>

          <div>
            <Image
              className="animate-slide-in-blurred-right  inline-block  rounded-full  border-white bg-gradient-to-r from-blue-400 to-gray-900 p-1 text-indigo-900 "
              src="/codetyping-bro.svg"
              alt="imagem aleatoria"
              width={300}
              height={300}
            />
          </div>
        </div>
      </footer>
    </main>
  );
}
