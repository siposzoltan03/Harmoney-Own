import React, { useState, useEffect } from "react";
import Axios from "axios";
import Globals from "../utils/globals";

const TransactionContext = React.createContext(undefined, undefined);

const TransactionProvider = (props) => {
    let url = Globals.fetchUrl + "/api/transactions";
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchTransactions = () => {
            try {
                setLoading(true);
                Axios.get(url)
                    .then(resp => (setTransactions(resp.data)));
                setLoading(false);
            } catch (e) {
                console.log('Error:', e);
            }
        };
    useEffect(() => {
        fetchTransactions()
    }, []);

    return(
        <TransactionContext.Provider value={{ transactions : [
            transactions,
            setTransactions
        ], loading : [loading, setLoading]}}>
            {props.children}
        </TransactionContext.Provider>
    )
};

export { TransactionProvider, TransactionContext }