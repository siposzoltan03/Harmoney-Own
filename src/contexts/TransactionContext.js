import React, {useEffect, useState} from "react";
import Axios from "axios";
import Globals from "../utils/globals";

const url = Globals.fetchUrl + "/api/transactions/";
let jwtToken = localStorage.getItem("token");

export const TransactionContext = React.createContext(undefined, undefined);

export const TransactionProvider = (props) => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState(null);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState("");
    const [frequency, setFrequency] = useState("Single");
    const [category, setCategory] = useState("Other");
    const [httpRequest, setHttpRequest] = useState("");

    const fetchTransactions = () => {
        setLoading(true);
        Axios.get(url, {withCredentials: true, headers:{
            Authorization: `Bearer ${jwtToken}`
            }})
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
                Authorization: `Bearer ${jwtToken}`
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
                Authorization: `Bearer ${jwtToken}`
            }
        })
            .then(resp => {
                const transaction = resp.data;
                if (transaction.id && transaction.title && transaction.dueDate && transaction.amount && transaction.frequency && transaction.direction && transaction.category) {
                    fetchTransactions();
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
                Authorization: `Bearer ${jwtToken}`
            }
        })
            .then(resp => {
                const transaction = resp.data;
                if (transaction.id && transaction.title && transaction.dueDate && transaction.amount && transaction.frequency && transaction.direction && transaction.category) {
                    fetchTransactions();
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
    }, []);

    return (
        <TransactionContext.Provider value={{
            transactions: [transactions, setTransactions],
            loading: [loading, setLoading],
            id: [id, setId],
            title: [title, setTitle],
            date: [date, setDate],
            amount: [amount, setAmount],
            frequency: [frequency, setFrequency],
            category: [category, setCategory],
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
