

export default function Header() {
    return (
        <div className="flex w-full justify-between px-10 md:px-1 py-2 items-center border-red-900 bg-white">
            <div>
                <h1 className="flex w-auto md:w-44">
                    <img src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="FW" className="w-1/5"/>
                </h1>
            </div>
            <div className="flex">
                <div className="py-2 px-8  md:px-4 mx-10 md:mx-0 text-blue-500"> News </div>
                <div className="py-2 px-10 md:px-5 border border-black"> Login </div>
            </div>
        </div>
    )
}