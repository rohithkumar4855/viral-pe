// data.js
export const earningsData = [
  {
    id: 1,
    icon: "/images/location.png", // Direct root path
    title: "Zonal Royalty",
    amount: "₹ 25,000.00",
  },
  {
    id: 2,
    icon: "/images/vendor.png",
    title: "Vendor Royalty",
    amount: "₹ 25,000.00",
  },
  {
    id: 3,
    icon: "/images/gift.png",
    title: "Total Cashback",
    amount: "₹ 25,000.00",
  },
  {
    id: 4,
    icon: "/images/Overlay.png",
    title: "Total Referral Bonus",
    amount: "₹ 25,000.00",
  },
];


export const WalletandEarningsCard =[
  {
    id: 1,
    icon: "/images/location.png", // Direct root path
    title: "Wallet Balance",
    amount: "₹ 5,000.00",
  
  },
  {
    id: 2,
    icon: "/images/vendor.png",
    title: "Zonal Royalty",
    amount: "₹ 5,000.00",

  },
  {
    id: 3,
    icon: "/images/gift.png",
    title: "Lifetime earnings",
     amount: "₹ 5,000.00",

  },
  {
    id: 4,
    icon: "/images/Overlay.png",
    title: "Total Cashback",
    amount: "₹ 5,000.00",

  },
   {
    id: 5,
    icon: "/images/Overlay.png",
    title: " Referral Bonus",
    amount: "₹ 5,000.00",
    
  },
   {
    id: 6,
    icon: "/images/Overlay.png",
    title: "Reversal Wallet",
    amount: "₹5,000.00",

  },
];


 export const statsData = [
    {
      id: 1,
      value: "12",
      label: "Transactions",
    },
    {
      id: 2,
      value: "₹320",
      label: "Cashback Earned",
    },
    {
      id: 3,
      value: "₹200",
      label: "Cashback Claimed",
    },
  ];
  // export in Revenue.jsx


// data.js
export const transactionData = [
  { 
    id: '1', 
    logoUrl: '/images/myntra.png', 
    title: 'Myntra Voucher Purchase', 
    date: '06 May 2026, 02:48PM', 
    amount: 300, 
    isPositive: false, 
    status: 'Success' 
  },
  { 
    id: '2', 
    logoUrl: '/images/myntra.png', 
    title: 'Cashback on Myntra', 
    date: '06 May 2026, 02:48PM', 
    amount: 300, 
    isPositive: true, 
    status: 'Credited' 
  },
  { 
    id: '3', 
    logoUrl: '/images/starbucks.png', 
    title: 'Starbucks Voucher Purchase', 
    date: '06 May 2026, 02:48PM', 
    amount: 300, 
    isPositive: false, 
    status: 'Success' 
  },
  { 
    id: '4', 
    logoUrl: '/images/starbucks.png', 
    title: 'Starbucks Voucher Purchase', 
    date: '06 May 2026, 02:48PM', 
    amount: 300, 
    isPositive: false, 
    status: 'Credited' 
  }
];

export const referralData = {
  avatars: [
    "https://i.pravatar.cc/100?img=1",
    "https://i.pravatar.cc/100?img=2",
    "https://i.pravatar.cc/100?img=3"
  ],
  extraAvatarsCount: 6,
  bonusAmount: 100,
  friendsJoinedWeek: 3,
  totalEarned: 200
};