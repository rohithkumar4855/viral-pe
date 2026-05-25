import React, { useState } from 'react';
import jio from "/images/jio.svg"
import airtel from "/images/airtel.svg"
import Vi from "../../../public/images/Vi.svg";
import Bsnl from "../../../public/images/Bsnl.svg"
import Frame_1 from "../../../public/images/Frame_1.png";
import Frame_2 from "../../../public/images/Frame_2.png";
import Appleicon from "../../../public/images/appleicon.png";
import playstoreicon from "../../../public/images/playstoreicon.png";
import thunder from "../../../public/images/Thunder.png";
import wallet from "../../../public/images/wallet1.svg";
import Greenthunder from "../../../public/images/Greenthunder.svg";
import Greentick from "../../../public/images/GreenTick.svg";
import discount from "../../../public/images/Discount.svg";
import lock from "../../../public/images/lock.png"
import { ArrowRight } from "lucide-react";
// Mock Data for Recharge Plans
const plansData = [
    {
        id: 1,
        price: 450,
        badge: 'Popular',
        cashback: '5% Cashback',
        validity: '28 Days',
        data: 'Unlimited',
        desc: 'Add-On data pack for ULD users; Includes Unlimited Data, 28 days, No SV. Valid on ULD Hero plan T&C Apply',
    },
    {
        id: 2,
        price: 900,
        badge: 'Exclusive',
        cashback: '20% Cashback',
        validity: '90 Days',
        data: '200GB',
        desc: 'Ultimate plan with 200GB data and additional benefits like international calling. Valid on Elite plan T&C Apply',
    },
    {
        id: 3,
        price: 1000,
        badge: 'Best Deal',
        cashback: '20% Cashback',
        validity: '90 Days',
        data: '200GB',
        desc: 'Offers 200GB data valid for 90 days, includes unlimited calls and texts. Valid on Ultimate plan T&C Apply',
    },
    {
        id: 4,
        price: 500,
        badge: 'Value Pick',
        cashback: '10% Cashback',
        validity: '30 Days',
        data: '100GB',
        desc: 'Offers 100GB data valid for 30 days, includes access to select streaming services. Valid on Basic plan T&C Apply',
    },
    {
        id: 5,
        price: 750,
        badge: 'Top Choice',
        cashback: '15% Cashback',
        validity: '60 Days',
        data: '150GB',
        desc: 'Offers 150GB data valid for 60 days, including priority customer service. Valid on Premium plan T&C Apply',
    },
    {
        id: 6,
        price: 600,
        badge: 'Best Value',
        cashback: '10% Cashback',
        validity: '30 Days',
        data: '100GB',
        desc: 'Includes a 100GB data pack with rollover benefits. Valid on SuperSaver plan T&C Apply',
    },
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

const renderIcon = (icon) => {
    return (
        <img
            src={icon}
            alt="icon"
            className="w-8.5 h-8.5 object-contain"
        />
    );
};
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
const categories = ['Made for You (06)', 'Popular', 'Talktime', '5G Unlimited', '2GB/Day Data', 'Unlimited'];

export default function PrepaidRechargeSection() {
    const [selectedPlan, setSelectedPlan] = useState(plansData[0]);
    const [activeCategory, setActiveCategory] = useState('Made for You (06)');
    const [useWallet, setUseWallet] = useState(false);

    // Summary Calculations
    const subtotal = selectedPlan ? selectedPlan.price : 0;
    const cashbackAmount = selectedPlan ? Math.round((subtotal * parseInt(selectedPlan.cashback)) / 100) : 0;

    // Note: The UI image displays a "Grand Total" that seems to be a static mock calculation (Subtotal + Cashback), 
    // but standard logic is applied here for a functional payment flow.
    const grandTotal = subtotal;


    const features = [
        {
            title: "Instant Recharge",
            desc: "Recharge in just a seconds",
            icon: <img src={thunder}/>
            
        },
        {
            title: "Best Plans",
            desc: "Compare and choose the best plans",
            icon: <img src={discount}/>
            
        },
        {
            title: "Earn Cashback",
            desc: "Earn cashback on every recharge",
             icon: <img src={wallet}/>
            
        },
        {
            title: "Secure Payments",
            desc: "256-bit SSL encrypted transactions",
           icon: <img src={lock}/>
        }
    ];

    return (
        <div className='mt-25'>
            <div className="min-h-screen  p-4 md:p-8 font-sans antialiased text-gray-800">
                
                <div className="max-w-[1217px] mx-auto flex flex-col md:flex-row justify-between">


                    {/* LEFT & CENTER: Main Selection Panel */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Main Container Card */}
                        <div className=" bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-full max-h-full lg:w-[837px] lg:h-[1027px]">
                            <h2 className="text-xl font-bold mb-4 text-gray-900">Prepaid Recharge</h2>

                            {/* Top Identity Block */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dashed border-gray-200 pb-6 mb-7">
                                <div className="flex items-center gap-3">
                                    <img src={jio}/>
                                    <div>
                                        <div className="font-bold text-gray-900">+91 90000 00000</div>
                                        <div className="text-xs text-gray-400">Jio • Andhra Pradesh</div>
                                    </div>
                                </div>

                                {/* Quick History Button */}
                                <div className="flex items-center gap-3  bg-white border-2 border-gray-100 rounded-xl p-3 sm:px-4">
                                    <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-500">
                                       <img src={thunder}/>
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold text-gray-900">Recharge with Last Plan</div>
                                        <div className="text-xs text-gray-500">₹156 • 28 Days</div>
                                    </div>
                                </div>
                            </div>

                            {/* Sub Header Search Menu */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 mt-10">
                                <h2 className="text-xl font-bold text-gray-900">Choose a Plan</h2>

                                <div className="flex items-center gap-2 w-full md:w-auto">
                                    <div className="relative flex-1 md:w-64">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.602Z" />
                                            </svg>
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Search for a plan..."
                                            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-400 transition"
                                        />
                                    </div>
                                    <button className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Categories Horizontal Scroll */}
                            <div className="flex  overflow-x-auto pb-4 mb-6 no-scrollbar justify-between ">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`whitespace-nowrap px-4 py-1.5 rounded-[12px] text-xs font-semibold tracking-wide border transition ${activeCategory === cat
                                            ? 'bg-[#901c27] border-amber-950 text-white'
                                            : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Grid of Plans */}
                            <div className='mt-10'>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {plansData.map((plan) => {
                                        const isSelected = selectedPlan?.id === plan.id;
                                        return (
                                            <div
                                                key={plan.id}
                                                onClick={() => setSelectedPlan(plan)}
                                                className={`cursor-pointer rounded-2xl p-5 border transition-all flex flex-col justify-between relative ${isSelected
                                                    ? 'border-red-800 bg-red-50/10 ring-1 ring-[#901C27] hover:bg-[#FFEDEE66]'
                                                    : 'border-gray-200 hover:border-gray-300 bg-white'
                                                    }`}
                                            >
                                                <div>
                                                    {/* Top Banner Tag */}
                                                    <div className="absolute top-3 left-0 rounded-br-[20px] rounded-tl-[20px] -translate-y-1/2 bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-100">
                                                        {plan.cashback}
                                                    </div>

                                                    {/* Info Row */}
                                                    <div className="flex items-baseline justify-between mt-2 mb-4">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-xl font-extrabold text-gray-900">₹{plan.price}</span>
                                                            <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-1.5 py-0.5 rounded">
                                                                {plan.badge}
                                                            </span>
                                                        </div>
                                                        <div className="flex gap-4 text-right">
                                                            <div>
                                                                <div className="text-[10px] uppercase tracking-wider text-gray-400">Validity</div>
                                                                <div className="text-xs font-bold text-gray-800">{plan.validity}</div>
                                                            </div>
                                                            <div>
                                                                <div className="text-[10px] uppercase tracking-wider text-gray-400">Data</div>
                                                                <div className="text-xs font-bold text-gray-800">{plan.data}</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-xs text-gray-500 leading-relaxed mb-6 line-clamp-3">
                                                        {plan.desc}
                                                    </p>
                                                </div>

                                                {/* Action Button */}
                                                <button
                                                    className={`w-full py-2 rounded-xl text-xs font-bold transition ${isSelected
                                                        ? 'bg-white border border-red-800 text-red-800'
                                                        : 'bg-white border border-red-800/30 text-red-800 hover:bg-red-50/50'
                                                        }`}
                                                >
                                                    {isSelected ? '✓ Selected' : `Recharge ₹${plan.price}`}
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* RIGHT: Summary Sidebar */}
                    <div className="flex flex-col justify-between">

                        {/* Checkout Breakdown Card */}
                        <div className="bg-white rounded-2xl  p-6 shadow-sm border border-gray-100 w-full sm:w-[348px] sm:h-[607px] flex flex-col justify-between">
                            <h2 className="text-lg font-bold mb-4 text-gray-900">Recharge Details</h2>

                            {/* Target Number */}
                            <div className="flex items-center justify-between pb-4 border-b border-dashed border-gray-200 mb-4">
                                <div className="flex items-center gap-3">
                                    <img src={jio}/>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">+91 90000 00000</div>
                                        <div className="text-[11px] text-gray-400">Jio • Andhra Pradesh</div>
                                    </div>
                                </div>
                                <button className="text-xs font-semibold text-[#901c27] ">Change</button>
                            </div>

                            {/* Price Calculations */}
                            <div className="space-y-3 text-sm text-gray-600 border-b border-dashed border-gray-200 pb-4 mb-4">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-gray-900">₹{subtotal.toFixed(2)}</span>
                                </div>

                                {/* Cashback Line Item Deduction */}
                                {cashbackAmount > 0 && (
                                    <div className="flex justify-between text-emerald-600 font-medium">
                                        <span>Cashback Applied</span>
                                        <span>- ₹{cashbackAmount.toFixed(2)}</span>
                                    </div>
                                )}

                                <div className="flex justify-between items-center pt-2 border-t border-dashed border-gray-200">
                                    <span className="font-bold text-gray-900">Grand Total</span>
                                    <span className="text-lg font-extrabold text-red-800">
                                        ₹{(subtotal - cashbackAmount).toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            {/* Savings Notice */}
                            {cashbackAmount > 0 && (
                                <div className="bg-emerald-50 text-emerald-700 text-xs font-medium p-2.5 rounded-xl text-center mb-5">
                                    You save ₹{cashbackAmount.toFixed(2)} on this recharge!
                                </div>
                            )}

                            {/* Wallet Toggle Row */}
                            <div className="flex items-center justify-between bg-gray-50 border border-gray-100 p-3 rounded-xl mb-5">
                                <div className="flex items-center gap-3">
                                    <div className="text-red-800">
                                       <img src={wallet}/>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-900">Use ViralPe Wallet</div>
                                        <div className="text-[10px] text-gray-400">Available Balance : ₹175.00</div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setUseWallet(!useWallet)}
                                    className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${useWallet ? 'bg-red-800' : 'bg-gray-300'}`}
                                >
                                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${useWallet ? 'translate-x-4' : 'translate-x-0'}`} />
                                </button>
                            </div>

                            {/* Payment Button */}
                            <button className="w-full bg-[#901c27]  text-white font-bold py-3 rounded-xl text-sm transition shadow-sm">
                                Pay ₹{(subtotal - cashbackAmount).toFixed(2)}
                            </button>

                            {/* Badges Footer */}
                            <div className="flex justify-between items-center mt-5 text-[12px] text-[#1C1B1BCC]  px-1">
                                <span className="flex items-center gap-1  ">
                                    <img src={Greentick}/>
                                    100% Secure Payments
                                </span>
                                <span className="flex items-center gap-1 text-[12px] ">
                                    <img src={Greenthunder}/>
                                    Instant Recharge
                                </span>
                            </div>
                        </div>

                        {/* Value Propositions Card via Map Function */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full sm:w-[348px] h-[388px] flex flex-col justify-between">
                            <h3 className="text-[20px] font-bold text-gray-900 mb-2">Why Recharge On ViralPe?</h3>

                            {features.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="p-2 bg-rose-50 text-rose-600 rounded-xl mt-0.5">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-900">{item.title}</h4>
                                        <p className="text-[11px] text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

                <div className="mx-auto mt-[32px] bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-full max-h-full lg:w-[1217px] ">
                    <h2 className="text-xl font-bold mb-4">Recent Recharges</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {RecentRecharges.map((item, index) => (
                            <div key={index} className="border border-slate-100 rounded-xl p-4 bg-white flex flex-col justify-between">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex gap-4 items-center">
                                        <div className='p-2 bg-[#FFEDEE] rounded-2xl w-[60px] h-[60px] flex items-center justify-center flex-shrink-0'>
                                            <img src={item.icon} alt="operator icon" className="w-10 h-10 object-contain" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm text-gray-900">{item.number}</p>
                                            <p className="text-[#901c27] font-bold text-sm mt-0.5">{item.price}</p>
                                            <button className="text-xs text-[#901c27]  mt-1 block hover:text-rose-600">Continue Recharge</button>
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
                <div className="flex mt-[32px]  gap-6 max-w-[1217px] justify-between mx-auto">

                    {/* Network Operators List (Fixed Width & Height removed) */}
                    <div className="lg:col-span-2 max-w-[752px] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-900">All Network Operators</h2>
                            <button className="text-[#901c27] font-semibold text-sm flex items-center gap-1  cursor-pointer">
                                View More  <ArrowRight size={14} />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                            {AllNetwork.map((op, idx) => (
                                <div key={idx} className="border border-slate-100 rounded-xl p-4 flex flex-col items-center justify-center text-center bg-white shadow-sm hover:border-rose-200 transition-colors">
                                    <div className="w-12 h-12 flex items-center justify-center mb-3">
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
                    <div className="relative bg-[#FFEDEE] w-full max-w-[433px] rounded-2xl flex flex-row  overflow-hidden shadow-sm border border-rose-100  ">
                        {/* --- Left Text Content --- */}
                        <div className="flex flex-col justify-center py-6 pl-7 z-10 w-3/5">
                            <h2 className="font-bold text-[24px] sm:text-[26px] leading-[1.2] text-[#222222] mb-2">
                                Recharge or Pay<br />Mobile Bill
                            </h2>

                            <p className="text-[13px] leading-[1.4] text-gray-600 mb-5 max-w-[180px]">
                                Collective earnings from our user community
                            </p>

                            <div className="space-y-2">
                                <button className="rounded-lg py-[8px] px-[12px] flex items-center gap-[6px] bg-[#6F0014] text-white hover:bg-[#52010f] transition-colors shadow-sm w-fit cursor-pointer text-[12px] font-medium">
                                    <span>Download ViralPe App</span>
                                    <img src={playstoreicon} alt="Play Store" className="w-[14px] h-[14px] object-contain" />
                                </button>
                                <button className="rounded-lg py-[8px] px-[12px] flex items-center gap-[6px] bg-[#6F0014] text-white hover:bg-[#52010f] transition-colors shadow-sm w-fit cursor-pointer text-[12px] font-medium">
                                    <span>Download ViralPe App</span>
                                    <img src={Appleicon} alt="Apple" className="w-[14px] h-[14px] object-contain" />
                                </button>
                            </div>
                        </div>

                        {/* --- Right Frame/Mockup Side --- */}
                        <div className="w-2/5 relative ">
                            {/* Mobile Outer Wrapper */}
                            <div className="absolute top-[60px] right-4 w-[180px] h-[354px] bg-white rounded-t-[25.2px] border-[6.3px] border-[#222222] z-0 flex flex-col items-center pt-[30px] shadow-sm">
                                <img
                                    src="/images/logoname.png"
                                    alt="ViralPe Logo"
                                    className="w-[90px] h-auto object-contain"
                                />
                            </div>
                            <img
                                src={Frame_1}
                                alt="Frame_1"
                                className="absolute top-[135px] right-1 h-[31px] max-w-[222px] h-auto object-contain z-10 drop-shadow-md"
                            />
                            <img
                                src={Frame_2}
                                alt="Frame_2"
                                className="absolute top-[170px] right-1 h-[31px] max-w-[222px] h-auto object-contain z-10 drop-shadow-md"
                            />
                        </div>
                    </div>

                </div>

<div className="max-w-[1210px] max-h-[118px] rounded-[24px] mt-[32px] bg-[#FFEDEE] px-1 py-8 md:px-8 lg:px-16 mx-auto  gap-6">
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6 ">
                {feature1.map((feature) => (

                    <div key={feature.id} className="flex items-center gap-4 min-w-0 ">
                        {/* Icon Box */}
                        <div className="flex h-11.75 w-11.75 flex-shrink-0 items-center justify-center rounded-[18px] bg-white text-[#8C1822] shadow-sm">
                            {renderIcon(feature.icon)}
                        </div>

                        {/* Text */}
                        <div className="flex flex-col justify-center">
                            <h3 className="text-[16px] font-semibold text-(--primary-red)">
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


        </div>

    );
}