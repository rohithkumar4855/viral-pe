import React, { useState } from 'react';
import headphones from "../../../public/images/Earphones.svg";
import chat from "../../../public/images/chat.svg";
import lock from "../../../public/images/lock.png";
import gift from "../../../public/images/gift4.svg";
import wallet from "../../../public/images/wallet1.svg";
import limit from "../../../public/images/limit.svg";
import coins from "../../../public/images/coins1.svg";
import bonus from "../../../public/images/bonus.svg";
import cashback from "../../../public/images/cash2.svg";
import circular from "../../../public/images/circular.svg";

// 1. Import your Modals
import TransactionDetailsModal from './TransactionDetailsModal';
// NEW: Import the Postpaid modal (You will need to create this file!)
import PostpaidTransactionModal from './PostpaidTransactionModal';

import {

    Search,
    ChevronUp,
    Calendar,

    ArrowUpRight,
    ArrowDownLeft
} from 'lucide-react';

// --- DATA ---
const topTransactionData = [
    { id: 1, title: 'WALLET BALANCE', amount: '₹ 5,000.00', subtitle: 'Available to Use', icon: wallet },
    { id: 2, title: 'ZONAL ROYALTY', amount: '₹ 5,000.00', subtitle: 'Total Earned Till Date', icon: wallet },
    { id: 3, title: 'LIFETIME EARNIN...', amount: '₹ 25,000.00', subtitle: 'Total Earned Till Date', icon: coins },
    { id: 4, title: 'TOTAL CASHBACK', amount: '₹ 25,000.00', subtitle: 'Total Cashback In This Month', icon: cashback },
    { id: 5, title: 'REFERRAL BONUS', amount: '₹ 25,000.00', subtitle: 'Pending Claim', icon: bonus },
    { id: 6, title: 'REVERSAL WALLET', amount: '₹ 25,000.00', subtitle: 'Pending Claim', icon: circular },
];

const listTransactions = [
    { id: 1, type: 'Prepaid Recharge', details: 'Airtel Prepaid - 90000 00000', date: '07 May 2026, 10:16 AM', amount: '₹199.00', status: 'Success', iconType: 'out' },
    { id: 2, type: 'Postpaid Recharge', details: 'Airtel Prepaid - 90000 00000', date: '07 May 2026, 10:16 AM', amount: '₹199.00', status: 'Success', iconType: 'out' },
    { id: 3, type: 'DTH Recharge', details: 'Tata Play - 14800007', date: '08 May 2026, 11:30 AM', amount: '₹299.00', status: 'Failed', iconType: 'out' },
    { id: 4, type: 'Referral Bonus', details: 'Referral - Ramesh Kumar', date: '11 May 2026, 09:15 AM', amount: '+ ₹50.00', status: 'Success', iconType: 'in' },
    { id: 5, type: 'Cashback Received', details: 'For Mobile Recharge', date: '09 May 2026, 02:45 PM', amount: '+ ₹50.00', status: 'Success', iconType: 'in' },
    { id: 6, type: 'Wallet Topup', details: 'Added from Bank Account', date: '09 May 2026, 10:00 AM', amount: '+ ₹500.00', status: 'Success', iconType: 'in' },
    { id: 7, type: 'Electricity Bill', details: 'BESCOM - 123456789', date: '10 May 2026, 11:00 AM', amount: '₹1,250.00', status: 'Success', iconType: 'out' }
];

const securityFeatures = [
    { id: 1, title: "100% Secure", description: "Your data and earnings are completely safe", icon: lock },
    { id: 2, title: "No Limits", description: "Refer unlimited friends and earn unlimited rewards", icon: limit },
    { id: 3, title: "Instant Rewards", description: "Get ₹25 instantly in your wallet", icon: gift },
    { id: 4, title: "Easy Withdrawals", description: "Withdraw your earnings to bank or wallet anytime", icon: wallet }
];

// --- SUB-COMPONENTS ---
const CustomCheckbox = ({ label, checked, onChange }) => (
    <div className="flex items-center justify-between cursor-pointer mb-2 group select-none" onClick={onChange}>
        <span className="text-sm text-gray-600 group-hover:text-gray-900">{label}</span>
        <div className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-colors duration-200 ${checked ? 'bg-[#8a3c46] border-[#8a3c46]' : 'border-gray-300'}`}>
            {checked && (
                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            )}
        </div>
    </div>
);

// --- MAIN LAYOUT COMPONENT ---
const TransactionsDashboard = () => {
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    const [typeFilters, setTypeFilters] = useState({
        'All': true,
        'Recharge & Bills': true,
        'Referral Bonus': false,
        'Zonal Royalty': false,
    });

    const [statusFilters, setStatusFilters] = useState({
        'All': false,
        'Success': false,
        'Pending': false,
        'Failed': false,
    });

    const toggleTypeFilter = (key) => setTypeFilters(prev => ({ ...prev, [key]: !prev[key] }));
    const toggleStatusFilter = (key) => setStatusFilters(prev => ({ ...prev, [key]: !prev[key] }));

    const handleClearAll = () => {
        setTypeFilters({ 'All': false, 'Recharge & Bills': false, 'Referral Bonus': false, 'Zonal Royalty': false });
        setStatusFilters({ 'All': false, 'Success': false, 'Pending': false, 'Failed': false });
    };

    return (
        <div className='pt-20 bg-[#faf7f7] min-h-screen relative'>
            <div className="w-full flex flex-col items-center pb-8 font-sans gap-6">

                {/* TOP SECTION: TRANSACTION CARDS */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between border border-gray-100 w-[1216px] h-[216px] shrink-0">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">Transactions</h2>
                    <div className="flex flex-row items-center justify-between gap-4 h-full">
                        {topTransactionData.map((item) => (
                            <div key={item.id} className=" min-w-[183px] w-full max-h-[120px] h-full border border-gray-100 rounded-2xl p-4 flex flex-col justify-center bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-[#fcf3f3] p-2 rounded-lg">
                                        <img src={item.icon} alt={item.title} className="w-5 h-5 object-contain" />
                                    </div>
                                    <span className="text-[11px] font-bold text-[#8a3c46] uppercase">{item.title}</span>
                                </div>
                                <h3 className="text-[22px] font-bold text-gray-900 mb-1">{item.amount}</h3>
                                <p className="text-[10px] text-gray-500">{item.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MIDDLE SECTION: FILTER & LIST  */}
                <div className="flex justify-between items-start w-[1216px] shrink-0">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col overflow-hidden w-[384px] h-[464px] shrink-0">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-bold text-gray-900">Filter</h2>
                                <button onClick={handleClearAll} className="text-sm font-medium text-[#8a3c46] hover:underline">Clear All</button>
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-center mb-3 cursor-pointer">
                                        <h3 className="font-semibold text-gray-800 text-sm">Transaction Type <span className="text-[#8a3c46]">(02)</span></h3>
                                        <ChevronUp className="w-4 h-4 text-gray-500" />
                                    </div>
                                    <div>
                                        {Object.entries(typeFilters).map(([label, isChecked]) => (
                                            <CustomCheckbox key={label} label={label} checked={isChecked} onChange={() => toggleTypeFilter(label)} />
                                        ))}
                                    </div>
                                </div>

                                <hr className="border-gray-100 my-2" />

                                <div>
                                    <div className="flex justify-between items-center mb-3 cursor-pointer">
                                        <h3 className="font-semibold text-gray-800 text-sm">Status</h3>
                                        <ChevronUp className="w-4 h-4 text-gray-500" />
                                    </div>
                                    <div>
                                        {Object.entries(statusFilters).map(([label, isChecked]) => (
                                            <CustomCheckbox key={label} label={label} checked={isChecked} onChange={() => toggleStatusFilter(label)} />
                                        ))}
                                    </div>
                                </div>

                                <hr className="border-gray-100 my-2" />

                                <div>
                                    <div className="flex justify-between items-center mb-2 cursor-pointer">
                                        <h3 className="font-semibold text-gray-800 text-sm">Date Range</h3>
                                        <ChevronUp className="w-4 h-4 text-gray-500" />
                                    </div>
                                    <div className="flex items-center justify-between border border-gray-200 rounded-lg p-2.5 cursor-pointer hover:border-gray-300">
                                        <span className="text-sm text-gray-600">01 May 2026 - 31 May 2026</span>
                                        <Calendar className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border p-6 border-gray-100 flex gap-5 w-[384px] h-[151px] shrink-0">
                            <div className="text-[#901c37]">
                                <img src={headphones} alt="Headphones" className='w-[56px] max-h-[50px] object-contain' />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-semibold mb-1">Need Help?</h3>
                                <p className="text-[15px] text-[#1C1B1BB2] mb-3 leading-tight">Chat with our support teams</p>
                                <button className="flex items-center gap-2 border border-[#8a3c46] text-[#8a3c46] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#fcf3f3] transition-colors">
                                    <img src={chat} alt="Chat" className='max-w-[18px] w-full h-[18px]' />
                                    Chat Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col w-[800px] h-[779px] shrink-0">
                        <div className="p-6 pb-2 border-b border-gray-50 shrink-0">
                            <div className="flex justify-between items-center mb-6 ">
                                <span className="text-sm text-gray-500">Sort By</span>
                                <div className="relative">
                                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input type="text" placeholder="Search by name, service or amount.." className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-72 focus:outline-none focus:border-gray-400" />
                                </div>
                            </div>
                            <h3 className="font-bold text-sm text-gray-900">14 May 2026</h3>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 pt-2 custom-scrollbar">
                            <div className="flex flex-col gap-0">
                                {listTransactions.map((tx, index) => {

                                    // NEW LOGIC: Determine if this row should be clickable based on type
                                    const isClickable = tx.type === 'Prepaid Recharge' || tx.type === 'Postpaid Recharge';

                                    return (
                                        <div key={tx.id}>
                                            <div
                                                onClick={() => {
                                                    if (isClickable) setSelectedTransaction(tx);
                                                }}
                                                // Update CSS so only clickable rows have the hover effect
                                                className={`flex items-center justify-between py-5 transition-colors duration-200 ${isClickable ? 'cursor-pointer hover:bg-gray-50 px-3 -mx-3 rounded-xl' : 'opacity-60'}`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-xl bg-[#fcf3f3] flex items-center justify-center shrink-0">
                                                        {tx.iconType === 'out' ? <ArrowUpRight className="w-6 h-6 text-[#8a3c46]" /> : <ArrowDownLeft className="w-6 h-6 text-[#8a3c46]" />}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 text-[15px] mb-1">{tx.type}</h4>
                                                        <p className="text-xs text-gray-500 mb-1">{tx.details}</p>
                                                        <p className="text-xs text-gray-400">{tx.date}</p>
                                                    </div>
                                                </div>

                                                <div className="text-right">
                                                    <p className={`font-bold text-[15px] mb-1 ${tx.iconType === 'in' ? 'text-[#138e4a]' : 'text-gray-900'}`}>{tx.amount}</p>
                                                    <p className={`text-xs font-medium ${tx.status === 'Success' ? 'text-[#138e4a]' : 'text-red-500'}`}>{tx.status}</p>
                                                </div>
                                            </div>

                                            {index !== listTransactions.length - 1 && <hr className="border-gray-100" />}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION: SECURITY BANNER */}
                <div className='bg-[#FFEDEE] w-full max-w-[1210px] min-h-[118px] flex flex-row justify-between items-center px-8 py-4 rounded-xl shrink-0'>
                    {securityFeatures.map((feature) => (
                        <div key={feature.id} className='flex items-center max-w-[234px] w-full gap-4'>
                            <div className='bg-white rounded-[12.92px] p-2 shrink-0 shadow-sm'>
                                <img src={feature.icon} alt={feature.title} className='w-[34px] h-[34px] object-contain' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className="font-bold text-gray-900 text-[15px]">{feature.title}</h1>
                                <p className="text-[12px] text-gray-600 leading-tight mt-0.5">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* ======================================================= */}
            {/* OVERLAY & MODAL ROUTING CONTAINER                       */}
            {/* ======================================================= */}
            <div
                // 1. Added overflow-y-auto here so the background can scroll
                className={`fixed inset-0 z-50 bg-black/50  overflow-y-auto transition-opacity duration-300 ${selectedTransaction ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setSelectedTransaction(null)}
            >
                {/* 2. Added a min-h-screen wrapper to center the modal, with py-10 for breathing room when scrolling */}
                <div className="flex min-h-screen items-center justify-center py-10">
                    <div
                        className={`transition-all duration-500 ease-out transform ${selectedTransaction ? 'translate-x-0 opacity-100' : '-translate-x-[50vw] opacity-0'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Route to the correct modal based on transaction type */}
                        {selectedTransaction && selectedTransaction.type === 'Prepaid Recharge' && (
                            <TransactionDetailsModal
                                transaction={selectedTransaction}
                                onClose={() => setSelectedTransaction(null)}
                            />
                        )}

                        {selectedTransaction && selectedTransaction.type === 'Postpaid Recharge' && (
                            <PostpaidTransactionModal
                                transaction={selectedTransaction}
                                onClose={() => setSelectedTransaction(null)}
                            />
                        )}
                    </div>
                </div>
            </div>

        

    </div >
  );
};

export default TransactionsDashboard;