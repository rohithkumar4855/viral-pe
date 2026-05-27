import React from "react";

// Make sure these paths match your actual project structure
import Headphoneicon from "../../../public/images/headphones.png";
import Messageicon from "../../../public/images/textbox.png";
import Mailicon from "../../../public/images/envelope.png";

export const SupportBanner = () => {
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
    <div className="w-full max-w-[1206px] min-h-[221px] mt-[32px] mx-auto bg-[#901C27] rounded-[20px] shadow-md flex items-center justify-center overflow-hidden p-6">
      {/* Wrapper */}
      <div className="w-full max-w-[900px] flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-white/50">
        {supportOptions.map((option) => {
          return (
            <div
              key={option.id}
              className="flex flex-col items-center text-center flex-1 md:px-4 py-4 md:py-0"
            >
              {/* Icon Box */}
              <div className="w-[57px] h-[57px] bg-white rounded-[12px] flex items-center justify-center text-[#901C27] shadow-sm">
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

export const features = [
  {
    id: "secure-payments",
    title: "100% Secure Payments",
    description: "256-bit SSL Encrypted",
    icon: "/images/lock.svg",
    isRating: false,
  },
  {
    id: "instant-delivery",
    title: "Instant Code Delivery",
    description: "Get Vouchers In Seconds",
    icon: "/images/thunder.svg",
    isRating: false,
  },
  {
    id: "customer-support",
    title: "24/7 Customer Support",
    description: "Help available round the clock",
    icon: "/images/headphone.svg",
    isRating: false,
  },
  {
    id: "trusted-users",
    title: "Trusted By 1M+ Users",
    description: "4.8/5",
    icon: "/images/vector.svg",
    isRating: true,
  },
];

// Wrapped your loose JSX into a new component
export const FeaturesSection = () => {
  // Created the missing renderIcon function
  const renderIcon = (iconPath) => {
    return (
      <img
        src={iconPath}
        alt="feature icon"
        className="w-6 h-6 object-contain" 
      />
    );
  };

  return (
    // Note: I removed max-h-[118px] from the container below because on mobile screens, 
    // the grid stacked into 1 column will overflow and clip if you restrict the height.
    <div className="max-w-[1210px] rounded-[24px] mt-10 bg-[#FFEDEE] px-4 py-8 md:px-8 lg:px-16 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-center gap-4 min-w-0">
            {/* Icon Box */}
            <div className="flex h-[47px] w-[47px] flex-shrink-0 items-center justify-center rounded-[18px] bg-white text-[#8C1822] shadow-sm">
              {renderIcon(feature.icon)}
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[16px] font-semibold text-[#901c27]">
                {feature.title}
              </h3>

              {feature.isRating ? (
                <div className="mt-1 flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="h-4 w-4 fill-current text-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-[14px] text-[#1C1B1BCC]">
                    {feature.description}
                  </span>
                </div>
              ) : (
                <p className="mt-1 text-sm text-[#1C1B1BCC]">
                  {feature.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Default export if you want to import both sections together easily elsewhere
export default function SupportAndFeatures() {
  return (
    <div className="w-full">
      <FeaturesSection />
      <SupportBanner />
    </div>
  );
}