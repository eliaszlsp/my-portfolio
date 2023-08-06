import ReactPlayer from "react-player";

export default function Projects() {
  return (
    <div>
      <section className=" flex h-[900px] w-[1440px] flex-col  items-center justify-between  py-40">
        <div className=" text-5xl font-bold">
          <h1>Projetos</h1>
        </div>
        <div className="flex w-[1440px] flex-row items-center   justify-between">
          <div className=" flex h-[400px] w-fit flex-col items-center bg-[#9F66A9]  ">
            <div className=" w-full bg-[#65f03e]">
              <ReactPlayer
                url="/rocketseatvideo.mp4"
                height={"200px"}
                width={"100%"}
                loop={true}
                playing={true}
                controls={true}
              />
            </div>
            <div className="">
              <h1>Clone site da rocketseat versão</h1>
            </div>
          </div>
          <div className=" h-[400px] w-fit  bg-[#9F66A9]  ">
            <div className="h-full w-full bg-[#65f03e]">
              <ReactPlayer
                url="/rocketseatvideo.mp4"
                height={"200px"}
                width={"100%"}
                loop={true}
                playing={true}
                controls={true}
              />
            </div>
          </div>
          <div className=" h-[400px] w-fit  bg-[#9F66A9]  ">
            <div className="h-full w-full bg-[#65f03e]">
              <ReactPlayer
                url="/rocketseatvideo.mp4"
                height={"200px"}
                width={"100%"}
                loop={true}
                playing={true}
                controls={true}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
