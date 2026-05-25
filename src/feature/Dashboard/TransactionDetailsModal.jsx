import React from 'react';
import mobileicon from "../../../public/images/Mobileicon.svg";
import referopenbox from "/images/referopenbox.svg";

// Added back the props so the close button and dynamic data work!
const TransactionDetailsModal = ({ transaction, onClose }) => {
  return (
      <> 
    {/* EXACT SIZE FIX: Replaced max-w-[645px] w-full with exact w-[645px] */}
    <div className="w-[645px] h-[831px] flex flex-col bg-white rounded-[20px] shadow-sm border border-gray-300 p-4 font-sans text-gray-900">
      
      {/* Header */}
      <div className="flex justify-between items-center mt-7 mb-4 shrink-0">
        <h2 className="text-xl font-bold tracking-tight">Transaction Details</h2>
        <button 
          onClick={onClose} 
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Summary Card */}
      <div className="flex justify-between items-center p-4 border border-gray-200 rounded-2xl mb-4 shrink-0">
        <div className="flex gap-4 items-center">
          <div className="bg-[#fcf3f3] w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
            {/* Battery/Phone Icon */}
           <img src={mobileicon}/>
          </div>
          <div>
            <h3 className="font-bold text-[15px]">{transaction?.type || 'Cashback Received'}</h3>
            <p className="text-gray-500 text-xs mt-0.5">{transaction?.details || 'Airtel Prepaid - 90000 00000'}</p>
            <p className="text-gray-500 text-xs">{transaction?.date || '07 May 2026, 10:16 AM'}</p>
          </div>
        </div>
        <div className="text-right">
          <p className={`font-bold text-[15px] ${transaction?.iconType === 'in' ? 'text-[#138e4a]' : 'text-gray-900'}`}>
            {transaction?.amount || '+ ₹25.00'}
          </p>
          <p className="text-[#138e4a] text-xs font-medium mt-0.5">Success</p>
        </div>
      </div>

      {/* Earned Rewards Card */}
      <div className="bg-[#eef8f3] p-4 rounded-2xl mb-4 relative overflow-hidden flex flex-col justify-center min-h-[110px] shrink-0">
        <h3 className="font-bold text-[14px] mb-3">You Earned Rewards</h3>
        <div className="flex items-center w-[75%]">
          {/* Stat 1 */}
          <div className="flex-1 pr-2">
            <p className="text-[#138e4a] font-bold text-lg leading-none mb-1">₹10</p>
            <p className="text-[#a03040] text-[10px] font-bold">Cashback</p>
            <p className="text-gray-500 text-[9px]">Credited to Wallet</p>
          </div>
          {/* Divider */}
          <div className="w-px h-8 bg-gray-300 mx-2"></div>
          {/* Stat 2 */}
          <div className="flex-1 px-2">
            <p className="text-[#138e4a] font-bold text-lg leading-none mb-1">₹5</p>
            <p className="text-[#a03040] text-[10px] font-bold">Referral Bonus</p>
            <p className="text-gray-500 text-[9px]">Credited to Bharat</p>
          </div>
          {/* Divider */}
          <div className="w-px h-8 bg-gray-300 mx-2"></div>
          {/* Stat 3 */}
          <div className="flex-1 pl-2">
            <p className="text-[#138e4a] font-bold text-lg leading-none mb-1">₹2.5</p>
            <p className="text-[#a03040] text-[10px] font-bold truncate">Zonal Royalty</p>
            <p className="text-gray-500 text-[9px] truncate">Pincode 500 000</p>
          </div>
        </div>
        {/* Placeholder for 3D Gift Box Image */}
        <div className="absolute right-0 bottom-0 w-24 h-24 flex items-end justify-end pr-2 pb-2">
            <img src={referopenbox}/>
        </div>
      </div>

      {/* Details List */}
      <div className="border border-gray-200 rounded-2xl p-4 mb-8 shrink-0">
        <div className="flex justify-between items-center mb-4 cursor-pointer">
          <h3 className="font-bold text-[15px]">Transaction Details</h3>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center text-[13px]">
            <span className="text-gray-500">Transaction ID</span>
            <div className="flex items-center gap-1.5 font-semibold">
              VPPE12344567890
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a03040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-center text-[13px]">
            <span className="text-gray-500">Transaction Type</span>
            <span className="font-semibold text-right">{transaction?.type || 'Cashback Received'}</span>
          </div>
          <div className="flex justify-between items-center text-[13px]">
            <span className="text-gray-500">Related to</span>
            <span className="font-semibold text-right">Prepaid Recharge</span>
          </div>
          <div className="flex justify-between items-center text-[13px]">
            <span className="text-gray-500">Merchant</span>
            <span className="font-semibold text-right">Airtel</span>
          </div>
          <div className="flex justify-between items-center text-[13px]">
            <span className="text-gray-500">Credited to</span>
            <span className="font-semibold text-right">ViralPe Wallet</span>
          </div>
          <div className="flex justify-between items-center text-[13px]">
            <span className="text-gray-500">Amount</span>
            <span className={`font-bold text-right ${transaction?.iconType === 'in' ? 'text-[#138e4a]' : 'text-gray-900'}`}>
              {transaction?.amount || '+ ₹25.00'}
            </span>
          </div>
          <div className="flex justify-between items-center text-[13px]">
            <span className="text-gray-500">Date & Time</span>
            <span className="font-semibold text-right">{transaction?.date || '07 May 2026, 10:16AM'}</span>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex gap-4 mt-5 shrink-0">
        <button className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-[#85162a] text-[#85162a] rounded-xl font-bold text-sm hover:bg-red-50 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download
        </button>

        <button className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#85162a] text-white rounded-xl font-bold text-sm hover:bg-[#6b1222] transition-colors shadow-md">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
          Share
        </button>
      </div>

    </div>
    </>
  );
};

export default TransactionDetailsModal;