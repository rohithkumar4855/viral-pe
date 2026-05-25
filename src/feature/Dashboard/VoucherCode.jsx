import React from 'react';
import { Gift, Share2, Copy, ShoppingCart, CreditCard, Ticket, Code, ChevronDown, MessageSquare, ChevronUp } from 'lucide-react';
import headphones from "../../../public/images/earphones.svg"
import Myntra from "../../../public/images/myntra.png";
import Addproducticon from "../../../public/images/Addproducts.svg";
import Cardicon from "../../../public/images/Cardicon.svg";
import voucher from "../../../public/images/Voucher.svg";
import code from "../../../public/images/code.svg";

// Define the steps data for the "How to Use?" section
const steps = [
    { iconSrc: Addproducticon, title: 'Add Products', desc: 'Add Products to your cart on Myntra.' },
    { iconSrc: Cardicon, title: 'Go to Payment Page', desc: 'Go to Payment Page.' },
    { iconSrc: voucher, title: 'Select Voucher', desc: 'Select Voucher as Payment Option.' },
    { iconSrc: code, title: 'Enter Voucher Code', desc: 'Enter voucher code to apply the discount.' },
];

const VoucherDetailCard = () => {
    return (
        <div className='pt-20 max-w-[1217px] flex mx-auto'>
            <div className='flex flex-col gap-5 items-center w-full px-4'>

                {/* Top Card: Brand and Cashback Info */}
                <div className="w-full max-w-[790px] bg-white border border-gray-100 rounded-[20px] p-6 shadow-sm font-sans box-border">

                    {/* Top Section: Brand and Amount */}
                    <div className="flex items-center gap-4 mb-5">
                        {/* Brand Logo */}
                        <div className=" flex items-center justify-center">
                            <img
                                src={Myntra}
                                alt="Myntra Logo"
                                className="w-[73px] h-[63px] object-contain"
                            />
                        </div>
                        {/* Brand Details */}
                        <div className="flex flex-col">
                            <span className="text-[16px] text-[#1C1B1BCC] font-semibold">Myntra</span>
                            <span className="text-[24px] font-bold text-[#1C1B1B] leading-none mt-1">₹700</span>
                        </div>
                    </div>

                    {/* Horizontal Divider */}
                    <hr className="border-gray-100 border-[1px] mb-5" />

                    {/* Bottom Section: Purchase Info and Cashback */}
                    <div className="flex items-center justify-between w-full px-2">

                        {/* Left Column: Purchased On */}
                        <div className="flex items-center gap-4 flex-1">
                            <div className="w-[46px] h-[46px] rounded-[14px] bg-[#FFF0F2] flex items-center justify-center flex-shrink-0 text-[#8C1822]">
                                <Gift size={22} strokeWidth={2} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[12px] text-gray-500 font-medium">Purchased On</span>
                                <span className="text-[15px] font-bold text-gray-900 mt-0.5 tracking-tight">30 Apr 2026, 10:19 AM</span>
                            </div>
                        </div>

                        {/* Vertical Divider */}
                        <div className="w-px h-[40px] bg-gray-200 mx-6"></div>

                        {/* Right Column: Cashback Earned */}
                        <div className="flex items-center gap-4 flex-1">
                            <div className="w-[46px] h-[46px] rounded-[14px] bg-[#FFF0F2] flex items-center justify-center flex-shrink-0 text-[#8C1822]">
                                <Gift size={22} strokeWidth={2} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[12px] text-gray-500 font-medium">Cashback Earned</span>
                                <span className="text-[16px] font-bold text-[#00a859] mt-0.5 tracking-tight">₹30</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Card: Voucher Code Details */}
                <div className="w-full max-w-[790px] bg-white border border-gray-100 rounded-[20px] p-6 shadow-sm font-sans box-border">
                    <h2 className="text-[18px] font-bold text-gray-900 mb-6 px-2">Voucher Code</h2>

                    {/* Dashed Box Container */}
                    <div className="max-w-[527px] mx-auto border-[1.5px] border-dashed border-[#8C1822] bg-[#FFEDEE66] rounded-[24.69px] py-10 px-8 flex flex-col items-center justify-center mb-4">

                        <h3 className="text-[24px] font-semibold text-[#901C27] mb-2">
                            VPAMY524973648
                        </h3>
                        <p className="text-[15px] text-[#1C1B1B99] text-center">
                            This is a unique code. Do not share it with anyone
                        </p>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-center gap-4 w-full mt-6">
                            <button className="flex-1 max-w-[199px] h-[48px] flex items-center justify-center gap-2 py-3 px-4 rounded-[12.35px] border border-[#8C1822] text-[#8C1822] font-semibold text-[15px] hover:bg-rose-50 transition-colors">
                                <Share2 size={18} strokeWidth={2.5} />
                                <span className='text-[16px]'>Share</span>
                            </button>
                            <button className="flex-1 max-w-[230px] h-[48px] flex items-center justify-center gap-2 py-3 px-4 rounded-[12.35px] bg-[#901c27] text-white font-semibold text-[15px] hover:bg-[#6e131b] transition-colors">
                                <Copy size={18} strokeWidth={2.5} />
                                <span className='text-[16px]'>Copy Code</span>
                            </button>
                        </div>

                    </div>
                </div>

                {/* How to Use Section */}
                <div className="w-full max-w-[790px] bg-white border border-gray-100 rounded-[20px] p-8 shadow-sm font-sans box-border">
                    <h2 className="text-[22px] font-bold text-gray-900 mb-8">How to Use?</h2>

                    <div className="flex items-start justify-between gap-2">
                        {steps.map((step, index) => (
                            <React.Fragment key={index}>
                                {/* Step Item */}
                                <div className="flex flex-col items-center text-center flex-1">
                                    <div className="w-[60px] h-[60px] rounded-2xl  flex items-center justify-center text-[#8C1822] ">
                                        <img
                                            src={step.iconSrc}
                                            alt={step.title}
                                            className="w-[54px] h-[54px] object-contain"
                                        />
                                    </div>
                                    <h3 className="text-[15px] font-bold text-gray-900 mb-1">{step.title}</h3>
                                    <p className="text-[12px] text-gray-500 leading-tight px-2">{step.desc}</p>
                                </div>

                                {/* Arrow (don't show after the last item) */}
                                {index < steps.length - 1 && (
                                    <div className="text-[#8C1822] mt-6 flex-shrink-0 opacity-60">
                                        <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            {/* Dashed Line */}
                                            <line x1="0" y1="12" x2="58" y2="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                                            {/* Solid Arrowhead */}
                                            <path d="M54 7L60 12L54 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="w-full max-w-[790px] max-h-[97px] bg-white border border-gray-100 rounded-[20px] p-8 shadow-sm font-sans box-border flex items-center justify-between cursor-pointer">
                    <h1 className="text-[18px] font-bold text-gray-900">Terms & Conditions</h1>
                    <ChevronDown size={24} className="text-gray-500" />
                </div>

            </div>

            <div className='flex flex-col gap-3'>
                <div className="max-h-[213px] max-w-[384px] w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
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
                <div className="w-[393px] h-[374px] bg-white border border-gray-100 rounded-[20px] p-6 shadow-sm font-sans box-border flex flex-col">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-[20px] font-bold text-gray-900">Voucher Details</h2>
                        <ChevronUp size={24} className="text-gray-800 cursor-pointer" />
                    </div>

                    {/* Details List */}
                    <div className="flex flex-col justify-between flex-1 pb-2">

                        {/* Voucher ID */}
                        <div className="flex items-center justify-between">
                            <span className="text-[14px] text-gray-500 font-medium">Voucher ID</span>
                            <div className="flex items-center gap-2">
                                <span className="text-[14px] font-bold text-gray-900">VPPE12344567890</span>
                                <Copy size={16} className="text-[#8C1822] cursor-pointer hover:text-[#6e131b] transition-colors" />
                            </div>
                        </div>

                        {/* Amount */}
                        <div className="flex items-center justify-between">
                            <span className="text-[14px] text-gray-500 font-medium">Amount</span>
                            <span className="text-[14px] font-bold text-gray-900">₹700</span>
                        </div>

                        {/* Amount Paid by UPI */}
                        <div className="flex items-center justify-between">
                            <span className="text-[14px] text-gray-500 font-medium">Amount Paid by UPI</span>
                            <span className="text-[14px] font-bold text-gray-900">₹100.00</span>
                        </div>

                        {/* Amount Paid by Wallet */}
                        <div className="flex items-center justify-between">
                            <span className="text-[14px] text-gray-500 font-medium">Amount Paid by ViralPe Wallet</span>
                            <span className="text-[14px] font-bold text-gray-900">₹99.00</span>
                        </div>

                        {/* Wallet Transaction ID */}
                        <div className="flex items-center justify-between">
                            <span className="text-[14px] text-gray-500 font-medium">Wallet Transaction ID</span>
                            <div className="flex items-center gap-2">
                                <span className="text-[14px] font-bold text-gray-900">WLT1234568908</span>
                                <Copy size={16} className="text-[#8C1822] cursor-pointer hover:text-[#6e131b] transition-colors" />
                            </div>
                        </div>

                        {/* Date & Time */}
                        <div className="flex items-center justify-between">
                            <span className="text-[14px] text-gray-500 font-medium">Date & Time</span>
                            <span className="text-[14px] font-bold text-gray-900">07 May 2026, 10:16AM</span>
                        </div>

                        {/* Transaction Status */}
                        <div className="flex items-center justify-between">
                            <span className="text-[14px] text-gray-500 font-medium">Transaction Status</span>
                            <span className="text-[14px] font-bold text-[#00a859]">Success</span>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default VoucherDetailCard;