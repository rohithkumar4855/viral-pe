import React, { useState } from 'react';
import { Search, Ticket, ShoppingBag, ChevronUp, ChevronDown, Check, Star, ShieldCheck, Zap, Lock, Headphones } from 'lucide-react';
import Myntra from "/images/myntra.png"
import StarBucks from "/images/starbucks.png"
import Nike from "/images/nike.png"
import Trends from "/images/Trends.svg"
import { useNavigate } from 'react-router-dom';

export default function Vouchers() {
    // 1. Navigation Tabs Configuration
    const navigate = useNavigate();
    const [currentNav, setCurrentNav] = useState('Vouchers');
    const navItems = [
        { id: 'All', label: 'All' },
        { id: 'Vouchers', label: 'Vouchers' },
        { id: 'Prepaid', label: 'Prepaid Recharge' },
        { id: 'Postpaid', label: 'Postpaid Recharge' },
        { id: 'DTH', label: 'DTH Recharge' },
        { id: 'FASTag', label: 'FASTag Recharge' },
        { id: 'Refer', label: 'Refer & Earn' },
        { id: 'Transactions', label: 'Transactions' },
    ];

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
    // 2. Filter Sidebar & Categories State Configurations
    const [sections, setSections] = useState({
        brands: true,
        discount: true,
        sortBy: true,
    });

    // CHANGED: Defaulting to an empty array so all brands are shown initially
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [brandSearch, setBrandSearch] = useState('');
    const [globalSearch, setGlobalSearch] = useState('');
    const [selectedDiscount, setSelectedDiscount] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    // 3. Static Lists
    const brandsList = ['Myntra', 'Nykaa', 'Zomato', 'Swiggy', 'Starbucks', 'Nike', 'Trends'];
    const discountList = ['All', '1% - 5%', '6% - 10%', '11% - 15%'];
    const sortList = ['Price Low to High', 'Price High to Low', 'A-Z', 'Z-A'];

    const categoriesList = [
        { id: 'All', label: 'All (10)' },
        { id: 'Fashion', label: 'Fashion' },
        { id: 'Food', label: 'Food' },
        { id: 'Beauty', label: 'Beauty' },
        { id: 'Entertainment', label: 'Entertainment' },
        { id: 'Books', label: 'Books' },
        { id: 'Gaming', label: 'Gaming' }
    ];

    // 4. Products Voucher Mock Data (FIXED: Added category, price, and numeric discount)
    const vouchersData = [
        { id: 1, brand: 'Myntra', logo: Myntra, tag: 'Get ₹50 Cashback', isPromo: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 5 },
        { id: 2, brand: 'Starbucks', logo: StarBucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: "Starting Price from ₹200", discount: 5 },
        { id: 3, brand: 'Nike', logo: Nike, tag: 'Starting Price from ₹200', isPromo: false, noHeaderTag: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 12 },
        { id: 4, brand: 'Myntra', logo: Myntra, tag: 'Get ₹50 Cashback', isPromo: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 4 },
        { id: 5, brand: 'Starbucks', logo: StarBucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: "Starting Price from ₹200", discount: 5 },
        { id: 6, brand: 'Nike', logo: Nike, tag: 'Starting Price from ₹200', isPromo: false, noHeaderTag: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 14 },
        { id: 7, brand: 'Trends', logo: Trends, tag: 'Get ₹50 Cashback', isPromo: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 3 },
        { id: 8, brand: 'Starbucks', logo: StarBucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: "Starting Price from ₹200", discount: 5 },
        { id: 9, brand: 'Trends', logo: Trends, tag: '5% Cashback', isPromo: false, category: 'Fashion', price: "Starting Price from ₹200", discount: 8 },
        { id: 10, brand: 'Nike', logo: Nike, tag: '10% OFF', isPromo: false, category: 'Beauty', price: "Starting Price from ₹200", discount: 10 },
        { id: 11, brand: 'Starbucks', logo: StarBucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: "Starting Price from ₹200", discount: 5 },
        { id: 12, brand: 'Nike', logo: Nike, tag: 'Starting Price from ₹200', isPromo: false, noHeaderTag: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 14 },
        { id: 13, brand: 'Trends', logo: Trends, tag: 'Get ₹50 Cashback', isPromo: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 3 },
        { id: 14, brand: 'Starbucks', logo: StarBucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: "Starting Price from ₹200", discount: 5 },
        { id: 15, brand: 'Trends', logo: Trends, tag: '5% Cashback', isPromo: false, category: 'Fashion', price: "Starting Price from ₹200", discount: 8 },
        { id: 16, brand: 'Nike', logo: Nike, tag: '10% OFF', isPromo: false, category: 'Beauty', price: "Starting Price from ₹200", discount: 10 },
        { id: 17, brand: 'Starbucks', logo: StarBucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: "Starting Price from ₹200", discount: 5 },
        { id: 18, brand: 'Nike', logo: Nike, tag: 'Starting Price from ₹200', isPromo: false, noHeaderTag: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 14 },
        { id: 19, brand: 'Trends', logo: Trends, tag: 'Get ₹50 Cashback', isPromo: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 3 },
        { id: 20, brand: 'Starbucks', logo: StarBucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: "Starting Price from ₹200", discount: 5 },
        { id: 21, brand: 'Trends', logo: Trends, tag: '5% Cashback', isPromo: false, category: 'Fashion', price: "Starting Price from ₹200", discount: 8 },
        { id: 22, brand: 'Nike', logo: Nike, tag: '10% OFF', isPromo: false, category: 'Beauty', price: "Starting Price from ₹200", discount: 10 },
        { id: 23, brand: 'Myntra', logo: Myntra, tag: 'Get ₹50 Cashback', isPromo: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 5 },
        { id: 24, brand: 'Starbucks', logo: StarBucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: "Starting Price from ₹200", discount: 5 },
        { id: 25, brand: 'Nike', logo: Nike, tag: 'Starting Price from ₹200', isPromo: false, noHeaderTag: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 12 },
    ];

    // 5. Interactivity Event Actions
    const toggleSection = (section) => {
        setSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const handleBrandChange = (brandName) => {
        if (selectedBrands.includes(brandName)) {
            setSelectedBrands(selectedBrands.filter(b => b !== brandName));
        } else {
            setSelectedBrands([...selectedBrands, brandName]);
        }
    };

    const handleClearAll = () => {
        setSelectedBrands([]);
        setSelectedDiscount('');
        setSelectedSort('');
        setActiveCategory('All');
        setGlobalSearch('');
    };

    const filteredBrands = brandsList.filter(brand =>
        brand.toLowerCase().includes(brandSearch.toLowerCase())
    );

    // 6. FILTER & SORT FUNCTION (FIXED LOGIC)
    const getFilteredVouchers = () => {
        let result = [...vouchersData];

        // Center Global Search Filter
        if (globalSearch.trim() !== '') {
            const query = globalSearch.toLowerCase();
            result = result.filter(voucher =>
                voucher.brand.toLowerCase().includes(query) ||
                (voucher.tag && voucher.tag.toLowerCase().includes(query))
            );
        }

        // Side Brand Filter
        if (selectedBrands.length > 0) {
            result = result.filter(voucher => selectedBrands.includes(voucher.brand));
        }

        // Center Category Filter (FIXED: Removed broken fallback statement)
        if (activeCategory !== 'All') {
            result = result.filter(voucher => voucher.category === activeCategory);
        }

        // Side Discount Filter (FIXED: Now accurately filters mathematical ranges)
        if (selectedDiscount && selectedDiscount !== 'All') {
            if (selectedDiscount === '1% - 5%') {
                result = result.filter(voucher => voucher.discount >= 1 && voucher.discount <= 5);
            } else if (selectedDiscount === '6% - 10%') {
                result = result.filter(voucher => voucher.discount >= 6 && voucher.discount <= 10);
            } else if (selectedDiscount === '11% - 15%') {
                result = result.filter(voucher => voucher.discount >= 11 && voucher.discount <= 15);
            }
        }

        // Side Sort By Filter (FIXED: Accurately checks true price parameters)
        if (selectedSort) {
            result.sort((a, b) => {
                if (selectedSort === 'A-Z') return a.brand.localeCompare(b.brand);
                if (selectedSort === 'Z-A') return b.brand.localeCompare(a.brand);
                if (selectedSort === 'Price Low to High') return a.price - b.price;
                if (selectedSort === 'Price High to Low') return b.price - a.price;
                return 0;
            });
        }

        return result;
    };

    const displayVouchers = getFilteredVouchers();

    return (
        <div className="min-h-screen  text-gray-800 antialiased font-sans">
            {/* HEADER NAVBAR */}
            <div className="w-full max-w-[1210px] px-4 py-5 border-b border-gray-100/50 bg-[#FCF9F9]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Vouchers</h1>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                        <div className="relative flex-grow sm:w-80">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <Search className="h-4 w-4 text-gray-400" />
                            </span>
                            <input
                                type="text"
                                value={globalSearch}
                                onChange={(e) => setGlobalSearch(e.target.value)}
                                placeholder="Search brands like Myntra, Nike..."
                                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-200/80 rounded-xl focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-all shadow-sm"
                            />
                        </div>

                        <div className="flex items-center gap-3 justify-end">
                            <button className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm min-w-[130px]">
                                <Ticket className="h-4 w-4 text-[#8A1C24]" />
                                <span>My Vouchers</span>
                            </button>

                            <button className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm min-w-[95px]">
                                <ShoppingBag className="h-4 w-4 text-[#8A1C24]" />
                                <span>Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN LAYOUT WRAPPER */}
            <div className="max-w-[1215px]  mx-auto px-4 py-6">
                <div className="flex flex-row  md:grid-cols-3 lg:grid-cols-9 gap-6 items-start">

                    {/* COLUMN 1: LEFT SIDEBAR (FILTERS & WHY VIRALPE) */}
                    <div className="flex flex-col gap-2 ">
                        <aside className=" bg-white max-w-[291px] w-full max-h-[556px] h-full rounded-[20px] border border-gray-100 p-5 shadow-sm select-none">
                            <div className=" flex items-center justify-between  ">
                                <h2 className="text-xl font-bold text-gray-900">Filter</h2>
                                <button
                                    onClick={handleClearAll}
                                    className="text-l font-medium text-(--primary-red) hover:text-[#901C27]-800 transition-colors"
                                >
                                    Clear All
                                </button>
                            </div>

                            {/* Section 1: Brands */}
                            <div >
                                <button onClick={() => toggleSection('brands')} className="flex items-center justify-between w-full py-2 text-left">

                                    <span className=" text-[15px] font-bold text-gray-900">
                                        Brands{" "}
                                        {selectedBrands.length > 0 && (
                                            <span className="text-[#901C27] font-semibold">
                                                ({String(selectedBrands.length).padStart(2, "0")})
                                            </span>
                                        )}
                                    </span>
                                    {sections.brands ? <ChevronUp className="w-4 h-4 text-gray-800 stroke-[2.5]" /> : <ChevronDown className="w-4 h-4 text-gray-800 stroke-[2.5]" />}
                                </button>
                                {sections.brands && (
                                    <div className=" ">
                                        <div className="relative w-full">
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <Search className="h-3.5 w-3.5 text-gray-400" />
                                            </span>
                                            <input
                                                type="text"
                                                placeholder="Search brands"
                                                value={brandSearch}
                                                onChange={(e) => setBrandSearch(e.target.value)}
                                                className="w-[237px] pl-9 pr-3 py-1.5 text-xs bg-white border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-red-700 transition-all"
                                            />
                                        </div>
                                        <div className=" overflow-y-auto pr-1 scrollbar-thin  p-2">
                                            {filteredBrands.map((brand) => {
                                                const isChecked = selectedBrands.includes(brand);
                                                return (
                                                    <label key={brand} className="flex items-center justify-between  cursor-pointer group">
                                                        <span className="text-[13px]  text-gray-700 group-hover:text-gray-900 transition-colors">{brand}</span>
                                                        <input type="checkbox" checked={isChecked} onChange={() => handleBrandChange(brand)} className="sr-only" />
                                                        <div className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${isChecked ? 'bg-red-800 border-red-800' : 'border-gray-400 bg-white group-hover:border-gray-600'}`}>
                                                            {isChecked && <Check className="w-3 h-3 text-white stroke-[3]" />}
                                                        </div>
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <hr className="border-gray-100 my-1" />

                            {/* Section 2: Discount */}
                            <div>
                                <button onClick={() => toggleSection('discount')} className="flex items-center justify-between w-full text-left">
                                    <span className="text-[15px] font-bold text-gray-900">Discount</span>
                                    {sections.discount ? <ChevronUp className="w-4 h-4 text-gray-800 stroke-[2.5]" /> : <ChevronDown className="w-4 h-4 text-gray-800 stroke-[2.5]" />}
                                </button>
                                {sections.discount && (
                                    <div className="  ">
                                        {discountList.map((disc) => {
                                            const isChecked = selectedDiscount === disc;
                                            return (
                                                <label key={disc} className="flex items-center justify-between cursor-pointer group">
                                                    <span className="text-[13px] text-gray-700 group-hover:text-gray-900 transition-colors">{disc}</span>
                                                    <input type="checkbox" checked={isChecked} onChange={() => setSelectedDiscount(isChecked ? '' : disc)} className="sr-only" />
                                                    <div className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${isChecked ? 'bg-red-800 border-red-800' : 'border-gray-400 bg-white group-hover:border-gray-600'}`}>
                                                        {isChecked && <Check className="w-3 h-3 text-white stroke-[3]" />}
                                                    </div>
                                                </label>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                            <hr className="border-gray-100 my-1" />

                            {/* Section 3: Sort By */}
                            <div>
                                <button onClick={() => toggleSection('sortBy')} className="flex items-center justify-between w-full  text-left">
                                    <span className="text-[15px] font-bold text-gray-900">Sort By</span>
                                    {sections.sortBy ? <ChevronUp className="w-4 h-4 text-gray-800 stroke-[2.5]" /> : <ChevronDown className="w-4 h-4 text-gray-800 stroke-[2.5]" />}
                                </button>
                                {sections.sortBy && (
                                    <div className="mt-1 ">
                                        {sortList.map((sortOption) => {
                                            const isChecked = selectedSort === sortOption;
                                            return (
                                                <label key={sortOption} className="flex items-center justify-between cursor-pointer group">
                                                    <span className="text-[13px] font-medium text-gray-700 group-hover:text-gray-900 transition-colors">{sortOption}</span>
                                                    <input type="checkbox" checked={isChecked} onChange={() => setSelectedSort(isChecked ? '' : sortOption)} className="sr-only" />
                                                    <div className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${isChecked ? 'bg-red-800 border-red-800' : 'border-gray-400 bg-white group-hover:border-gray-600'}`}>
                                                        {isChecked && <Check className="w-3 h-3 text-white stroke-[3]" />}
                                                    </div>
                                                </label>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </aside>

                        {/* "Why ViralPe?" Features Value Card */}
                        <div className="w-full bg-white rounded-[28px] border border-gray-100 p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-950 mb-5">
                                Why <span className="text-[#8A1C24]">ViralPe</span>?
                            </h3>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3.5">
                                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                                        <ShieldCheck className="w-5 h-5 stroke-[2]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">100% Verified Offers</h4>
                                        <p className="text-[11px] font-medium text-gray-400 mt-0.5">Every voucher is validated before listing</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                                        <Zap className="w-5 h-5 stroke-[2]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">Instant Code Delivery</h4>
                                        <p className="text-[11px] font-medium text-gray-400 mt-0.5">Code delivered to your wallet immediately</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                                        <Lock className="w-5 h-5 stroke-[2]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">Secure Payments</h4>
                                        <p className="text-[11px] font-medium text-gray-400 mt-0.5">256-bit SSL encrypted transactions</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                                        <Headphones className="w-5 h-5 stroke-[2]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">24/7 Customer Support</h4>
                                        <p className="text-[11px] font-medium text-gray-400 mt-0.5">Help available round the clock</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 2: CENTER CONTENT (CATEGORIES & PRODUCT CARDS) */}
                    <main className=" lg:col-span-6 max-w-[930px] w-full flex flex-col gap-2 ">

                        {/* Horizontal Categories List */}
                        <div className=" w-full bg-white rounded-2xl p-2">
                            <div className="flex items-center space-x-3 overflow-x-auto scrollbar-none py-1 px-2">
                                {categoriesList.map((category) => {
                                    const isActive = activeCategory === category.id;
                                    return (
                                        <button
                                            key={category.id}
                                            onClick={() => setActiveCategory(category.id)}
                                            className={`whitespace-nowrap px-5 py-2 text-sm font-medium rounded-2xl border transition-all duration-200 outline-none select-none
                        ${isActive
                                                    ? 'bg-[#8A1C24] text-white border-[#8A1C24] shadow-sm'
                                                    : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-50'
                                                }`}
                                        >
                                            {category.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Product Brand Cards Grid Viewport */}

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4">
                            {displayVouchers.map((voucher) => (
                                <div
                                    key={voucher.id}
                                    onClick={() => navigate('/voucher-details', { state: voucher })}
                                    className=" rounded-[15.45px] bg-white border border-gray-100/70 pt-6 p-2 shadow-sm hover:shadow-md transition-all flex flex-col items-center relative min-h-[157px] max-w-[163px]"
                                >
                                    {/* Cashback Header Badges */}
                                    {!voucher.noHeaderTag && (
                                        <div className={`absolute top-0 left-0 text-[10px] font-bold px-3 py-1 rounded-br-xl rounded-tl-2xl shadow-xs tracking-tight
                                            ${voucher.isPromo
                                                ? 'bg-[#EBF3FF] text-blue-700 border-b border-r border-blue-100'
                                                : 'bg-[#EAFDF3] text-[#149B52]'
                                            }`}
                                        >
                                            {voucher.tag}
                                        </div>
                                    )}

                                    {/* 1. FIXED: Image gets its own flexible container */}
                                    <div className=" mt-3 flex items-center justify-center shrink-0">
                                        <img
                                            src={voucher.logo}
                                            alt={voucher.brand}
                                            className="max-h-[74px] max-w-[86px] object-contain"
                                        />
                                    </div>

                                    {/* 2. FIXED: Brand & Price are stacked and text-centered */}
                                    <div className="flex flex-col items-center text-center mt-3 w-full">
                                        <h3 className="text-[17px] font-bold text-gray-900 leading-none">
                                            {voucher.brand}
                                        </h3>

                                    </div>
                                    <p className="text-[11px] text-[#6B7280] tracking-tight mt-1 ">
                                        {voucher.price}
                                    </p>

                                    {/* Decorative Separator Line pushed to bottom */}
                                </div>
                            ))}
                        </div>
                        {/* No Results Message State */}
                        {displayVouchers.length === 0 && (
                            <div className="w-full py-12 flex flex-col items-center justify-center bg-white rounded-3xl border border-gray-100">
                                <p className="text-gray-500 font-medium">No vouchers found matching your filters.</p>
                                <button onClick={handleClearAll} className="mt-3 text-[#8A1C24] text-sm font-semibold hover:underline">Clear all filters</button>
                            </div>
                        )}
                    </main>

                     


                </div>
                
            </div>
             <div className="max-w-[1210px] max-h-[118px] rounded-[24px] bg-[#FFEDEE] px-1 py-8 md:px-8 lg:px-16 mx-auto  gap-6">
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6 ">
                {features.map((feature) => (

                    <div key={feature.id} className="flex items-center gap-4 min-w-0 ">
                        {/* Icon Box */}
                        <div className="flex h-11.75 w-11.75 flex-shrink-0 items-center justify-center rounded-[18px] bg-white text-[#8C1822] shadow-sm">
                            {renderIcon(feature.icon)}
                        </div>

                        {/* Text */}
                        <div className="flex flex-col justify-center">
                            <h3 className="text-[16px]  font-semibold text-[#901c27] ">
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
                                <p className="mt-1 text-sm ">
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