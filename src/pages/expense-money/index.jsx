import { FaTimes } from "react-icons/fa"
import { CardTransUI, Input } from "../../components"
import { FaArrowTrendDown } from "react-icons/fa6"
import React from "react"

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
      type: "Expense",
      amount: 100
    }
  ]
  return (
    <section className="Expense-money w-full h-screen flex flex-col">
      <h1 className="title text-[34px] font-bold">Expense Money</h1>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-1/2">
          <span className="text-sm italic text-slate-500">You can add your Expense here</span>
          <form>
            <div className="flex flex-col mt-4  gap-3 pb-9 border-b-2 border-slate-600">
              <label htmlFor="Expense" className="text-sm "> Enter your Expense/budget
                <span className="text-red-500 text-lg align-middle"> *</span>
              </label>
              <Input required id="Expense" type="number" className="w-full  italic placeholder:italic" placeholder="Ex: 100" />
              <button className="btn bg-slate-700 text-white w-fit px-4 py-3 rounded-md">Set Expense</button>
            </div>
          </form>
          <form>
            <div className="flex flex-col mt-4  gap-3 pb-9 border-b-2 border-slate-600">
              <label htmlFor="Expense-name" className="text-sm "> Transaction name
                <span className="text-red-500 text-lg align-middle"> *</span>
              </label>
              <Input required id="Expense-name" type="text" className="w-full  italic placeholder:italic" placeholder="Youtubdan" />
              <label htmlFor="date" className="text-sm "> Enter your date
                <span className="text-red-500 text-lg align-middle"> *</span>
              </label>
              <Input required id="date" type="date" className="w-full placeholder:italic" placeholder="Ex: 100" />
              <label htmlFor="date" className="text-sm "> Enter your Expense amount
                <span className="text-red-500 text-lg align-middle"> *</span>
              </label>
              <Input required id="date" type="number" className="w-full placeholder:italic" placeholder="Amount" />
              <button className="btn bg-slate-700 text-white w-fit px-4 py-3 rounded-md">Add Expense</button>
            </div>
          </form>
        </div>
        <div className="flex flex-col w-1/2">
          <CardTransUI classNameParent="mt-5 max-sm:w-full max-xs:w-full gap-3 max-h-[550px] min-h-[550px] overflow-y-auto"
            className="gap-3 flex flex-col" title="Transaction History">
            <div></div>
            {
              historyData.filter(({ type }) => type === "Expense").map(({title, id, amount }) => (
                <React.Fragment key={id}>
                  <CardTransUI classNameParent={
                     "!bg-expense w-full cursor-pointer group"
                  }>
                    <div className="flex flex-row w-full items-center">
                      <div className="flex flex-col mr-auto items-center">
                        <div className={`text-primary-dark-custom w-full text-[20px] font-bold`}>{title}</div>
                        <div className="text-primary-dark-custom w-full text-[10px] font-bold">transaction :{id}</div>
                      </div>
                      <div className="flex flex-col ml-auto items-center">
                        <div className={`text-red-400 w-full text-[20px] font-bold flex flex-row items-center gap-3`}>
                          ${amount}
                           <FaArrowTrendDown />
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
      </div>
    </section>
  )
}

export default index