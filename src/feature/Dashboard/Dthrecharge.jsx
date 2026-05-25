import React from "react";
import thunder from "../../../public/images/Thunder.png";
import wallet from "../../../public/images/wallet.svg";
import lock from "../../../public/images/lock.png";
import headphones from "../../../public/images/headphones.png";
import tata from "../../../public/images/tataicon.svg";
import airtel from "../../../public/images/airtelicon.svg";
import dishtv from "../../../public/images/dishtvicon.svg";
import sundirect from "../../../public/images/sundirecticon.svg";
import gift from "../../../public/images/Gift.svg";
import thumbsup from "../../../public/images/thumbsup.svg"
import { ArrowRight } from "lucide-react";


export default function DthRechargeDashboard() {
    const whyRechargeFeatures = [
        {
            icon: thunder,
            title: "Instant Activation",
            description: "Recharge in just a few seconds",
        },
        {
            icon: wallet,
            title: "Earn Cashback",
            description: "Earn cashback on every recharge",
        },
        {
            icon: lock,
            title: "Secure Payments",
            description: "256-bit SSL encrypted transactions",
        },
        {
            icon: headphones,
            title: "24/7 Customer Support",
            description: "We're here to help anytime",
        },
    ];

    const recentRecharges = [
        {
            image: tata,
            name: "Tata Play",
            id: "149805048",
            amount: "₹456",
            daysLeft: "25 Days Left",
            badgeClass: "text-[#2E7D32] bg-[#E8F5E9]",
            imageClass: "h-[36px] w-[36px]",
        },
        {
            image: dishtv,
            name: "DishTV",
            id: "90809 879988",
            amount: "₹456",
            daysLeft: "12 Days Left",
            badgeClass: "text-[#E65100] bg-[#FFF3E0]",
            imageClass: "h-[50px] w-[50px]",
        },
        {
            image: sundirect,
            name: "DishTV", // Matching snapshot label discrepancy perfectly
            id: "90809 879988",
            amount: "₹456",
            daysLeft: "2 Days Left",
            badgeClass: "text-[#D32F2F] bg-[#FFEBEE]",
            imageClass: "h-[46px] w-[46px]",
        },
    ];

    const dthOperators = [
        { type: "tata", logo: tata, label: "Tata Play", cashback: "5% Cashback" },
        { type: "dish", logo: dishtv, label: "Dish TV", cashback: "5% Cashback" },
        { type: "airtel", logo: airtel, label: "Airtel Digital TV", cashback: "5% Cashback" },
        { type: "sun", logo: sundirect, label: "Sun Direct", cashback: "5% Cashback" },
    ];

    return (
        <div className="mt-20 bg-[#FCF8F8] py-10 flex flex-col items-center justify-start text-[#1A1A1A] font-sans antialiased">
            <div className="w-[1217px] flex flex-col gap-6">

                {/* TOP SECTION: Main Form & Why Recharge Side Widget */}
                <div className="flex grid-cols-12 gap-6 items-stretch">

                    {/* Left: DTH Recharge Input Card */}
                    <div className="col-span-8 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between max-w-[837px] w-full max-h-[260px]">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">DTH Recharge</h2>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-700">
                                    Subscriber ID/Registered Mobile Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Subscriber ID/Registered Mobile Number"
                                    className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#800A1D] focus:border-transparent transition placeholder-gray-400"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button className="bg-[#800A1D] text-white font-semibold text-base px-16 py-3 rounded-xl hover:bg-[#660817] transition-all duration-200 shadow-sm w-[260px]">
                                Confirm
                            </button>
                        </div>
                    </div>

                    {/* Right: Why Recharge On ViralPe */}
                    <div className="col-span-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-[260px]">
                        <h3 className="text-base font-bold text-gray-900 mb-2">
                            Why Recharge On ViralPe?
                        </h3>
                        <div className="flex flex-col gap-3">
                            {whyRechargeFeatures.map((feature, index) => (
                                <div key={index} className="flex gap-4 items-center">
                                    <div className="bg-[#FFF2F4] rounded-xl p-2 shrink-0 flex items-center justify-center w-10 h-10">
                                        <img src={feature.icon} alt={feature.title} className="w-5 h-5 object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-[#800A1D]">
                                            {feature.title}
                                        </h4>
                                        <p className="text-[11px] text-gray-400 mt-0.5">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* MIDDLE SECTION: Recent Recharges & Side Offers */}
                <div className="flex grid-cols-12 gap-6 items-start">

                    {/* Left: Recent Recharges Card */}
                    <div className="col-span-8 flex flex-col  max-w-[837px] w-full  bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                        <h2 className="text-xl font-bold mb-6">Recent Recharges</h2>
                        <div className="grid grid-cols-3 gap-4">
                            {recentRecharges.map((recharge, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-100 rounded-2xl p-4 flex flex-col justify-between relative hover:shadow-md transition bg-white"
                                >
                                    <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                        </svg>
                                    </button>

                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center p-1 bg-white border border-gray-50">
                                            <img
                                                src={recharge.image}
                                                alt={recharge.name}
                                                className={`${recharge.imageClass} object-contain`}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-gray-900">{recharge.name}</h4>
                                            <p className="text-xs text-gray-400 font-medium">{recharge.id}</p>
                                            <p className="text-xs font-bold text-gray-800 mt-0.5">{recharge.amount}</p>
                                        </div>
                                    </div>

                                    <span className={`inline-block self-start text-[11px] font-semibold px-2.5 py-1 rounded-md ${recharge.badgeClass}`}>
                                        {recharge.daysLeft}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Promotion Stack Panel */}
                    <div className="col-span-4 flex flex-col gap-6">

                        {/* Promo banner 5% cashback */}
                        <div className="bg-[#FFF2F4] rounded-2xl p-6 relative overflow-hidden flex items-center justify-between border border-[#FFE1E5]">
                            <div className="max-h-[146px] max-w-[348px] w-full">
                                <h4 className="text-[20px] font-semibold text-[#1C1B1B]">
                                    Extra 5% Cashback
                                </h4>
                                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                                    On DTH Recharge of ₹500 or more
                                </p>
                                <span className="text-[9px] text-gray-400 block mt-4 font-medium">
                                    *T&C Apply
                                </span>
                            </div>
                            <img src={gift} />
                        </div>

                        {/* Need Help Box */}
                        <div className=" mx-w-[348px] w-full  max-h-[151px] bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex">
                            <div className="flex gap-[28px]">
                                <div className="max-w-[50px] max-h-[50px] rounded-full h-full w-full">
                                    <img src={headphones} className="h-full w-full" />
                                </div>
                                <div className="flex flex-col max-w-[182px] w-full">
                                    <h4 className="text-base font-bold text-gray-900">Need Help?</h4>
                                    <p className="text-xs text-gray-400 mt-1 mb-4 font-medium">
                                        Chat with our support teams
                                    </p>
                                    <button className="border border-[#800A1D] text-[#800A1D] font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-[#800A1D] hover:text-white transition duration-200 flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        Chat Now
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* ALL DTH OPERATORS */}
                <div className="max-w-[837px] bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">All DTH Operators</h2>
                        <a href="#view-all" className="text-[#800A1D] text-xs font-bold flex items-center gap-1 hover:underline">
                            View More 
                            <ArrowRight size={14} />
                        </a>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        {dthOperators.map((operator, index) => (
                            <div
                                key={index}
                                className="border border-gray-100 rounded-2xl p-5 flex flex-col items-center justify-between hover:shadow-md transition bg-white max-w-[246px] w-full max-h-[140px]"
                            >
                                <div className="w-20 h-16 my-auto flex items-center justify-center">
                                    <img
                                        src={operator.logo}
                                        alt={operator.label}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold text-[#2E7D32] bg-[#E8F5E9] px-4 py-1 rounded-[8px] w-full text-center">
                                        {operator.cashback}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FOOTER TRUST BADGES */}
                <div className="bg-[#FFF2F4] rounded-2xl py-6 px-10 flex items-center justify-between border border-[#FFE1E5] mt-2">
                    <div className="flex items-center gap-3">
                        <div className="text-[#800A1D] bg-white p-2 rounded-lg shadow-sm">
                            <img src={lock} />
                        </div>
                        <div>
                            <h5 className="text-xs font-bold text-gray-900">100% Secure Payments</h5>
                            <p className="text-[10px] text-gray-400 font-medium">256-bit SSL Encrypted</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="text-[#800A1D] bg-white p-2 rounded-lg shadow-sm">
                            <img src={thumbsup} />
                        </div>
                        <div>
                            <h5 className="text-xs font-bold text-gray-900">Instant Activation</h5>
                            <p className="text-[10px] text-gray-400 font-medium">Get Activation In Seconds</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="text-[#800A1D] bg-white p-2 rounded-lg shadow-sm">
                            <img src={headphones} />
                        </div>
                        <div>
                            <h5 className="text-xs font-bold text-gray-900">24/7 Customer Support</h5>
                            <p className="text-[10px] text-gray-400 font-medium">Help available round the clock</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="text-[#800A1D] bg-white p-2 rounded-lg shadow-sm">
                            <img src={thumbsup} />
                        </div>
                        <div>
                            <h5 className="text-xs font-bold text-gray-900">Trusted By 1M+ Users</h5>
                            <div className="flex items-center gap-0.5 mt-0.5">
                                <span className="text-yellow-500 text-[10px]">★★★★★</span>
                                <span className="text-[9px] text-gray-500 font-bold ml-1">4.8/5</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}