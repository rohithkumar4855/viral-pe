import { useState } from "react";
import Container from "../../layout/Container";
import { Search } from "lucide-react";
import image from "../../../public/images/Owner.png";
import image2 from "../../../public/images/owner2.png";
import owner2 from "../../../public/images/owner-2.svg";
import owner3 from "../../../public/images/owner-4.svg";
import owner4 from "../../../public/images/owner-5.svg";


export default function Management() {
    const teamMembers = [
        {
            name: "Dr. P R Srinivasan",
            role: "Chairman & Managing Director",
            image: image,
            bigImage: image2,
            bio: "ViralPe is a smart fintech platform that transforms everyday payments into rewarding experiences. Users can pay bills, recharge services, and make transactions seamlessly while earning cashback or reward points on each payment."
        },
        {
            name: "Ms. Aditi Sharma",
            role: "Chief Financial Officer",
            image: owner4,
            bigImage: image2,
            bio: "Aditi manages our comprehensive financial frameworks, ensuring high scalability and resource optimization. She steers fiscal compliance and capital allocation models to secure our expansion trajectories."
        },
        {
            name: "Dr. Neha Verma",
            role: "Vice President of Research",
            image: owner3,
            bigImage: image2,
            bio: "Neha guides our product innovation strategy through intensive analytics and predictive design algorithms. Her research lays down the technological foundational pillars behind our real-time architectures."
        },
        {
            name: "Mr. Sanjay Patel",
            role: "Head of Marketing",
            image: owner2,
            bigImage: image2,
            bio: "Sanjay leads our cross-border branding framework strategies, expanding our digital market footprint. His campaigns bridge user engagement with intuitive product experiences globally."
        },
        {
            name: "Ms. Priya Iyer",
            role: "Director of Human Resources",
            image: owner4,
            bigImage: image2,
            bio: "Priya orchestrates our organizational workforce planning strategy and cultural optimization initiatives. She is dedicated to nurturing internal engineering talents and driving structural evolution."
        },
        {
            name: "Mr.Rajesh Gupta",
            role: "Chief Technology Officer",
            image: owner4,
            bigImage: image2,
            bio: "Rajesh leads our technological innovation and development initiatives, ensuring we stay at the forefront of industry advancements. His expertise drives the creation of scalable and efficient solutions."
        },
        {
            name: "Ms.Priya Sharma",
            role: "Marketing Manager",
            image: owner3,
            bigImage: image2,
            bio: "Priya  oversees our operational excellence and process optimization strategies. His leadership ensures seamless execution of our business initiatives and maintains high standards of service delivery."
        }
    ];

    const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

    return (
        <Container>
            <div className="md:max-w-[1228px] bg-(--white) rounded-[20px] mx-auto overflow-hidden">
                <div className="text-center">
                    <h1 className="text-[52px] font-semibold">
                        Our Team
                    </h1>
                    <p className="text-[24px]">The Passionate minds driving our Vision forward</p>
                    <div className="w-[385px] max-w-md mx-auto p-2">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search By name,role "
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-[1px] 
                     focus:outline-none "
                            />
                            <Search
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                size={18}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row">
                    {/* Left Sidebar Layout */}
                    <div className="md:w-[382px] md:h-[478px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-[12px] p-5 md:p-8 mt-[12px] mb-[29px]">
                        {teamMembers.map((member, index) => {
                            const isSelected = selectedMember.name === member.name;
                            return (
                                <div
                                    key={index}
                                    onClick={() => setSelectedMember(member)}
                                    className={`w-[345px] h-[80px] flex items-center gap-[12px] rounded-[12px] cursor-pointer transition-all duration-200
                                        ${isSelected
                                            ? "bg-white border-2 border-[#A21C26] shadow-md"
                                            : "bg-white border border-[#0000001A] shadow-xl "
                                        }`}
                                >
                                    <div className="w-[60px] h-[60px]  overflow-hidden flex-shrink-0  flex items-center justify-center">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h1 className="text-[20px] font-semibold text-gray-900 truncate">
                                            {member.name}
                                        </h1>
                                        <p className="text-[12px] font-medium text-[#00000080] truncate mt-1">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Dynamic Profile Container */}
                    <div className="flex flex-col md:flex-row items-center justify-between flex-1 px-4 md:px-8 mt-6 md:mt-0 relative gap-8">

                        {/* Left Side Text Content */}
                        <div className="w-full md:max-w-[420px] text-center md:text-left z-10">
                            <h1 className="text-[36px] md:text-[44px] leading-tight font-bold text-(--primary-red)">
                                {selectedMember.name}
                            </h1>

                            <p className="text-[#00000080] text-[18px] md:text-[20px] mt-2">
                                {selectedMember.role}
                            </p>

                            <div className="pt-5">
                                <p className="text-[18px] md:text-[20px] leading-[1.8] tracking-[0.5px] text-[#000000cc]">
                                    {selectedMember.bio}
                                </p>
                            </div>
                        </div>

                        {/* Right Side Image */}
                        <div className="w-full md:w-[380px] flex justify-center md:justify-end items-end md:-translate-y-10 ">
                            <img
                                src={selectedMember.bigImage}
                                alt={selectedMember.name}
                                className="w-[500px] md:w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
}