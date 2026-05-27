import React from "react";
import { BadgeCheck, Lock, Zap } from "lucide-react";
import Homescreen from "../../../public/images/homescreen.png";
// import Graph from "../../../public/images/graphic.png";
import Homeframe from "../../../public/images/homeframe.svg";

const WhyChooseViralPe = () => {
  return (
    <div className="w-full max-w-[1206px] mx-auto mt-[32px] min-h-[747px] bg-white rounded-[20px] shadow-sm flex flex-col lg:flex-row relative ">

      {/* Left Column */}
      <div className="max-w-[558px]  p-5 flex flex-col justify-center z-10 ml-[54px]">

        <h2 className="text-[40px] md:text-[52px] font-semibold text-[#222222]  tracking-tight mb-6">
          Why Choose <span className="text-[#901C27]">ViralPe</span>?
        </h2>

        <p className="text-[24px] text-[#222222CC] mb-8  tracking-tight">
          ViralPe is a smart fintech platform that transforms everyday payments into rewarding experiences. Users can pay bills, recharge services, and make transactions seamlessly while earning cashback or reward points on each payment.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-3 mb-10">

          <div className="flex items-center  px-4 py-2 bg-[#FCF0F1] text-[#901C27] rounded-full text-[13px] font-bold border border-red-50">
            <BadgeCheck size={16} strokeWidth={2.5} />
            Easy Redemption
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-[#FCF0F1] text-[#901C27] rounded-full text-[13px] font-bold border border-red-50">
            <Lock size={16} strokeWidth={2.5} />
            Secure Payments
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-[#FCF0F1] text-[#901C27] rounded-full text-[13px] font-bold border border-red-50">
            <Zap size={16} strokeWidth={2.5} />
            Instant Cashback
          </div>

        </div>

        {/* Button */}
        <button className="bg-[#901C27] max-w-[164px] text-white font-bold text-[20px] py-2 rounded-[8px]  shadow-sm">
          Start Recharge
        </button>

      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[500px] lg:min-h-full bg-white/50">

        {/* Background Graphic */}
        {/* <div
          className="bg-gradient-to-b from-[#901C27] to-[#FFD5D9] absolute opacity-60  bottom-65 left-0 w-full h-[40%] bg-contain bg-bottom bg-no-repeat opacity-40 z-0 "
          style={{
            backgroundImage: `url(${Graph})`,
          }}
        /> */}

        {/* Phone Mockup */}
        <img
          src={Homeframe}  
          alt="ViralPe App Mockup"
          className="w-[519px] h-[639px] object-contain relative z-10 drop-shadow-2xl"
        />

        {/* Tooltip 1 */}
       
      </div>
    </div>
  );
};

export default WhyChooseViralPe;
