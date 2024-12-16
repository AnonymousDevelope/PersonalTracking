/* eslint-disable react/no-unknown-property */
import { FaTimes } from "react-icons/fa";
import { CardTransUI, Input } from "../../components";
import { FaArrowTrendUp } from "react-icons/fa6";
import React, { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../../context/TransactionConetxt";
import { setLocalStorage, getLocalStorage } from "../../utils/actions"; // Assuming getLocalStorage is implemented

const Index = () => {
  const { transaction, setTransaction } = useContext(TransactionContext);

  // Manage local state for the form
  const [income, setIncome] = useState(0);
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionDate, setTransactionDate] = useState("");

  // Manage history state
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    // Load transaction data from localStorage when the component mounts
    const storedTransactions = getLocalStorage("transactions"); // Assuming this gets the transactions from localStorage
    if (storedTransactions) {
      setTransactionHistory(storedTransactions);
      setTransaction(storedTransactions); // Ensure context is also updated
    }
  }, []);

  const addTransaction = (e) => {
    e.preventDefault();

    if (!transactionName || !transactionAmount || !transactionDate) {
      return; // Ensure all fields are filled
    }

    const newTransaction = {
      id: transactionHistory.length + 1,
      title: transactionName,
      type: "Income", // Assuming this is for income. Adjust as needed.
      amount: parseFloat(transactionAmount),
      date: transactionDate,
    };

    // Add to localStorage and context
    const updatedTransactions = [...transactionHistory, newTransaction];
    setLocalStorage("transactions", updatedTransactions); // Assuming this saves to localStorage
    setTransaction(updatedTransactions); // Update context
    setTransactionHistory(updatedTransactions); // Update local state for history

    // Clear the form fields
    setTransactionName("");
    setTransactionAmount(0);
    setTransactionDate("");
  };
  const deleteTransaction = (id) => {
    const updatedTransactions = transactionHistory.filter((transaction) => transaction.id !== id);
    setLocalStorage("transactions", updatedTransactions); // Assuming this saves to localStorage
    setTransaction(updatedTransactions); // Update context
    setTransactionHistory(updatedTransactions); // Update local state for history
  };
  return (
    <section className="income-money w-full h-screen flex flex-col">
      <h1 className="title text-[34px] font-bold">Income Money</h1>
      <div className="flex flex-row gap-4">
        {/* Left section for adding income */}
        <div className="flex flex-col w-1/2">
          <span className="text-sm italic text-slate-500">You can add your income here</span>
          {/* Set Income Form */}
          <form onSubmit={addTransaction}>
            <div className="flex flex-col mt-4 gap-3 pb-9 border-b-2 border-slate-600">
              <label htmlFor="income" className="text-sm">
                Enter your income/budget
                <span className="text-red-500 text-lg align-middle"> *</span>
              </label>
              <Input
                required
                id="income"
                type="number"
                className="w-full italic placeholder:italic"
                placeholder="Ex: 100"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
              />
              <button className="btn bg-slate-700 text-white w-fit px-4 py-3 rounded-md">
                Set Income
              </button>
            </div>
          </form>

          {/* Add Transaction Form */}
          <form onSubmit={addTransaction}>
            <div className="flex flex-col mt-4 gap-3 pb-9 border-b-2 border-slate-600">
              <label htmlFor="income-name" className="text-sm">
                Transaction name
                <span className="text-red-500 text-lg align-middle"> *</span>
              </label>
              <Input
                required
                id="income-name"
                type="text"
                className="w-full italic placeholder:italic"
                placeholder="Youtubdan"
                value={transactionName}
                onChange={(e) => setTransactionName(e.target.value)}
              />

              <label htmlFor="date" className="text-sm">
                Enter your date
                <span className="text-red-500 text-lg align-middle"> *</span>
              </label>
              <Input
                required
                id="date"
                type="date"
                className="w-full placeholder:italic"
                value={transactionDate}
                onChange={(e) => setTransactionDate(e.target.value)}
              />

              <label htmlFor="transaction-amount" className="text-sm">
                Enter your income amount
                <span className="text-red-500 text-lg align-middle"> *</span>
              </label>
              <Input
                required
                id="transaction-amount"
                type="number"
                className="w-full placeholder:italic"
                placeholder="Amount"
                value={transactionAmount}
                onChange={(e) => setTransactionAmount(e.target.value)}
              />
              <button className="btn bg-slate-700 text-white w-fit px-4 py-3 rounded-md">
                Add Income
              </button>
            </div>
          </form>
        </div>

        {/* Right section for displaying transaction history */}
        <div className="flex flex-col w-1/2">
          <CardTransUI
            classNameParent="mt-5 max-sm:w-full max-xs:w-full gap-3 max-h-[550px] min-h-[550px] overflow-y-auto"
            className="gap-3 flex flex-col"
            title="Transaction History"
          >
            {transaction
              .filter(({ type }) => type === "Income")
              .map(({ type, title, id, amount, date }, index) => (
                <React.Fragment key={index}>
                  <CardTransUI
                  key={index}
                    classNameParent={
                      (type === "Income" ? "!bg-green-200" : "!bg-expense") +
                      " w-full cursor-pointer group"
                    }
                  >
                    <div className="flex flex-row w-full items-center">
                      <div className="flex flex-col mr-auto items-center">
                        <div className="text-primary-dark-custom w-full text-[20px] font-bold">{title}</div>
                        <div className="text-primary-dark-custom w-full text-[10px] font-bold">transaction :{id}</div>
                      </div>
                      <div className="flex flex-col ml-auto items-center">
                        <div className="text-green-400 w-full text-[20px] font-bold flex flex-row items-center gap-3">
                          ${amount} <FaArrowTrendUp />
                        </div>
                        <div className="text-slate-500 italic w-full text-[15px]">{date}</div>
                      </div>
                      <button type="button" onClick={() =>deleteTransaction(id)} className="ml-4 bg-red-500 flex items-center justify-center invisible group-hover:visible transition-all duration-150 ease-in-out h-[20px] w-[20px] rounded-full">
                        <FaTimes className="text-[13px]" />
                      </button>
                    </div>
                  </CardTransUI>
                </React.Fragment>
              ))}
          </CardTransUI>
        </div>
      </div>
    </section>
  );
};

export default Index;
