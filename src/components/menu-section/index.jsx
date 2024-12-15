import { BiMoney } from "react-icons/bi"
import { FaChartPie, FaMoneyBillTrendUp } from "react-icons/fa6"
import { ImUser } from "react-icons/im"
import { MdOutlineCurrencyExchange } from "react-icons/md"
import { NavLink } from "react-router-dom"
const index = () => {
  return (
    <section className="menu flex flex-col flex-1 w-1/4 h-[90vh] bg-primary-dark-custom px-2 py-3 rounded-md">
      <div className="logo w-full flex items-center flex-row gap-3">
        <div className="img flex items-center justify-center p-4 bg-dark-custom rounded-full ">
          <ImUser className="w-6 h-6 text-slate-500" />
        </div>
        <h1 className="text-white font-bold text-[25px] hidden sm:inline">Profile</h1>
      </div>
      <div className="container mt-5">
        <ul className="flex flex-col gap-3 xl:justify-start lg:justify-center">
          <li className="menu-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "flex items-center px-3 py-2 active" : "flex items-center px-3 py-2"
              }
            >
              <FaChartPie />
              <span>View Transaction</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/income"
              className={({ isActive }) =>
                isActive ? "flex items-center px-3 py-2 active" : "flex items-center px-3 py-2"
              }
            >
              <FaMoneyBillTrendUp />
              <span>Income Money</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/expense"
              className={({ isActive }) =>
                isActive ? "flex items-center px-3 py-2 active" : "flex items-center px-3 py-2"
              }
            >
              <BiMoney />
              <span>Expense</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/exchange"
              className={({ isActive }) =>
                isActive ? "flex items-center px-3 py-2 active" : "flex items-center px-3 py-2"
              }
            >
              <MdOutlineCurrencyExchange />
              <span>Exchange</span>
            </NavLink>
          </li>
        </ul>

      </div>
    </section>
  )
}

export default index