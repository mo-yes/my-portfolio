import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import ContactForm from './ContactForm';
import { Icon } from '@iconify/react';

export default function ContactSection() {
  return (
    <section id="contact" className="my-12 lg:my-16 relative mt-24 text-white">

      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
{/* Contact Title */}
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-0.5 bg-[#1a1443]"></span>
      </div>
{/* Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />
        <div className="lg:w-3/4 ">
{/* Contact Info Icons */}
<div className="flex flex-col gap-4 md:gap-6">
  {[
    { icon: "fa-solid:envelope", label: personalData.email },
    { icon: "fa-brands:whatsapp", label: personalData.phone },
    { icon: "fa-solid:map", label: personalData.address },
  ].map((item, idx) => (
    <p key={idx} className="flex items-center gap-3 text-sm sm:text-base md:text-lg">
      
      <Icon
        icon={item.icon}
        width={50} height={50}  
        className="
          bg-[#8b98a5]
          p-3             
          rounded-full
          hover:bg-[#16f2b3]
          hover:scale-110
          transition-transform duration-300
          cursor-pointer
          shrink-0 
        "
      />

      <span className="wrap-break-words">{item.label}</span>
    </p>
  ))}
</div>


{/* Social Media Icons */}
<div className="mt-6 lg:mt-12 flex flex-wrap items-center gap-4 sm:gap-5 lg:gap-8">
  {[
    { href: personalData.github, icon: "fa-brands:github" },
    { href: personalData.linkedIn, icon: "fa-brands:linkedin" },
    { href: personalData.twitter, icon: "fa-brands:twitter" },
    { href: personalData.facebook, icon: "fa-brands:facebook" },
  ].map((item, idx) => (
    <Link key={idx} target="_blank" href={item.href}>
      <Icon
        icon={item.icon}
        width={50} height={50} 
        className="
          bg-[#8b98a5]
          p-3
          rounded-full
          hover:bg-[#16f2b3]
          hover:scale-110
          transition-transform duration-300
          cursor-pointer
          shrink-0
        "
      />
    </Link>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};