"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./projects/projects";
import { useEffect } from "react";
import Lottie from "lottie-react";
import computador from "../../public/animation/coding.json";
import about from "../../public/animation/about.json";

export function About(props: any) {
  const handleClick = ({ projetos }: any) => {
    projetos === "projetos"
      ? props.referenceProjetos.current?.scrollIntoView({ behavior: "smooth" })
      : "";
  };
  const photosElements = [
    "html5icon",
    "css3icon",
    "javascripticon",
    "giticon",
    "reacticon",
    "nextjsicon",
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
    <div className=" flex justify-center">
      <main
        className="  flex   h-max  w-full flex-col 
     items-center justify-around gap-y-5 text-white max-lg:max-w-[90vw] max-lg:overflow-hidden  lg:mt-14 "
      >
        <section className=" flex h-full  flex-col items-center justify-evenly   max-lg:w-full">
          <div className="mt-24 flex h-full w-full flex-row items-center justify-between px-4  max-lg:w-full   max-lg:justify-center">
            <div className=" flex flex-col gap-12 max-lg:w-full  ">
              <div
                data-aos="zoom-in"
                data-aos-delay="50"
                className=" flex flex-col items-center justify-center max-lg:w-full"
              >
                <h1 className="text-center text-2xl">
                  Olá! Meu nome é <br />{" "}
                  <span className="ml-44  text-3xl font-black text-white">
                    Elias Lopes{" "}
                  </span>
                </h1>
                <br />
                <p className="  text-white lg:w-[700px]   ">
                  {" "}
                  Eu sou um
                  <span className="  text- text-lg font-bold">
                    {" "}
                    Desenvolvedor Front-end ,
                  </span>{" "}
                  apaixonado por tecnologia e inovação. <br />
                  Neste portfólio, você encontrará uma coleção de projetos que
                  fazem uso das principais tecnologias front-end do mercado.{" "}
                  Gostaria de explorar? Segue o link logo abaixo.
                </p>
              </div>
              <div data-aos="zoom-in" data-aos-delay="75">
                <button
                  className="flex w-fit flex-row items-center  rounded-md  border border-[#47B4FC] px-4 py-2 text-2xl font-semibold 
                   transition-all delay-100 ease-in  hover:bg-[#3586BD]  "
                  onClick={() => {
                    handleClick({ projetos: "projetos" });
                  }}
                >
                  {" "}
                  Projetos
                </button>
              </div>
            </div>

            <div
              className=" max-lg:hidden"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <Lottie
                animationData={computador}
                loop={true}
                className="h-[500px] w-[500px] "
              />
            </div>
          </div>
        </section>

        <section
          ref={props.referenceSobre}
          className="   flex  justify-evenly max-lg:w-full"
        >
          <div className="flex h-[800px]  w-[1440px]  flex-col items-center justify-evenly gap-5  px-4 max-lg:h-full  max-lg:w-full">
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className=" self-center text-5xl  font-bold max-lg:mt-10 max-lg:text-3xl max-lg:font-black"
            >
              <h1> Sobre mim </h1>
            </div>

            <div className="center flex flex-row justify-between max-lg:justify-center  ">
              <div data-aos="zoom-in" data-aos-delay="250">
                <div className="  ">
                  <h1 className="flex self-start text-center text-6xl   font-thin"></h1>
                  <br />
                  <div className=" flex w-[700px]  flex-col justify-center gap-3  max-lg:w-full">
                    <div className=" flex flex-col items-center justify-center max-lg:w-fit">
                      <p className="mb-2">
                        Olá! Eu sou o Elias Lopes, alguém que recentemente
                        descobriu a área de desenvolvimento de software. Isso
                        aconteceu após eu sentir uma forte vontade de realizar
                        uma transição de carreira, pois eu estava trabalhando na
                        área de comunicação como operador de Telemarketing e
                        recebendo um salário com o qual não estava satisfeito.
                      </p>
                      <p className="mb-2">
                        Um dia, um amigo meu, que é desenvolvedor, me
                        questionou: &ldquo;Já que você deseja mudar de área, por
                        que não estudar programação?&rdquo; Assim, busquei
                        informações na internet sobre como aprender programação
                        e acabei me tornando um desenvolvedor web front-end.
                      </p>
                      <p className="mb-2">
                        Agora, estou apaixonado por criar experiências digitais
                        incríveis e funcionais. Possuo proficiência em{" "}
                        <span className=" text-[#1d247d]">HTML5 </span>,{" "}
                        <span className=" text-[#1d247d]">CSS3 </span> e{" "}
                        <span className=" text-[#1d247d]">Javascript </span>.
                      </p>
                      <p className="mb-2">
                        Quer conhecer mais da minha história e do meu trabalho?
                        Entre em contato comigo através deste{" "}
                      </p>
                    </div>
                    <div className=" flex flex-row gap-4 max-lg:flex-row  ">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/eliaslopes1/"
                        className="group flex  w-36 flex-row  items-center justify-center  rounded-md border border-[#47B4FC] px-4  py-2 text-2xl font-semibold transition-all delay-100 
                      ease-in hover:bg-[#3586BD] max-lg:w-20   max-lg:text-sm
                      "
                      >
                        <span className="group-hover:text-[#0072bb]">
                          Linked
                        </span>
                        in
                      </a>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/elias_lopessp/"
                        className="flex w-36 flex-row items-center justify-center  rounded-md border border-[#47B4FC] px-4 py-2 text-2xl font-semibold transition-all delay-100 
                      ease-in hover:bg-[#3586BD] max-lg:w-20   max-lg:text-sm
                      "
                      >
                        <span> Instagram </span>
                      </a>
                      <a
                        href="https://wa.link/9n4ge3"
                        target="_blank"
                        className="group flex w-36 flex-row  items-center justify-center rounded-md border border-[#47B4FC] px-4 py-2 text-2xl font-semibold transition-all delay-100 
                      ease-in hover:bg-[#3586BD] max-lg:w-20   max-lg:text-sm
                      "
                      >
                        <span className=" group-hover:text-green-500 ">
                          Whats
                        </span>{" "}
                        app
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="h-[500px] w-[500px] max-lg:hidden"
              >
                <Lottie animationData={about} loop={true} />
              </div>
            </div>
          </div>
        </section>

        <section
          ref={props.referenceConhecimentos}
          className=" flex w-[1440px] flex-col  items-center justify-center gap-12 text-5xl  
      font-bold max-lg:w-full sm:h-[320px]    "
        >
          <div>
            <h1 className="mt-20 text-5xl font-bold max-lg:mt-10 max-lg:text-3xl max-lg:font-black">
              {" "}
              Conhecimentos
            </h1>
          </div>
          <div className="  flex items-center justify-center max-lg:h-full  max-lg:w-full ">
            <ul className="  flex  w-full  flex-row items-center  justify-center   gap-20   max-lg:grid   max-lg:grid-cols-3  max-lg:gap-3">
              {photosElements.map((nameElement, index) => {
                return (
                  <li
                    className="flex  flex-col items-center justify-center text-center text-sm uppercase max-lg:w-full  sm:text-[10px]"
                    key={index}
                  >
                    <div className="w-fit">
                      <Image
                        className="w-[6.25rem]  max-lg:w-7
                "
                        src={`/icons/${nameElement}.svg`}
                        alt={`${nameElement.replace(/icon$/, "")}`}
                        width={100}
                        height={100}
                      />
                    </div>
                    <p> {`${nameElement.replace(/icon$/, "")}`} </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <div ref={props.referenceProjetos}>
          <Projects />
        </div>
      </main>
    </div>
  );
}
