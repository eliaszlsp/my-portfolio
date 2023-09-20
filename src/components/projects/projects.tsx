"use client";
import { useState } from "react";

import { CardDefault } from "./card";

import projetos from "./objectprojects";

export default function Projects() {
  const [read, setRead] = useState(false);
  const readMore = () => {
    !read ? setRead(true) : setRead(false);
  };
  const photosElements = [
    "html5icon",
    "css3icon",
    "javascripticon",
    "giticon",
    "typescripticon",
    "reacticon",
    "nextjsicon",
    "tailwindcssicon",
    "graphqlicon",
    "nodejsicon",
  ];

  return (
    <div>
      <section className=" flex h-[1300px] w-[1440px] flex-col   items-center py-40  max-lg:w-screen max-lg:py-20">
        <div className=" mb-12 px-4 text-5xl font-bold">
          <h1>Projetos</h1>
        </div>
        <div className=" flex flex-row gap-3  max-lg:w-full max-lg:items-center max-lg:justify-center max-lg:gap-8 max-md:flex-col">
          {projetos.map((item) => {
            return <CardDefault key={item.id} project={item} />;
          })}
        </div>
      </section>
    </div>
  );
}

{
  /* <div className=" flex sm:max-h-[560px]  ">
<div className="flex  w-[1440px] gap-12 leading-loose max-lg:flex-col max-lg:items-center max-lg:justify-center ">
  <div className=" flex w-[400px]  flex-col items-center  rounded-2xl bg-[#1d247d] transition-all delay-100 ease-out  hover:shadow-[-2px_-1px_19px_10px_rgba(71,180,252,0.75)]  max-lg:w-screen">
    {" "}
    <div className=" w-full bg-black max-lg:hidden   ">
      <ReactPlayer
        url="/rocketseatvideo.mp4"
        height={"200px"}
        width={"100%"}
        loop={true}
        controls={true}
      />
    </div>
    <div className="p-4">
      <h1 className="text-center text-xl font-bold sm:mb-4      ">
        Clone Home page Rocketseat <br /> (versão Desktop)
      </h1>
      <p>
        Este projeto é uma homenagem feita a uma das maiores e mais
        conhecidas coding schools do Brasil.
      </p>
      <div>
        <Collapse
          isOpened={read as boolean}
          className=".ReactCollapse--collapse"
        >
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

      <div className="flex flex-col justify-center">
        <p className=" text-center">
          Tecnologias e linguagens utilizadas <br />
        </p>
        <ul className=" mt-5 flex flex-row items-center gap-3">
          {photosElements.map((nameElement, index) => {
            const techStack = [
              "nextjs",
              "typescript",
              "react",
              "tailwind",
              "graphql",
            ];

            if (
              techStack.some((tech) => nameElement.includes(tech))
            ) {
              return (
                <li
                  className="  text-center text-sm uppercase"
                  key={index}
                >
                  <div className="w-fit">
                    <Image
                      className="w-[30px]"
                      src={`/icons/${nameElement}.svg`}
                      alt={`${nameElement.replace(/icon$/, "")}`}
                      width={100}
                      height={100}
                    />
                  </div>
                </li>
              );
            }
          })}
        </ul>

    
        <div className=" mt-5  flex justify-around  text-base ">
          <a
            className=" rounded-md border border-[#47B4FC] px-3 py-1 hover:bg-[#3586BD]  "
            href="[link do site]"
          >
            Site
          </a>
          <a
            className="  rounded-md  border border-[#47B4FC]  px-3 py-1 transition-all  delay-100 ease-in hover:bg-[#3586BD] "
            href="[link do GitHub]"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className=" flex h-[568px]      w-[400px]  flex-col  items-center rounded-2xl bg-[#1d247d]  transition-all delay-100   ease-out hover:shadow-[-2px_-1px_19px_10px_rgba(71,180,252,0.75)]  max-lg:h-[300px]  max-lg:w-screen">
    <div className="h-full">
      <div className=" w-full bg-black  max-lg:hidden">
        <ReactPlayer
          url="/rickmorty.mp4"
          height={"200px"}
          width={"100%"}
          loop={true}
          controls={true}
        />
      </div>

      <div className="flex  h-[366px]  flex-col justify-between p-4 max-lg:h-[200px] ">
        <div>
          <h1 className="mb-4 text-center text-xl  font-bold">
            Api Rick&Morty
          </h1>
          <p>
            Este projeto é uma Api com a intenção de aprimorar meus
            conhecimenttos em consumo de api com GraphQl{" "}
          </p>
        </div>
        <div className="flex flex-col  justify-center">
          <p className="  text-center">
            Tecnologias e linguagens utilizadas <br />
          </p>
          <ul className=" mt-5 flex flex-row items-center gap-3">
            {photosElements.map((nameElement, index) => {
              const techStack = [
                "nextjs",
                "typescript",
                "react",
                "tailwind",
                "graphql",
              ];

              if (
                techStack.some((tech) => nameElement.includes(tech))
              ) {
                return (
                  <li
                    className="  text-center text-sm uppercase"
                    key={index}
                  >
                    <div className="w-fit">
                      <Image
                        className="w-[30px]"
                        src={`/icons/${nameElement}.svg`}
                        alt={`${nameElement.replace(/icon$/, "")}`}
                        width={100}
                        height={100}
                      />
                    </div>
                  </li>
                );
              }
            })}
          </ul>

          <div className=" mt-5  flex justify-around  text-base ">
            <a
              className=" rounded-md border border-[#47B4FC] px-3 py-1 hover:bg-[#3586BD]  "
              href="[link do site]"
            >
              Site
            </a>
            <a
              className="  rounded-md  border border-[#47B4FC]  px-3 py-1 transition-all  delay-100 ease-in hover:bg-[#3586BD] "
              href="[link do GitHub]"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */
}
