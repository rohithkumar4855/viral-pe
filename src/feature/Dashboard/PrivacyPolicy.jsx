import React, { useState, useRef } from 'react';

// Structured text data extracted accurately from your Privacy Policy image
const privacySections = [
  {
    id: 'info-collect',
    title: 'Information We Collect',
    subsections: [
      { subtitle: 'Account & Profile', text: 'We collect details like name, mobile number, email, and pincode when you register and complete your profile.' },
      { subtitle: 'Transaction Data', text: 'Recharge, bill payment, voucher, referral, and wallet activity is captured for service delivery, reconciliation, and support.' },
      { subtitle: 'Device & Usage', text: 'We may collect device metadata, IP, app/browser details, and diagnostics to secure the platform and improve reliability.' }
    ]
  },
  {
    id: 'processing-timeline',
    title: 'Processing Timeline',
    subsections: [
      { subtitle: 'Service Fulfillment', text: 'Your data is used to process transactions, verify payments, resolve status updates, and generate receipts.' },
      { subtitle: 'Security & Fraud Prevention', text: 'Data is analyzed to detect abuse, unauthorized access, suspicious patterns, and policy violations.' },
      { subtitle: 'Product Operations', text: 'Operational analytics help us monitor uptime, improve UX, and optimize support workflows.' }
    ]
  },
  {
    id: 'data-sharing',
    title: 'Data Sharing',
    subsections: [
      { subtitle: 'Service Providers', text: 'Data is shared with payment gateways, recharge providers, and infrastructure vendors only as required to fulfill services.' },
      { subtitle: 'Legal Compliance', text: 'We may disclose information when required by law, court order, or to enforce our legal rights and policies.' }
    ]
  },
  {
    id: 'data-security',
    title: 'Data Security',
    subsections: [
      { subtitle: 'Encryption in Transit', text: 'We secure app-to-server and server-to-provider communication with encrypted transport protocols (HTTPS/TLS).' },
      { subtitle: 'Encryption at Rest', text: 'Sensitive records are protected with storage-level safeguards and encryption controls where applicable.' },
      { subtitle: 'Access Controls', text: 'Role-based access and logging controls are used internally to reduce unauthorized data access.' },
      { subtitle: 'Infrastructure Security', text: 'Managed infrastructure controls, monitoring, and incident response practices are used to protect systems.' }
    ]
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    subsections: [
      { subtitle: 'Operational Retention', text: 'Records are retained for accounting, support, compliance, and dispute resolution requirements.' },
      { subtitle: 'Deletion Workflow', text: 'Where applicable, users can request deletion and we process eligible records according to policy and law.' }
    ]
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    subsections: [
      { subtitle: 'Access & Correction', text: 'You can review and update profile details from your account settings or by contacting support.' },
      { subtitle: 'Consent & Preferences', text: 'You may opt out of non-essential communication where offered.' }
    ]
  },
  {
    id: 'policy-updates',
    title: 'Policy Updates',
    subsections: [
      { subtitle: 'Versioning', text: 'We may revise this policy from time to time. Updated versions become effective from the displayed date.' },
      { subtitle: 'Notice', text: 'Material changes will be notified contextually through the platform dashboard prior to becoming effective.' }
    ]
  }
];

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h2>

          <div className="flex flex-col">
            {privacySections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <div key={section.id}>
                  <button
                    onClick={() => handleNavClick(section.id)}
                    className={`w-full flex items-center justify-between py-4 text-sm font-medium rounded-xl transition-all duration-200 relative ${
                      isActive ? "text-[#C53030] text-[16px]" : "text-gray-600"
                    }`}
                  >
                    <span>{section.title}</span>

                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isActive ? "text-[#C53030]" : "text-gray-400"
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
            {privacySections.map((section) => (
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