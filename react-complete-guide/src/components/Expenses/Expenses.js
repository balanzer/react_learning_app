import Card from "../Common/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [filterYear, setFilterYearData] = useState('2021');
    const yearChanged = (yearValue) => {
        setFilterYearData(yearValue);
        console.log('filter year changed to : ' + yearValue);

    }

    let filteredExpenses = props.expenses.filter(exp => {
        return exp.date.getFullYear() === parseInt(filterYear);
    }).sort((a, b) => {
        return b.date - a.date;
    });


    return (

        <div>
            <Card className='expenses'>
                <ExpenseFilter selectedYear={filterYear} onFilterYearChange={yearChanged}/>
                <ExpensesList items={filteredExpenses}/>


            </Card>
        </div>

    );
}

export default Expenses;
