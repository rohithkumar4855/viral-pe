import React from "react";
import logo from "../../../public/images/logo.png";
const CustomerSupportBanner = () => {
  return (
    <div className="w-full max-w-[1205px] mt-[32px] mx-auto min-h-[115px] rounded-[16px] flex items-center justify-between px-4 md:px-8 py-4 md:py-0 shadow-md relative overflow-hidden bg-[#7a1219]">

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-50 bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(0,0,0,0.1)_40px,rgba(0,0,0,0.1)_80px)] pointer-events-none"></div>

      {/* Left Content */}
      <div className="flex items-center flex-1 z-10">

        {/* Logo */}
        <div className="w-[70px] md:w-[85px] h-[70px] md:h-[85px] bg-white rounded-[12px] flex-shrink-0 flex items-center justify-center p-2 shadow-sm">

          <img
            src={logo}
            alt="ViralPe Logo"
            className="w-full h-full object-contain"
          />

        </div>

        {/* Text */}
        <p className="text-white text-[15px] md:text-[18px] lg:text-[20px] font-medium ml-4 md:ml-8 leading-snug max-w-[700px]">
          Round-the-clock customer support to help you live in location
        </p>

      </div>

      {/* Button */}
      <button className="z-10 flex-shrink-0 ml-4 px-5 md:px-8 py-2 md:py-2.5 rounded-[8px] border-[1.5px] border-white text-white font-medium text-[14px] md:text-[16px] hover:bg-white hover:text-[#7a1219] transition-colors whitespace-nowrap">
        Get Help
      </button>

    </div>
  );
};

export default CustomerSupportBanner;