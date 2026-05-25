import Graph from "../../../public/images/Graph.png";
import Graphbar from "../../../public/images/GraphBar.png";

export default function Revenue() {

  const statsData = [
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

  return (
    <div className="w-full max-w-[1217px] max-h-[98px] mx-auto mt-[32px] bg-white rounded-[20px] shadow-sm px-6 py-5">

      <div className="flex flex-wrap items-center justify-between gap-6">

        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img
            src={Graph}
            alt="Graph"
            className="w-[46px] h-[46px] object-contain "
          />

          <div className="flex flex-col">
            <h3 className="text-[12px] text-[#666666] font-medium">
              This Month
            </h3>

            <h2 className="text-[18px] font-semibold text-[#222222]">
              You Earned ₹320
            </h2>

            <p className="text-[13px] text-green-600">
              +18% growth from last month
            </p>
          </div>
        </div>

        {/* Reusable Stats Section */}
        <div className="flex items-center">

          {statsData.map((item, index) => (
            <div key={item.id} className="flex items-center">

              <div className="px-6 text-center">
                <h1 className="text-[22px] font-bold text-[#222222]">
                  {item.value}
                </h1>

                <p className="text-[13px] text-[#666666]">
                  {item.label}
                </p>
              </div>

              {/* Divider Line */}
              {index !== statsData.length - 1 && (
                <div className="w-[1px] h-[50px] bg-[#E5E5E5]"></div>
              )}

            </div>
          ))}

        </div>

        {/* Right Graph */}
        <div className="mr-20">
          <img
            src={Graphbar}
            alt="Graph Bar"
            className="w-[120px] object-contain "
          />
        </div>

      </div>
    </div>
  );
}