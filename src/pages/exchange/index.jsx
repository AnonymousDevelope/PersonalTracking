import { FaExchangeAlt } from "react-icons/fa"
import { CardTransUI, Dropdown } from "../../components"
const index = () => {
  return (
    <>
      <section className="exchange flex flex-col gap-3 w-[60%]">
        <CardTransUI title="Exchange Money" className={"flex flex-col gap-3 mt-5"} classNameParent={"w-full"}>
          <label htmlFor="amount">Amount</label>
          <input type="number" style={{ MozAppearance: "textfield" }} id="amount" className="w-full outline-none bg-transparent px-3 py-3 border border-light-custom rounded-md shadow-md" placeholder="Amount" />
          <div className="grid grid-cols-3 items-center justify-center gap-3 mt-5 w-full">
            <div className="flex flex-col">
              <label htmlFor="">To</label>
              <Dropdown />
            </div>
            <FaExchangeAlt className="mx-auto"/>
            <div className="flex flex-col">
              <label htmlFor="">From</label>
              <Dropdown />
            </div>
          </div>
          <button className="w-full px-5 py-3 bg-primary-custom text-light-custom rounded-md shadow-sm shadow-light-custom">Convert</button>
          <div className="exchange-amount flex flex-col items-start">
            <div>10.00 Dolars = </div>
            <h1 className="text-[30px] font-bold">9.21 Euoro</h1>
            <h1 className="text-[15px] text-slate-500">1 USD = 0.91 EUR</h1>
            <h1 className="text-[15px] text-slate-500">1 USD = 0.91 EUR</h1>
          </div>
        </CardTransUI>
      </section>
    </>
  )
}

export default index