import { FaTimes } from "react-icons/fa";
import { CardTransUI, Input } from "../../components";
import { FaArrowTrendDown } from "react-icons/fa6";
import React, { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../../context/TransactionConetxt";
import { setLocalStorage, getLocalStorage } from "../../utils/actions";

const Expense = () => {
  const { transaction, setTransaction } = useContext(TransactionContext);

  // Form uchun local state
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  // Xarajatni qo'shish funksiyasi
  const addExpense = (e) => {
    e.preventDefault();

    // Hamma maydonlar to'ldirilganini tekshirish
    if (!expenseName.trim() || !expenseAmount || !expenseDate) {
      alert("Hamma maydonlarni to'ldiring!");
      return;
    }

    const newExpense = {
      id: Date.now(), // Yangi xarajat uchun noyob ID
      title: expenseName.trim(),
      type: "Expense",
      amount: parseFloat(expenseAmount),
      date: expenseDate,
    };

    // 1. Context-ga yangi xarajatni qo'shamiz
    const updatedTransaction = [...transaction, newExpense];
    setTransaction(updatedTransaction);

    // 2. Context-dan local storage-ga o'tkazamiz
    setLocalStorage("transactions", updatedTransaction);

    // Form maydonlarini tozalash
    setExpenseName("");
    setExpenseAmount("");
    setExpenseDate("");
  };

  // Local storage'dan ma'lumotlarni olish va context-ga qo'shish
  useEffect(() => {
    const savedTransaction = getLocalStorage("transactions") || [];
    setTransaction(savedTransaction); // 3. Localdan context state'ni yangilash
  }, [setTransaction]);

  // Xarajatni o'chirish funksiyasi
  const deleteExpense = (id) => {
    const updatedTransaction = transaction.filter((t) => t.id !== id);
    setTransaction(updatedTransaction); // Context state yangilash
    setLocalStorage("transactions", updatedTransaction); // Local storage'ni yangilash
  };

  return (
    <section className="expense-money w-full h-screen flex flex-col">
      <h1 className="title text-[34px] font-bold">Expense Tracker</h1>
      <div className="flex flex-row gap-4">
        {/* Xarajat qo'shish formasi */}
        <div className="flex flex-col w-1/2">
          <span className="text-sm italic text-slate-500">
            Xarajatlarni shu yerdan qo'shing
          </span>
          <form onSubmit={addExpense}>
            <div className="flex flex-col mt-4 gap-3 pb-9 border-b-2 border-slate-600">
              <label htmlFor="expense-name" className="text-sm">
                Xarajat nomi
                <span className="text-red-500 text-lg align-middle"> *</span>
              </label>
              <Input
                required
                id="expense-name"
                type="text"
                className="w-full italic placeholder:italic"
                placeholder="e.g., Uy ijarasi"
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
              />

              <label htmlFor="expense-date" className="text-sm">
                Sana
                <span className="text-red-500 text-lg align-middle"> *</span>
              </label>
              <Input
                required
                id="expense-date"
                type="date"
                className="w-full placeholder:italic"
                value={expenseDate}
                onChange={(e) => setExpenseDate(e.target.value)}
              />

              <label htmlFor="expense-amount" className="text-sm">
                Xarajat summasi
                <span className="text-red-500 text-lg align-middle"> *</span>
              </label>
              <Input
                required
                id="expense-amount"
                type="number"
                className="w-full placeholder:italic"
                placeholder="e.g., 150.00"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
              />
              <button
                type="submit"
                className="btn bg-slate-700 text-white w-fit px-4 py-3 rounded-md"
              >
                Xarajat qo'shish
              </button>
            </div>
          </form>
        </div>

        {/* Xarajatlar tarixi */}
        <div className="flex flex-col w-1/2">
          <CardTransUI
            classNameParent="mt-5 max-sm:w-full max-xs:w-full gap-3 max-h-[550px] min-h-[550px] overflow-y-auto"
            className="gap-3 flex flex-col"
            title="Xarajatlar Tarixi"
          >
            {transaction
              .filter(({ type }) => type === "Expense")
              .map(({ id, title, amount, date }) => (
                <CardTransUI
                  key={id}
                  classNameParent="!bg-expense w-full cursor-pointer group"
                >
                  <div className="flex flex-row w-full items-center">
                    <div className="flex flex-col mr-auto items-start">
                      <div className="text-primary-dark-custom text-[20px] font-bold">
                        {title}
                      </div>
                      <div className="text-primary-dark-custom text-[10px] font-bold">
                        ID: {id}
                      </div>
                    </div>
                    <div className="flex flex-col ml-auto items-center">
                      <div className="text-red-400 text-[20px] font-bold flex items-center gap-2">
                        -${amount.toFixed(2)} <FaArrowTrendDown />
                      </div>
                      <div className="text-slate-500 italic text-[15px]">
                        {date}
                      </div>
                    </div>
                    <button
                      onClick={() => deleteExpense(id)}
                      className="ml-4 bg-red-500 flex items-center justify-center invisible group-hover:visible transition-all duration-150 ease-in-out h-[20px] w-[20px] rounded-full"
                    >
                      <FaTimes className="text-[13px]" />
                    </button>
                  </div>
                </CardTransUI>
              ))}
          </CardTransUI>
        </div>
      </div>
    </section>
  );
};

export default Expense;
