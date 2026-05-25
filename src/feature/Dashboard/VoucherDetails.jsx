import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
// Consolidated Asset Imports
import {
  Zap,
  Lock,
  Headphones,
  ShieldCheck,
  Star,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Wallet,
  Landmark,
  X,
  CheckCircle2
} from "lucide-react";

import Nike from "../../../public/images/nike.png";
import verified from "../../../public/images/verified.svg"
import thunder from "../../../public/images/Thunder.png"
import fashion from "../../../public/images/fashion.svg"
import footwear from "../../../public/images/footwear.svg"
import accessories from "../../../public/images/accesories.svg"
import cashback from "../../../public/images/cash-backlogo.svg"
import copycodeicon from "../../../public/images/Copyicon.svg";
import Bag from "../../../public/images/Myntrabag.svg";
import ticket from "../../../public/images/ticket.svg";
import wallet from "../../../public/images/wallet.svg";
import myntra from "../../../public/images/myntra.png";
import starbucks from "../../../public/images/starbucks.png";
import lock from "../../../public/images/lock.png";
import Gift from "../../../public/images/Gift.svg";
import success from "../../../public/images/success.svg";

export default function CashbackCardList() {
  const location = useLocation();
  const navigate = useNavigate();
  const voucher = location.state;
  
  // Track popup display layers: null (hidden), 'payment' (checkout view), 'success' (completion screen)
  const [popupStage, setPopupStage] = useState(null);
  const [activeTab, setActiveTab] = useState('card');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);
  const [quantities, setQuantities] = useState({});

  // Main Categories Array (Your Offer Card Data)
  const categories = [
    {
      id: voucher?.id || 1,
      icon: voucher?.logo || "/images/nike.png",
      title: voucher?.brand || "Myntra",
      cashback: `Get ${voucher?.discount || 5}% Cashback on ${voucher?.brand || "Myntra"} Vouchers`,
      cashbackRightside: `${voucher?.discount || 5}% Cashback`,
      para:
        voucher?.brand === "Nike"
          ? "Get exclusive cashback on Nike fashion and footwear purchases using ViralPe vouchers."
          : voucher?.brand === "Starbucks"
            ? "Enjoy instant cashback on Starbucks orders and beverages using ViralPe vouchers."
            : voucher?.brand === "Trends"
              ? "Shop latest Trends fashion collections with cashback rewards from ViralPe."
              : "Get instant cashback on your Myntra purchases when you pay using this ViralPe voucher. Valid across all fashion, footwear, and accessory categories . No minimum cart required for select categories. Cashback is credited directly to your ViralPe wallet within 24 hours of a successful order delivery — no minimum cart value required for select categories. Offer applicable on both the Myntra app and website.."
    }
  ];

  // Sub-tags Array
  const tags = [
    { label: 'Fashion', icon: fashion },
    { label: "Footwear", icon: footwear },
    { label: "Accessories", icon: accessories }
  ];
const features = [
    {
        id: "secure-payments",
        title: "100% Secure Payments",
        description: "256-bit SSL Encrypted",
        icon: '/images/lock.png',
        isRating: false,
    },
    {
        id: "instant-delivery",
        title: "Instant Code Delivery",
        description: "Get Vouchers In Seconds",
        icon: '/images/Thunder.png',
        isRating: false,
    },
    {
        id: "customer-support",
        title: "24/7 Customer Support",
        description: "Help available round the clock",
        icon: '/images/Headphones.png',
        isRating: false,
    },
    {
        id: "trusted-users",
        title: "Trusted By 1M+ Users",
        description: "4.8/5",
        icon: '/images/Vector.svg',
        isRating: true,
    },
];
const renderIcon = (icon) => {
    return (
        <img
            src={icon}
            alt="icon"
            className="w-8.5 h-8.5 object-contain"
        />
    );
};
  const vouchersData = [
    { id: 1, value: 100, savings: 5 },
    { id: 2, value: 200, savings: 10 },
    { id: 3, value: 300, savings: 15 },
    { id: 4, value: 600, savings: 200 },
    { id: 5, value: 400, savings: 90 },
     { id: 6, value: 500, savings: 90 },
    
  ];

  // Helper functions to update state cleanly
  const handleAddFirst = (id) => {
    setQuantities(prev => ({ ...prev, [id]: 1 }));
  };

  const handleIncrement = (id) => {
    setQuantities(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id) => {
    setQuantities(prev => {
      const currentQty = prev[id] || 0;
      if (currentQty <= 1) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
      return { ...prev, [id]: currentQty - 1 };
    });
  };

  const voucherData = [
    { id: 1, brand: 'Myntra', logo: Nike, tag: 'Get ₹50 Cashback', isPromo: true, category: 'Fashion', price: 200, discount: 5 },
    { id: 2, brand: 'Starbucks', logo: myntra, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 },
    { id: 3, brand: 'Starbucks', logo: starbucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 },
    { id: 4, brand: 'Starbucks', logo: myntra, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 },
    { id: 5, brand: 'Starbucks', logo: Nike, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 },
    { id: 6, brand: 'Starbucks', logo: myntra, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 },
    { id: 7, brand: 'Starbucks', logo: myntra, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 }
  ];

  // --- DERIVED CART DATA ---
  const cartItems = vouchersData
    .filter(voucher => quantities[voucher.id] > 0)
    .map(voucher => ({
      id: voucher.id,
      denomination: voucher.value,
      savings: voucher.savings,
      quantity: quantities[voucher.id]
    }));

  const totalPrice = cartItems.reduce((sum, item) => sum + item.denomination * item.quantity, 0);
  const totalSavings = cartItems.reduce((sum, item) => sum + item.savings * item.quantity, 0);

  const handleAddToCart = () => {
    if (cartItems.length === 0) {
      alert("Please select a voucher value first!");
      return;
    }
    setPopupStage('payment');
  };

  const faqrData = [
    {
      id: 1,
      question: "Eligibility & Usage",
      answer: "Refunds are sent straight back to your bank account. In rare cases, your bank might take an extra 48 hours to process it."
    },
    {
      id: 2,
      question: "Cashback & Rewards Terms",
      answer: "If your recharge fails, the amount is usually refunded to your original payment method within 3-5 business days. Please check your transaction history for the real-time status or contact our support team."
    },
    {
      id: 3,
      question: "Validity & Expiry",
      answer: "Cashback is credited instantly to your ViralPe wallet right after a successful transaction. In rare scenarios, it might take up to 24 hours to process."
    },
     {
      id: 4,
      question: "Refund & Cancellation",
      answer: "Cashback is credited instantly to your ViralPe wallet right after a successful transaction. In rare scenarios, it might take up to 24 hours to process."
    }

  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const steps = [
    { id: 1, title: "Copy Code", description: "Copy your voucher code from ViralPe", icon: <img src={copycodeicon} /> },
    { id: 2, title: "Shop on Myntra", description: "Add items to cart on Myntra App or Website", icon: <img src={Bag} /> },
    { id: 3, title: "Apply at Checkout", description: "Paste the code at checkout to get discount", icon: <img src={ticket} /> },
    { id: 4, title: "Earn Cashback", description: "Get 5% cashback in your ViralPe within 24 hrs", icon: <img src={wallet} /> }
  ];

  const avatars = [
    { id: 1, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100", alt: "User 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100", alt: "User 2" },
    { id: 3, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100", alt: "User 3" },
    { id: 4, src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100", alt: "User 4" }
  ];

  return (
    <div className="min-h-screen  p-4 md:p-8">
      <div className="max-w-[1240px] pt-20  mx-auto">

        {/* Main 12-Column Grid */}
        <div className="flex flex-row gap-6 items-start">

          {/* Left Column Area */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">

            {/* Voucher Card */}
            <div className="border border-transparent ">
              <div className="flex flex-col font-sans">
                {categories.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[16px] p-4 w-full max-w-[700px]  max-h-[331px]shadow-sm border border-gray-100"
                  >
                    <div className=" flex justify-between items-start">
                      <div className="flex gap-4 items-center">
                        <div className="  flex items-center justify-center">
                          <img src={item.icon} alt={`${item.title} Logo`} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h2 className="text-[28.1px] font-bold text-gray-900 leading-tight">{item.title}</h2>
                          <p className="text-[#a6303c] text-sm font-semibold mt-1">{item.cashback}</p>
                        </div>
                      </div>
                      <span className="bg-[#e8f7ee] text-[#128a59] text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                        {item.cashbackRightside}
                      </span>
                    </div>

                    <p className="text-[#6b7280] text-[16px] leading-[1.7] mb-8 font-medium">{item.para}</p>

                    <div className="flex  items-center text-center gap-2 ">
                      {tags.map((tag, index) => (
                        <div key={index} className="flex items-center gap-2 max-w-[143px] w-full max-h-[41px]  bg-[#fcf6f6] text-[#9b2a36] px-5 py-2.5 rounded-[20px] text-sm font-bold">
                          <img src={tag.icon} alt={tag.label} className="w-4 h-4 object-contain" />
                          <span>{tag.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Choose Voucher Grid Selector */}
            <div className="w-full bg-white  max-w-[700px] max-h-[367px] rounded-[24px] p-4 border border-gray-100 shadow-sm">
              <h1 className='font-bold text-[24px] mb-4'>Choose Your Voucher value</h1>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4">
                {vouchersData.map((voucher) => {
                  const currentQty = quantities[voucher.id] || 0;
                  return (
                    <div
                      key={voucher.id}
                      className="w-full  max-w-[148px] max-h-[123px] bg-white border border-[#9c27b0]/20 rounded-[20px] shadow-sm flex flex-col items-center justify-between p-2.5 transition-all duration-200 hover:shadow-md hover:bg-[#FFF8F8] hover:border-[#901C27] mx-auto"
                    >
                      <div className="flex flex-col items-center text-center mt-1">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center justify-center tracking-tight leading-none">
                          <span className="text-lg font-medium mr-0.5">₹</span>{voucher.value}
                        </h2>
                        <p className="text-[11px] font-bold text-[#16a34a] mt-0.5">Save ₹{voucher.savings}</p>
                      </div>

                      <div className="w-full flex justify-center mb-1">
                        {currentQty === 0 ? (
                          <button
                            onClick={() => handleAddFirst(voucher.id)}
                            className="w-full max-w-[100px] h-7 border border-[#7f1d1d]/30 text-[#7f1d1d] font-bold text-xs uppercase tracking-wider rounded-lg transition-all active:scale-95"
                          >
                            Add
                          </button>
                        ) : (
                          <div className="flex items-center justify-between w-full px-1.5">
                            <button
                              onClick={() => handleDecrement(voucher.id)}
                              className="w-7 h-7 flex items-center justify-center bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.06)] border border-gray-100 text-gray-600 hover:bg-gray-50 active:scale-95 transition-all text-xs font-semibold"
                            >
                              —
                            </button>
                            <span className="text-base font-bold text-[#7f1d1d] min-w-[14px] text-center">{currentQty}</span>
                            <button
                              onClick={() => handleIncrement(voucher.id)}
                              className="w-7 h-7 flex items-center justify-center bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.06)] border border-gray-100 text-gray-600 hover:bg-gray-50 active:scale-95 transition-all text-xs font-semibold"
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Alert Banner */}
            <div className="w-full max-w-[700px] bg-emerald-50 rounded-2xl flex p-4 items-center gap-3">
              <img src={cashback} alt='cashbackicon' className='w-13 h-13 object-contain shrink-0' />
              <p className='font-light text-[12px] text-gray-700 leading-relaxed'>
                Cashback is credited to your Viralpe wallet within 24 hours of order delivery. Reward points are valid for 90 days from the credit date and can be redeemed on your next purchase.
              </p>
            </div>

            {/* How It Works Grid */}
            <div className="w-full md:w-[700px] mx-auto md:h-[229px] bg-white rounded-[24px] border border-gray-100 shadow-sm">
              <div className="p-5">
                <h3 className="font-bold text-xl ml-[28px] mb-[13px]">How it Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 items-start relative">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center text-center relative group">
                      <div className="flex items-center justify-center rounded-2xl p-4 mb-2 group-hover:scale-105">
                        {step.icon}
                      </div>
                      <h3 className="text-sm font-bold text-gray-800 mb-2 tracking-wide">{step.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed max-w-[210px]">{step.description}</p>
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-8 -right-4 translate-x-1/2 z-10 pointer-events-none">
                          <svg className="w-14 h-4 text-rose-800" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 4" viewBox="0 0 48 16">
                            <path d="M0 8H44M44 8L38 2M44 8L38 14" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Accordion List Block */}
            <div className="md:w-[700px] h-[592px] bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-black mt-[23px] ml-[27px] tracking-tight">
                Terms & Conditions
              </h2>
              <div className="flex flex-col border-t border-gray-100 ml-4 sm:ml-13.5 mr-4 sm:mr-26.5">
                {faqrData.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={item.id} className="border-b border-gray-100 py-5 sm:py-6 transition-all duration-300">
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex justify-between items-center text-left gap-4 group"
                      >
                        <span className="text-base sm:text-lg md:text-xl font-bold text-gray-950 group-hover:text-[#901C27] transition-colors">
                          {item.question}
                        </span>
                        <svg
                          className={`w-4 h-4 text-[#901C27] shrink-0 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                        <div className="overflow-hidden">
                          <p className="text-gray-600 text-sm sm:text-base leading-relaxed md:max-w-4xl">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Sidebar Area */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">

            {/* Sticky Summary Card */}
            <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm lg:top-6">
              <div className="max-w-[494px] max-h-[418px] w-full rounded-2xl shadow-lg border border-gray-100 p-6 font-sans">
                <h2 className="text-[24px] font-semibold mb-3">Order Summary</h2>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center shadow-sm">
                      <img src={categories[0]?.icon} alt={categories[0]?.title} className="w-full h-full object-contain p-1" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{categories[0]?.title}</h3>
                  </div>
                  <div className="text-xl font-bold text-gray-900">₹ {totalPrice}</div>
                </div>

                <div className="border-b border-gray-100 pb-5 mb-5 space-y-4">
                  {cartItems.length > 0 ? (
                    cartItems.map(item => (
                      <div key={item.id} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-400">Denomination</span>
                          <span className="text-gray-500 font-medium">₹ {item.denomination}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-400">Qty.</span>
                          <div className="flex items-center gap-3.5">
                            <button
                              onClick={() => handleDecrement(item.id)}
                              className="w-7 h-7 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-700 font-medium transition-colors"
                            >
                              −
                            </button>
                            <span className="text-[15px] font-bold text-red-700 min-w-[12px] text-center">{item.quantity}</span>
                            <button
                              onClick={() => handleIncrement(item.id)}
                              className="w-7 h-7 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-700 font-medium transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center text-gray-400 text-sm py-4">
                      No vouchers selected yet. <br /> Choose a value to continue.
                    </div>
                  )}
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full bg-[#8c1d26] hover:bg-[#70161e] text-white py-3.5 rounded-lg text-base font-semibold transition-colors shadow-sm mb-5"
                >
                  Add to Cart
                </button>

                <div className="flex justify-between items-center text-[13px] text-gray-500 font-medium px-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-500 text-xs"><img className="h-[15px] w-[15px]" src={lock} /> </span> 100% Secure Payments
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-500 text-sm"><img className="h-[15px] w-[15px]" src={thunder} /></span> Instant Code Delivery
                  </div>
                </div>
              </div>
            </div>

            {/* Perks Panel */}
            <div className="rounded-[24px]">
              <div className="w-full h-[409px] bg-white rounded-[28px] border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950 mb-5">
                  Why Buy from <span className="text-[#8A1C24]">ViralPe</span>?
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                      <ShieldCheck className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">100% Verified Offers</h4>
                      <p className="text-[11px] font-medium text-gray-400 mt-0.5">Every voucher is validated before listing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                      <Zap className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">Instant Code Delivery</h4>
                      <p className="text-[11px] font-medium text-gray-400 mt-0.5">Code delivered to your wallet immediately</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                      <Lock className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">Secure Payments</h4>
                      <p className="text-[11px] font-medium text-gray-400 mt-0.5">256-bit SSL encrypted transactions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                      <Headphones className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">24/7 Customer Support</h4>
                      <p className="text-[11px] font-medium text-gray-400 mt-0.5">Help available round the clock</p>
                    </div>
                  </div>
                  <div className="border-t border-dashed border-gray-300 pt-4 mt-2 flex flex-row items-center justify-between sm:justify-start gap-2 sm:gap-4 bg-white p-2 sm:p-3 rounded-lg select-none font-sans w-full">
                    <div className="flex items-center shrink-0">
                      {avatars.map((avatar, index) => (
                        <img
                          key={avatar.id} src={avatar.src} alt={avatar.alt}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white -mr-2 sm:-mr-3 last:mr-0 shadow-sm hover:translate-y-[-2px] hover:z-10 transition-transform duration-200 ease-in-out"
                          style={{ zIndex: index }}
                        />
                      ))}
                    </div>
                    <p className="text-[#1a1a1a] text-[11px] sm:text-[15px] font-medium text-center sm:text-left flex-1 px-1 leading-tight">
                      Trusted by <span className="text-[#8A1521] font-bold">50,000+</span> users
                    </p>
                    <div className="flex items-center gap-1 justify-end sm:ml-auto shrink-0">
                      <span className="text-[#FFB800] text-sm sm:text-lg leading-none">★</span>
                      <span className="text-[#8A1521] font-bold text-[12px] sm:text-[15px]">(4.8)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Dynamic Carousel Section */}
        <div className="mt-12 bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm max-w-[1222px] w-full">
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-2xl font-bold text-gray-900'>You May Also Like</h1>
            <button className="text-[#901C27] font-semibold flex items-center transition-colors">
              View More <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          <div className="flex items-center gap-5 justify-center">
            <button
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all shrink-0 shadow-sm
                ${currentIndex === 0 ? "border-gray-100 text-gray-300 cursor-not-allowed bg-gray-50/50" : "border-gray-200 text-gray-600 bg-white hover:bg-gray-50"}`}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="max-w-[1197px] w-full overflow-hidden px-0.5 py-1">
              <div
                className="flex flex-row gap-4 transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentIndex * (217 + 16)}px)` }}
              >
                {voucherData.map((voucher) => (
                  <div
                    key={voucher.id}
                    className="bg-white rounded-3xl border border-gray-100/70 pt-6 p-4 shadow-sm hover:shadow-md transition-all flex flex-col items-center relative h-[204px] w-[217px] shrink-0"
                  >
                    {!voucher.noHeaderTag && (
                      <div className={`absolute top-0 left-0 text-[10px] font-bold px-3 py-1 rounded-br-xl rounded-tl-2xl shadow-xs tracking-tight
                        ${voucher.isPromo ? 'bg-[#EBF3FF] text-blue-700 border-b border-r border-blue-100' : 'bg-[#EAFDF3] text-[#149B52]'}`}
                      >
                        {voucher.tag}
                      </div>
                    )}
                    <div className="flex items-center justify-center my-auto">
                      <img src={voucher.logo} alt={voucher.brand} className="h-[73.69px] w-[85.48px] object-contain" />
                    </div>
                    <h3 className="text-[15px] font-bold text-gray-900 mt-[7.72px]">{voucher.brand}</h3>
                    <p className="text-[11px] font-medium text-gray-400">Price: ₹{voucher.price}</p>
                    <div className="w-full border-t border-dashed border-gray-100 my-1 mt-[13.7px]" />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setCurrentIndex(prev => Math.min(voucherData.length - 4, prev + 1))}
              disabled={currentIndex >= voucherData.length - 4}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all shrink-0 shadow-sm
                ${currentIndex >= voucherData.length - 4 ? "border-gray-100 text-gray-300 cursor-not-allowed bg-gray-50/50" : "border-gray-200 text-gray-600 bg-white hover:bg-gray-50 active:scale-95"}`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Global Banner Strip */}
        <div className="max-w-[1210px] mt-4 max-h-[118px] rounded-[24px] bg-[#FFEDEE] px-1 py-8 md:px-8 lg:px-16 mx-auto  gap-6">
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6 ">
                {features.map((feature) => (

                    <div key={feature.id} className="flex items-center gap-4 min-w-0 ">
                        {/* Icon Box */}
                        <div className="flex h-11.75 w-11.75 flex-shrink-0 items-center justify-center rounded-[18px] bg-white text-[#8C1822] shadow-sm">
                            {renderIcon(feature.icon)}
                        </div>

                        {/* Text */}
                        <div className="flex flex-col justify-center">
                            <h3 className="text-[16px]  font-semibold text-[#901c27] ">
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
                                <p className="mt-1 text-sm ">
                                    {feature.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>

      {/* --- POPUP MODAL MULTI-STAGE CONTAINER --- */}
      {popupStage !== null && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 antialiased text-slate-800 overflow-y-auto">
          
          {/* POPUP STAGE: BILLING CHANNELS DETAIL PANEL */}
          {popupStage === 'payment' && (
            <div className="w-full max-w-4xl bg-[#faf8f7] rounded-3xl p-8 relative shadow-2xl my-8">
              <button 
                onClick={() => setPopupStage(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>

              <div className="text-center mb-8">
                <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Complete Your Payment</h1>
                <p className="text-xs text-gray-500 mt-1">Secure and encrypted payment processing</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h2 className="font-medium text-sm text-slate-900">Payment Method</h2>
                  <p className="text-xs text-gray-400 mt-0.5">Choose your preferred payment method</p>

                  <div className="flex gap-8 mt-6 border-b border-gray-100 pb-3">
                    <button 
                      onClick={() => setActiveTab('card')}
                      className={`flex items-center gap-2 text-xs font-medium pb-3 -mb-[13px] border-b-2 transition-all ${
                        activeTab === 'card' ? 'border-[#800a1d] text-[#800a1d]' : 'border-transparent text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" /> Card
                    </button>
                    <button 
                      onClick={() => setActiveTab('wallet')}
                      className={`flex items-center gap-2 text-xs font-medium pb-3 -mb-[13px] border-b-2 transition-all ${
                        activeTab === 'wallet' ? 'border-[#800a1d] text-[#800a1d]' : 'border-transparent text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      <Wallet className="w-4 h-4" /> Wallet
                    </button>
                    <button 
                      onClick={() => setActiveTab('bank')}
                      className={`flex items-center gap-2 text-xs font-medium pb-3 -mb-[13px] border-b-2 transition-all ${
                        activeTab === 'bank' ? 'border-[#800a1d] text-[#800a1d]' : 'border-transparent text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      <Landmark className="w-4 h-4" /> Bank
                    </button>
                  </div>

                  {activeTab === 'card' && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-900 mb-1.5">Card Number</label>
                        <div className="relative">
                          <input 
                            type="text" placeholder="4321 •••• •••• 5678" readOnly
                            className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none select-none cursor-default"
                          />
                          <CreditCard className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-900 mb-1.5">Cardholder Name</label>
                        <input 
                          type="text" placeholder="John Doe" readOnly
                          className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none select-none cursor-default"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-900 mb-1.5">Expiry Date</label>
                          <input 
                            type="text" placeholder="12/28" readOnly
                            className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none select-none cursor-default"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-900 mb-1.5">CVV</label>
                          <input 
                            type="password" placeholder="•••" readOnly
                            className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none select-none cursor-default"
                          />
                        </div>
                      </div>

                      {/* Simple instant trigger click switch button */}
                      <button 
                        onClick={() => setPopupStage('success')}
                        className="w-full bg-[#800a1d] hover:bg-[#6b0818] text-white font-medium rounded-xl py-3 text-sm mt-4 transition-colors shadow-sm"
                      >
                        Pay Now
                      </button>
                    </div>
                  )}

                  {activeTab !== 'card' && (
                    <div className="h-48 flex flex-col items-center justify-center gap-4 text-sm text-gray-400 italic">
                      <div>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} payment gateway selected.</div>
                      <button 
                        onClick={() => setPopupStage('success')}
                        className="not-italic bg-[#800a1d] text-white px-6 py-2 rounded-lg text-xs font-medium hover:bg-[#6b0818] transition-colors"
                      >
                        Pay Now
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h2 className="font-medium text-sm text-slate-900 mb-4">Order Summary</h2>
                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between text-gray-500">
                        <span>Subtotal</span>
                        <span className="font-semibold text-slate-800">₹{totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span>Cashback</span>
                        <span className="font-semibold text-[#12b76a]">-₹{totalSavings.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span>Tax</span>
                        <span className="font-semibold text-slate-800">₹0.00</span>
                      </div>
                      <hr className="border-gray-100 my-2" />
                      <div className="flex justify-between items-center pt-1">
                        <span className="text-sm font-medium text-slate-900">Total</span>
                        <span className="text-lg font-bold text-[#800a1d]">₹{totalPrice.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-5 pt-3 border-t border-gray-50 text-[10px] text-gray-500 font-medium">
                      <div className="flex items-center gap-1">
                        <span className="text-[#12b76a] text-xs">✓</span> 100% Secure
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-[#12b76a] text-xs">⚡</span> Instant Delivery
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-2 px-2">
                    <span className="text-[11px] text-gray-500 font-medium mr-1">We accept:</span>
                    <div className="flex gap-1.5">
                      <div className="p-1.5 bg-white border border-gray-100 rounded-md text-[#800a1d] shadow-sm"><CreditCard className="w-3.5 h-3.5" /></div>
                      <div className="p-1.5 bg-white border border-gray-100 rounded-md text-[#800a1d] shadow-sm"><Wallet className="w-3.5 h-3.5" /></div>
                      <div className="p-1.5 bg-white border border-gray-100 rounded-md text-[#800a1d] shadow-sm"><Landmark className="w-3.5 h-3.5" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* POPUP STAGE: TRANSACTION COMPLETION SUCCESS DIALOG CARD */}
          {popupStage === 'success' && (
            <div className="w-full max-w-[426px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col pb-8 relative my-8 animate-fadeIn animate-duration-200">
              
              <button 
                onClick={() => setPopupStage(null)}
                className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 bg-white/80 backdrop-blur-xs rounded-full p-1 transition-colors"
              >
                <X size={16} />
              </button>

              <div className="w-full flex justify-center bg-[#eefbf4] py-6 relative">
                <img src={success} alt="Success Background" className="w-full h-auto object-contain max-h-[160px]" />
              </div>

              <div className="text-center mt-6 px-6">
                <h2 className="text-[22px] font-bold text-gray-800 tracking-tight">
                  Transaction Successful!
                </h2>
                <h1 className="text-[20px] font-semibold text-[#1C1B1B] mt-2 flex items-center justify-center gap-1">
                  ₹{totalPrice}
                </h1>
                <p className="text-[12px] text-[#1C1B1BB2] font-medium -mt-1">
                  On {categories[0]?.title || "Brand"} Brand Gift Vouchers
                </p>
              </div>

              <div className="max-h-[260px] max-w-[384px] mt-6 mx-auto bg-[#fff0f2] rounded-[17.37px] p-5 border border-[#ffe0e4] flex flex-col items-center relative overflow-hidden w-[90%]">
                <div className="w-full flex justify-center items-center h-20 relative mb-2">
                  <img src={Gift} alt="Gift Reward" className="max-h-[82px] max-w-[131px] object-contain"/>
                </div>

                <h3 className="text-[17px] font-bold text-gray-800 text-center">
                  Congratulations Mr.X !
                </h3>
                <p className="text-[13px] text-gray-600 font-medium mt-1 text-center">
                  You earned <span className="text-[#00a34c] font-bold">₹{totalSavings || 10}</span> Cashback
                </p>

                <div className="w-full mt-4 pt-4 border-t border-[#ffd4d9]/60 space-y-2 text-center text-[12.5px] text-gray-600 font-medium">
                  <p>
                    Your referral <span className="font-bold text-gray-800">Mr. Bharat</span> earned <span className="text-[#00a34c] font-bold">₹5</span> Referral Bonus
                  </p>
                  <p className="pt-1">
                    Your Pincode <span className="font-bold text-gray-800">500081</span> earned <span className="text-[#00a34c] font-bold">₹2.5</span> Zonal Royalty
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between px-6 mt-8 text-[11px] text-gray-500 font-semibold gap-2">
                <div className="flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-[#00a34c] shrink-0" />
                  <span>100% Secure Transfer</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-[#00a34c] shrink-0" />
                  <span>Instant Wallet Credit</span>
                </div>
              </div>

              <div className="flex items-center gap-4 px-5 mt-8">
                <button 
                  onClick={() => setPopupStage(null)}
                  className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-700 font-bold text-[14px] hover:bg-gray-50 transition-colors cursor-pointer text-center"
                >
                  Back to Home
                </button>
                <button 
                  onClick={() => { setPopupStage(null); navigate("/orders"); }}
                  className="flex-1 py-3 rounded-xl bg-[#800d1e] text-white font-bold text-[14px] hover:opacity-90 transition-opacity cursor-pointer text-center"
                >
                  View Details
                </button>
              </div>

            </div>
          )}

        </div>
      )}
    </div>
  );
}