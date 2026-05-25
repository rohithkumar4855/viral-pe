import Container from "../../layout/Container";
import { Search } from "lucide-react";
import image from "../../../public/images/owner-3.png";

function PartnerCard({ name, role, imageUrl }) {
    return (
        <div className="relative max-h-[228.21px] w-[221.47px] rounded-[20px]  shadow-md hover:shadow-xl flex justify-center">
            <div className="max-w-[221px] max-h-[228px] overflow-hidden">
                {/* Profile Image */}
                <img
                    src={imageUrl}
                    alt={name}
                    className=" relative"
                />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-5 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                    <h2 className="text-white text-[18px] md:text-[20px] font-bold leading-tight">
                        {name}
                    </h2>

                    <p className="text-gray-300 text-[12px] md:text-[13px] mt-1">
                        {role}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Management() {

    const associatePartners = [
        { name: "Dr. P R Srinivasan", role: "Chairman & Managing Director", image: image },
        { name: "Ms. A B Gupta", role: "Chief Financial Officer", image: image },
        { name: "Mr. G H Kumar", role: "Head of Sales", image: image },
        { name: "Ms. E F Khan", role: "Director of Marketing", image: image },
        { name: "Mr. C D Patel", role: "Chief Technology Officer", image: image },
        { name: "Dr. I J Verma", role: "Chief Operations Officer", image: image },
        { name: "Dr. S T Iyer", role: "Research and Development Lead", image: image },
        { name: "Ms. K L Singh", role: "HR Manager", image: image },
        { name: "Ms. U V Sharma", role: "Brand Strategist", image: image },
        { name: "Mr. M N Reddy", role: "Product Manager", image: image },
        { name: "Dr. P R Srinivasan", role: "Chairman & Managing Director", image: image },
        { name: "Ms. A B Gupta", role: "Chief Financial Officer", image: image },
        { name: "Mr. G H Kumar", role: "Head of Sales", image: image },
        { name: "Ms. E F Khan", role: "Director of Marketing", image: image },
        { name: "Mr. C D Patel", role: "Chief Technology Officer", image: image },
        { name: "Dr. I J Verma", role: "Chief Operations Officer", image: image },
        { name: "Dr. S T Iyer", role: "Research and Development Lead", image: image },
        { name: "Ms. K L Singh", role: "HR Manager", image: image },
        { name: "Ms. U V Sharma", role: "Brand Strategist", image: image },
        { name: "Mr. M N Reddy", role: "Product Manager", image: image },
         { name: "Dr. I J Verma", role: "Chief Operations Officer", image: image },
        { name: "Dr. S T Iyer", role: "Research and Development Lead", image: image },
        { name: "Ms. K L Singh", role: "HR Manager", image: image },
        { name: "Ms. U V Sharma", role: "Brand Strategist", image: image },
        { name: "Mr. M N Reddy", role: "Product Manager", image: image },
    ];

    return (
        <Container>
            <div className="w-full max-w-[1228px] mx-auto bg-white rounded-[20px] px-4 py-8 md:px-10 md:py-10 gap-[15.45px]">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-[34px] md:text-[52px] font-semibold text-gray-900 leading-tight">
                        Our Associate Partners
                    </h1>

                    <p className="text-[18px] md:text-[24px] text-[#00000080] mt-3">
                        The passionate minds driving our vision forward.
                    </p>

                    {/* Search */}
                    <div className="w-full max-w-[385px] mx-auto mt-5">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search by name, role..."
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-[10px]  text-sm"
                            />

                            <Search
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                size={18}
                            />
                        </div>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className=" grid grid-cols-1 gap-[15.41px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

                    {associatePartners.map((partner, index) => (
                        <div className="">

                            <PartnerCard
                                key={index}
                                name={partner.name}
                                role={partner.role}
                                imageUrl={partner.image}

                            />
                        </div>
                    ))}

                </div>
            </div>
        </Container>
    );
}