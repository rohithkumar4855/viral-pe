import React from 'react';
import { transactionData, referralData } from  "../../../data" 
import googlestore from  "../../../public/images/googleplayicon.png"
import applestore from  "../../../public/images/applestoreicon.svg"


// --- LEFT SIDE COMPONENTS ---

const TransactionItem = ({ logoUrl, title, date, amount, isPositive, status }) => (
  <div className=" flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0">
    <div className=" flex items-center gap-4">
      <div className="w-12 h-12 flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden flex items-center justify-center p-1 bg-white">
        <img src={logoUrl} alt={`${title} logo`} className="w-full h-full object-contain" />
      </div>
      <div>
        <h4 className="text-[18px]  text-[#1C1B1B] font-semibold text-base">{title}</h4>
        <p className="text-[14px] text-[#1C1B1B99] mt-0.5">{date}</p>
      </div>
    </div>
    <div className="text-right">
      <p className={`font-semibold text-[18px]   ${isPositive ? 'text-[#069341]' : 'text-[#901C27]'}`}>
        {isPositive ? '+' : '-'}₹{Math.abs(amount)}
      </p>
      <p className="text-[#069341] text-[14px]mt-0.5 font-medium">{status}</p>
    </div>
  </div>
);

const RecentTransactions = ({ transactions }) => (
  <div className="  max-w-[761px] max-h-[445px] bg-white rounded-xl p-6 shadow-sm  rounded-[20px] h-full">
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-[24px] font-semibold text-[#1C1B1B]">Recent Transactions</h2>
      <button className="text-red-800 font-semibold text-sm ">
        View All
      </button>
    </div>
    <div className="flex flex-col">
      {transactions.map((tx) => (
        <TransactionItem key={tx.id} {...tx} />
      ))}
    </div>
  </div>
);


// --- RIGHT SIDE COMPONENTS ---


const ReferAndEarn = ({ data }) => {
  return (
    <div className="bg-[linear-gradient(90.93deg,_#1F0608_2.81%,_#911922_77.88%)] rounded-xl p-6 max-w-[417px] text-white shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[24px] font-semibold">Refer & Earn</h2>
        <button className="text-[14px] text-(--white)  flex items-center gap-1 transition-colors">
          View All Referrals <span>→</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-[16px] max-w-[180px] leading-relaxed text-(--white)">
          Earn <span className="font-bold">₹{data.bonusAmount}</span> for every friend who joins ViralPe
        </p>
        
        {/* Overlapping Avatars */}
        <div className="flex items-center">
          {data.avatars.map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt="Friend avatar" 
              className={`w-13 h-13 rounded-full border-2 border-[#8c1822] object-cover ${index !== 0 ? '-ml-3' : ''}`}
              style={{ zIndex: 10 - index }}
            />
          ))}
          <div className="w-9 h-9 rounded-full bg-white text-gray-800 text-xs flex items-center justify-center font-bold border-2 border-[#8c1822] -ml-3 z-0">
            +{data.extraAvatarsCount}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-between items-center text-sm mb-6 text-gray-200">
        <p><span className="font-[14px] text-white">{data.friendsJoinedWeek}</span> Friends joined this week</p>
        <p>You Earned <span className="font-bold text-white">₹{data.totalEarned}</span></p>
      </div>

      {/* Share Button */}
      <button className="w-full max-h-[44px] bg-white text-(--primary-red) text-[14px] py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
        </svg>
        Share Now
      </button>
    </div>
  );
};

const DownloadApp = () => {
  return (
    <div className="bg-white  max-w-[417px] rounded-[20px] p-6 shadow-sm">
      <h2 className="text-[24px] font-semibold text-[#1C1B1B] mb-1">Download ViralPe App</h2>
      <p className="text-[16px] text-[#1C1B1BB2] mb-5">Get the full experience on your mobile app</p>
      
      <div className="flex gap-[26.38px]">
        <button className="flex-1 bg-(--primary-red) text-white rounded-lg p-2 max-w-[119px] max-h-[40px] flex items-center ">
         <img src={googlestore}/>
          
        </button>

        <button className="flex-1 bg-(--primary-red) text-white rounded-lg p-2 max-w-[119px] max-h-[40px] flex items-center ">
          <img src={applestore}/>
        </button>
      </div>
    </div>
  );
};


// --- MAIN DASHBOARD LAYOUT ---

export default function Dashboard() {
  return (
    <div className=" p-4 md:p-8 flex justify-center">
      <div className=" w-full max-w-[1215px] flex flex-col lg:flex-row gap-6 items-stretch">
        
        <div className=" flex-1 min-w-0">
          {/* Using imported transactionData */}
          <RecentTransactions transactions={transactionData} />
        </div>

        <div className="w-full lg:w-[400px] flex flex-col gap-6">
          {/* Using imported referralData */}
          <ReferAndEarn data={referralData} />
          <DownloadApp />
        </div>
        
      </div>
    </div>
  );
}