import React from 'react';
import { FaPlus } from "react-icons/fa6";

const Asked = () => {
    return (
        <div className="flex flex-col md:flex-row w-full bg-black">
        <div className="w-full md:w-1/2 p-4 text-center">
            <h1 className="text-5xl text-white p-3 font-medium">Frequently Asked  <br/>
            Questions</h1>
        </div>
        <div className="w-full md:w-1/2 p-4 flex justify-center">
            <div>
                <p className="flex text-white p-2 text-xl">
                    <FaPlus className="mr-2 text-[#B0FAFFB2]"/> What is EthAi?
                </p>
                <p className="flex text-white p-2 text-xl">
                    <FaPlus className="mr-2 text-[#B0FAFFB2]"/> How can EthAi help me as a Trader?
                </p>
                <p className="flex text-white p-2 text-xl">
                    <FaPlus className="mr-2 text-[#B0FAFFB2]"/> Who can use EthAi?
                </p>
                <p className="flex text-white p-2 text-xl">
                    <FaPlus className="mr-2 text-[#B0FAFFB2]"/> How does EthAi track smart money flow?
                </p>
                <p className="flex text-white p-2 text-xl">
                    <FaPlus className="mr-2 text-[#B0FAFFB2]"/> How does it ensure data security?
                </p>
            </div>
        </div>
    </div>
    
    );
}

export default Asked;
