"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/Services/Schema/validation";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Icon } from "@iconify/react";

export default function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, touchedFields },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    // mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data) {
    try {
      await emailjs.send(
        "service_r2z190i",
        "template_jknza1n",
        data,
        "jq_kWm_-5cEk-dta_"
      );
      toast.success("Message sent successfully!");
      reset();
    } catch {
      toast.error("Failed to send message.");
    }
  }

  const showError = (fieldName) =>
    touchedFields[fieldName] && errors[fieldName];

  return (
    <div>
      <ToastContainer />

      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>

      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          If you have any questions or concerns, please don&apos;t hesitate to
          contact me.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex flex-col gap-4"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label>Your Name:</label>
            <input
              {...register("name")}
              className={`bg-[#10172d] border rounded-md px-3 py-2 outline-none ${
                showError("name")
                  ? "border-red-500"
                  : "border-[#353a52] focus:border-[#16f2b3]"
              }`}
            />
            {showError("name") && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label>Your Email:</label>
            <input
              {...register("email")}
              type="email"
              className={`bg-[#10172d] border rounded-md px-3 py-2 outline-none ${
                showError("email")
                  ? "border-red-500"
                  : "border-[#353a52] focus:border-[#16f2b3]"
              }`}
            />
            {showError("email") && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label>Your Phone:</label>
            <input
              {...register("phone")}
              className={`bg-[#10172d] border rounded-md px-3 py-2 outline-none ${
                showError("phone")
                  ? "border-red-500"
                  : "border-[#353a52] focus:border-[#16f2b3]"
              }`}
            />
            {showError("phone") && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label>Your Message:</label>
            <textarea
              {...register("message")}
              rows="4"
              className={`bg-[#10172d] border rounded-md px-3 py-2 outline-none ${
                showError("message")
                  ? "border-red-500"
                  : "border-[#353a52] focus:border-[#16f2b3]"
              }`}
            />
            {showError("message") && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit */}
          <div className="flex flex-col items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-pink-500 to-violet-600 text-white font-medium transition-all duration-300 ease-out hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span>Sending...</span>
                  <Icon
                    icon="svg-spinners:6-dots-rotate"
                    width="25"
                    height="25"
                  />
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Icon icon="ic:sharp-send" width="25" height="25" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
