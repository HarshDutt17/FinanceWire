import Hr from "./hr";

export default function About (){
    return(
        <div>
            <Hr />
            <div className="flex justify-around py-12 mx-44">
                <div className="flex flex-col w-3/5">
                    <h1 className="text-teal-700 text-2xl font-extrabold tracking-wider">All-in-One Investment Portfolio Manager</h1>
                    <p className="w-4/5 my-2 py-8 tracking-wide">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="bg-cyan-600  text-white w-32 rounded h-10 my-10">Login</button>
                </div>
                <div className="w-2/5">
                    <img src="/images/stockphone.jpg" alt="phone"  className="rounded-xl w-full"/>
                </div>
            </div>
            <Hr />
            <div className="text-center py-12 mx-44">
                <h1 className="text-teal-700 text-2xl font-bold tracking-wider">The best platform to learn investing & trading</h1>
                <p className="my-2 py-8 tracking-wide">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aliquip ex ea commodo consequat.</p>
                <button className="bg-cyan-600 text-white w-32 rounded h-10 my-10">Login</button>
            </div>
            <Hr />
            {/* <div c */}
        </div>
    )
}