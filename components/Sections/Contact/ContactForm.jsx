"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactFormSchema } from "@/Services/Schema/validation";
import { Icon } from "@iconify/react";

export default function ContactForm() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleSendMail(e){
    e.preventDefault();
    const validation = contactFormSchema.safeParse(userInput);
    if (!validation.success) {
      validation.error.errors.forEach(err => toast.error(err.message));
      return;
    }

    setIsLoading(true);

    emailjs.send(
      "service_r2z190i",
      "template_jknza1n",
      userInput,
      "jq_kWm_-5cEk-dta_"
    ).then(() => {
      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", phone: "", message: "" });
    }).catch(() => toast.error("Failed to send message."))
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <ToastContainer />
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact with me</p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          If you have any questions or concerns, please don't hesitate to contact me.
        </p>

        <form onSubmit={handleSendMail} className="mt-6 flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name:</label>
            <input
              type="text"
              maxLength="100"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2 outline-none"
              value={userInput.name}
              onChange={e => setUserInput({...userInput, name: e.target.value})}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email:</label>
            <input
              type="email"
              maxLength="100"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2 outline-none"
              value={userInput.email}
              onChange={e => setUserInput({...userInput, email: e.target.value})}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Phone:</label>
            <input
              type="text"
              maxLength="20"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2 outline-none"
              value={userInput.phone}
              onChange={e => setUserInput({...userInput, phone: e.target.value})}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message:</label>
            <textarea
              maxLength="500"
              rows="4"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2 outline-none"
              value={userInput.message}
              onChange={e => setUserInput({...userInput, message: e.target.value})}
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col items-center gap-3">
        <button
  type="submit"
  disabled={isLoading}
  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white font-medium transition-all duration-300 ease-out hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
>
  {isLoading ? (
    <>
      <Icon icon="fa-brands:loader" width="40" height="40" color="#ec4899"  className="w-5 h-5 animate-spin" />
      <span>Sending...</span>
    </>
  ) : (
    <>
      <Icon icon="fa-brands:mail-forward" width="40" height="40" color="#ec4899"  className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
      <span>Send Message</span>
    </>
  )}
        </button>
          </div>
        </form>
      </div>
    </div>
  );
}
