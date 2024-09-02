import { MdEmail } from "react-icons/md";
import { SocialIcon } from "react-social-icons";
import Link from 'next/link'
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["MERN Dev.", "Next.js Dev.", "Discord Bot Dev."],
    loop: true,
    delaySpeed: 3600,
  });

  return (
    <div className="flex flex-col text-white">

      <div className="relative top-24 z-10 space-y-2 text-center">
        <h1 className="text-2xl font-bold capitalize">yiğit bozyaka</h1>
        <h2 className="text-xl font-semibold text-gray-400">
          {text}
          <Cursor cursorColor="#fff" />
        </h2>
      </div>

      <div className="flex justify-center relative z-10 top-32">
        <Link
          href="/hire-me"
          class="group/button relative inline-flex items-center gap-2 justify-center overflow-hidden rounded-md bg-blue-500/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20"
        >
          <MdEmail className="text-lg" />
          <span class="text-lg">Contact</span>
          <div
            class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
          >
            <div class="relative h-full w-10 bg-white/30"></div>
          </div>
        </Link>

      </div>
      <div className="flex flex-row space-x-4 justify-center relative z-10 top-44">
        <div className="group relative">
          <SocialIcon className="w-8 hover:scale-125 duration-200" url="https://github.com/yigitbozyaka" bgColor="white" />
          <span className="absolute -top-14 left-[50%] -translate-x-[50%] 
              z-20 origin-left scale-0 px-3 rounded-lg border 
            border-gray-300 bg-white text-black py-2 text-sm font-bold
              shadow-md transition-all duration-300 ease-in-out 
              group-hover:scale-100">
            GitHub
          </span>
        </div>
        <div className="group relative">
          <SocialIcon className="w-8 hover:scale-125 duration-200" url="https://instagram.com/yigitbozyaka" bgColor="white" />
          <span className="absolute -top-14 left-[50%] -translate-x-[50%] 
              z-20 origin-left scale-0 px-3 rounded-lg border 
            border-gray-300 bg-white text-black py-2 text-sm font-bold
              shadow-md transition-all duration-300 ease-in-out 
              group-hover:scale-100">
            Instagram
          </span>
        </div>
        <div className="group relative">
          <SocialIcon className="w-8 hover:scale-125 duration-200" url="https://twitter.com/yigitbozyaka" bgColor="white" />
          <span className="absolute -top-14 left-[50%] -translate-x-[50%] 
              z-20 origin-left scale-0 px-3 rounded-lg border 
            border-gray-300 bg-white text-black py-2 text-sm font-bold
              shadow-md transition-all duration-300 ease-in-out 
              group-hover:scale-100">
            X
          </span>
        </div>
        <div className="group relative">
          <SocialIcon
            className="w-8 hover:scale-125 duration-200"
            url="https://linkedin.com/in/yi%C4%9Fit-bozyaka-0768bb193/"
            bgColor="white"
          />
          <span className="absolute -top-14 left-[50%] -translate-x-[50%] 
              z-20 origin-left scale-0 px-3 rounded-lg border 
            border-gray-300 bg-white text-black py-2 text-sm font-bold
              shadow-md transition-all duration-300 ease-in-out 
              group-hover:scale-100">
            Linkedin
          </span>
        </div>

      </div>
      <div className="relative z-10 top-80 container mx-auto w-7/12 sm:w-9/12 md:w-7/12">
        <h2 className="text-left text-2xl text-gray-500 uppercase">Pages</h2>
        <div className="grid gap-6 md:grid-cols-2 my-4">
          <Link href="/about-me">
            <h3 className="text-xl capitalize">about me</h3>
            <p className="text-lg text-gray-500">Talking about myself check here if you want to know me.</p>
          </Link>
          <Link href="/projects">
            <h3 className="text-xl capitalize">projects</h3>
            <p className="text-lg text-gray-500">My fancy projects are here!</p>
          </Link>
          <Link href="/skills">
            <h3 className="text-xl capitalize">skills</h3>
            <p className="text-lg text-gray-500">Which languages and frameworks do I know?</p>
          </Link>
          <Link href="/hire-me">
            <h3 className="text-xl capitalize">hire me</h3>
            <p className="text-lg text-gray-500">Did you check all pages and satisfied then click here!</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
