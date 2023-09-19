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
    <div>
      <main
        className="  flex   h-max w-screen flex-col items-center 
     justify-around gap-y-5 text-white max-sm:w-screen max-sm:overflow-hidden  sm:mt-14 "
      >
        <section className=" flex h-full w-[1440px] flex-col items-center justify-between max-sm:w-screen  ">
          <div className="mt-12 flex h-full w-[1440px] flex-row items-center  justify-between  max-sm:w-screen   max-sm:justify-center">
            <div className=" flex flex-col gap-12 ">
              <div
                data-aos="zoom-in"
                data-aos-delay="50"
                className=" flex flex-col items-center justify-center max-sm:w-screen   "
              >
                <h1 className="text-center text-2xl">
                  Olá! Meu nome é <br />{" "}
                  <span className="ml-44  text-3xl font-bold text-[#1d247d]  ">
                    Elias Lopes{" "}
                  </span>
                </h1>
                <br />
                <p className="  text-white sm:w-[700px]   ">
                  {" "}
                  Eu sou um
                  <span className="  text-lg font-bold text-[#1d247d]">
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
              className=" max-sm:hidden"
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
          className="  w-[1440px  flex max-sm:w-screen"
        >
          <div className="flex h-[800px] flex-col justify-evenly  gap-5  sm:w-[1440px]">
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className=" self-center text-5xl  font-bold max-sm:text-3xl"
            >
              <h1> Sobre mim </h1>
            </div>

            <div className="center flex flex-row justify-between max-sm:justify-center  ">
              <div data-aos="zoom-in" data-aos-delay="250">
                <div className="  ">
                  <h1 className="flex self-start text-center text-6xl   font-thin"></h1>
                  <br />
                  <div className=" flex w-[700px] flex-col gap-3  max-sm:w-screen">
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
                      incríveis e funcionais. Possuo proficiência em{" "}
                      <span className=" text-[#1d247d]">HTML5 </span>,{" "}
                      <span className=" text-[#1d247d]">CSS3 </span> e{" "}
                      <span className=" text-[#1d247d]">Javascript </span>.
                    </p>
                    <p className="mb-2">
                      Quer conhecer mais da minha história e do meu trabalho?
                      Entre em contato comigo através deste{" "}
                    </p>
                    <div className=" flex flex-row gap-4 max-sm:flex-col">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/eliaslopes1/"
                        className="group flex w-fit flex-row  items-center rounded-md border border-[#47B4FC] px-4 py-2 text-2xl font-semibold 
                      transition-all delay-100 ease-in  hover:bg-[#3586BD]
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
                        className="flex w-fit flex-row items-center  rounded-md  border border-[#47B4FC] px-4 py-2 text-2xl font-semibold 
                      transition-all delay-100 ease-in  hover:bg-[#3586BD]
                      "
                      >
                        <span> Instagram </span>
                      </a>
                      <a
                        href="https://wa.link/9n4ge3"
                        target="_blank"
                        className="group flex w-fit flex-row  items-center rounded-md border border-[#47B4FC] px-4 py-2 text-2xl font-semibold 
                      transition-all delay-100 ease-in  hover:bg-[#3586BD]
                      "
                      >
                        <span className="w-full group-hover:text-green-500 ">
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
                className="h-[500px] w-[500px] max-sm:hidden"
              >
                <Lottie animationData={about} loop={true} />
              </div>
            </div>
          </div>
        </section>

        <section
          ref={props.referenceConhecimentos}
          className=" flex w-[1440px] flex-col  items-center justify-center gap-12 text-5xl  
      font-bold max-sm:w-screen sm:h-[320px]    "
        >
          <div>
            <h1 className="mt-20 text-5xl font-bold max-sm:text-3xl">
              {" "}
              Conhecimentos
            </h1>
          </div>
          <div className="  flex items-center justify-center max-sm:h-full  max-sm:w-full ">
            <ul className=" max-sm:flex max-sm:gap-3  sm:flex  sm:w-full  sm:flex-row   sm:items-center   sm:justify-center  sm:gap-20">
              {photosElements.map((nameElement, index) => (
                <li
                  className="flex flex-col items-center justify-center text-center text-[5px] uppercase max-sm:w-full  sm:text-sm"
                  key={index}
                >
                  <div className="w-fit">
                    <Image
                      className="w-[6.25rem]  max-sm:w-7
                "
                      src={`/icons/${nameElement}.svg`}
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
        <div ref={props.referenceProjetos}>
          <Projects />
        </div>
      </main>
    </div>
  );
}
