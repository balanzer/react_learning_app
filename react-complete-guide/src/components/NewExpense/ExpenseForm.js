import "./ExpenseForm.css";
import {useState} from "react";

const ExpenseForm = (props) => {

    const [expenseData, setExpenseData] = useState({title: '', amount: '', date: ''})
    const [errorMessage, setErrorMessage] = useState("")

    const titleChangeHandler = (event) => {
        setExpenseData((prevSate) => {
            return {...prevSate, title: event.target.value}
        });
    }
    const amountChangeHandler = (event) => {
        setExpenseData((prevSate) => {
            return {...prevSate, amount: event.target.value}
        });
    }
    const dateChangeHandler = (event) => {
        setExpenseData((prevSate) => {
            return {...prevSate, date: event.target.value}
        });
    }

    const isValidDate = (date) => {
        return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
    }


    const expenseSubmit = (event) => {
        event.preventDefault();

        if (!isValidDate(expenseData.date)) {
            setErrorMessage("Error : Invalid Date");
            return;
        }
        if (expenseData.title.trim().length == 0) {
            setErrorMessage("Error : Invalid Title");
            return;
        } else if (expenseData.amount.trim().length == 0) {
            setErrorMessage("Error : Invalid Amount");
            return;
        } else {
            const newExpenseData = {
                title: expenseData.title,
                amount: parseFloat(expenseData.amount).toFixed(2),
                date: new Date(expenseData.date)
            }
            console.log('adding new data : ' + JSON.stringify(expenseData));
            props.onSaveExpenseData(newExpenseData);
            setExpenseData({title: '', amount: '', date: ''});
        }


    }

    return (<form onSubmit={expenseSubmit}>
            <div className="new-expense__controls">

                <div className="new-expense__control"><label>Expense Type</label><input type='text'
                                                                                        value={expenseData.title}
                                                                                        onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control"><label>Amount($)</label><input type='number' min="0.01"
                                                                                     step="0.01"
                                                                                     value={expenseData.amount}
                                                                                     onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control"><label>Expense Date</label><input type='date' min="2019-01-01"
                                                                                        value={expenseData.date}
                                                                                        max="2022-12-31"
                                                                                        onChange={dateChangeHandler}/>
                < /div>

                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                    <div className="new-expense__control"><label>{errorMessage}</label></div>
                </div>

            </div>
        </form>
    );
}

export default ExpenseForm;