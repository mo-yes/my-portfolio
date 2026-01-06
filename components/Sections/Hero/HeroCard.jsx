"use client";
import { personalData } from "@/utils/data/personal-data";
import { motion } from "framer-motion";

export default function HeroCard() {
  return (
    <div className="overflow-hidden border-t-2 border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
      <code className="font-mono text-xs md:text-sm lg:text-base">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <span className="mr-2 text-pink-500">const</span>
          <span className="mr-2 text-white">coder</span>
          <span className="mr-2 text-pink-500">=</span>
          <span className="text-gray-400">{'{'}</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
          <span className="text-gray-400">{`'`}</span>
          <span className="text-amber-300">{personalData.name}</span>
          <span className="text-gray-400">{`',`}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <span className="ml-4 lg:ml-8 mr-2 text-white">skills:</span>
          <span className="text-gray-400">{`['`}</span>
          <span className="text-amber-300 capitalize">react</span>
          <span className="text-gray-400 capitalize">{"', '"}</span>
          <span className="text-amber-300 capitalize">next</span>
          <span className="text-gray-400 capitalize">{"', '"}</span>
          <span className="text-amber-300 capitalize">(javascript)ES6+</span>
          <span className="text-gray-400 capitalize">{"', '"}</span>
          <span className="text-amber-300 capitalize">typescript</span>
          <span className="text-gray-400 capitalize">{"', '"}</span>
          <span className="text-amber-300 capitalize">html 5</span>
          <span className="text-gray-400 capitalize">{"', '"}</span>
          <span className="text-amber-300 capitalize">css 3</span>
          <span className="text-gray-400 capitalize">{"', '"}</span>
          <span className="text-amber-300 capitalize">bootstrap</span>
          <span className="text-gray-400 capitalize">{"', '"}</span>
          <span className="text-amber-300 capitalize">jquery</span>
          <span className="text-gray-400 capitalize">{"', '"}</span>
          <span className="text-amber-300 capitalize">tailwind</span>
          <span className="text-gray-400 capitalize">{"', '"}</span>
          <span className="text-amber-300 capitalize">sass</span>
          <span className="text-gray-400 capitalize">{"'],"}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
          <span className="text-blue-400">true</span>
          <span className="text-gray-400">,</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
          <span className="text-blue-400">true</span>
          <span className="text-gray-400">,</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        >
          <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
          <span className="text-blue-400">true</span>
          <span className="text-gray-400">,</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
          <span className="text-orange-400">function</span>
          <span className="text-gray-400">{'() {'}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
        >
          <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
          <span className="text-gray-400">{`(`}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
        >
          <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
          <span className="mr-2 text-white">hardWorker</span>
          <span className="text-amber-300">&amp;&amp;</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
        >
          <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
          <span className="mr-2 text-white">problemSolver</span>
          <span className="text-amber-300">&amp;&amp;</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
        >
          <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
          <span className="mr-2 text-white">skills.length</span>
          <span className="mr-2 text-amber-300">&gt;=</span>
          <span className="text-orange-400">5</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
        >
          <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
        >
          <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
        >
          <span className="text-gray-400">{`};`}</span>
        </motion.div>
      </code>
    </div>
  );
}
