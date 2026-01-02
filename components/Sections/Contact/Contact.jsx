import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import ContactForm from './ContactForm';
import { Icon } from '@iconify/react';


export default function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">

      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-0.5 bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />
        <div className="lg:w-3/4 ">

          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <Icon icon="fa-brands:email" width="40" height="40" color="#ec4899"
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <Icon icon="fa-brands:whatsapp" width="40" height="40" color="#ec4899"
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              />
              <span>
                {personalData.phone}
              </span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <Icon icon="fa-brands:location" width="40" height="40" color="#ec4899"
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              />
              <span>
                {personalData.address}
              </span>
            </p>
          </div>

          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" href={personalData.github}>
              <Icon icon="fa-brands:github" width="40" height="40" color="#ec4899"
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              />
            </Link>

            <Link target="_blank" href={personalData.linkedIn}>
              <Icon icon="fa-brands:linkedin" width="40" height="40" color="#ec4899" 
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              />
            </Link>

            <Link target="_blank" href={personalData.twitter}>
              <Icon icon="fa-brands:twitter" width="40" height="40" color="#ec4899" 
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              />
            </Link>

            <Link target="_blank" href={personalData.facebook}>
              <Icon icon="fa-brands:facebook" width="40" height="40" color="#ec4899"
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};