"use client";
import { useState } from "react";
import ReactPlayer from "react-player";
import Collapse from "react-collapse";

export default function Projects() {
  const [read, setRead] = useState(false);
  const readMore = () => {
    !read ? setRead(true) : setRead(false);
  };

  return (
    <div>
      <section className=" flex h-[1300px] w-[1440px] flex-col   items-center  py-40">
        <div className=" mb-12 text-5xl font-bold">
          <h1>Projetos</h1>
        </div>
        <div className=" flex ">
          <div className="flex w-[1440px]  gap-12 leading-loose">
            <div className=" flex  w-[400px] flex-col  items-center bg-[#1d247d] transition-all delay-100  ease-out  hover:shadow-[-2px_-1px_19px_10px_rgba(71,180,252,0.75)]">
              {" "}
              <div className=" w-full bg-black">
                <ReactPlayer
                  url="/rocketseatvideo.mp4"
                  height={"200px"}
                  width={"100%"}
                  loop={true}
                  controls={true}
                />
              </div>
              <div className=" p-4">
                <h1 className="mb-4 text-center text-xl font-bold">
                  Clone Home page Rocketseat <br /> (versão Desktop)
                </h1>
                <p>
                  Este projeto é uma homenagem feita a uma das maiores e mais
                  conhecidas coding schools do Brasil.
                </p>
                <div className={``}>
                  <Collapse isOpened={read as boolean}>
                    <p>
                      Ele é um clone da versão desktop da página inicial da
                      Rocketseat. <br />
                      Iniciei este projeto não apenas como uma homenagem, mas
                      também como um desafio pessoal. Isso porque não havia
                      nenhum tutorial disponível na internet ensinando a clonar
                      esse site. Dessa forma, criei um clone que ninguém tinha
                      feito, me desafiando ao aplicar meus conhecimentos na
                      prática e também aprendendo coisas novas.
                    </p>
                  </Collapse>
                </div>
                <div className=" text-center">
                  <button
                    onClick={() => readMore()}
                    className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  >
                    Leia mais
                  </button>
                </div>

                <p>
                  Nesse projeto, utilizei as seguintes linguagens:
                  JavaScript/TypeScript.
                </p>
                <p>
                  Foram empregados os seguintes frameworks: React, Tailwind e
                  Next.js.
                </p>
                <p>Também utilizei algumas bibliotecas adicionais.</p>
                <p>
                  Confira o link do <a href="[link do site]">site</a> e o
                  repositorio perfil no <a href="[link do GitHub]">GitHub</a>.
                </p>
              </div>
            </div>
            <div className=" flex h-max  w-[400px] flex-col items-center bg-[#1d247d]    transition-all delay-100  ease-out  hover:shadow-[-2px_-1px_19px_10px_rgba(71,180,252,0.75)]">
              <div className=" w-full bg-black">
                <ReactPlayer
                  url="/rocketseatvideo.mp4"
                  height={"200px"}
                  width={"100%"}
                  loop={true}
                  controls={true}
                />
              </div>

              <div className="  p-4">
                <h1 className="mb-4 text-center text-xl  font-bold">
                  Api Rick&Morty <br /> (versão Desktop)
                </h1>
                <p>
                  Este projeto é uma Api com a intenção de aprimorar meus
                  conhecimenttos em consumo de api com GraphQl{" "}
                </p>

                <p className="mt-[32px]">
                  Nesse projeto, utilizei as seguintes linguagens:
                  JavaScript/TypeScript.
                </p>
                <p>
                  Foram empregados os seguintes frameworks e tecnologias: React,
                  Tailwind , GraphQl e Next.js.
                </p>
                <p>Também utilizei algumas bibliotecas adicionais.</p>
                <p>
                  Confira o link do <a href="[link do site]">site</a> e o
                  repositorio perfil no <a href="[link do GitHub]">GitHub</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
