import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css"

const ExpensesList = props => {

    const calculateTotal = arr => arr.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);

    if (props.items.length === 0) {
        return <h3 className="expenses-list__fallback">No Expenses</h3>
    } else {

    }

    return <ul className="expenses-list">
        <h3 className="expenses-list__fallback">Expenses Count: {props.items.length}</h3>
        <h3 className="expenses-list__fallback">Total Spent : ${calculateTotal(props.items)}</h3>
        {props.items.map(expense => {

            if (!!expense) {
                return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount}
                                    date={expense.date}/>
            }

        })}
    </ul>;

}

export default ExpensesList;