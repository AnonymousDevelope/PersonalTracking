import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionContext = createContext();

// eslint-disable-next-line react/prop-types
export const TransactionProvider = ({ children }) => {
    const [transaction, setTransaction] = useState([]);
    const contextValue = {
        transaction,
        setTransaction
    } 
    return <TransactionContext.Provider value={contextValue}>
        {children}
    </TransactionContext.Provider>;
};


