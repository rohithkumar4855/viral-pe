import React from 'react';
import jio from "/images/jio.svg"
import airtel from "/images/airtel.svg"
import Thunder from "../../../public/images/Thunder.png"
import discount from "../../../public/images/Discount.svg"
import Wallet from "../../../public/images/wallet.svg"
import lock from "../../../public/images/Lock.png"
import Vi from "../../../public/images/Vi.svg";
import Bsnl from "../../../public/images/Bsnl.svg"
import Frame_1 from "../../../public/images/Frame_1.png";
import Frame_2 from "../../../public/images/Frame_2.png";
import Appleicon from "../../../public/images/appleicon.png";
import playstoreicon from "../../../public/images/playstoreicon.png";
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



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
export default function RechargeDashboard() {
    const navigate = useNavigate();

    const ReachargeOn = [
        { title: 'Instant Recharge', desc: 'Recharge in just a seconds', icon: Thunder },
        { title: 'Best Plans', desc: 'Compare and choose the best plans', icon: discount },
        { title: 'Earn Cashback', desc: 'Earn cashback on every recharge', icon: Wallet },
        { title: 'Secure Payments', desc: '256-bit SSL encrypted transactions', icon: lock },
    ];

    const RecentRecharges = [
        { number: "+91 90000 90000", price: "₹456", icon: airtel },
        { number: "+91 90000 90000", price: "₹456", icon: airtel },
        { number: "+91 90000 90000", price: "₹456", icon: jio },
        { number: "+91 90000 90000", price: "₹456", icon: airtel },
    ];

    const AllNetwork = [
        { icon: airtel, name: 'Airtel', cb: '5% Cashback' },
        { icon: Bsnl, name: 'BSNL', cb: '15% Cashback' },
        { icon: jio, name: 'Jio', cb: '10% Cashback' },
        { icon: Vi, name: 'Vi', cb: '20% Cashback' },
        { icon: Vi, name: 'Vi', cb: '20% Cashback' },
    ];

    return (
        <div className='pt-20'>
            <div className="min-h-screen bg-pink-50/30  font-sans text-slate-800">
                <div className="max-w-7xl mx-auto space-y-6">

                    {/* SECTION 1: Prepaid Recharge Form & Why ViralPe */}
                    <div className="flex flex-row  gap-6 items-stretch">
                        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm max-w-[837px] w-full  max-h-[260px] border border-slate-100 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold mb-6">Prepaid Recharge</h2>
                                <label className="block text-sm font-medium text-gray-600 mb-2">Mobile Number</label>
                                <div className="flex gap-2">
                                    <select className="rounded-l-xl px-3 bg-[#FFEDEE] font-bold focus:outline-none">
                                        <option>+91</option>
                                    </select>
                                    <input
                                        type="tel"
                                        placeholder="Enter Mobile Number"
                                        className="flex-1 -ml-2 border border-slate-200 max-w-[763px] rounded-r-xl px-4 py-3 w-full focus:outline-none"
                                    />
                                </div>
                            </div>
                            <button onClick={() => navigate('/prepaid-plans')} className="mt-8 bg-[#6F0014] text-white font-semibold py-3 px-12 rounded-xl self-center hover:bg-[#85031b] transition-colors cursor-pointer">
                                Confirm
                            </button>
                        </div>

                        <div className="bg-white max-w-[348px] w-full max-h-[278px] p-4 rounded-[13.78px] shadow-sm border border-slate-100">
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
                    </div>
                    {/* SECTION 2: Recent Recharges */}
                    <div className="bg-white max-w-[1217px] w-full max-h-[226px] p-4 rounded-[20px] shadow-sm border border-slate-100">
                        <h2 className="text-xl font-bold mb-4">Recent Recharges</h2>
                        <div className="flex flex-row gap-2 ">
                            {RecentRecharges.map((item, index) => (
                                <div key={index} className="border border-slate-100 rounded-xl p-4 max-w-[279px] w-full max-h-[135px] flex flex-col ">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex gap-4 items-center">
                                            <div className='p-2 bg-[#FFEDEE] rounded-2xl w-[60px] h-[60px] flex items-center justify-center flex-shrink-0'>
                                                <img src={item.icon} alt="operator icon" className="w-10 h-10 object-contain" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-gray-900">{item.number}</p>
                                                <p className="text-[#901c27] font-bold text-sm mt-0.5">{item.price}</p>
                                                <button className="text-xs text-[#901c27]  mt-1 block">Continue Recharge</button>
                                            </div>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600 text-lg">⋮</button>
                                    </div>
                                    <div className="border-t border-dashed border-slate-200 pt-2 text-[10px] text-gray-400">
                                        Last Recharge: 01 May 2026, 10:09AM
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SECTION 3: Operators & App Banner (FIXED GRID HERE) */}
                    <div className=" flex flex-row  gap-5 max-w-[1217px] w-full ">

                        {/* Network Operators List (Fixed Width & Height removed) */}
                        <div className=" bg-white p-4 max-w-[752px]  w-full max-h-[226px] rounded-[20px] shadow-sm border border-slate-100 flex flex-col justify-between">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-900">All Network Operators</h2>
                                <button className="text-[#901c27] font-semibold text-sm flex items-center gap-1  cursor-pointer">
                                    View More
                                </button>
                            </div>

                            <div className="flex flex-row gap-4">
                                {AllNetwork.map((op, idx) => (
                                    <div key={idx} className="border border-slate-100 rounded-xl p-4 flex flex-col items-center justify-center text-center bg-white shadow-sm hover:border-rose-200 transition-colors">
                                        <div className="w-12 h-12  flex items-center justify-center mb-3">
                                            <img src={op.icon} alt={op.name} className="w-full h-full object-contain" />
                                        </div>
                                        <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md w-full whitespace-nowrap">
                                            {op.cb}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Marketing Banner (Fixed w-110, ml-32, h-66 completely removed to make it fit properly) */}
                        <div className=" max-w-[457px] p-3 w-full max-h-[226px]  bg-[#FFEDEE] rounded-[20px] flex flex-row relative overflow-hidden shrink-0 shadow-sm">

                            {/* --- Left Text Content --- */}
                            <div className="flex flex-col  z-10 w-[240px]">
                                <h2 className="font-bold text-[28px] leading-[1.2] text-[#222222] mb-3">
                                    Recharge or Pay<br />Mobile Bill
                                </h2>

                                <p className="text-[16px] leading-[1.4] text-gray-700  max-w-[180px]">
                                    Collective earnings from our user community
                                </p>

                                <div className='flex flex-col gap-2 mt-1'>
                                    <button className="rounded-lg py-[8px] px-[5px] flex flex-row items-center gap-[6px]  text-white bg-[#721c22] transition-colors shadow-sm  max-w-[173px] max-h-[30px] w-full">
                                        <span className="text-[12px] font-medium leading-none mt-[1px]">Download ViralPe App</span>
                                        <div className="flex flex-row items-center gap-[4px]">
                                            <img src={playstoreicon} alt="Play Store" className="w-[14px] h-[14px] object-contain" />

                                        </div>
                                    </button>
                                    <button className="rounded-lg py-[10px] px-[5px] flex flex-row items-center gap-[6px]  text-white bg-[#721c22] transition-colors shadow-sm  max-w-[173px] max-h-[30px] w-full">
                                        <span className="text-[12px] font-medium leading-none mt-[1px]">Download ViralPe App</span>
                                        <div className="flex flex-row items-center gap-[4px]">
                                            <img src={Appleicon} alt="Apple" className="w-[14px] h-[14px] object-contain pb-[1px]" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="relative flex items-start">

                                {/* Mobile Card */}
                                <div className="w-[180px] h-[353.67px]  mr-[25px] bg-white rounded-[25.2px] border-[6.3px] border-[#222222] flex flex-col items-center mt-[40px] shadow-sm relative">

                                    <img
                                        src="/images/logoname.png"
                                        alt="ViralPe Logo"
                                        className=" object-contain mt-4"
                                    />
                                </div>

                                {/* Text Boxes */}
                                <div className="flex flex-col gap-2 absolute left-[px] right-[10px] mt-[120px]">

                                    {/* Top Text Box */}
                                    <div className="bg-white w-[222px] h-[31px] rounded-[4px] flex items-center justify-center  shadow-sm">
                                        <h1 className="text-[10px] text-[#222222CC] ">
                                            Collective earnings from our user community                                </h1>
                                    </div>

                                    {/* Bottom Text Box */}
                                    <div className="bg-white w-[222px] h-[31px] rounded-[4px] flex items-center justify-center shadow-sm">
                                        <h1 className="text-[10px] text-[#222222CC] ">
                                            Earn cashback on every recharge & bill payment
                                        </h1>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                    {/* Updated to max-w-[1210px] with left-alignment fixes */}
                    <div className="max-w-[1210px] w-full max-h-[118px]  rounded-[20px]  bg-[#FFEDEE] py-6 px-4 lg:px-6">
                        <div className="flex flex-row justify-between gap-5 w-full">
                            {features.map((feature) => (
                                <div key={feature.id} className="flex items-center gap-4">
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
                                            <p className="mt-1 text-sm">
                                                {feature.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>


        </div>

    );
}