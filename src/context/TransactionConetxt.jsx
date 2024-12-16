import { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const TransactionContext = createContext();
// eslint-disable-next-line react/prop-types
export const TransactionProvider = ({ children }) => {
    const [transaction, setTransaction] = useState([]);
    const [currecyFrom, setCurrencyFrom] = useState("USD");
    const [currecyTo, setCurrencyTo] = useState("USD");
    const contextValue = {
        transaction,
        setTransaction,
        currecyFrom,
        setCurrencyFrom,
        currecyTo,
        setCurrencyTo
    } 
    return <TransactionContext.Provider value={contextValue}>
        {children}
    </TransactionContext.Provider>;
};


