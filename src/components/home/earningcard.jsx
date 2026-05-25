import React from "react";
import { earningsData } from "../../../data"; // Adjust this import path based on your folder structure


const EarningCard = ({ icon, title, amount, subtitle }) => {
  return (
    <div className="flex flex-col max-w-[244px] max-h-[113px] w-full p-3 border border-[#000000]/10 rounded-2xl bg-white shadow-sm transition-shadow">
      <div className="flex items-center gap-2 ">
       
        <div className="text-(--primary-red) p-1.5 rounded-[9.9px] flex items-center justify-center">
          <img
            src={icon}
            alt={title}
            className="object-contain w-10.25 h-10.25"
          />
        </div>
        
        <h4 className="text-[12px] font-semibold text-[#6F0014] uppercase tracking-wider ">
          {title}
        </h4>
      </div>

      {/* Amount */}
      <h3 className="text-[24px] font-bold text-[#1c1b1b] ml-[21px]">
        {amount}
      </h3>

      {/* Subtitle */}
      <p className="text-[12px] text-[#584140] mt-[10.2px]">
        {subtitle}
      </p>
    </div>
  );
};

export default function GrowingTogether() {
  return (
    <div className="w-full max-w-[1207px] mx-auto mt-[32px] bg-white rounded-[20px] p-8 md:p-10 shadow-sm border border-gray-100">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-[48px] font-semibold tracking-tight mb-2">
          <span className="text-(--primary-red)">Growing</span>{" "}
          <span className="text-(--text-dark)">Together</span>
        </h2>
        <p className="text-[#222222]/80 text-sm md:text-[24px]">
          Collective earnings from our user community
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
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