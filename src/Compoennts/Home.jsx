// src/Home.js
import React, { useState } from 'react';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative h-screen bg-black overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
            >
                <source src="https://res.cloudinary.com/dfh97e9e4/video/upload/v1729058589/-c85c-4755-a1c0-4646ee276bd5_m25gpr.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <nav className="flex justify-between items-center p-4 text-black relative z-10 mx-4">
                {/* Left Section: Logo and Text */}
                <div className="flex items-center">
                    <img
                        src="https://res.cloudinary.com/dfh97e9e4/image/upload/v1729058533/Group_20_nvbhgk.png"
                        alt="Logo"
                        className="h-10 mr-2"
                    />
                    <span className="text-lg font-bold text-white">EthAi</span>
                </div>

                {/* Middle Section: Text Items with Background Color */}
                <div className="hidden lg:flex justify-center space-x-6 bg-[#0C2B2FB2] p-2 rounded-full w-[500px] h-[50px] text-center items-center">
                    <span className="text-[#B0FAFFB2] text-sm">Features</span>
                    <span className="text-[#B0FAFFB2] text-sm">Features</span>
                    <span className="text-[#B0FAFFB2] text-sm">Tokenomics</span>
                    <span className="text-[#B0FAFFB2] text-sm">Roadmap</span>
                </div>

                {/* Hamburger Button */}
                <button
                    className="lg:hidden flex flex-col items-center justify-center p-2"
                    onClick={toggleNavbar}
                >
                    <span className={`block h-1 w-8 bg-white mb-1 transition-transform ${isOpen ? "rotate-45 translate-y-1" : ""}`}></span>
                    <span className={`block h-1 w-8 bg-white mb-1 transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                    <span className={`block h-1 w-8 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}></span>
                </button>

                {/* Right Section: Login and Button */}
                <div className="hidden lg:flex items-center space-x-2">
                    <span className="text-white text-sm">Log in</span>
                    <button className="bg-gradient-to-b from-[#CDFCFF] to-[#4CDDFD] text-black py-2 px-4 rounded-md border border-[#4CDDFD] hover:bg-gradient-to-b hover:from-[#A4E1E5] hover:to-[#CDFCFF] text-sm">
                        Whitepaper
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`absolute top-full left-0 w-full bg-[#0C2B2FB2] p-4 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col space-y-2">
                        <span className="text-[#B0FAFFB2] text-sm text-center">Features</span>
                        <span className="text-[#B0FAFFB2] text-sm text-center">Features</span>
                        <span className="text-[#B0FAFFB2] text-sm text-center">Tokenomics</span>
                        <span className="text-[#B0FAFFB2] text-sm text-center">Roadmap</span>
                        <div className="flex flex-col items-center space-y-2 mt-2">
                            <span className="text-white text-sm">Log in</span>
                            <button className="bg-gradient-to-b from-[#CDFCFF] to-[#4CDDFD] text-black py-2 px-4 rounded-md border border-[#4CDDFD] hover:bg-gradient-to-b hover:from-[#A4E1E5] hover:to-[#CDFCFF] text-sm">
                                Whitepaper
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-4">
            <h1 className="text-4xl md:text-6xl font-medium mb-4 leading-tight">
    Make Innovation <br />
</h1>
<h2 className="text-4xl md:text-6xl font-medium mb-4 leading-tight">
    meets 
    <span className="bg-[#B0F9FF] text-black rounded-full ml-2 p-2">Investment</span>
</h2>


    <p className="mt-4 text-[#B0FAFFB2] text-center">Empowering Trading Through Advanced Technology</p>
    
    {/* New Button: Open dApp */}
    <button className="mt-6 bg-transparent border border-[#B0FAFFB2] text-white py-2 px-4 rounded-md hover:bg-[#B0FAFFB2] hover:text-black transition">
        Open dApp
    </button>
</div>

        </div>
    );
};

export default Home;
