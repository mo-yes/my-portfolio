import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-280 xl:max-w-304 2xl:max-w-368 py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-px w-1/2  bg-linear-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
{/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/mohamed-yasser-dev" className="text-[#16f2b3]">Mohamed Yasser</Link>
          </p>
{/* Github */}
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/mo-yes"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
            <Icon icon="fa-brands:github" width="25" height="25" color=""  />
              <span>Github</span>
            </Link>
{/* Linkedin */}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/mohamed-yasser-dev"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
            <Icon icon="fa-brands:linkedin" width="25" height="25" color="" />
              <span>Linkedin</span>
            </Link>
          </div>
        </div>
      </div>
    </footer >
  );
};