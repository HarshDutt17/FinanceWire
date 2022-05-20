import Hr from "./hr";
import Login from "./loginbutton";

export default function About (){
    return(
        <div>
            <Hr />
            <div className="flex md:flex-col justify-around py-12 mx-44 md:mx-10">
                <div className="flex flex-col w-3/5 md:w-full">
                    <h1 className="text-teal-700 text-2xl font-extrabold tracking-wider">All-in-One Investment Portfolio Manager</h1>
                    <p className="w-4/5 sm:w-full my-2 py-8 tracking-wide">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Login />
                </div>
                <div className="w-2/5 md:w-full">
                    <img src={process.env.PUBLIC_URL + "/images/stockphone.jpg"} alt="phone"  className="rounded-xl w-full"/>
                </div>
            </div>
            <Hr />
            <div className="text-center py-12 mx-44 md:mx-10">
                <h1 className="text-teal-700 text-2xl font-bold tracking-wider">The best platform to learn investing & trading</h1>
                <p className="my-2 py-8 tracking-wide">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aliquip ex ea commodo consequat.</p>
                <Login />
            </div>
            <Hr />
            <div className="flex md:flex-col justify-around py-12 mx-44 md:mx-10">
                <div className="w-2/5 mr-20 md:w-full md:mb-4">
                    <img src={process.env.PUBLIC_URL + "/images/stockphone2.jpg"} alt="phone"  className="rounded-xl w-full"/>
                </div>
                <div className="flex flex-col items-end text-right w-3/5 md:w-full">
                    <h1 className="text-teal-700 text-2xl font-bold tracking-wider">Get data intelligence</h1>
                    <p className="my-2 py-8 tracking-wide">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ullamco laboris consequat.</p>
                    <Login />
                </div>
            </div>
        </div>
    )
}