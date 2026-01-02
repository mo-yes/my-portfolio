"use client";
import { useState } from 'react';
import BlogCard from './blog-card';
import { Icon } from '@iconify/react';

export default function Blog({ blogs }) {
  const [showAll, setShowAll] = useState(false);

  // لو showAll = false → أول 6
  const visibleBlogs = showAll ? blogs : blogs.slice(0, 6);

  return (
    <div id='blog' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* الخلفية */}
      <div className="w-25 h-25 bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      {/* الخط الرفيع */}
      <div className="flex justify-center -translate-y-px">
        <div className="w-3/4">
          <div className="h-px bg-linear-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      {/* العنوان */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-0.5 bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Blogs
          </span>
          <span className="w-24 h-0.5 bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Grid البلوجز */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {visibleBlogs.map((blog, i) => (
          blog?.cover_image && <BlogCard blog={blog} key={i} />
        ))}
      </div>

      {/* زرار Show More */}
      {blogs.length > 6 && (
        <div className="flex justify-center mt-5 lg:mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-linear-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out hover:text-white md:font-semibold"
          >
            <span>{showAll ? "Show Less" : "View More"}</span>
            <Icon icon="fa-brands:arrow-right" width="40" height="40" color="#ec4899"  />
          </button>
        </div>
      )}
    </div>
  );
}
