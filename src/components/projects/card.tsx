import ReactPlayer from "react-player";

export function CardDefault({ project }: any) {
  return (
    <div className="relative flex w-96 flex-col  justify-center rounded-xl  bg-white bg-clip-border text-gray-700 shadow-md max-md:w-80 max-md:max-w-full max-md:items-center ">
      <div
        className={`${project.color}  shadow-blue-gray-500/40 relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg`}
      >
        <ReactPlayer
          url={`${project.video}`}
          height={"200px"}
          width={"100%"}
          loop={true}
          controls={true}
        />
      </div>
      <div className="flex flex-grow justify-center p-6">
        <h5 className="text-blue-gray-900 mb-2 block text-center font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
          {project.title}
          {project.ver}
        </h5>
      </div>
      <div className=" p-6 pt-0">
        <p className="mb-2 block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {project.desc}
        </p>

        <div className=" flex  justify-around">
          <a
            className={`w-24 select-none rounded-lg ${project.color} px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-teal-500 transition-all hover:shadow-lg hover:shadow-teal-500  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            href={project.github}
            target="_blank"
            data-ripple-light="true"
          >
            GitHub
          </a>
          <a
            href={project.link}
            className={` w-24 select-none  rounded-lg ${project.color} px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-teal-500 transition-all hover:shadow-lg hover:shadow-teal-500  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            target="_blank"
            data-ripple-light="true"
          >
            Site
          </a>
        </div>
      </div>
    </div>
  );
}
