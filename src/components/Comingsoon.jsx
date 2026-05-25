import React from "react";
import logo from "../../public/images/logo.png"

const ComingSoon = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6">
            <div className="max-w-2xl w-full text-center">

                {/* Logo */}
                <div className="flex  justify-center mb-10">
                    <div>
                        <img
                            src={logo}
                            alt="V PE 4 U"
                            className="w-26  h-26"
                        />
                        <h1 className="text-[26px] text-[#901c27] font-bold tracking-tight ">ViralPe</h1>
                    </div>
                </div>

                {/* Badge */}


                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                    Coming Soon
                </h1>

                {/* Description */}
                <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
                    We’re currently working on this feature to deliver a seamless and
                    valuable experience. It will be available very soon.
                </p>

                {/* Divider */}
                <div className="w-24 h-[2px] bg-[#901c27] mx-auto my-10 rounded-full"></div>

                {/* Footer Message */}
                <p className="text-sm text-gray-500">
                    Thank you for your patience while we build something better for you.
                </p>

                {/* Copyright */}
                <div className="mt-16 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-400">
                        © 2026 V PE 4 U. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;