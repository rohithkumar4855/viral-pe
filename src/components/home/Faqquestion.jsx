import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openId, setOpenId] = useState(1);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "How do I redeem a voucher?",
      answer:
        'Redeeming a voucher typically involves entering a unique code during the checkout process on a retailer\'s website/app, or presenting a QR code/code in-store. For online purchases, locate the "gift card" or "promo code" section at payment, enter the code, and click apply to deduct the amount.'  ,
    },
    {
      id: 2,
      question: "What if my recharge fails?",
      answer:
        "If your recharge fails, the amount will be refunded within 3-5 business days automatically.",
    },
    {
      id: 3,
      question: "When will I get Cashback?",
      answer:
        "Cashback is credited instantly to your wallet after successful transaction.",
    },
  ];

  return (
    <div className="w-full max-w-[1206px] mt-[32px]  mx-auto bg-white rounded-[20px] p-8 md:p-12 shadow-sm border border-gray-50">

      {/* Header */}
      <h2 className="text-[36px] md:text-[52px] font-semibold text-[#222222] mb-8 tracking-tight">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className=" flex flex-col">

        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="border-b border-gray-100 last:border-0 py-6 first:pt-0"
            >

              {/* Question */}
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full flex items-center justify-between text-left"
              >

                <span className="text-[16px] md:text-[20px] font-semibold text-[#222222] pr-8">
                  {faq.question}
                </span>

                <div className="text-[#901C27]">
                  {isOpen ? (
                    <ChevronUp size={20} strokeWidth={2.5} />
                  ) : (
                    <ChevronDown size={20} strokeWidth={2.5} />
                  )}
                </div>

              </button>

              {/* Answer */}
              {isOpen && (
                <div className="mt-4 pr-4 md:pr-12">
                  <p className="text-[14px] md:text-[18px] text-[#222222CC] leading-[1.7]">
                    {faq.answer}
                  </p>
                </div>
              )}

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default FAQSection;