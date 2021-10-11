import "./ExpenseForm.css";
import {useState} from "react";

const ExpenseForm = (props) => {

    const [expenseData, setExpenseData] = useState({title: '', amount: '', expenseDate: ''})


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
            return {...prevSate, expenseDate: event.target.value}
        });
    }

    const expenseSubmit = (event) => {
        event.preventDefault();
        const newExpenseData = {
            title: expenseData.title,
            amount: expenseData.amount,
            expenseDate: new Date(expenseData.expenseDate)
        }
        //console.log('new data : ' + JSON.stringify(expenseData));
        props.onSaveExpenseData(newExpenseData);
        setExpenseData({title: '', amount: '', expenseDate: ''});
    }

    return (<form onSubmit={expenseSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control"><label>Title</label><input type='text' value={expenseData.title}
                                                                                 onChange={titleChangeHandler}/></div>
                <div className="new-expense__control"><label>Amount</label><input type='number' min="0.01" step="0.01"
                                                                                  value={expenseData.amount}
                                                                                  onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control"><label>Date</label><input type='date' min="2019-01-01"
                                                                                value={expenseData.expenseDate}
                                                                                max="2022-12-31"
                                                                                onChange={dateChangeHandler}/>
                < /div>
                <div className="new-expense__actions">
                    <button type="submit">Add</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;