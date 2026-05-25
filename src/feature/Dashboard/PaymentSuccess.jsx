import React from "react";
import { CheckCircle2 } from "lucide-react"; 
import  Gift  from  "../../../public/images/Gift.svg"
import success from "../../../public/images/success.svg";
// import giftBox from "../../../public/images/giftbox.png"; 

export default function PaymentSuccess() {
  return (
    <div className="pt-36 bg-[#f4fbf7] min-h-screen flex items-center justify-center p-4 mx-auto">
      {/* Main Responsive Mobile-View Container */}
      <div className="w-full max-w-[426px] bg-white rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col pb-8">
        
        {/* Top Header Success SVG Area */}
        <div className="w-full flex justify-center bg-[#eefbf4] py-6 relative">
          <img src={success} alt="Success Background" className="w-full h-auto object-contain max-h-[160px]" />
        </div>

        {/* Transaction Status Text */}
        <div className="text-center mt-6 px-6">
          <h2 className="text-[22px] font-bold text-gray-800 tracking-tight">
            Transaction Successful!
          </h2>
          <h1 className="text-[20px] font-semibold text-[#1C1B1B] mt-2 flex items-center justify-center gap-1">
            ₹299
          </h1>
          <p className="text-[12px] text-[#1C1B1BB2] font-medium -mt-1">
            On Prepaid Recharge
          </p>
        </div>

        {/* Pink Rewards / Earnings Container Card */}
        <div className="mx-h-[247px] max-w-[384px] mt-6 ml-[21px] bg-[#fff0f2] rounded-[17.37px] p-5 border border-[#ffe0e4] flex flex-col items-center relative overflow-hidden">
          
          {/* Confetti & Gift Graphic Area */}
          <div className="w-full flex justify-center items-center h-24 relative mb-2">
            {/* Replace with actual gift icon image asset if available */}
            <img src={Gift} className="max-h-[82px] max-w-[131px]"/>
            
          </div>

          {/* Congratulations Heading */}
          <h3 className="text-[17px] font-bold text-gray-800 text-center">
            Congratulations Mr.X !
          </h3>
          <p className="text-[13px] text-gray-600 font-medium mt-1 text-center">
            You earned <span className="text-[#00a34c] font-bold">₹10</span> Cashback
          </p>

          {/* Breakdown Rows */}
          <div className="w-full mt-4 pt-4 border-t border-[#ffd4d9]/60 space-y-2 text-center text-[12.5px] text-gray-600 font-medium">
            <p>
              Your referral <span className="font-bold text-gray-800">Mr. Bharat</span> earned <span className="text-[#00a34c] font-bold">₹5</span> Referral Bonus
            </p>
            <p className="pt-1">
              Your Pincode <span className="font-bold text-gray-800">500081</span> earned <span className="text-[#00a34c] font-bold">₹2.5</span> Zonal Royalty
            </p>
          </div>
        </div>

        {/* Secure Payment Badges */}
        <div className="flex items-center justify-between px-6 mt-8 text-[12px] text-gray-500 font-semibold">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-[#00a34c]" />
            <span>100% Secure Payments</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-[#00a34c]" />
            <span>100% Secure Payments</span>
          </div>
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex items-center gap-4 px-5 mt-8">
          <button className="flex-1 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-bold text-[15px] hover:bg-gray-50 transition-colors cursor-pointer text-center">
            Back to Home
          </button>
          <button className="flex-1 py-3.5 rounded-xl bg-[#800d1e] text-white font-bold text-[15px] hover:opacity-90 transition-opacity cursor-pointer text-center">
            View Details
          </button>
        </div>

      </div>
    </div>
  );
}