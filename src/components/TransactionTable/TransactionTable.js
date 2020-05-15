import React, {useContext} from "react";
import {TransactionContext} from "../../contexts/TransactionContext";
import MaterialTable from "material-table";
import NumberFormatter from "../../utils/NumberFormatter"
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import {UserContext} from "../../contexts/UserContext";

const TransactionTable = () => {
    const appContext = useContext(TransactionContext);
    const transactions = appContext.transactions[0];
    const postTransaction = appContext.postTransaction;
    const putTransaction = appContext.putTransaction;
    const deleteTransaction = appContext.deleteTransaction;
    const {user} = useContext(UserContext);

    return (
        <MaterialTable
            columns={[
                {title: 'ID', field: "id", hidden: true},
                {
                    title: "Users", field: "users", editable: "never",
                    render: rowData =>
                        <AvatarGroup>
                            <Avatar alt={user.firstName} src="/src/assets/images/ZoltanSipos.jpg"/>
                        </AvatarGroup>
                },
                {title: "Title", field: "title"},
                {title: "Direction", field: "direction", lookup: {0: "Income", 1: "Expenditure"}, initialEditValue: 1},
                {
                    title: "Frequency",
                    field: "frequency",
                    lookup: {0: "Single", 1: "Daily", 2: "Weekly", 3: "Monthly", 4: "Yearly"},
                    initialEditValue: 3
                },
                {
                    title: "Category", field: "category",
                    lookup: {
                        0: "Education",
                        1: "Entertainment",
                        2: "Extra",
                        3: "Groceries",
                        4: "Health",
                        5: "Household",
                        6: "Insurance",
                        7: "Investment",
                        8: "Kids",
                        9: "Other",
                        10: "Pets",
                        11: "Sport",
                        12: "Transportation",
                        13: "Gift",
                        14: "Heritage",
                        15: "Increment",
                        16: "Prize",
                        17: "Salary"
                    },
                    initialEditValue: 5
                },

                {title: "Date", field: "dueDate", type: "datetime"},

                {
                    title: "Amount",
                    field: "amount",
                    type: "numeric",
                }
            ]}
            data={
                transactions.map(transaction => (
                    {
                        id: transaction._id,
                        title: transaction.title,
                        direction: transaction.direction,
                        frequency: transaction.frequency,
                        category: transaction.category,
                        amount: NumberFormatter.formatBalance(transaction.amount),
                        dueDate: transaction.dueDate
                    }
                ))
            }
            title="Transactions"
            editable={{
                onRowAdd: newData =>
                    postTransaction(newData),
                onRowUpdate: (newData, oldData) =>
                    putTransaction(newData,oldData._id),
                onRowDelete: oldData =>
                    deleteTransaction(oldData.id)
            }}
        />
    )
};

export default TransactionTable;