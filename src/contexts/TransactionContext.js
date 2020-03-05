import React, {useEffect, useState} from "react";
import Axios from "axios";
import Globals from "../utils/globals";

const url = Globals.fetchUrl + "/api/transactions";

export const TransactionContext = React.createContext(undefined, undefined);

export const TransactionProvider = (props) => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchTransactions = () => {
            try {
                setLoading(true);
                Axios.get(url)
                    .then(resp => (setTransactions(resp.data)))
                setLoading(false);
            } catch (e) {
                console.log('Error:', e);
            }
        };

    const postTransaction = (data) => {
        try {
            Axios.post(url, data, { headers: {
                'Content-Type': 'application/json',
            }})
            .then(resp => setTransactions([...transactions, resp.data]));
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
        ], loading : [loading, setLoading], getTransactions: fetchTransactions, postTransaction: postTransaction }}>
            {props.children}
        </TransactionContext.Provider>
    )
};
