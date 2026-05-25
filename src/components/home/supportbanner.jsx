import React from "react";

import Headphoneicon from "../../../public/images/Headphones.png";
import Messageicon from "../../../public/images/textbox.png";
import Mailicon from "../../../public/images/envelope.png";
const SupportBanner = () => {

  const supportOptions = [
    {
      id: 1,
      icon: Headphoneicon,
      title: "Need Help?",
      subtitle: "We're here 24/7 for you",
      actionText: "+91 90000 00000",
    },
    {
      id: 2,
      icon: Messageicon,
      title: "Live Chat",
      subtitle: "Chat With Our Support\nTeam",
      actionText: "",
    },
    {
      id: 3,
      icon: Mailicon,
      title: "Email Support",
      subtitle: "We're here 24/7 for you",
      actionText: "Support@ViralPe.com",
    },
  ];

  return (

    <div className="w-full max-w-[1206px] min-h-[221px] mt-[32px] mx-auto bg-[#901C27] rounded-[20px] shadow-md  flex items-center justify-center overflow-hidden p-6">

      {/* Wrapper */}
      <div className="w-full max-w-[900px] flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-white/50">

        {supportOptions.map((option) => {

          const Icon = option.icon;

          return (

            <div
              key={option.id}
              className="flex flex-col items-center text-center flex-1 top-[36px]"
            >

              {/* Icon Box */}
              <div className="w-[57px] h-[57px] bg-white rounded-[12px] flex items-center justify-center text-[#901C27]  shadow-sm">
                <img
                  src={option.icon}
                  alt={option.title}
                  className="w-[36px] h-[36px] object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-[15px] tracking-wide mt-[13px]">
                {option.title}
              </h3>

              {/* Subtitle */}
              <p className="text-white/80 text-[15px] whitespace-pre-line leading-relaxed mb-2.5 min-h-[25px]">
                {option.subtitle}
              </p>

              {/* Action Text */}
              {option.actionText && (
                <p className="text-white font-bold text-[15px] tracking-wide">
                  {option.actionText}
                </p>
              )}

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default SupportBanner;