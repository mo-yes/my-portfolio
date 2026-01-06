"use client";
import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion"; // استيراد Framer Motion للأنيميشن

export default function Projects() {
  return (
    <motion.section
      id='projects'
      className="relative z-10 my-12 lg:my-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Header Card */}
      <div className="sticky top-10 z-20">
        <div className="w-20 h-20 bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30 z-0"></div>
        <div className="flex items-center justify-start relative z-10">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md z-10">
            PROJECTS
          </span>
          <span className="w-full h-0.5 bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Cards */}
      <div className="pt-24 z-10">
        <div className="flex flex-col gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // بدأ الأنيميشن بإخفاء العناصر
              whileInView={{ opacity: 1, y: 0 }} // إظهار الأنيميشن عند التمرير
              transition={{
                duration: 0.8,
                delay: 0.3 * index, // تأخير تدريجي لكل بطاقة
              }}
            >
              <div
                id={`sticky-card-${index + 1}`}
                key={index}
                className="w-full mx-auto max-w-3xl sticky z-10"
              >
                <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-500 z-10">
                  <ProjectCard project={project} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
