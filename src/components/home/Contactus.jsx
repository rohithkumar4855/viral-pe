import React from "react";
import Mobilechat from "../../../public/images/mobile-chat.png";
import Emailicon from "../../../public/images/email.png";
import locationicon from "../../../public/images/property-location.png";

const ContactUs = () => {
  return (
    <div className="w-full max-w-[1206px] mt-[32px] mx-auto min-h-[503px] bg-white rounded-[20px] shadow-sm border border-gray-100 flex flex-col md:flex-row overflow-hidden">

      {/* Left Side */}
      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">

        <h2 className="text-[40px] md:text-[52px] font-semibold text-[#222222] tracking-tight mb-4 leading-none">
          Contact Us
        </h2>

        <p className="text-[18px] text-[#222222CC] leading-relaxed mb-10 max-w-[420px]">
          We are committed to processing the information in order to contact you and talk about your project.
        </p>

        <div className=" flex flex-col gap-6">

          <div className="flex items-center gap-10">
            <img
              src={Emailicon}
              alt="Email"
              className="w-[20px] h-[20px] object-contain"
            />
            <span className="text-[14px] font-medium text-[#222222]">
              example@teamwebflow.com
            </span>
          </div>

          <div className="flex items-center gap-10">
            <img
              src={locationicon}
              alt="Location"
              className="w-[20px] h-[20px] object-contain"
            />
            <span className="text-[14px] font-medium text-[#222222]">
              4074 Ebert Summit Suite 375
            </span>
          </div>

          <div className="flex items-center gap-10">
            <img
              src={Mobilechat}
              alt="Phone"
              className="w-[20px] h-[20px] object-contain"
            />
            <span className="text-[14px] font-medium text-[#222222]">
              +44 123 654 7890
            </span>
          </div>

        </div>

      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">

        <form className="flex flex-col gap-5 w-full max-w-[470px]" >

          {/* Name */}
          <div className=" relative">
            <input
              type="text"
              id="name"
              placeholder=" "
              className="w-full border border-gray-200 rounded-[8px] px-4 py-3.5 text-[14px] outline-none focus:border-[#901C27] transition-colors peer"
            />

            <label
              htmlFor="name"
              className="absolute left-4 top-3.5 text-[14px]  text-[#1C1B1B] transition-all peer-focus:-top-2.5 peer-focus:text-[12px] peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#901C27] peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-[12px] peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1 pointer-events-none"
            >
              Name<span className="text-red-500 text-[16px]">*</span>
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="w-full border border-gray-200 rounded-[8px] px-4 py-3.5 text-[14px] outline-none focus:border-[#901C27] transition-colors peer"
            />

            <label
              htmlFor="email"
              className="absolute left-4 top-3.5 text-[14px] text-[#1C1B1B] transition-all peer-focus:-top-2.5 peer-focus:text-[12px] peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#901C27] peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-[12px] peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1 pointer-events-none"
            >
              Email<span className="text-red-500">*</span>
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              id="message"
              placeholder=" "
              rows={4}
              className="w-full border border-gray-200 rounded-[8px] px-4 py-3.5 text-[14px] outline-none focus:border-[#901C27] transition-colors resize-none peer"
            />

            <label
              htmlFor="message"
              className="absolute left-4 top-3.5 text-[14px] text-[#1C1B1B] transition-all peer-focus:-top-2.5 peer-focus:text-[12px] peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#901C27] peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-[12px] peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1 pointer-events-none"
            >
              Message
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#901C27] hover:bg-[#7a1620] text-white font-semibold text-[15px] py-4 rounded-[8px] transition-colors mt-2 shadow-sm"
          >
            Submit
          </button>

        </form>

      </div>

    </div>
  );
};

export default ContactUs;