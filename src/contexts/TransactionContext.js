import React, {useEffect, useState} from "react";
import Axios from "axios";
import Globals from "../utils/globals";

const url = Globals.fetchUrl + "/api/transactions/";

export const TransactionContext = React.createContext(undefined, undefined);

export const TransactionProvider = (props) => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState(null);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState("");
    const [frequency, setFrequency] = useState("Single");
    const [httpRequest, setHttpRequest] = useState("");

    const fetchTransactions = () => {

        setLoading(true);
        Axios.get(url)
            .then(resp => {
                (setTransactions(resp.data));
                setLoading(false)
            })
            .catch(e => console.log('Error:', e))
    };

    const postTransaction = async (data) => {

        return await Axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(resp => {
                const transaction = resp.data;
                if (transaction.id && transaction.title && transaction.dueDate && transaction.amount && transaction.frequency && transaction.direction) {
                    setTransactions([...transactions, resp.data]);
                    return false;
                }
                return true;
            })
            .catch(e => {
                console.log('Error:', e);
                return true;
            })
    };

    const putTransaction = async (data, id ) => {

        return await Axios.put(url + id, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(resp => {
                const transaction = resp.data;
                const items = [...transactions];
                if (transaction.id && transaction.title && transaction.dueDate && transaction.amount && transaction.frequency && transaction.direction) {
                    for (let item of items) {
                        if (item.id === transaction.id) {
                            item = transaction;
                        }
                    }
                    setTransactions(items);
                    return false;
                }
                return true;
            })
            .catch(e => {
                console.log('Error:', e);
                return true;
            })
    };

    const deleteTransaction = async (id ) => {

        return await Axios.delete(url + id, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(resp => {
                const transaction = resp.data;
                const items = transactions.filter(item => item.id !== transaction.id);
                if (transaction.id && transaction.title && transaction.dueDate && transaction.amount && transaction.frequency && transaction.direction) {
                    setTransactions(items);
                    return false;
                }
                return true;
            })
            .catch(e => {
                console.log('Error:', e);
                return true;
            })
    };

    useEffect(() => {
        fetchTransactions()
    }, [transactions]);

    return (
        <TransactionContext.Provider value={{
            transactions: [transactions, setTransactions],
            loading: [loading, setLoading],
            id: [id, setId],
            title: [title, setTitle],
            date: [date, setDate],
            amount: [amount, setAmount],
            frequency: [frequency, setFrequency],
            httpRequest: [httpRequest, setHttpRequest],
            getTransactions: fetchTransactions,
            postTransaction: postTransaction,
            putTransaction: putTransaction,
            deleteTransaction: deleteTransaction
        }}>
            {props.children}
        </TransactionContext.Provider>
    )
};
