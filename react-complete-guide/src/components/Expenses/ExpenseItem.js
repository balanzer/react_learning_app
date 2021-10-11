import ExpenseDate from "./ExpenseDate";
import Card from "../Common/Card";
import {useState} from "react";


import "./ExpenseItem.css";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);


    const expenseAmount = props.amount;

    const updateExpenseDataHandler = () => {
        setTitle('updated value')
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate expenseDate={props.expenseDate}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{expenseAmount} </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
