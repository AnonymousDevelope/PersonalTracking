import { CardTransUI, ChartEx, Pie } from "@/components"
import React from "react"
import { FaTimes } from "react-icons/fa"
import { FaArrowDown, FaArrowTrendDown, FaArrowTrendUp, FaArrowUp } from "react-icons/fa6"
import { RiExchangeDollarFill } from "react-icons/ri"
import { NavLink } from "react-router-dom"
const index = () => {
    let historyData = [
        {
            id: 1,
            title: "Youtubedan",
            type: "Income",
            amount: 100
        },
        {
            id: 2,
            title: "Bitcoindan",
            type: "Expense",
            amount: 50
        },
        {
            id: 3,
            title: "Youtube",
            type: "Income",
            amount: 100
        },
        {
            id: 3,
            title: "Youtube",
            type: "Income",
            amount: 100
        },
        {
            id: 3,
            title: "Youtube",
            type: "Income",
            amount: 100
        }
    ]
    return (
        <section className="view-transaction">
            <div className="title">
                <h1 className="text-white font-bold text-[25px]">View Transaction</h1>
                <div className="container grid grid-cols-2 gap-2 max-sm:grid-cols-1">
                    <CardTransUI classNameParent="mt-5 max-sm:w-full max-xs:w-full gap-3" title="Current Balance">
                        <div className="text-light-custom w-full text-[40px] text-center font-bold">$ 200</div>
                        <div className="grid grid-cols-2 max-xs:grid-cols-1 gap-3">
                            <CardTransUI classNameParent="mt-5 !bg-green-200 border-0" className="flex flex-row items-center justify-center gap-3">
                                <div className="flex flex-col">
                                    <div className="text-green-600 w-full xl:text-[2rem] xs:text-[1.2rem] text-center font-bold">$100</div>
                                    <div className="text-green-400 w-full xl:text-[1.5rem] xs:text-[1rem] text-center">Income</div>
                                </div>
                                <FaArrowUp className="text-green-400 text-[3rem]" />
                            </CardTransUI>
                            <CardTransUI classNameParent="mt-5 !bg-expense border-0" className="flex flex-row items-center justify-center gap-3">
                                <div className="flex flex-col">
                                    <div className="text-red-600 w-full xl:text-[2rem] xs:text-[1rem] text-center font-bold">$&minus;234</div>
                                    <div className="text-red-400 w-full xl:text-[1.5rem] xs:text-[1rem] text-center">Expense</div>
                                </div>
                                <FaArrowDown className="text-red-400 text-[3rem]" />
                            </CardTransUI>
                        </div>
                        <div className="flex flex-col text-light-custom w-full text-[22px] items-start justify-center font-bold">
                            <div className="title">
                                <h1 className="text-white font-bold text-[25px]">Quick Actions</h1>
                            </div>
                            <div className=" w-full items-center gap-3">
                                <ul className="grid grid-cols-3 gap-3">
                                    <li className="flex flex-row items-center hover:scale-105 cursor-pointer transition-all duration-200 ease-in-out justify-center bg-green-300 rounded-lg gap-3 px-2 py-3">
                                        <NavLink to={"/income"} className={"max-lg:text-[15px]"}>
                                            <FaArrowTrendUp className="text-green-400" />
                                            <span className="text-green-500">Income</span>
                                        </NavLink>
                                    </li>
                                    <li className="flex flex-row items-center gap-3  hover:scale-105 cursor-pointer transition-all duration-200 ease-in-out  bg-red-300 rounded-lg justify-center px-2 py-3">
                                        <NavLink to={"/expense"} className={"max-lg:text-[15px]"}>
                                            <span><FaArrowTrendDown className="text-red-400"/></span>
                                            <span className="text-red-500">Expense</span>
                                        </NavLink>
                                    </li>
                                    <li className="flex flex-row items-center gap-3  hover:scale-105 cursor-pointer transition-all duration-200 ease-in-out  bg-yellow-200 rounded-lg justify-center px-2 py-3">
                                        <NavLink to={"/exchange"} className={"max-lg:text-[15px]"}>
                                            <span><RiExchangeDollarFill className="text-yellow-400" /></span>
                                            <span className="text-yellow-500">Exchange</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </CardTransUI>
                    <CardTransUI classNameParent="mt-5 max-sm:w-full max-xs:w-full gap-3">
                        <div className="text-light-custom relative w-full text-[22px] flex items-center justify-center text-center font-bold">
                            {/* <ChartComponent /> */}
                            <ChartEx />
                        </div>
                    </CardTransUI>
                </div>
                {/* <CardTransUI classNameParent="mt-5 max-sm:w-full max-xs:w-full gap-3 h-[60vh] overflow-y-scroll"
                        className="gap-3 flex flex-col" title="Transaction History">
                        <div></div>
                        {
                            historyData.map(({ type, title, id, amount }) => (
                                <React.Fragment key={id}>
                                    <CardTransUI classNameParent={
                                        (type === "Income" ? "!bg-green-200" : "!bg-expense") + " w-full cursor-pointer group"
                                    }>
                                        <div className="flex flex-row w-full items-center">
                                            <div className="flex flex-col mr-auto items-center">
                                                <div className={`text-primary-dark-custom w-full text-[20px] font-bold`}>{title}</div>
                                                <div className="text-primary-dark-custom w-full text-[10px] font-bold">transaction :{id}</div>
                                            </div>
                                            <div className="flex flex-col ml-auto items-center">
                                                <div className={`${type === "Income" ? "text-green-400" : "text-red-400"} w-full text-[20px] font-bold flex flex-row items-center gap-3`}>
                                                    $ {type === "Income" ? "+" : <>&minus; </>}{amount}
                                                    {
                                                        type === "Income" ? <FaArrowTrendUp /> : <FaArrowTrendDown />
                                                    }
                                                </div>
                                                <div className="text-slate-500 italic w-full text-[15px] ">may 2022</div>
                                            </div>
                                            <button className="ml-4 bg-red-500 flex items-center justify-center invisible group-hover:visible transition-all duration-150 ease-in-out h-[20px] w-[20px] rounded-full">
                                                <FaTimes className="text-[13px]" />
                                            </button>
                                        </div>
                                    </CardTransUI>
                                </React.Fragment>
                            ))
                        }
                        <>
                            <Pie />
                        </>
                    </CardTransUI> */}
                <div className="container grid grid-cols-2 gap-2 max-sm:grid-cols-1">
                    <CardTransUI classNameParent="mt-5 max-sm:w-full max-xs:w-full gap-3"
                        className="gap-3 flex flex-col">
                        <>
                            <Pie />
                        </>
                    </CardTransUI>
                    <CardTransUI classNameParent="mt-5 max-sm:w-full max-xs:w-full gap-3 h-[60vh] overflow-y-scroll"
                        className="gap-3 flex flex-col" title="Transaction History">
                        <div></div>
                        {
                            historyData.map(({ type, title, id, amount }) => (
                                <React.Fragment key={id}>
                                    <CardTransUI classNameParent={
                                        (type === "Income" ? "!bg-green-200" : "!bg-expense") + " w-full cursor-pointer group"
                                    }>
                                        <div className="flex flex-row w-full items-center">
                                            <div className="flex flex-col mr-auto items-center">
                                                <div className={`text-primary-dark-custom w-full text-[20px] font-bold`}>{title}</div>
                                                <div className="text-primary-dark-custom w-full text-[10px] font-bold">transaction :{id}</div>
                                            </div>
                                            <div className="flex flex-col ml-auto items-center">
                                                <div className={`${type === "Income" ? "text-green-400" : "text-red-400"} w-full text-[20px] font-bold flex flex-row items-center gap-3`}>
                                                    $ {type === "Income" ? "+" : <>&minus; </>}{amount}
                                                    {
                                                        type === "Income" ? <FaArrowTrendUp /> : <FaArrowTrendDown />
                                                    }
                                                </div>
                                                <div className="text-slate-500 italic w-full text-[15px] ">may 2022</div>
                                            </div>
                                            <button className="ml-4 bg-red-500 flex items-center justify-center invisible group-hover:visible transition-all duration-150 ease-in-out h-[20px] w-[20px] rounded-full">
                                                <FaTimes className="text-[13px]" />
                                            </button>
                                        </div>
                                    </CardTransUI>
                                </React.Fragment>
                            ))
                        }
                    </CardTransUI>
                </div>
            </div >
        </section >

    )
}

export default index