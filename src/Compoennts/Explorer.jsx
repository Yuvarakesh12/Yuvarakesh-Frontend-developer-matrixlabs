const Explorer = () => {
    return(
        <div className="flex justify-center items-center w-full bg-black p-5">
        <div className="bg-[#011C24] border-t border-[#00C2DB80] w-3/4 p-4 rounded-lg shadow-lg">
            {/* Card content goes here */}
            <h2 className="text-white text-2xl mb-3 text-center">Explore Our <span className="text-[#62F0FE]">dApp</span></h2>
            <p className="text-white text-center">
                EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions.<br/>
                 By tracking smart money flows, monitoring key wallets, and providing real-time market<br/>
                  insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI <br/>
                  features for asset recommendations, market analysis, and personalized crypto Q&A, <br/>
                  making it the ultimate tool for both novice and experienced traders.</p>
                   <div className="justify-center flex mt-2">
                   <button className="bg-gradient-to-b from-[#CDFCFF] to-[#4CDDFD] text-black py-2 px-4 rounded-md border border-[#4CDDFD] hover:bg-gradient-to-b hover:from-[#A4E1E5] hover:to-[#CDFCFF] text-sm">
                   Open dApp
                        </button>
                   </div>
                 
        </div>
    </div>
    )
}

export default Explorer;