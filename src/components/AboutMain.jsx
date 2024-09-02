import Image from "next/image";
import { useRef, useState } from "react";
import Timeline from "./Timeline";

export default function AboutMe() {
  const [isLightOn, setIsLightOn] = useState(true);
  const timelineRef = useRef();

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  }

  const scrollTo = () => {
    timelineRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    });
  };

  return (
    <>
      <div className="min-h-screen pt-40 pb-20 xl:py-40 mx-4 md:container md:mx-auto flex flex-col items-center justify-evenly max-w-full text-white overflow-x-hidden">
        <div className="xl:min-h-screen mt-20 relative flex flex-col xl:flex-row w-full max-w-7xl justify-between items-center xl:items-start gap-20">
          <div className="max-xl:absolute max-xl:-top-40 flex flex-col items-center justify-between h-[520px]">
            {isLightOn ? (
              <div className="relative">
                <Image
                  className="cursor-pointer"
                  onClick={toggleLight}
                  src="/lamp-on.svg"
                  alt="sticker"
                  width={120}
                  height={120}
                />
                <div className="absolute -left-[11.15rem] top-32 w-0 h-0 border-l-[240px] border-l-transparent border-r-[240px] border-r-transparent border-t-[200px] xl:border-t-[400px] border-t-yellow-600/30 z-10 rotate-180"></div>
              </div>
            ) : (
              <Image
                className="cursor-pointer"
                onClick={toggleLight}
                src="/lamp-off.svg"
                alt="sticker"
                width={120}
                height={120}
              />
            )}
            <Image
              className="z-20 max-xl:hidden"
              src="/IMG_1543.png"
              alt="sticker"
              width={300}
              height={300}
            />
          </div>

          <div className="flex flex-col space-y-8 max-w-xl z-20">
            <div className="bg-[#EAE4DD] rounded-md text-black text-[16px] font-medium p-4">
              <span className="font-bold">Web wizard</span> with a caffeine addiction and a knack for debugging.
            </div>
            <h2 className="text-white text-4xl tracking-wider font-medium max-xl:text-center">
              I'm Yiğit Bozyaka
            </h2>
            <div className="text-[18px] text-[#e5e0db]">
              I am a dedicated software development student at Istanbul Aydın University, currently in my third year of studies. With a strong passion for technology, I have honed my skills as a full-stack web developer, specializing in React.js, Node.js, and Next.js. I also have experience in developing mobile applications using React Native. My journey in software development is driven by my love for solving complex problems, designing user-friendly applications, and continuously learning about new technologies. I enjoy working on both front-end and back-end projects, and I am always eager to take on new challenges that allow me to grow as a developer.
            </div>
          </div>

          <div className="hidden xl:block absolute bottom-64 w-full" onClick={scrollTo}>
            <div className="group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
              <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
                <div className="bg-[#EAE4DD] flex items-center gap-1 p-2 rounded-md">
                  <span>about me</span>
                </div>
                <div className="shadow-md bg-[#EAE4DD] absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1" />
                <div className="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-500 w-full h-full absolute top-0 left-0">
                  <div className="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1" />
                </div>
              </div>
              <div className="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-[#EAE4DD] to-black p-3 rounded-full cursor-pointer duration-300">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="32px"
                  width="32px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white rotate-90"
                >
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
                  />
                </svg>
                <span className="text-[0px] text-white group-hover:text-sm duration-300">
                  Learn more
                </span>
              </div>
            </div>
          </div>
        </div>

        <Timeline ref={timelineRef} />
      </div>
    </>
  )
}