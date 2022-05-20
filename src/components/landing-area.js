import { FaBitcoin, FaEthereum, FaPiggyBank, FaWallet } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { BiUpArrow } from "react-icons/bi";

export default function Landing(){
    return(
        <div className="flex bg-white">
            <div className="flex flex-col w-2/3 h-full md:pt-24">
                <img src="/images/callgestureman.jpg" alt="man doing call gesture" className="w-3/4"/>
                <div className="flex justify-around items-center text-slate-100 text-5xl md:text-xl h-24 md:h-12 bg-red-500/90 rounded-t-2xl pt-4 md:pt-0">
                    <FaBitcoin/>
                    <FaEthereum />
                    <FaPiggyBank />
                    <AiOutlineStock />
                    <FaWallet />
                </div>
            </div>
            
            <div className="flex flex-col w-1/3 h-full items-center bg-gray-50">
                <div class="relative flex overflow-x-hidden w-full text-sm md:text-xs bg-slate-200">
                    <div class="animate-marquee whitespace-nowrap flex">
                        <span class="mx-4 flex">Company Name <span className="text-teal-600 flex pl-2 items-center">888% <BiUpArrow /> </span></span>
                        <span class="mx-4 flex">Company Name <span className="text-teal-600 flex pl-2 items-center">888% <BiUpArrow /> </span></span>
                        <span class="mx-4 flex">Company Name <span className="text-teal-600 flex pl-2 items-center">888% <BiUpArrow /> </span></span>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="w-2/5 py-4 md:my-2  my-12">
                        <img src="/images/logo.jpg" alt="FWlogo"  className="border rounded-lg border-red-900 ring-2 ring-red-900"  />
                    </div>
                    <div className="">
                        <p className="text-3xl font-serif pt-6 pb-12 md:pb-4 md:pt-1 md:text-sm">The Financial Wire</p>
                        <p className="text-xl italic font-bold text-teal-700  tracking-widest md:text-xs"> Sab Portfolio Manager <br/> Apps Ka Baap</p>
                        <button className="bg-cyan-600  text-white w-3/4 rounded h-10 mt-8 sm:mt-2 md:text-xs md:w-1/2 md:h-6">Login</button>
                    </div>
                </div>    
            </div>
        </div>  
    )
}