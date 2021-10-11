import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (savedData) => {
        const expenseData = {
            ...savedData,
            id: Math.round((Math.random() * 100)).toString()
        }
        //console.log('new data : ' + JSON.stringify(expenseData));
        props.onAddingNewExpense(expenseData);
    }


    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>)
}

export default NewExpense;