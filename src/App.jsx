//@ts-nocheck
import { Route, Routes } from 'react-router-dom';
import './App.css'
import {MenuSection} from "@/components";
import { Exchange, ExpenseMoney, IncomeMoney, ViewTransaction } from './pages';
function App() {
  return (
    <>
      <div className="w-full flex flex-row gap-3">
        <MenuSection />
        <div className="w-3/4 flex flex-col px-2 py-3 pt-0 rounded-md h-[90vh]">
          <Routes >
            <Route element={<ViewTransaction/>} path="/" />
            <Route element={<IncomeMoney />} path="/income"/>
            <Route element={<ExpenseMoney />} path="/expense"/>
            <Route element={<Exchange />} path="/exchange"/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
