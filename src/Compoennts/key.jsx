const Key = () => {
    return (
       <div className="flex flex-col bg-black p-4 font-custom">
           <h1 className="text-center text-white text-4xl p-5 hidden md:block font-bold">Our Features</h1>
           <div className="flex flex-col md:flex-row justify-between w-full">
               {/* container-1 */}
               <div className="w-full md:w-[20%] mb-4 md:mb-2 p-4 bg-[#0F373C] text-center border border-gray-300 rounded-tl-[5px] md:rounded-tl-[50px] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[5px] flex flex-col items-center justify-center" style={{ overflow: 'hidden' }}>
                   <img src="https://res.cloudinary.com/dfh97e9e4/image/upload/v1729072545/Rectangle_3_gnllbm.png" className="mx-auto mb-4" />
                   <div className="text-center">
                       <h1 className="text-xl text-white font-custom font-medium">Trade Optimizer</h1> {/* Custom font applied */}
                       <p className="text-[#B0FAFFB2] font-custom">Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.</p>
                   </div>
               </div>

               {/* container-2 */}
               <div className="flex-1 md:mx-2 flex flex-col gap-2">
                   <div className="flex items-center bg-[#0F373C] border border-gray-300 relative rounded-lg">
                       <div className="flex-1 p-2">
                           <h1 className="text-xl text-white font-custom font-medium">Market Insight</h1>
                           <p className="text-lg mt-2 text-[#B0FAFFB2] hidden md:block font-custom">Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.</p>
                           <p className="text-sm mt-2 text-[#B0FAFFB2] md:hidden font-custom">Stay updated on market trends and key signals.</p>
                       </div>
                       <img 
                           src="https://res.cloudinary.com/dfh97e9e4/image/upload/v1729067839/7AVABZyyTAliootVGguafuelpHU.svg_fill_d0ybcc.png" 
                           alt="Market Insight" 
                           className="ml-4 md:h-[165px] h-[250px] block rounded-lg" 
                       />
                   </div>
                   {/* container-3 */}
                   <div className="flex-1 p-4 bg-[#0F373C] text-center border border-gray-300 text-4xl flex items-center justify-center text-white rounded-tl-[5px] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[5px] mb-2">
                       <span className="font-custom font-medium">Our features</span> {/* Custom font applied */}
                   </div>
               </div>

               <div className="w-full md:w-[20%] p-4 bg-[rgba(15,55,60,0.8)] text-center border border-gray-300 rounded-tl-[5px] rounded-br-[5px] rounded-bl-[5px] rounded-tr-[5px] md:rounded-tr-[50px] mb-2 flex flex-col items-center">
                   <img className="mb-2" src="https://res.cloudinary.com/dfh97e9e4/image/upload/v1729069055/l1NtBTj8px6kzRLIscIs56ETWRE.svg_opzmgr.png" />
                   <div>
                       <h1 className="text-white text-xl mb-2 font-custom font-medium">Risk Guard Agent</h1> {/* Custom font applied */}
                       <p className="text-[#B0FAFFB2] font-custom">Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.</p>
                   </div>
               </div>
           </div>

           <div className="flex flex-col md:flex-row justify-between">
               {/* container-4 */}
               <div className="w-full md:w-[40%] bg-[#0F373C] p-4 border border-gray-300 rounded-lg mb-4 md:mb-0 mr-2 rounded-tl-[5px] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[5px] md:rounded-bl-[50px]">
                   <h2 className="text-white text-xl font-custom font-medium">Portfolio Sync</h2> {/* Custom font applied */}
                   <p className="text-[#B0FAFFB2] font-custom">Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed.</p>
               </div>

               {/* container-5 */}
               <div className="flex items-center w-full md:w-[60%] bg-[#0F373C] border border-gray-300 rounded-lg mb-4 md:mb-0 rounded-tl-[5px] rounded-tr-[5px] rounded-br-[5px] md:rounded-br-[50px] rounded-bl-[5px]">
                   <div className="flex-1">
                       <h2 className="text-white text-xl p-2 font-custom font-medium">Opportunity Scout</h2> {/* Custom font applied */}
                       <p className="text-[#B0FAFFB2] p-2 font-custom">
                           Find exciting new projects, events, and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.
                       </p>
                   </div>

                   <img 
                       src="https://res.cloudinary.com/dfh97e9e4/image/upload/v1729073756/OBJECTS_hejioo.png" 
                       alt="Opportunity Scout" 
                       className="w-32 md:h-[165px] h-[250px] rounded-br-[50px]" 
                   />
               </div>
           </div>
       </div>
    );
};

export default Key;


