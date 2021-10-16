import Card from "../Common/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
    const [filterYear, setFilterYearData] = useState('2021')
    const yearChanged = (yearValue) => {
        setFilterYearData(yearValue);
        console.log('filter year changed to : ' + yearValue);
    }

    return (
        <div>

            <Card className='expenses'>
                <ExpenseFilter selectedYear={filterYear} onFilterYearChange={yearChanged}/>

                {props.expenses.map(expense => {

                    if (!!expense) {
                        return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount}
                                            date={expense.date}/>
                    }
 
                })}

            </Card></div>
    );
}

export default Expenses;
