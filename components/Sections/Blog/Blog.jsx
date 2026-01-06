"use client";
import { useState } from 'react';
import BlogCard from './blog-card';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

export default function Blog({ blogs }) {
  const [showAll, setShowAll] = useState(false);

  // Function to toggle showing all blogs
  const visibleBlogs = showAll ? blogs : blogs.slice(0, 6);

  return (
    <motion.div
      id='blog'
      className="relative z-10 border-t my-12 lg:my-24 border-[#25213b] pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Small Line */}
      <div className="w-25 h-25 bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20 z-0"></div>
      
      <div className="flex justify-center -translate-y-px z-10 relative">
        <div className="w-3/4">
          <div className="h-px bg-linear-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section Title */}
      <div className="flex justify-center my-5 lg:py-8 z-10 relative">
        <div className="flex items-center">
          <span className="w-24 h-0.5 bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Blogs
          </span>
          <span className="w-24 h-0.5 bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Grid of Blogs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {visibleBlogs.map((blog, i) => (
          blog?.cover_image && (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move from bottom
              animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
              transition={{
                duration: 0.8,
                delay: 0.3 * i, // Staggered delay for each card
              }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          )
        ))}
      </div>

      {/* Button Show More & Show Less */}
      {blogs.length > 6 && (
        <div className="flex justify-center mt-5 lg:mt-12 z-10 relative">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-linear-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out hover:text-white md:font-semibold"
          >
            {showAll ? (
              <>
                Show Less
                <Icon icon="mdi:arrow-up" width="24" height="24" />
              </>
            ) : (
              <>
                Show More
                <Icon icon="mdi:arrow-down" width="24" height="24" />
              </>
            )}
          </button>
        </div>
      )}
    </motion.div>
  );
}
