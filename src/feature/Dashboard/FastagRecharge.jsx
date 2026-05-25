import React, { useState } from "react";
import { Search, Info, MessageSquare, MoreVertical, ArrowRight } from "lucide-react";
import Axis from "../../../public/images/Axis.svg";
import Bajaj from "../../../public/images/Bajaj.svg";
import icic from "../../../public/images/iciclogo.svg";
import idfc from "../../../public/images/idfclogo.svg";
import Thunder from "../../../public/images/Thunder.png"
import discount from "../../../public/images/Discount.svg"
import Wallet from "../../../public/images/wallet.svg"
import lock from "../../../public/images/Lock.png"
import Gift from "../../../public/images/Gift.svg"
import headphones from "../../../public/images/earphones.svg"

// Mock Data for Banks List
const banksData = [
    { id: 1, name: "Axis Bank", logo: Axis, cb: "5% Cashback" },
    { id: 2, name: "Bajaj Finserv", logo: Bajaj, cb: "5% Cashback" },
    { id: 3, name: "IDFC First Bank", logo: idfc, cb: "5% Cashback" },
    { id: 4, name: "ICICI Bank", logo: icic, cb: "5% Cashback" },
    { id: 5, name: "Axis Bank", logo: Axis, cb: "5% Cashback" },
    { id: 6, name: "Bajaj Finserv", logo: Bajaj, cb: "5% Cashback" },
    { id: 7, name: "IDFC First Bank", logo: idfc, cb: "5% Cashback" },
    { id: 8, name: "ICICI Bank", logo: icic, cb: "5% Cashback" },
    { id: 9, name: "Axis Bank", logo: Axis, cb: "20% Cashback" }, // specific to screenshot
    { id: 10, name: "Bajaj Finserv", logo: Bajaj, cb: "5% Cashback" },
    { id: 11, name: "IDFC First Bank", logo: idfc, cb: "5% Cashback" },
    { id: 12, name: "ICICI Bank", logo: icic, cb: "5% Cashback" },
    { id: 13, name: "Axis Bank", logo: Axis, cb: "5% Cashback" },
    { id: 14, name: "Bajaj Finserv", logo: Bajaj, cb: "5% Cashback" },
    { id: 15, name: "IDFC First Bank", logo: idfc, cb: "5% Cashback" },
];

// Mock Data for Recent Recharges matching Screenshot
const recentRecharges = [
    { id: 1, logo: idfc, vehicle: "AP 10 2345", amount: "₹500", date: "01 May 2026, 10:09AM", bg: "bg-[#faeaea]" },
    { id: 2, logo: Bajaj, vehicle: "AP 10 2345", amount: "₹500", date: "01 May 2026, 10:09AM", bg: "bg-[#eaf3fc]" },
    { id: 3, logo: icic, vehicle: "AP 10 2345", amount: "₹500", date: "01 May 2026, 10:09AM", bg: "bg-[#faeaea]" },
];

const feature1 = [
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

const ReachargeOn = [
    { title: 'Instant Recharge', desc: 'Recharge in just a seconds', icon: Thunder },
    { title: 'Best Plans', desc: 'Compare and choose the best plans', icon: discount },
    { title: 'Earn Cashback', desc: 'Earn cashback on every recharge', icon: Wallet },
    { title: 'Secure Payments', desc: '256-bit SSL encrypted transactions', icon: lock },
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

export default function FastagRecharge() {
    const [searchQuery, setSearchQuery] = useState("");
    
    // State to toggle layout when confirm is pressed
    const [isConfirmed, setIsConfirmed] = useState(false);

    // Filter banks based on search input
    const filteredBanks = banksData.filter((bank) =>
        bank.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleConfirm = (e) => {
        e.preventDefault(); 
        
        if (!isConfirmed) {
            // First Click: Reveal the new layout and input
            setIsConfirmed(true); 
        } else {
            // Second Click: Navigate to the details page
            // Note: Replace this with router.push('/fastag-details') if using Next.js
            // or navigate('/fastag-details') if using react-router-dom
            window.location.href = "/fastag-details";
        }
    };

    return (
        <div className="pt-36 mt-15  min-h-screen p-4 md:p-8 font-sans text-gray-800">
            <div className="max-w-[1207px] w-full mx-auto flex justify-between gap-8">
                
                {/* --- LEFT SIDE CONTAINER (Heights/Widths strictly preserved) --- */}
                <div className="max-w-[837px] max-h-[847px] w-full flex flex-col gap-6">

                    {/* TOP FORM CONTAINER */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 shrink-0">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">FASTag Recharge</h2>
                            <button className="flex items-center gap-1.5 text-xs bg-[#fff0f2] text-[#6F0014] px-3 py-1.5 rounded-full font-semibold border border-rose-100">
                                <Info size={14} />
                                <span>How to find FASTag bank?</span>
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Bank</label>
                                <input
                                    type="text"
                                    placeholder="Enter Bank Name"
                                    className="max-w-[763px] w-full  border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-50 focus:border-red-400 transition"
                                />
                            </div>

                            {/* --- CONDITIONAL TEXT FIELD --- */}
                            {isConfirmed && (
                                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                                    <h3 className="text-[14px] font-medium text-[#1C1B1B] mb-3">Vehicle/Chassis/Registered Mobile Number</h3>
                                    <input
                                        type="text"
                                        placeholder="Enter Vehicle Number/Chassis Number/Registered Mobile Number"
                                        className="max-w-[763px] w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-50 focus:border-red-400 transition"
                                    />
                                </div>
                            )}

                            <div className="flex justify-center pt-2">
                                {/* Button styling EXACTLY as original */}
                                <button
                                    onClick={handleConfirm}
                                    className="bg-[#6F0014] text-white font-bold py-3 px-16 rounded-xl hover:bg-[#52010f] transition-colors cursor-pointer w-full sm:w-auto"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>

                        {/* --- ORIGINAL BANKS GRID (Only shows if NOT confirmed) --- */}
                        {!isConfirmed && (
                            <>
                                <hr className="border-t border-gray-200 my-6" />

                                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900">Banks</h3>

                                    <div className="relative w-full sm:w-64">
                                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                        <input
                                            type="text"
                                            placeholder="Search for a Bank"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-50 focus:border-red-400 transition"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                                    {filteredBanks.map((bank, index) => (
                                        <div
                                            key={index}
                                            className="border border-[#ffffff] shadow rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer max-w-[128px] max-h[139px] gap-6"
                                        >
                                            <img
                                                src={bank.logo}
                                                alt={bank.name}
                                                className="w-[92px] h-[62px] object-contain mx-auto mb-2"
                                            />
                                            <span className="text-[11px] font-bold text-[#069341] bg-emerald-50 px-2 py-1 rounded-md w-full whitespace-nowrap">
                                                {bank.cb}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* --- NEW REPLACEMENT LAYOUT (Only shows AFTER confirm) --- */}
                    {isConfirmed && (
                        <div className="flex flex-col gap-6 animate-in fade-in duration-500 overflow-y-auto [&::-webkit-scrollbar]:hidden">
                            
                            {/* 1. Recent Recharges Card */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 shrink-0">
                                <h2 className="text-[20px] font-bold text-gray-900 mb-5">Recent Recharges</h2>
                                
                                <div className="flex gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                    {recentRecharges.map((item, index) => (
                                        <div key={index} className="min-w-[280px] border border-gray-100 rounded-2xl p-4 flex flex-col bg-white shrink-0 hover:border-gray-200 transition-colors">
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex gap-3 items-center">
                                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}>
                                                        <img src={item.logo} alt="logo" className="w-8 h-8 object-contain" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-gray-900 text-[14px]">{item.vehicle}</span>
                                                        <span className="font-bold text-[#8C1822] text-[13px] mt-0.5">{item.amount}</span>
                                                        <span className="text-[#8C1822] text-[11px] font-bold mt-1 cursor-pointer hover:underline">Continue Recharge</span>
                                                    </div>
                                                </div>
                                                <button className="text-gray-400 hover:text-gray-700">
                                                    <MoreVertical size={18} />
                                                </button>
                                            </div>
                                            <div className="w-full h-px bg-gray-100 my-2"></div>
                                            <span className="text-gray-400 font-medium text-[11px]">Last Recharge: {item.date}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 2. All FASTag Issuers Card */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 shrink-0">
                                <div className="flex justify-between items-center mb-5">
                                    <h2 className="text-[20px] font-bold text-gray-900">All FASTag Issuers</h2>
                                    <button className="text-[#8C1822] text-[13px] font-bold flex items-center gap-1 hover:underline cursor-pointer">
                                        View More <ArrowRight size={15} />
                                    </button>
                                </div>
                                
                                <div className="flex gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                    {banksData.map((bank, index) => (
                                        <div
                                            key={index}
                                            className="border border-gray-100 shadow-sm rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer min-w-[128px] h-[139px] gap-5 shrink-0 hover:border-gray-200 transition-colors"
                                        >
                                            <img
                                                src={bank.logo}
                                                alt={bank.name}
                                                className="w-[80px] h-[50px] object-contain mx-auto"
                                            />
                                            <span className="text-[11px] font-bold text-[#069341] bg-emerald-50 px-3 py-1.5 rounded-md w-full whitespace-nowrap">
                                                {bank.cb}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    )}
                </div>

                {/* --- RIGHT SIDE CONTAINER (Completely Untouched) --- */}
                <div className="space-y-6 shrink-0">
                    <div className="bg-white max-w-[348px] max-h-[260px] p-4 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-lg font-bold mb-4">Why Recharge On ViralPe?</h3>
                        <div className="space-y-4">
                            {ReachargeOn.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center flex-shrink-0">
                                        <img src={item.icon} alt={item.title} className="w-5 h-5 object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold">{item.title}</h4>
                                        <p className="text-xs text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#FFEDEE] p-6 rounded-2xl shadow-sm border border-rose-100 relative overflow-hidden flex flex-row items-center justify-between min-h-[140px]">
                        <div className="max-w-[60%]">
                            <h3 className="text-lg font-bold text-gray-900 leading-tight">Extra 5% Cashback</h3>
                            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                                On DTH Recharge of ₹500 or more
                            </p>
                            <span className="text-[9px] text-gray-400 block mt-4 font-medium">*T&C Apply</span>
                        </div>
                        <div className="text-4xl filter drop-shadow-md pr-2">
                            <img src={Gift} alt="Gift" />
                        </div>
                    </div>

                    <div className="max-h-[151px] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                        <div className="flex gap-7">
                            <div>
                                <img src={headphones} alt="Headphones" className="w-[51px] h-[50px]" />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-gray-900">Need Help?</h4>
                                <p className="text-xs text-gray-500 mt-1 max-w-[200px]">
                                    Chat with our support teams
                                </p>
                                <button className="mt-5 border border-[#6F0014] text-[#6F0014] font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-rose-50/50 transition flex items-center gap-2 cursor-pointer">
                                    <MessageSquare size={16} />
                                    <span>Chat Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* --- BOTTOM FEATURES (Untouched) --- */}
            <div className="max-w-[1210px] max-h-[118px] rounded-[24px] mt-[32px] bg-[#FFEDEE] px-1 py-8 md:px-8 lg:px-16 mx-auto gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
                    {feature1.map((feature) => (
                        <div key={feature.id} className="flex items-center gap-4 min-w-0">
                            <div className="flex h-11.75 w-11.75 flex-shrink-0 items-center justify-center rounded-[18px] bg-white text-[#8C1822] shadow-sm">
                                {renderIcon(feature.icon)}
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-[16px] font-semibold text-[#8C1822]">
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
        </div>
    );
}