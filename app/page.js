import About from "@/components/Sections/About/About";
import Blog from "@/components/Sections/Blog/Blog";
import Contact from "@/components/Sections/Contact/Contact";
import Education from "@/components/Sections/Education/Education";
import Experience from "@/components/Sections/Experience/Experience";
import Hero from "@/components/Sections/Hero/Hero";
import Projects from "@/components/Sections/Projects/Projects";
import Skills from "@/components/Sections/Skills/Skills";
import { blogsData } from "@/utils/data/blogs-data";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education/>
      <Blog blogs={blogsData}/>
      <Contact/>
      <Projects />
    </>
  );
}
