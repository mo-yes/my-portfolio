"use client";

import Image from "next/image";
import Link from "next/link";
import GlowCard from "@/components/helper/glow-card";

export default function BlogCard({ blog }) {
  return (
    <GlowCard identifier={`blog-${blog.id}`}>
      <Link
        href={blog.source_url}
        target="_blank"
        className="
          
          h-90 sm:h-95 md:h-100
          rounded-xl overflow-hidden
          bg-[#0d1224]
          border border-[#25213b]
          flex flex-col
        "
      >
        {/* الصورة (ارتفاع ثابت) */}
        <div className="relative w-full h-40 sm:h-44 md:h-48">
          <Image
            src={blog.cover_image}
            alt={blog.title}
            fill
            className="object-center"
          />
        </div>

        {/* المحتوى (يملأ الباقي) */}
        <div className="flex flex-col flex-1 p-4 text-white">
          <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2">
            {blog.title}
          </h3>

          <p className="text-sm text-gray-400 line-clamp-3">
            {blog.description}
          </p>

          {/* Spacer */}
          <div className="grow"></div>

          {/* زر ثابت تحت */}
          <span className="text-[#16f2b3] text-sm font-medium">
            Read more →
          </span>
        </div>
      </Link>
    </GlowCard>
  );
}
