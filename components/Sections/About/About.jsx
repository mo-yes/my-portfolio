"use client";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { motion } from "framer-motion"; 

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="relative min-h-screen flex items-center my-12 lg:my-16 pt-25"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }} 
    >
      {/* Title is not necessary, removing it from the design */}
      {/* <div className="absolute -top-25 left-1/2 -translate-x-1/2 md:hidden lg:hidden xl:hidden flex items-center justify-center">
        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          About Me
        </span>
      </div> */}

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Text Element */}
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
        >
          <p className="font-medium mb-5 text-[#16f2b3] text-xl">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg leading-relaxed">
            Hello! My name is{" "}
            <span className="font-semibold text-[#16f2b3]">{personalData.name}</span>,
            and I am a passionate and professional programmer.
            <br />
            <br />
            I thrive on learning new technologies and solving challenging problems.
            <br />
            <br />
            With a strong foundation in JavaScript, I enjoy building web applications
            across different stacks and exploring innovative solutions.
            <br />
            <br />
            I am a quick learner, highly adaptable, and always eager to grow my skills.
            <br />
            <br />
            I am open to opportunities where I can contribute, learn, and make a
            meaningful impact in the world of web development.
          </p>
        </motion.div>

        {/* Image Element */}
        <motion.div
          className="flex justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.4 }} 
        >
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Mohamed Yasser"
            className="rounded-lg object-cover transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
