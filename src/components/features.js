export default function Features(){
    return(
        <div className="flex md:flex-col mx-44 md:px-0 md:items-center justify-around my-16 lg:text-sm">
            <div className="flex bg-calculation h-44 w-1/5 md:w-44 mr-4 md:mx-0 my-2 rounded-3xl text-center font-bold text-white"><div className="flex  justify-center items-center  bg-red-500/20 h-full rounded-3xl w-full"><p className="w-3/4">Profits & Loss Overview</p></div></div>
            <div className="flex bg-stocks h-44 w-1/5 md:w-44 mx-4 md:mx-0 my-2 rounded-3xl text-center font-bold text-white"><div className="flex  justify-center items-center  bg-red-500/20 h-full rounded-3xl w-full"><p className="w-3/4">Virtual Trader</p></div></div>
            <div className="flex bg-discussion h-44 w-1/5 md:w-44 mx-4 md:mx-0 my-2 rounded-3xl text-center font-bold text-white"><div className="flex  justify-center items-center  bg-red-500/20 h-full rounded-3xl w-full"><p className="w-3/4">Invest. Insure. Trade.</p></div></div>
            <div className="flex bg-realdata h-44 w-1/5 mx-4 md:w-44 md:mx-0 my-2 rounded-3xl text-center font-bold text-white"><div className="flex  justify-center items-center  bg-red-500/20 h-full rounded-3xl w-full"><p className="w-3/4">Near Real Time Data</p></div></div>
            <div className="flex bg-smallhouse h-44 w-1/5 md:w-44  md:mx-0 ml-4 my-2 rounded-3xl text-center font-bold text-white"><div className="flex  justify-center items-center  bg-red-500/20 h-full rounded-3xl w-full"><p className="w-3/4">Expenses. Taxes. Retirement.</p></div></div>
        </div>
    )
}