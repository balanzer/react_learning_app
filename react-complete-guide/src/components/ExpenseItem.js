import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>Mar 28, 2021</div>
      <div className='expense-item__description'>
        <h2>Insurance Paid</h2>
        <div className='expense-item__price'>$299.98 </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
