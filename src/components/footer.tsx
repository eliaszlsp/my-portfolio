import Image from "next/image";

export function Footer() {
  return (
    <div>
      <footer className="flex h-[100px] w-full items-center justify-center border-t border-[#183E57] bg-[#1F4F6F]  text-center text-white">
        <div className=" flex flex-row  gap-2 ">
          <a
            href="https://api.whatsapp.com/send?phone=5511978003500"
            target="_blank"
            className="saturate-0 hover:saturate-100"
          >
            <Image
              src="/icons/whatsappicon.svg"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </a>
          <a
            href="https://www.instagram.com/elias_lopessp/"
            target="_blank"
            className="saturate-0 hover:saturate-100"
          >
            <Image
              src="/icons/instagramicon.svg"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/eliaslopes1/"
            target="_blank"
            className="saturate-0 hover:saturate-100"
          >
            <Image
              src="/icons/linkedinicon.svg"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </a>
          <a
            href="https://github.com/eliaszlsp"
            target="_blank"
            className="saturate-0 hover:saturate-100"
          >
            <Image
              src="/icons/githubicon.svg"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
