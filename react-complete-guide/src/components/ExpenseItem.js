import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  return (
    <Card className='expense-item'>
      <ExpenseDate expenseDate={props.expenseDate} />
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>{expenseAmount} </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
