import React, { useState ,useRef} from 'react';

// Structured text data extracted accurately from your Refund Policy image
const refundSections = [
    {
        id: 'refund-eligibility',
        title: 'Refund Eligibility',
        subsections: [
            { subtitle: 'Successful Delivery', text: 'Completed and successful provider deliveries are generally not eligible for refund unless mandated by law or provider reversal.' },
            { subtitle: 'Failed/Uncertain Status', text: 'Transactions marked failed or unresolved beyond settlement windows are reviewed for refund or reversal.' }
        ]
    },
    {
        id: 'processing-timeline',
        title: 'Processing Timeline',
        subsections: [
            { subtitle: 'Standard Cycle', text: 'Eligible refunds are initiated after verification and may take additional banking time to reflect in source account/wallet.' },
            { subtitle: 'Communication', text: 'You can track outcomes through transaction status, support tickets, and registered communication channels.' }
        ]
    },
    {
        id: 'partial-duplicate',
        title: 'Partial or Duplicate Cases',
        subsections: [
            { subtitle: 'Partial Settlements', text: 'In case of partial execution/adjustment, only the net eligible amount is processed as refund or credit.' },
            { subtitle: 'Duplicate Charges', text: 'Duplicates are validated against gateway/provider references before corrective action.' }
        ]
    },
    {
        id: 'non-refundable',
        title: 'Non Refundable Cases',
        subsections: [
            { subtitle: 'User Input Errors', text: 'Incorrect number/operator/account details entered by user may be ineligible once provider confirms success.' },
            { subtitle: 'Policy Abuse', text: 'Fraudulent or policy-violating activity is excluded from refund rights and may trigger restrictions.' }
        ]
    },
    {
        id: 'charge-backs',
        title: 'Charge Backs',
        subsections: [
            { subtitle: 'Dispute Path', text: 'Payment disputes and chargebacks are handled as per gateway/acquirer rules and supporting evidence.' },
            { subtitle: 'Impact', text: 'Improper chargebacks can affect account standing and future transaction permissions.' }
        ]
    }
];

export default function RefundPolicy() {
   const [activeSection, setActiveSection] = useState('info-collect');
     const contentRef = useRef(null);
     const sectionRefs = useRef({});
   
     const handleNavClick = (id) => {
       setActiveSection(id);
   
       const container = contentRef.current;
       const section = sectionRefs.current[id];
   
       if (container && section) {
         // offsetTop gives the position relative to the closest positioned parent (the container)
         container.scrollTo({
           top: section.offsetTop - 20, // 20px padding at the top
           behavior: "smooth",
         });
       }
    };

    return (
        <div>
            <div className="justify-center flex flex-row gap-[36px]">

                {/* SIDEBAR NAVIGATION (Pure Flex Block Container) */}
                <div className="max-w-[370px] w-full h-[432px] flex flex-col p-5 bg-white rounded-[16px] shadow-sm border border-gray-100">
                    <h2 className="text-[20px] font-semibold text-[#1C1B1B] mb-3">
                        Refund Policy
                    </h2>

                    <div className="flex flex-col">
                        { refundSections.map((section) => {
                            const isActive = activeSection === section.id;

                            return (
                                <div key={section.id}>
                                    <button
                                        onClick={() => handleNavClick(section.id)}
                                        className={`w-full flex items-center justify-between py-4 text-sm font-medium rounded-xl transition-all duration-200 relative ${isActive ? "text-[#C53030] text-[16px]" : "text-gray-600"
                                            }`}
                                    >
                                        <span>{section.title}</span>

                                        <svg
                                            className={`w-4 h-4 transition-transform ${isActive ? "text-[#C53030]" : "text-gray-400"
                                                }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>

                                        {isActive && (
                                            <div className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-r border-t border-gray-100" />
                                        )}
                                    </button>

                                    {/* Horizontal line */}
                                    <hr className="border-gray-200" />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* MAIN CONTENT AREA CONTAINER */}
                {/* Fix 1: Added ref={contentRef} */}
                {/* Fix 2: Added 'relative' to calculate offsetTop accurately */}
                {/* Fix 3: Removed conflicting 'overflow-hidden' alongside 'overflow-y-auto' */}
                <div
                    ref={contentRef}
                    className="relative h-full p-4 w-[811px] max-h-[1277px] overflow-y-auto overflow-x-hidden flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                    {/* Header Version Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-2 gap-4">
                        <div className="flex items-center text-xs text-gray-500 font-medium">
                            <span className="p-1 bg-[#FFEDEE] text-gray-700 rounded-md font-semibold mr-2">v1.1.0</span>
                            <span>Published on 02 May 2024, 10:46 AM</span>
                        </div>

                        <button className="flex items-center justify-center p-4 gap-2 border border-[#C53030] text-[#C53030] rounded-xl text-sm font-bold hover:bg-[#FFF5F5] transition-colors self-start sm:self-auto">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download as PDF
                        </button>
                    </div>

                    {/* Privacy content stack */}
                    <div className="flex flex-col p-3">
                        { refundSections.map((section) => (
                            <section
                                key={section.id}
                                ref={(el) => (sectionRefs.current[section.id] = el)}
                                className="flex flex-col mb-4" // Added minor bottom margin for spacing
                            >
                                <h3 className="text-base font-bold text-[#C53030] tracking-wide pb-1">
                                    {section.title}
                                </h3>

                                <div className="flex flex-col pl-1">
                                    {section.subsections.map((sub, idx) => (
                                        <div key={idx} className="flex flex-col">
                                            <h4 className="text-sm font-bold text-gray-900">
                                                {sub.subtitle}
                                            </h4>
                                            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3">
                                                {sub.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}