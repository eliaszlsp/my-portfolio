"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./projects";
import { useEffect } from "react";

export function About(props: any) {
  const photosElements = [
    "html5icon",
    "css3icon",
    "javascripticon",
    "giticon",
    "reacticon",
    "tailwindcssicon",
    "graphqlicon",
    "nodejsicon",
  ];
  useEffect(() => {
    AOS.init({
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      mirror: false,
    });
  }, []);
  // icones baixados do icons8
  return (
    <div>
      <main
        className="  mt-14  flex h-max w-screen flex-col 
     items-center justify-around gap-y-5 text-white  "
      >
        <section className=" flex w-[1440px] flex-col items-center  justify-between">
          <div className="mt-12 flex h-full w-[1440px] flex-row items-center justify-between">
            <div className=" flex flex-col gap-12 ">
              <div
                data-aos="zoom-in"
                data-aos-delay="50"
                className=" flex flex-col items-center justify-center   "
              >
                <h1 className="text-center text-2xl">
                  Olá! Meu nome é <br />{" "}
                  <span className="ml-44  text-3xl font-bold text-[#47B4FC]  ">
                    Elias Lopes{" "}
                  </span>
                </h1>
                <br />
                <p className="  w-[700px] text-white   ">
                  {" "}
                  Eu sou um
                  <span className="  text-lg font-bold text-[#47B4FC]">
                    {" "}
                    Desenvolvedor Front-end ,
                  </span>{" "}
                  apaixonado por tecnologia e inovação. <br />
                  Neste portfólio, você encontrará uma coleção de projetos que
                  fazem uso das principais tecnologias front-end do mercado.{" "}
                  Gostaria de explorar? Segue o link logo abaixo.
                </p>
              </div>
              <button
                data-aos="zoom-in"
                data-aos-delay="75"
                className="flex w-fit flex-row items-center  rounded-md  border-2 border-[#47B4FC] px-4 py-2 text-2xl  font-semibold hover:bg-[#3586BD] "
              >
                {" "}
                Projetos
              </button>
            </div>

            <div data-aos="zoom-in" data-aos-delay="150">
              <Image
                className=" inline-block  rounded-full  border-white bg-gradient-to-r from-blue-400 to-gray-900 p-1 text-indigo-900 "
                src="/codetyping-bro.svg"
                alt="imagem aleatoria"
                width={300}
                height={300}
              />
            </div>
          </div>
        </section>

        <section ref={props.referenceSobre} className=" w-[1440px flex">
          <div className="flex h-[800px] w-[1440px] flex-col  justify-evenly  gap-5">
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className=" self-center text-5xl font-bold"
            >
              <h1> Sobre mim </h1>
            </div>

            <div className="center flex flex-row justify-between">
              <div data-aos="zoom-in" data-aos-delay="250">
                <div className="  ">
                  <h1 className="flex self-start text-center text-6xl   font-thin"></h1>
                  <br />
                  <div className=" flex w-[700px] flex-col gap-3">
                    <p className="mb-2">
                      Olá! Eu sou o Elias Lopes, alguém que recentemente
                      descobriu a área de desenvolvimento de software. Isso
                      aconteceu após eu sentir uma forte vontade de realizar uma
                      transição de carreira, pois eu estava trabalhando na área
                      de comunicação como operador de Telemarketing e recebendo
                      um salário com o qual não estava satisfeito.
                    </p>
                    <p className="mb-2">
                      Um dia, um amigo meu, que é desenvolvedor, me questionou:
                      &ldquo;Já que você deseja mudar de área, por que não
                      estudar programação?&rdquo; Assim, busquei informações na
                      internet sobre como aprender programação e acabei me
                      tornando um desenvolvedor web front-end.
                    </p>
                    <p className="mb-2">
                      Agora, estou apaixonado por criar experiências digitais
                      incríveis e funcionais. Possuo proficiência em HTML5, CSS3
                      e Javascript.
                    </p>
                    <p className="mb-2">
                      Quer conhecer mais da minha história e do meu trabalho?
                      Entre em contato comigo através deste{" "}
                      <a
                        href="[link de contato]"
                        className="text-blue-500 hover:underline"
                      >
                        link de contato
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in" data-aos-delay="300">
                <Image
                  className="  "
                  src="/codetyping-bro.svg"
                  alt="imagem aleatoria"
                  width={300}
                  height={300}
                />
              </div>
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
                      className="w-[6.25rem]  
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

        <Projects />

        {/* <footer className=" w-ful flex flex-col items-center justify-between bg-gray-500">
          <div className=" text-5xl font-bold">
            <h1> Contato</h1>
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
                  experiências me permitiram adquirir uma compreensão profunda
                  de
                </p>
              </div>
            </div>

            <div>
              <Image
                className=" inline-block  rounded-full  border-white bg-gradient-to-r from-blue-400 to-gray-900 p-1 text-indigo-900 "
                src="/codetyping-bro.svg"
                alt="imagem aleatoria"
                width={300}
                height={300}
              />
            </div>
          </div>
        </footer> */}
      </main>
    </div>
  );
}
