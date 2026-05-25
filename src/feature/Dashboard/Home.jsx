import { WalletandEarningsCard } from "../../../data";


const WalletandEarnings = ({ icon, title, amount}) => {
    return (
        <div className="flex flex-col border border-[#000000]/10 rounded-2xl bg-white shadow-sm transition-shadow w-full max-w-[183px] max-h-[108px] ">
            <div className="p-[16.14px]">
            <div className=" flex flex-row items-center gap-2">
                <div className="text-(--primary-red) p-1.5 rounded-[9.33px] ">
                    <img
                        src={icon}
                        alt={title}
                        className="object-contain w-9.5 h-9.5"
                    />
                </div>
                <h4 className="text-[11.15px] font-semibold text-[#6F0014] uppercase">
                    {title}
                </h4>
            </div>

            {/* Amount */}
            <h3 className="text-[20.82px] font-bold text-[#1c1b1b]">
                {amount}
            </h3>
        </div>
         </div>
    );
};


export default function Home() {
    return (
        <div className="w-full  max-w-[1217px] max-h-[240px] mx-auto mt-[32px]   bg-white rounded-[20px] p-8 md:p-10 shadow-sm border border-gray-100">
            <div className="mb-6">
                <h1 className="text-[24px] font-semibold">Wallet & Earnings</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-6 ">
                {WalletandEarningsCard.map((item) => (
                    <WalletandEarnings
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        amount={item.amount}
                        subtitle={item.subtitle}
                    />
                ))}
            </div>
        </div>
    );
}