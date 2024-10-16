const About = () => {
    return (
        <div className="bg-black flex flex-col items-center text-center p-4">
            <h1 className="text-white text-5xl mt-5 mb-4 font-medium">About EthAi</h1>
            <p className="text-[#B0FAFFB2] text-xl">
                At EthAi, we’re all about making crypto trading easier and more intuitive. We provide tools <br />
                that help traders keep up with all new market trends, track top traders’ movements.
            </p>
            <button className="bg-gradient-to-b mt-5 from-[#CDFCFF] to-[#4CDDFD] text-black py-2 px-4 rounded-md border border-[#4CDDFD] hover:bg-gradient-to-b hover:from-[#A4E1E5] hover:to-[#CDFCFF] text-sm">
                Read more
            </button>

            {/* Card here */}
            <div className="flex items-center justify-center mt-10">
    <div className="bg-[#08252A] h-auto w-full max-w-[600px] flex flex-wrap items-center justify-center rounded-lg shadow-lg p-4">
        <div className="flex flex-col items-start justify-center w-full sm:w-1/2 p-5">
            <img src="https://res.cloudinary.com/dfh97e9e4/image/upload/v1729075061/graph_cluuf1.png" alt="Insight" className="mb-2" />
            <h1 className="text-left text-xl text-white">Stay Ahead</h1>
            <p className="text-left text-sm text-[#B0FAFFB2]">No more guesswork—get clear,<br /> trustable insights.</p>
        </div>
        <div className="flex flex-col items-start justify-center w-full sm:w-1/2 p-5">
            <img src="https://res.cloudinary.com/dfh97e9e4/image/upload/v1729075667/Vector_aurmey.png" alt="Insight" className="mb-2" />
            <h1 className="text-left text-xl text-white">Know Your Assets</h1>
            <p className="text-left text-sm text-[#B0FAFFB2]">Always stay on top of how your investments are performing.</p>
        </div>
        <div className="flex flex-col items-start justify-center w-full sm:w-1/2 p-5">
            <img src="https://res.cloudinary.com/dfh97e9e4/image/upload/v1729075672/Vector_1_nh8dwq.png" alt="Insight" className="mb-2" />
            <h1 className="text-left text-xl text-white">Simple, Not Overwhelming</h1>
            <p className="text-left text-sm text-[#B0FAFFB2]">Our tools are designed to make complex market analysis easy to understand and act on.</p>
        </div>
        <div className="flex flex-col items-start justify-center w-full sm:w-1/2 p-5">
            <img src="https://res.cloudinary.com/dfh97e9e4/image/upload/v1729075677/Vector_2_awravx.png" alt="Insight" className="mb-2" />
            <h1 className="text-left text-xl text-white">Future-Proof</h1>
            <p className="text-left text-sm text-[#B0FAFFB2]">We’re constantly improving, adding new features to help you make the most informed decisions possible.</p>
        </div>
    </div>
</div>


        </div>
    );
}

export default About;
