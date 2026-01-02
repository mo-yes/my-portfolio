import { personalData } from "@/utils/data/personal-data";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
{/* Background Image FOR HERO */}
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-24.5 -z-10"
      />
{/* Hero Content */}
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 py-8 md:py-12 lg:py-14
">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
{/* Hero Title */}
          <h1 className="text-3xl md:text-4xl lg:text-[2.8rem] xl:text-[3rem]
leading-10 md:leading-12 lg:leading-[3.2rem]
">
            Hello, <br />
            This is {' '}
            <span className=" text-pink-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>
            .
          </h1>
{/* Hero Socials Icons */}
          <div className="my-12 flex items-center gap-10 ">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <Icon icon="fa-brands:github" width="40" height="40" color="#ec4899" />
            </Link>

            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <Icon icon="fa-brands:linkedin" width="40" height="40" color="#ec4899" />

            </Link>

            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <Icon icon="fa-brands:facebook" width="40" height="40" color="#ec4899" />
            </Link>

            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <Icon icon="fa-brands:twitter" width="40" height="40" color="#ec4899" />
            </Link>
          </div>
{/* Hero Buttons */}
<div className="flex flex-col md:flex-row items-center gap-3 w-full">

  {/* Button One */}
  <Link href="#contact" className="w-full md:w-auto">
    <button type="button" className=" cursor-pointer hero-btn group flex items-center justify-center gap-2 px-6 py-3 rounded-full w-full md:w-auto text-white font-semibold uppercase transition-all duration-300 bg-gradient-to-r from-pink-500 to-red-500">
      <span>Contact me</span>
      <Icon
        icon="mdi:contacts"
        width="25"
        height="25"
        color="#fff"
        className="transition-transform duration-300  group-hover:translate-x-1 "
      />
    </button>
  </Link>

  {/* Button Two */}
  <Link href={personalData.resume} target="_blank" className="w-full md:w-auto">
    <button type="button" className="cursor-pointer hero-btn group flex items-center justify-center gap-2 px-6 py-3 rounded-full w-full md:w-auto text-white font-semibold uppercase transition-all duration-300 bg-linear-to-r from-violet-600 to-blue-500">
      <span>Get Resume</span>
      <Icon
        icon="mdi:download"
        width="25"
        height="25"
        color="#fff"
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  </Link>

  {/* Button Three */}
  <Link href={personalData.github} target="_blank" className="w-full md:w-auto">
    <button type="button" className="cursor-pointer hero-btn group flex items-center justify-center gap-2 px-6 py-3 rounded-full w-full md:w-auto text-white font-semibold uppercase transition-all duration-300 bg-gradient-to-r from-green-400 to-teal-500">
      <span>GitHub</span>
      <Icon
        icon="mdi:github"
        width="25"
        height="25"
        color="#fff"
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  </Link>

</div>



          </div>
          <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-linear-to-r to-[#0a0d37]">
{/* Hero Highlight Code  */}
          <div className="flex flex-row">
            <div className="h-px w-full bg-linear-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-px w-full bg-linear-to-r from-violet-600 to-transparent"></div>
          </div>
{/* Hero Terminal code */}
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
{/* Hero Function code */}
          <div className="overflow-hidden border-t-2 border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">{personalData.name}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">REACT</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NEXT.JS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">REDUX</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">JAVASCRIPT</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">TYPESCRIPT</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">JQUERY</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">HTML</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">CSS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">BOOTSTRAP</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">TAILWIND CSS</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>

        </div>
      </div>
    </section>
  );
};