import { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const TransactionContext = createContext();
// eslint-disable-next-line react/prop-types
export const TransactionProvider = ({ children }) => {
    const [transaction, setTransaction] = useState([]);
    const [currecy, setCurrency] = useState("USD");
    const contextValue = {
        transaction,
        setTransaction,
        currecy,
        setCurrency
    } 
    return <TransactionContext.Provider value={contextValue}>
        {children}
    </TransactionContext.Provider>;
};


