import { useState } from "react";
import Container from "../../layout/Container";
import Button from "../ui/Button";
import Appleicon from "../../../public/images/appleicon.png";
import playstoreicon from "../../../public/images/playstoreicon.png";
import homescreen from "../../../public/images/homescreen1.png";
import { ArrowLeft, ChevronDown } from "lucide-react";

const rechargeData = [
    {
        id: 1,
        title: "Prepaid Recharge",
        icon: "/images/recharge.png",
        alt: "Prepaid",
    },
    {
        id: 2,
        title: "Postpaid Recharge",
        icon: "/images/recharge.png",
        alt: "Postpaid",
    },
    {
        id: 3,
        title: "DTH Recharge",
        icon: "/images/dthicon.png",
        alt: "DTH",
    },
    {
        id: 4,
        title: "FASTag Recharge",
        icon: "/images/fastagicon.png",
        alt: "FASTag",
    },
];

const headings = {
    1: "Prepaid Recharge",
    2: "Postpaid Recharge",
    3: "DTH Recharge",
    4: "FASTag Recharge",
};

const labels = {
    1: "Mobile Number",
    2: "Mobile Number",
    3: "Subscriber ID/Registered Mobile Number",
    4: "Bank",
};

export default function Heropage() {
    const [activeTab, setActiveTab] = useState(null);

    return (
        <section className="px-4 md:px-0">
            {/* Adjusted max-width and set to column on mobile, row on desktop */}
            <div className="max-w-[1200px] mt-10 mx-auto flex flex-col lg:flex-row gap-8">
                
                {/* --- Left Card --- */}
                {/* Changed fixed heights and widths to min-h and w-full */}
                <div className="flex flex-col gap-4 bg-white rounded-2xl w-full lg:max-w-[720px] min-h-[264px] p-5 md:p-[27px] shadow-sm relative overflow-hidden">

                    {/* Default View: Show 4 Icons */}
                    {activeTab === null && (
                        <div className="animate-in fade-in duration-300">
                            <h2 className="font-semibold text-[20px] md:text-[28px] text-[#222222] text-center md:text-left">
                                Recharge or Pay Mobile Bill
                            </h2>

                            {/* Used grid on mobile (2x2) and flex on desktop for icons */}
                            <div className="grid grid-cols-2 md:flex md:flex-row justify-evenly gap-6 md:gap-4 lg:gap-14 mt-6 md:mt-2">
                                {rechargeData.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => {
                                            setActiveTab(item.id);
                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth",
                                            });
                                        }}
                                        className="flex flex-col items-center justify-center pt-2 cursor-pointer hover:scale-105 transition-transform duration-200"
                                    >
                                        <img
                                            src={item.icon}
                                            alt={item.alt}
                                            className="object-contain mb-2 w-12 h-12 md:w-auto md:h-auto"
                                        />
                                        <p className="text-sm font-medium flex flex-col items-center text-gray-800 leading-tight text-center">
                                            <span>{item.title.split(" ")[0]}</span>
                                            <span>{item.title.split(" ")[1]}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Modal Overlay */}
                    {activeTab !== null && (
                        <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center z-[999] px-4">
                            
                            {/* Modal Box - Responsive Width */}
                            <div className="bg-white w-full max-w-[650px] rounded-[20px] px-5 md:px-7 py-6 shadow-2xl relative animate-in fade-in zoom-in duration-300">
                                
                                <button
                                    onClick={() => setActiveTab(null)}
                                    className="absolute top-5 right-5 text-gray-400 hover:text-black text-xl"
                                >
                                    ✕
                                </button>

                                <h2 className="font-bold text-[24px] md:text-[28px] text-[#222222] mb-6 pr-8">
                                    {headings[activeTab]}
                                </h2>

                                <label className="text-[14px] font-medium text-[#222222] mb-2 block">
                                    {labels[activeTab]}
                                </label>

                                {/* FASTag Inputs */}
                                {activeTab === 4 ? (
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Enter Bank Name"
                                                className="w-full border border-gray-200 rounded-[10px] px-4 py-3 md:px-5 md:py-4 outline-none text-[15px]"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[14px] font-medium text-[#222222] mb-2 block">
                                                Vehicle Number/Chassis Number/Registered Mobile Number
                                            </label>
                                            <div className="flex border border-gray-200 rounded-[10px] overflow-hidden">
                                                <input
                                                    type="text"
                                                    placeholder="Enter details here"
                                                    className="w-full px-4 py-3 md:px-5 md:py-4 outline-none text-[15px]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex border border-gray-200 rounded-[10px] overflow-hidden">
                                        {(activeTab === 1 || activeTab === 2) && (
                                            <div className="bg-[#FFF0F3] flex items-center gap-2 px-3 md:px-5 border-r border-gray-200">
                                                <span className="text-[15px] font-medium">+91</span>
                                                <ChevronDown size={16} />
                                            </div>
                                        )}
                                        <input
                                            type={activeTab === 3 ? "text" : "tel"}
                                            placeholder={
                                                activeTab === 3
                                                    ? "Enter Subscriber ID"
                                                    : "Enter Mobile Number"
                                            }
                                            className="w-full px-4 py-3 md:px-5 md:py-4 outline-none text-[15px]"
                                        />
                                    </div>
                                )}

                                <div className="flex justify-center mt-8">
                                    <button className="bg-[#850F22] hover:bg-[#720c1d] transition-colors text-white font-medium w-[220px] py-[12px] rounded-[8px]">
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* --- Right Card --- */}
                {/* Changed strictly fixed widths to full width on mobile, fixed width on desktop */}
                <div className="w-full lg:w-[440px] lg:min-w-[440px] h-auto lg:h-[264px] bg-[#FFEDEE] rounded-2xl flex flex-col md:flex-row relative overflow-hidden shrink-0 shadow-sm">
                    
                    {/* Text Content */}
                    <div className="flex flex-col pt-6 px-6 z-10 w-full lg:w-[240px]">
                        <h2 className="font-bold text-[22px] md:text-[26px] leading-[1.2] text-[#222222] mb-3">
                            Recharge or Pay<br />Mobile Bill
                        </h2>
                        <p className="text-[14px] leading-[1.4] text-gray-700 mb-6 max-w-[200px]">
                            Collective earnings from our user community
                        </p>
                        <button className="rounded-lg py-[8px] px-[10px] flex items-center gap-[6px] text-white bg-[#721c22] transition-colors shadow-sm w-fit mb-6 md:mb-0">
                            <span className="text-[12px] font-medium leading-none">Download ViralPe App</span>
                            <div className="flex items-center gap-[4px]">
                                <img src={playstoreicon} alt="Play Store" className="w-[14px] h-[14px] object-contain" />
                                <img src={Appleicon} alt="Apple" className="w-[14px] h-[14px] object-contain pb-[1px]" />
                            </div>
                        </button>
                    </div>

                    {/* Graphic Area */}
                    <div className="relative flex items-center justify-center lg:items-start w-full lg:w-auto h-[250px] lg:h-auto hidden md:flex">
                        {/* Mobile Device Mockup */}
                        <div className="w-[160px] lg:w-[180px] h-[320px] lg:h-[353px] lg:mr-[25px] bg-white rounded-[25px] border-[6px] border-[#222222] flex flex-col items-center mt-4 lg:mt-[70px] shadow-sm relative">
                            <img
                                src="/images/logoname.png"
                                alt="ViralPe Logo"
                                className="object-contain mt-4 w-[100px]"
                            />
                        </div>

                        {/* Floating Badges */}
                        <div className="flex flex-col gap-2 absolute lg:right-[10px] lg:mt-[150px] z-20">
                            <div className="bg-white w-[200px] lg:w-[222px] py-1.5 rounded-[4px] flex items-center justify-center shadow-md">
                                <h1 className="text-[9px] lg:text-[10px] text-[#222222CC] text-center px-2">
                                    Collective earnings from our user community
                                </h1>
                            </div>
                            <div className="bg-white w-[200px] lg:w-[222px] py-1.5 rounded-[4px] flex items-center justify-center shadow-md">
                                <h1 className="text-[9px] lg:text-[10px] text-[#222222CC] text-center px-2">
                                    Earn cashback on every recharge & bill payment
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}