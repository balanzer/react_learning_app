import Chart from "../Chart/Chart";

const ExpensesChart = props => {
    const chartDataPoints = [{label: 'Jan', value: 0}, {label: 'Feb', value: 0}, {
        label: 'Mar',
        value: 0
    }, {label: 'Apr', value: 0}, {label: 'May', value: 0}, {label: 'Jun', value: 0}, {
        label: 'Jul',
        value: 0
    }, {label: 'Aug', value: 0}, {label: 'Sep', value: 0}, {label: 'Oct', value: 0}, {
        label: 'Nov',
        value: 0
    }, {label: 'Dec', value: 0}]
    console.log('ExpensesChart Total Expenses : ' + props.expenses.length)
    for (const expense of props.expenses) {

        const expenseMonth = expense.date.getMonth(); // 0 means Jan.
        chartDataPoints[expenseMonth].value += expense.amount; // keep adding months expenses
    }
    return (<Chart dataPoints={chartDataPoints}></Chart>)
};

export default ExpensesChart;