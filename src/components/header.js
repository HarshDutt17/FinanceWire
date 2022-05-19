

export default function Header() {
    return (
        <div className="flex justify-between mx-10 py-2 items-center border-red-900">
            <div>
                <h1 className="flex w-auto sm:w-50">
                    <img src="/images/logo.jpg" alt="FW" className="w-1/6"/>
                </h1>
            </div>
            <div className="flex">
                <div className="py-2 px-8 mx-10 text-blue-500"> News </div>
                <div className="py-2 px-10 border border-black"> Login </div>
            </div>
        </div>
    )
}