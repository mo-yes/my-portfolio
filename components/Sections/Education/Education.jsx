"use client";
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import AnimationLottie from "@/components/helper/animation-lottie";
import GlowCard from "@/components/helper/glow-card";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion"; // Importing framer motion for animations

export default function Education() {
  return (
    <motion.section
      id="education"
      className="relative z-10 border-t my-14 lg:my-24 border-[#25213b] pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Background Image */}
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      
      {/* Section Title */}
      {/* <div className="flex justify-center my-5 lg:py-8 z-10 relative">
        <div className="flex items-center">
          <span className="w-24 h-2px bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-2px bg-[#1a1443]"></span>
        </div>
      </div> */}

      {/* Card Section */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            {/* Lottie Animation */}
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1, delay: 0.5 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }} 
            >
              <AnimationLottie animationPath={"/lottie/study.json"} />
            </motion.div>
          </div>

          <div>
            {/* Experience Cards */}
            <div className="flex flex-col gap-6 z-10 relative">
              {educations.map((education, index) => (
                <motion.div
                  key={education.id}
                  initial={{ opacity: 0, y: 50 }} // start with opacity 0 and move from bottom
                  whileInView={{ opacity: 1, y: 0 }} // fade in and move to original position when in view
                  transition={{
                    duration: 1,
                    delay: 0.3 * index, // staggered delay based on index
                  }}
                >
                  <GlowCard identifier={`education-${education.id}`}>
                    <div className="p-3 relative text-white">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80 z-0"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                          <Icon icon="fa7-solid:mortar-board" width="56" height="56" />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base">{education.institution}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
