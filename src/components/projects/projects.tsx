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
      <section className=" mb-5 flex w-screen items-center  justify-center ">
        <div className="flex  w-full flex-col items-center max-lg:w-screen    max-lg:py-20 2xl:w-[1440px] ">
          <div className=" mb-12 px-4 text-5xl font-bold">
            <h1>Projetos</h1>
          </div>
          <div className=" flex w-full flex-row justify-evenly max-lg:w-full  max-lg:flex-col max-lg:items-center max-lg:justify-evenly max-lg:gap-8 ">
            {projetos.map((item) => {
              return <CardDefault key={item.id} project={item} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
