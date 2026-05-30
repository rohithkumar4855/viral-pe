import React from "react";
import { earningsData } from "../../data/Dashboard"

const EarningCard = ({ icon, title, amount, subtitle }) => {
  return (
    <div className="flex flex-col w-full max-w-[244px] h-full max-h-[113px] p-2 sm:p-3 border border-[#000000]/10 rounded-xl sm:rounded-2xl bg-white shadow-sm transition-shadow mx-auto">
      <div className="flex items-center gap-1.5 sm:gap-2">
        
        <div className="text-(--primary-red) p-1 sm:p-1.5 rounded-[9.9px] flex items-center justify-center shrink-0">
          <img
            src={icon}
            alt={title}
            className="object-contain w-7 h-7 sm:w-10.25 sm:h-10.25"
          />
        </div>
        
        <h4 className="text-[10px] sm:text-[12px] font-semibold text-[#6F0014] uppercase tracking-wider leading-tight">
          {title}
        </h4>
      </div>

      {/* Amount */}
      <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold text-[#1c1b1b] ml-1 sm:ml-2 md:ml-[21px] mt-1 sm:mt-0">
        {amount}
      </h3>

      {/* Subtitle */}
      <p className="text-[10px] sm:text-[12px] text-[#584140] mt-1 sm:mt-[10.2px] leading-tight">
        {subtitle}
      </p>
    </div>
  );
};

export default function GrowingTogether() {
  return (
    <div className="w-[92%] max-w-full md:w-[1207px] mx-auto mt-6 md:mt-[32px] bg-white rounded-2xl md:rounded-[20px] p-5 sm:p-8 md:p-10 shadow-sm border border-gray-100">
      
      {/* Heading */}
      <div className="mb-6 md:mb-8 text-center sm:text-left">
        <h2 className="text-[24px] sm:text-3xl md:text-[48px] font-semibold tracking-tight mb-1 sm:mb-2 leading-tight">
          <span className="text-(--primary-red)">Growing</span>{" "}
          <span className="text-(--text-dark)">Together</span>
        </h2>
        <p className="text-[#222222]/80 text-[13px] sm:text-sm md:text-[24px] leading-snug">
          Collective earnings from our user community
        </p>
      </div>

      {/* Cards Grid: 2 cols on mobile/tablet, 4 cols on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
        {earningsData.map((item) => (
          <EarningCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            amount={item.amount}
            subtitle={item.subtitle}
          />
        ))}
      </div>
      
    </div>
  );
}
