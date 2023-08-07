import { useState } from "react";
import ReactPlayer from "react-player";

export default function Projects() {
  const [read, setRead] = useState("hidden");
  const readMore = () => {
    read === "block" ? setRead("hidden") : setRead("block");
  };

  return (
    <div>
      <section className=" flex h-[1300px] w-[1440px] flex-col   items-center  py-40">
        <div className=" mb-12 text-5xl font-bold">
          <h1>Projetos</h1>
        </div>
        <div className="flex  w-[1440px] flex-row items-center  ">
          <div className=" flex w-[400px]  flex-col  items-center bg-black ">
            <div className=" w-full bg-black">
              <ReactPlayer
                url="/rocketseatvideo.mp4"
                height={"200px"}
                width={"100%"}
                loop={true}
                controls={true}
              />
            </div>
            <div className="">
              <div className=" box p-4">
                <h1 className="mb-4 text-center text-xl font-bold">
                  Clone Home page Rocketseat <br /> (versão Desktop)
                </h1>
                <p>
                  Este projeto é uma homenagem feita a uma das maiores e mais
                  conhecidas coding schools do Brasil.
                </p>
                <div className={`${read} h-fit`}>
                  <p>
                    Ele é um clone da versão desktop da página inicial da
                    Rocketseat. <br />
                    Iniciei este projeto não apenas como uma homenagem, mas
                    também como um desafio pessoal. Isso porque não havia nenhum
                    tutorial disponível na internet ensinando a clonar esse
                    site. Dessa forma, criei um clone que ninguém tinha feito,
                    me desafiando ao aplicar meus conhecimentos na prática e
                    também aprendendo coisas novas.
                  </p>
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
          </div>
        </div>
      </section>
    </div>
  );
}
