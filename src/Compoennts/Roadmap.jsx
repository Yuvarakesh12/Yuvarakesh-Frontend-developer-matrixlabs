import { FaRegCheckCircle } from "react-icons/fa";

const Roadmap = () => {
    return (
        <div className="bg-black">
            <h1 className="text-5xl text-center text-white pb-5 pt-5 font-bold">Roadmap</h1>

            {/* First Container */}
            <div className="flex flex-col md:flex-row justify-between items-center p-4">
                <div className="text-white w-full md:w-1/2 ml-5">
                    <h2 className="text-2xl p-5 font-medium">Kicking Off</h2>
                    {[
                        "Launch of EthAi: Officially",
                        "Development of Core AI Agents",
                        "User Onboarding Campaign",
                        "Community Engagement Initiatives"
                    ].map((text, index) => (
                        <p key={index} className="flex items-center p-3 text-lg font-[Roboto]">
                            <FaRegCheckCircle className="mr-2 text-[#B0FAFFB2]" />
                            {text}
                        </p>
                    ))}
                </div>
                <div className="w-full md:w-1/2">
                <video 
                        autoPlay 
                        loop 
                        muted 
                        className="w-full h-[300px] object-cover border-4 border-transparent p-5"
                    >
                        <source src="https://res.cloudinary.com/dfh97e9e4/video/upload/v1729083453/-dbe5-4e84-a0d0-34a0193e07d6_pu48pf.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Second Container */}
            <div className="flex flex-col md:flex-row justify-between items-center p-4">
                <div className="w-full md:w-1/2">
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        className="w-full h-[300px] object-cover border-4 border-transparent p-5"
                    >
                        <source src="https://res.cloudinary.com/dfh97e9e4/video/upload/v1729080419/-0cff-4aa8-9d9a-c49552d1766c_e57zks.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="text-white w-full md:w-1/2 ">
                   <div>
                    <h2 className="text-2xl p-5 font-medium">Bigger Insights</h2>
                    {[
                        "Introduction of Advanced AI Agents",
                        "Strategic Partnerships",
                        "User Interface Optimization",
                        "Comprehensive Marketing Campaign"
                    ].map((text, index) => (
                        <p key={index} className="flex  p-3 text-lg font-[roboto]">
                            <FaRegCheckCircle className="mr-2 text-[#B0FAFFB2]" />
                            {text}
                        </p>
                    ))}
                </div>
                </div>
            </div>

            {/* Third Container */}
            <div className="flex flex-col md:flex-row justify-between items-center p-4">
                <div className="text-white w-full md:w-1/2 ml-5">
                    <h2 className="text-2xl p-5 font-medium">Full power</h2>
                    {[
                        "Introduction of Enhanced Features",
                        "API Integration for Data Access",
                        "Launch of Community-Driven Initiatives",
                        "Continuous Improvement and Updates"
                    ].map((text, index) => (
                        <p key={index} className="flex items-center p-3 text-lg font-[Roboto]">
                            <FaRegCheckCircle className="mr-2 text-[#B0FAFFB2]" />
                            {text}
                        </p>
                    ))}
                </div>
                <div className="w-full md:w-1/2 relative">
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        className="w-full h-[300px] object-cover border-4 border-transparent p-5"
                    >
                        <source src="https://res.cloudinary.com/dfh97e9e4/video/upload/v1729082223/-c5e4-4b3f-b0ee-214e16d683f4_wt1se3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Roadmap;
