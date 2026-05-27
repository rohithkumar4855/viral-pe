import React, { useState } from 'react';
import jio from "/images/jio.svg"
import airtel from "/images/airtel.svg"
import Vi from "../../../public/images/Vi.svg";
import Bsnl from "../../../public/images/bsnl.svg"
import tata from "../../../public/images/tataicon.svg"
import Frame_1 from "../../../public/images/Frame_1.png";
import Frame_2 from "../../../public/images/Frame_2.png";
import Appleicon from "../../../public/images/appleicon.png";
import playstoreicon from "../../../public/images/playstoreicon.png";
import thunder from "../../../public/images/thunder.png";
import wallet from "../../../public/images/wallet1.svg";
import Greenthunder from "../../../public/images/greenthunder.svg";
import Greentick from "../../../public/images/greenTick.svg";
import discount from "../../../public/images/discount.svg";
import lock from "../../../public/images/lock.png"
import dishtv from "../../../public/images/dishtvicon.svg";
import gift from "../../../public/images/gift.svg";
import headphones from "../../../public/images/headphones.png";
import sundirect from "../../../public/images/sundirecticon.svg";
import { ArrowRight } from "lucide-react";
import FeatureBanner from '../Dashboard/FeatureBanner';
// Mock Data for Recharge Plans

const plansData = [
    {
        id: 1,
        price: 299,
        plan: "HD Value Plus",

        cashback: "5% Cashback",
        validity: "28 Days",

        desc: "Add-On data pack..."
    },
    {
        id: 2,
        price: 499,
        plan: "Family Entertainemtt ",
        cashback: "20% Cashback",
        validity: "90 Days",
        desc: "Ultimate plan..."
    }



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


const dthOperators = [
    { type: "tata", logo: tata, label: "Tata Play", cashback: "5% Cashback" },
    { type: "dish", logo: dishtv, label: "Dish TV", cashback: "5% Cashback" },
    { type: "airtel", logo: airtel, label: "Airtel Digital TV", cashback: "5% Cashback" },
    { type: "sun", logo: sundirect, label: "Sun Direct", cashback: "5% Cashback" },
];


const AllNetwork = [
    { icon: airtel, name: 'Airtel', cb: '5% Cashback' },
    { icon: Bsnl, name: 'BSNL', cb: '15% Cashback' },
    { icon: jio, name: 'Jio', cb: '10% Cashback' },
    { icon: Vi, name: 'Vi', cb: '20% Cashback' },
    { icon: Vi, name: 'Vi', cb: '20% Cashback' },
];
const categories = ['Made for You (06)', 'Popular', 'Monthly', 'Long-validity', 'Add-on Packs '];

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
            icon: <img src={thunder} />

        },
        {
            title: "Best Plans",
            desc: "Compare and choose the best plans",
            icon: <img src={discount} />

        },
        {
            title: "Earn Cashback",
            desc: "Earn cashback on every recharge",
            icon: <img src={wallet} />

        },
        {
            title: "Secure Payments",
            desc: "256-bit SSL encrypted transactions",
            icon: <img src={lock} />
        }
    ];

    return (
        <div className=''>
            <div className="min-h-screen  p-4 md:p-8 font-sans antialiased text-gray-800">

                <div className="max-w-[1217px] mx-auto flex flex-col md:flex-row justify-between">


                    {/* LEFT & CENTER: Main Selection Panel */}
                    <div className="flex flex-col gap-4 ">

                        {/* Main Container Card */}
                        <div className=" bg-white h-[564px] rounded-2xl p-6 shadow-sm border border-gray-100 max-w-full max-h-full lg:w-[837px] ">
                            <h2 className="text-xl font-bold mb-4 text-gray-900">DTH Recharge</h2>

                            {/* Top Identity Block */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dashed border-gray-200 pb-6 mb-7">
                                <div className="flex items-center gap-3">
                                    <img src={tata} className='h-[36px] w-[36px]' />
                                    <div>
                                        <div className="font-bold text-gray-900">14890765567</div>
                                        <div className="text-xs text-gray-400">TATA Paly  .  +91 98987 48393</div>
                                    </div>
                                </div>

                                {/* Quick History Button */}
                                <div className="flex items-center gap-3  bg-white border-2 border-gray-100 rounded-xl p-3 sm:px-4">
                                    <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-500">
                                        <img src={thunder} />
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
                            <div className="flex  overflow-x-auto pb-4 mb-6 no-scrollbar gap-3 ">
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
                                <div className="flex  gap-4">
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
                                                            <span className="text-xl font-extrabold text-gray-900">₹{plan.plan}</span>
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
                                                                <div className="text-[10px] uppercase tracking-wider text-gray-400">Price</div>
                                                                <div className="text-xs font-bold text-gray-800">{plan.price}</div>
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

                        <div className="flex flex-row gap-6 items-start mx-auto">

                            {/* Left: Recent Recharges Card */}
                            <div className=" flex flex-col  max-w-[837px] w-full  bg-white rounded-2xl p-8 border border-gray-100 shadow-sm ">
                                <h2 className="text-xl font-bold mb-6">Recent Recharges</h2>
                                <div className="flex flex-row gap-4">
                                    {recentRecharges.map((recharge, index) => (
                                        <div
                                            key={index}
                                            className="border border-gray-100 rounded-2xl p-4 flex flex-col w-[246px] h-[131px] relative hover:shadow-md transition bg-white"
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



                        </div>
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
                    </div>

                    {/* RIGHT: Summary Sidebar */}
                    <div className="flex flex-col justify-between gap-3">

                        {/* Checkout Breakdown Card */}
                        <div className="bg-white rounded-2xl  p-6 shadow-sm border border-gray-100 w-full sm:w-[348px] sm:h-[607px] flex flex-col justify-between">
                            <h2 className="text-lg font-bold mb-4 text-gray-900">Recharge Details</h2>

                            {/* Target Number */}
                            <div className="flex items-center justify-between pb-4 border-b border-dashed border-gray-200 mb-4">
                                <div className="flex items-center gap-3">
                                    <img src={jio} />
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
                                        <img src={wallet} />
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
                                    <img src={Greentick} />
                                    100% Secure Payments
                                </span>
                                <span className="flex items-center gap-1 text-[12px] ">
                                    <img src={Greenthunder} />
                                    Instant Recharge
                                </span>
                            </div>
                        </div>

                        <div className=" flex flex-col gap-6">

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
                </div>
              
            </div>
              <div>
                <FeatureBanner />
                 </div>

        </div>

    );
}