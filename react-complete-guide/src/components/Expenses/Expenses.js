import Card from "../Common/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
    const expenses = props.expenses;
    const [filterYear, setFilterYearData] = useState('2021')
    const yearChanged = (yearValue) => {
        setFilterYearData(yearValue);
        console.log('filter year changed to : ' + yearValue);
    }

    return (
        <div>

            <Card className='expenses'>
                <ExpenseFilter selectedYear={filterYear} onFilterYearChange={yearChanged}/>
                <ExpenseItem
                    title={expenses[0].title}
                    amount={expenses[0].amount}
                    expenseDate={expenses[0].date}
                />
                <ExpenseItem
                    title={expenses[2].title}
                    amount={expenses[2].amount}
                    expenseDate={expenses[2].date}
                />{" "}
                <ExpenseItem
                    title={expenses[3].title}
                    amount={expenses[3].amount}
                    expenseDate={expenses[3].date}
                />{" "}
                <ExpenseItem
                    title={expenses[1].title}
                    amount={expenses[1].amount}
                    expenseDate={expenses[1].date}
                />
            </Card></div>
    );
}

export default Expenses;
