import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 border-t my-15 lg:my-24 border-[#25213b] pt-25">
      {/* Background Blur Effect */}
      <div className="w-25 h-25 bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20 z-0"></div>

      {/* Small Line */}
      <div className="flex justify-center -translate-y-1px z-10 relative">
        <div className="w-3/4">
          <div className="h-px bg-linear-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      {/* Skills Cards */}
      <div className="w-full my-12 z-10 relative">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-400 transition-all duration-500 z-10 relative">
                <div className="flex -translate-y-1px justify-center">
                  <div className="w-3/4">
                    <div className="h-px w-full bg-linear-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6 z-10 relative">
                  <div className="h-8 sm:h-10">
                    {/* Skill Image */}
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
