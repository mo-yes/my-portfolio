import { personalData } from "@/utils/data/personal-data";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
{/* Background Image FOR HERO */}
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-24.5 -z-10"/>
{/* Hero Content */}
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 py-8 md:py-12 lg:py-14
">
    <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
{/* Hero Title */}
<h1
  className="
    text-sm
    sm:text-base
    md:text-xl
    lg:text-2xl
    xl:text-3xl

    leading-tight
    font-normal
    whitespace-normal
  "
>
  <span className="block">
    Hello, This is{" "} <br />
    <span className="text-pink-500 font-medium">
      {personalData.name}
    </span>
  </span>

  <span className="block">
    {` I'm a Professional `} <br />
    <span className="text-[#16f2b3] font-medium">
      {personalData.designation}
    </span>
  </span>
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
  {/* <Link href={personalData.github} target="_blank" className="w-full md:w-auto">
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
  </Link> */}

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
    <HeroCard/>
    </div>
    </div>
    </section>
  );
};