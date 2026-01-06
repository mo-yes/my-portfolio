"use client";
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import AnimationLottie from "@/components/helper/animation-lottie";
import GlowCard from "@/components/helper/glow-card";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion"; 

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="relative min-h-screen z-10 border-t my-12 lg:my-24 border-[#25213b]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Background Image */}
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10" 
      />
{/* Section Title */}
      {/* <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-0.5 bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-0.5 bg-[#1a1443]"></span>
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
              <AnimationLottie animationPath={"/lottie/code.json"} />
            </motion.div>
          </div>

          <div>
            {/* Experiences Map */}
            <div className="flex flex-col gap-6">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{
                    duration: 1,
                    delay: 0.3 * index, 
                  }}
                >
                  <GlowCard identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Experience Image"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                          {/* Icon */}
                          <Icon icon="f7:person-crop-rectangle" width="56" height="56" />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base">{experience.company}</p>
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
}
