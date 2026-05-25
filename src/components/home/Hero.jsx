import { useState } from "react";
import Container from "../../layout/Container";
import Button from "../ui/Button";
import Appleicon from "../../../public/images/appleicon.png";
import playstoreicon from "../../../public/images/playstoreicon.png";
import homescreen from "../../../public/images/Homescreen1.png";
import Frame_1 from "../../../public/images/Frame_1.png";
import Frame_2 from "../../../public/images/Frame_2.png";
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

// ADD BELOW rechargeData ARRAY (around line 31)

const headings = {
    1: "Prepaid Recharge",
    2: "Postpaid Recharge",
    3: "DTH Recharge",
    4: "FASTag Recharge",
};

// ADD BELOW headings OBJECT (around line 38)

const labels = {
    1: "Mobile Number",
    2: "Mobile Number",
    3: "Subscriber ID/Registered Mobile Number",
    4: "Bank",
};

export default function Heropage() {
    const [activeTab, setActiveTab,] = useState(null);

    return (
        <section>
            <div className="max-w-301.75 mt-25 mx-auto  flex flex-col md:flex-row gap-7.75 ">
                <div className="flex flex-col gap-4 bg-white rounded-2xl max-w-181 h-[264px] w-full p-[27.28px] shadow-sm relative overflow-hidden">

                    {/* Default View: Show 4 Icons */}
                    {activeTab === null && (
                        <div className="animate-in fade-in duration-300">
                            <h2 className="font-semibold text-[28px] text-[#222222]">
                                Recharge or Pay Mobile Bill
                            </h2>

                            <div className="flex flex-row justify-evenly gap-14.25 mt-2">
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
                                            className=" object-contain mb-2"
                                        />
                                        <p className="text-sm font-medium flex flex-col items-center text-gray-800 leading-tight">
                                            <span>{item.title.split(" ")[0]}</span>
                                            <span>{item.title.split(" ")[1]}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab !== null && (
                        <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center z-[999]">

                            {/* Modal Box */}
                            <div className="bg-white w-[650px] rounded-[20px] px-7 py-6 shadow-2xl relative animate-in fade-in zoom-in duration-300">

                                {/* Close Button */}
                                <button
                                    onClick={() => setActiveTab(null)}
                                    className="absolute top-5 right-5 text-gray-400 hover:text-black"
                                >
                                    ✕
                                </button>

                                {/* Heading */}
                                <h2 className="font-bold text-[28px] text-[#222222] mb-8">
                                    {headings[activeTab]}
                                </h2>

                                {/* Label */}
                                <label className="text-[14px] font-medium text-[#222222] mb-2 block">
                                    {labels[activeTab]}
                                </label>

                                {/* Input */}


                                {/* FASTag Inputs */}
                                {activeTab === 4 ? (
                                    <div className="flex flex-col gap-4">

                                        {/* Vehicle Number */}
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Enter Bank Name"
                                                className="w-full border border-gray-200 rounded-[10px] px-5 py-4 outline-none text-[15px]"
                                            />
                                        </div>

                                        {/* Mobile Number */}
                                        <div>
                                            <label className="text-[14px] font-medium text-[#222222] mb-2 block">
                                                Vehicle Number/Chassis Number/Registered Mobile Number
                                            </label>

                                            <div className="flex border border-gray-200 rounded-[10px] overflow-hidden">


                                                <input
                                                    type="text"
                                                    placeholder="Enter Vehicle Number/Chassis Number/Registered Mobile Number"
                                                    className="flex-1 px-5 py-4 outline-none text-[15px]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex border border-gray-200 rounded-[10px] overflow-hidden">

                                        {(activeTab === 1 || activeTab === 2) && (
                                            <div className="bg-[#FFF0F3] flex items-center gap-2 px-5">
                                                <span className="text-[15px] font-medium">+91</span>
                                                <ChevronDown size={16} />
                                            </div>
                                        )}

                                        <input
                                            type={activeTab === 3 ? "text" : "tel"}
                                            placeholder={
                                                activeTab === 3
                                                    ? "Enter Subscriber ID / Registered Mobile Number"
                                                    : "Enter Mobile Number"
                                            }
                                            className="flex-1 px-5 py-4 outline-none text-[15px]"
                                        />
                                    </div>
                                )}

                                {/* Button */}
                                <div className="flex justify-center mt-8">

                                    <button className="bg-[#850F22] hover:bg-[#720c1d] max-h-[48px] max-w-[245px] transition-colors text-white font-medium w-[220px] py-[12px] rounded-[8px]">
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


                {/* rightcard */}
                <div className="w-110 min-w-110 h-66 bg-[#FFEDEE] rounded-2xl flex flex-row relative overflow-hidden shrink-0 shadow-sm">

                    {/* --- Left Text Content --- */}
                    <div className="flex flex-col pt-[23px] pl-[19px] z-10 w-[240px]">
                        <h2 className="font-bold text-[26px] leading-[1.2] text-[#222222] mb-3">
                            Recharge or Pay<br />Mobile Bill
                        </h2>

                        <p className="text-[14px] leading-[1.4] text-gray-700 mb-6 max-w-[180px]">
                            Collective earnings from our user community
                        </p>

                        <div>
                            <button className="rounded-lg py-[8px] px-[5px] flex flex-row items-center gap-[6px]  text-white bg-[#721c22] transition-colors shadow-sm  max-w-[173px] max-h-[30px] w-full">
                                <span className="text-[12px] font-medium leading-none mt-[1px]">Download ViralPe App</span>
                                <div className="flex flex-row items-center gap-[4px]">
                                    <img src={playstoreicon} alt="Play Store" className="w-[14px] h-[14px] object-contain" />
                                    <img src={Appleicon} alt="Apple" className="w-[14px] h-[14px] object-contain pb-[1px]" />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="relative flex items-start">

                        {/* Mobile Card */}
                        <div className="w-[180px] h-[353.67px]  mr-[25px] bg-white rounded-[25.2px] border-[6.3px] border-[#222222] flex flex-col items-center mt-[70px] shadow-sm relative">

                            <img
                                src="/images/logoname.png"
                                alt="ViralPe Logo"
                                className=" object-contain mt-4"
                            />
                        </div>

                        {/* Text Boxes */}
                        <div className="flex flex-col gap-2 absolute left-[px] right-[10px] mt-[150px]">

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
        </section>
    );
}